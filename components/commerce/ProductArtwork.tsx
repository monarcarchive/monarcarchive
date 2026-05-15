import Image from "next/image";
import type { Product } from "@/data/products";

export function ProductArtwork({
  product,
  className = "",
}: {
  product: Product;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-(--color-border) bg-black ${className}`}
      aria-label={`${product.name} product visual`}
    >
      <Image
        src={product.image}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}
