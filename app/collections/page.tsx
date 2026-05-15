import type { Metadata } from "next";
import Link from "next/link";
import { collections } from "@/data/products";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore Monarc Archive streetwear drops and collection lanes.",
};

export default function CollectionsPage() {
  return (
    <section className="section-band">
      <div className="container-site py-14 md:py-20">
        <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
          Collections
        </p>
        <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
          Drop structure
        </h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {collections.map((collection) => (
            <Link key={collection.slug} href="/shop" className="collection-panel">
              <p className="m-0 font-mono text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">
                {collection.slug}
              </p>
              <h2 className="m-0 mt-3 text-2xl font-bold uppercase">{collection.name}</h2>
              <p className="m-0 mt-4 text-(--color-text-secondary)">
                {collection.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
