import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Monarc Archive privacy policy.",
};

const sections = [
  [
    "Information we collect",
    "We collect information needed to process orders, respond to support requests, manage email signups, and understand how visitors use the site. This may include your name, email, shipping address, order details, and basic site activity.",
  ],
  [
    "How we use it",
    "We use customer information to fulfill orders, send order updates, answer messages, improve the store, and share drop announcements when you choose to join the list.",
  ],
  [
    "Sharing",
    "We only share information with service providers needed to run the store, such as payment, shipping, email, analytics, and hosting providers. We do not sell personal information.",
  ],
  [
    "Your choices",
    "You can unsubscribe from marketing emails at any time. For privacy requests, corrections, or deletion questions, contact support.",
  ],
];

export default function PrivacyPage() {
  return (
    <section>
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Legal
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-3xl text-(--color-text-secondary)">
          Last updated May 2026. Contact {siteConfig.email} with privacy questions.
        </p>
        <div className="mt-10 grid gap-4">
          {sections.map(([title, copy]) => (
            <article key={title} className="rounded-md border border-(--color-border) bg-(--color-bg-surface) p-6">
              <h2 className="m-0 text-xl font-bold uppercase">{title}</h2>
              <p className="m-0 mt-3 text-(--color-text-secondary)">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
