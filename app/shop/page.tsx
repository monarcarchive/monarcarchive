import type { Metadata } from "next";
import { ProductCard } from "@/components/commerce/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Shop Monarc Archive streetwear drops and essentials.",
};

export default function ShopPage() {
  return (
    <section className="section-band">
      <div className="container-site py-14 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
              Shop
            </p>
            <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
              Current goods
            </h1>
          </div>
          <p className="m-0 max-w-xl text-(--color-text-secondary)">
            Heavyweight staples, limited graphics, utility layers, and small
            accessories ready for the current Monarc Archive drop.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
