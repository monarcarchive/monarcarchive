"use client";

import { useState } from "react";
import type { ProductSizeStock } from "@/data/products";
import { analytics } from "@/lib/analytics";
import { cartStorageKey, type CartItem } from "@/lib/cart";

function readCart(): CartItem[] {
  try {
    return JSON.parse(window.localStorage.getItem(cartStorageKey) ?? "[]") as CartItem[];
  } catch {
    return [];
  }
}

export function AddToCartButton({
  slug,
  name,
  category,
  price,
  sizes,
  sizeStock,
  disabled = false,
}: {
  slug: string;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  sizeStock?: ProductSizeStock[];
  disabled?: boolean;
}) {
  const [size, setSize] = useState("");
  const [added, setAdded] = useState(false);

  function addToCart() {
    if (!size || disabled) return;

    const cart = readCart();
    const existing = cart.find((item) => item.slug === slug && item.size === size);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ slug, size, quantity: 1 });
    }

    window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
    window.dispatchEvent(new Event("monarc-cart-updated"));
    analytics.addToCart({ slug, name, category, price, size });
    setAdded(true);
  }

  return (
    <div className="mt-8 flex flex-col gap-3">
      <div className="flex flex-wrap gap-2" aria-label="Select size">
        {sizes.map((entry) => (
          <button
            key={entry}
            className="size-chip"
            type="button"
            disabled={sizeStock?.find((stock) => stock.size === entry)?.quantity === 0}
            aria-pressed={size === entry}
            onClick={() => setSize(entry)}
          >
            {entry}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="store-button store-button-primary w-full sm:w-fit"
        disabled={!size || disabled}
        onClick={addToCart}
      >
        {disabled ? "Sold out" : added ? "Added to cart" : "Add to cart"}
      </button>
      {!size && !disabled ? (
        <p className="m-0 text-sm text-(--color-text-muted)">Select a size first.</p>
      ) : null}
      <div className="sr-only" aria-live="polite">
        {added ? "Item added to cart" : ""}
      </div>
    </div>
  );
}
