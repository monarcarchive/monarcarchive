import type { Metadata } from "next";
import { CartClient } from "@/components/commerce/CartClient";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your Monarc Archive shopping bag.",
};

export default function CartPage() {
  return (
    <section>
      <div className="container-site py-14 md:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
            Cart
          </p>
          <h1 className="m-0 mt-3 text-4xl font-black uppercase md:text-6xl">
            Your bag
          </h1>
          <p className="mt-6 text-lg leading-8 text-(--color-text-secondary)">
            Review your Monarc Archive pieces before checkout.
          </p>
        </div>
        <CartClient />
      </div>
    </section>
  );
}
