"use client";

import { useState } from "react";
import { launchConfig } from "@/data/launch";
import { analytics } from "@/lib/analytics";

function readSignups(): string[] {
  try {
    return JSON.parse(window.localStorage.getItem(launchConfig.storageKey) ?? "[]") as string[];
  } catch {
    return [];
  }
}

export function SignupForm({
  label = "homepage",
  compact = false,
}: {
  label?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("No spam. Drop updates only.");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setStatus("error");
      setMessage("Enter a valid email to join.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: cleanEmail, source: label }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "Signup failed.");
      }

      const signups = readSignups();
      const next = Array.from(new Set([...signups, cleanEmail]));
      window.localStorage.setItem(launchConfig.storageKey, JSON.stringify(next));
      analytics.newsletterSignup(cleanEmail, label);
      setEmail("");
      setStatus("success");
      setMessage(result.message ?? launchConfig.successMessage);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Signup could not be completed. Try again in a moment.");
    }
  }

  return (
    <form
      className={compact ? "signup-form signup-form-compact" : "signup-form"}
      onSubmit={submit}
    >
      <label className="sr-only" htmlFor={`signup-email-${label}`}>
        Email address
      </label>
      <input
        id={`signup-email-${label}`}
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (status !== "idle") {
            setStatus("idle");
            setMessage("No spam. Drop updates only.");
          }
        }}
        placeholder="Enter your email"
        autoComplete="email"
        required
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Joining..." : launchConfig.ctaLabel}
      </button>
      <p className="m-0 text-xs text-(--color-text-muted)" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
