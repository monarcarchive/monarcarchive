import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";
import { ProductArtwork } from "@/components/commerce/ProductArtwork";

const statusLabel: Record<Product["status"], string> = {
  live: "In stock",
  "low-stock": "Low stock",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-black transition duration-250 hover:opacity-90"
    >
      <ProductArtwork product={product} className="aspect-[1.18/1]" />
      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <p className="m-0 text-[11px] font-mono uppercase tracking-[0.18em] text-(--color-accent)">
            {product.collection}
          </p>
          <h3 className="m-0 mt-2 text-sm font-bold uppercase leading-tight text-(--color-text-primary)">
            {product.name}
          </h3>
          <p className="m-0 mt-1 text-xs text-(--color-text-secondary)">
            {product.color} · {statusLabel[product.status]}
          </p>
        </div>
        <p className="m-0 text-sm font-semibold text-(--color-text-primary)">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
