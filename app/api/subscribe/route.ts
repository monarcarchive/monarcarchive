import { NextResponse } from "next/server";
import { launchConfig } from "@/data/launch";
import { siteConfig } from "@/data/site";

const resendApiKey = process.env.RESEND_API_KEY;
const resendAudienceId = process.env.RESEND_AUDIENCE_ID;
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL ?? "Monarc Archive <onboarding@resend.dev>";
const resendNotifyEmail =
  process.env.RESEND_NOTIFY_EMAIL ?? siteConfig.email;

type SubscribeRequest = {
  email?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function resendFetch(path: string, init: RequestInit) {
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return fetch(`https://api.resend.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
}

async function addContact(email: string, source: string) {
  if (!resendAudienceId) return null;

  const response = await resendFetch(`/audiences/${resendAudienceId}/contacts`, {
    method: "POST",
    body: JSON.stringify({
      email,
      unsubscribed: false,
      properties: {
        source,
        drop: launchConfig.dropName,
      },
    }),
  });

  if (response.ok || response.status === 409) {
    return response.json().catch(() => null);
  }

  const errorText = await response.text();
  throw new Error(`Resend contact error: ${errorText}`);
}

async function sendWelcomeEmail(email: string) {
  const response = await resendFetch("/emails", {
    method: "POST",
    headers: {
      "Idempotency-Key": `monarc-welcome-${email}`,
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [email],
      subject: "You are in the Archive",
      html: `
        <div style="background:#050505;color:#f7f7f7;font-family:Arial,sans-serif;padding:32px">
          <p style="color:#ff1f2d;text-transform:uppercase;letter-spacing:3px;font-size:12px">Monarc Archive</p>
          <h1 style="font-size:32px;line-height:1;margin:0 0 16px;text-transform:uppercase">First access starts here.</h1>
          <p style="color:#c6c6c6;font-size:16px;line-height:1.6">
            You are on the list for ${launchConfig.dropName}. We will send drop alerts,
            early access notes, and launch updates before they hit the feed.
          </p>
          <p style="color:#777;margin-top:32px;font-size:12px">
            ${launchConfig.launchDateLabel}
          </p>
        </div>
      `,
      text: `You are on the list for ${launchConfig.dropName}. ${launchConfig.launchDateLabel}`,
      reply_to: siteConfig.email,
      tags: [
        { name: "source", value: "launch_signup" },
        { name: "drop", value: launchConfig.dropName.replace(/\s+/g, "_").toLowerCase() },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend email error: ${errorText}`);
  }

  return response.json();
}

async function sendOwnerNotification(email: string, source: string) {
  if (!resendNotifyEmail) return null;

  const response = await resendFetch("/emails", {
    method: "POST",
    headers: {
      "Idempotency-Key": `monarc-notify-${email}`,
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [resendNotifyEmail],
      subject: "New Monarc Archive signup",
      html: `<p><strong>${email}</strong> joined from <strong>${source}</strong>.</p>`,
      text: `${email} joined from ${source}.`,
      reply_to: email,
    }),
  });

  if (!response.ok) return null;

  return response.json().catch(() => null);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribeRequest;
    const email = body.email?.trim().toLowerCase() ?? "";
    const source = body.source?.trim() || "site";

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid email address." },
        { status: 400 },
      );
    }

    if (!resendApiKey) {
      return NextResponse.json({
        ok: true,
        mode: "local",
        message:
          "Signup saved locally. Add RESEND_API_KEY to send it to Resend.",
      });
    }

    await addContact(email, source);
    await sendWelcomeEmail(email);
    await sendOwnerNotification(email, source);

    return NextResponse.json({
      ok: true,
      message: launchConfig.successMessage,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        ok: false,
        message: "Signup could not be completed. Try again in a moment.",
      },
      { status: 500 },
    );
  }
}
