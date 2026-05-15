import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Monarc Archive terms of service.",
};

const sections = [
  [
    "Orders",
    "By placing an order, you agree that product availability, pricing, and shipping timelines may change during limited releases. If an order cannot be fulfilled, the customer will be contacted and refunded or credited.",
  ],
  [
    "Product details",
    "Product colors may vary slightly by screen, lighting, and production batch. Measurements are approximate and may vary within normal garment tolerances.",
  ],
  [
    "Returns",
    "Returns and exchanges follow the Shipping & Returns policy. Items must be unworn, unwashed, and returned with tags when applicable.",
  ],
  [
    "Intellectual property",
    "Monarc Archive names, logos, graphics, product images, and site content belong to Monarc Archive and may not be copied or reused without permission.",
  ],
  [
    "Contact",
    `Questions about these terms can be sent to ${siteConfig.email}.`,
  ],
];

export default function TermsPage() {
  return (
    <section className="section-band">
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Legal
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          Terms of Service
        </h1>
        <p className="mt-6 max-w-3xl text-(--color-text-secondary)">
          Last updated May 2026. These terms are a starter policy set and should
          be reviewed before launch.
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
