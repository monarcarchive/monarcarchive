import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Monarc Archive and the streetwear storefront.",
};

export default function AboutPage() {
  return (
    <section>
      <div className="container-site grid gap-10 py-14 md:grid-cols-[0.8fr_1.2fr] md:py-20">
        <div>
          <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
            About
          </p>
          <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
            Archive the drop. Move the product.
          </h1>
        </div>
        <div className="space-y-6 text-lg leading-8 text-(--color-text-secondary)">
          <p>
            Monarc Archive is set up as a clothing brand storefront first: fast
            product browsing, clear drop structure, mobile-friendly buying
            paths, and room for campaign imagery.
          </p>
          <p>
            The brand focuses on heavyweight staples, limited graphics, and
            utility pieces that feel worn-in without feeling disposable.
          </p>
        </div>
      </div>
    </section>
  );
}
