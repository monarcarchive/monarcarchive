import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Monarc Archive shipping and return policy.",
};

export default function ShippingPage() {
  const policies = [
    [
      "Processing",
      "Orders process in 1-2 business days. During drop weeks, processing may take up to 4 business days because quantities are limited and packed in release order.",
    ],
    [
      "Shipping",
      "Standard U.S. shipping is estimated at 2-4 business days after processing. Tracking is sent by email when the order leaves the studio.",
    ],
    [
      "Drop items",
      "Limited drop products may ship separately if your order includes multiple categories or restock items.",
    ],
    [
      "Returns",
      "Unworn items with tags can be returned within 14 days of delivery for store credit. Final sale, worn, washed, or damaged items cannot be returned.",
    ],
    [
      "Exchanges",
      "Size exchanges depend on remaining inventory. If a size is sold out, store credit will be offered instead.",
    ],
    [
      "Order help",
      "For address changes, missing tracking, or return questions, email support@monarcarchive.com with your order number.",
    ],
  ];

  return (
    <section className="section-band">
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Help
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          Shipping & returns
        </h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {policies.map(([title, copy]) => (
            <div key={title} className="rounded-md border border-(--color-border) bg-(--color-bg-surface) p-6">
              <h2 className="m-0 text-xl font-bold uppercase">{title}</h2>
              <p className="m-0 mt-3 text-(--color-text-secondary)">{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
