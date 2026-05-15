import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions for Monarc Archive.",
};

const faqs = [
  [
    "When do drops release?",
    "Monarc Archive releases in limited drops. New release dates are announced through the site, email list, and social channels.",
  ],
  [
    "Will sold out pieces restock?",
    "Some essentials may return, but numbered drop pieces are limited. If a product sells through, it may not come back in the same color or print.",
  ],
  [
    "How should I choose my size?",
    "Most tops are relaxed or oversized. Order your normal size for the intended streetwear fit, or size down for a cleaner fit.",
  ],
  [
    "Can I change my order after checkout?",
    `Email ${siteConfig.email} as soon as possible with your order number. Changes are not guaranteed once an order starts processing.`,
  ],
  [
    "Do you offer wholesale or collaborations?",
    `Yes. Send wholesale, styling, or collaboration requests to ${siteConfig.email}.`,
  ],
];

export default function FAQPage() {
  return (
    <section>
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Help
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          FAQ
        </h1>
        <div className="mt-10 grid gap-4">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-md border border-(--color-border) bg-(--color-bg-surface) p-6">
              <h2 className="m-0 text-xl font-bold uppercase">{question}</h2>
              <p className="m-0 mt-3 text-(--color-text-secondary)">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
