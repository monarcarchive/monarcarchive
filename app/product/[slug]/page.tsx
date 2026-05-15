import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";
import { ProductArtwork } from "@/components/commerce/ProductArtwork";
import { ProductViewTracker } from "@/components/commerce/ProductViewTracker";
import { formatPrice, getProduct, products } from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product?.name ?? "Product",
    description: product?.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <section>
      <ProductViewTracker
        product={{
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
        }}
      />
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 md:py-20">
        <ProductArtwork product={product} className="aspect-[4/5]" />
        <div className="flex flex-col justify-center">
          <p className="m-0 font-mono text-xs uppercase tracking-[0.22em] text-(--color-accent)">
            {product.collection} · {product.color}
          </p>
          <h1 className="m-0 mt-3 text-4xl font-black uppercase leading-none md:text-6xl">
            {product.name}
          </h1>
          <p className="m-0 mt-5 text-2xl font-semibold">{formatPrice(product.price)}</p>
          <p className="mt-6 text-lg leading-8 text-(--color-text-secondary)">
            {product.description}
          </p>
          <p className="m-0 mt-4 text-sm font-semibold uppercase text-(--color-text-primary)">
            Fit: {product.fit}
          </p>
          <p className="m-0 mt-2 text-sm text-(--color-text-muted)">
            SKU: {product.sku}
          </p>
          <p className="m-0 mt-2 text-sm text-(--color-text-muted)">
            Shipping weight: {product.weightOz} oz
          </p>
          <p className="m-0 mt-2 text-sm text-(--color-text-muted)">
            {product.status === "low-stock"
                ? `Only ${product.inventory} left`
                : `${product.inventory} available`}
          </p>
          <AddToCartButton
            slug={product.slug}
            name={product.name}
            category={product.category}
            price={product.price}
            sizes={product.sizes}
            sizeStock={product.sizeStock}
          />
          <div className="mt-8 border-t border-(--color-border) pt-5">
            <h2 className="m-0 text-sm font-bold uppercase tracking-[0.14em]">
              Size inventory
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {product.sizeStock.map((stock) => (
                <div key={stock.sku} className="rounded-sm border border-(--color-border) p-3">
                  <p className="m-0 text-sm font-bold">{stock.size}</p>
                  <p className="m-0 mt-1 text-xs text-(--color-text-muted)">
                    {stock.quantity > 0 ? `${stock.quantity} available` : "Sold out"}
                  </p>
                  <p className="m-0 mt-1 text-[10px] text-(--color-text-muted)">
                    {stock.sku}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ul className="mt-8 grid gap-3 p-0">
            <li className="list-none border-t border-(--color-border) pt-3 text-(--color-text-secondary)">
              Material: {product.material}
            </li>
            {product.details.map((detail) => (
              <li key={detail} className="list-none border-t border-(--color-border) pt-3 text-(--color-text-secondary)">
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-(--color-border) pt-5">
            <h2 className="m-0 text-sm font-bold uppercase tracking-[0.14em]">
              Care
            </h2>
            <ul className="mt-3 grid gap-2 p-0">
              {product.care.map((item) => (
                <li key={item} className="list-none text-sm text-(--color-text-secondary)">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
