"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SignupForm } from "@/components/launch/SignupForm";
import { products, formatPrice } from "@/data/products";
import { launchConfig } from "@/data/launch";
import { analytics } from "@/lib/analytics";
import { cartStorageKey, type CartItem } from "@/lib/cart";

function loadCart(): CartItem[] {
  try {
    return JSON.parse(window.localStorage.getItem(cartStorageKey) ?? "[]") as CartItem[];
  } catch {
    return [];
  }
}

export function CartClient() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const sync = () => setItems(loadCart());
    sync();
    window.addEventListener("monarc-cart-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("monarc-cart-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const lines = useMemo(
    () =>
      items
        .map((item) => {
          const product = products.find((entry) => entry.slug === item.slug);
          return product ? { ...item, product } : null;
        })
        .filter((line) => line !== null),
    [items],
  );

  const subtotal = lines.reduce(
    (total, line) => total + line.product.price * line.quantity,
    0,
  );

  function updateQuantity(slug: string, size: string, quantity: number) {
    const product = products.find((entry) => entry.slug === slug);
    const previous = items.find((item) => item.slug === slug && item.size === size);

    const next = items
      .map((item) =>
        item.slug === slug && item.size === size ? { ...item, quantity } : item,
      )
      .filter((item) => item.quantity > 0);
    setItems(next);
    window.localStorage.setItem(cartStorageKey, JSON.stringify(next));
    window.dispatchEvent(new Event("monarc-cart-updated"));

    if (product && previous) {
      if (quantity > previous.quantity) {
        analytics.addToCart({
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          size,
        });
      } else if (quantity < previous.quantity) {
        analytics.removeFromCart({
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          size,
        });
      }
    }
  }

  if (lines.length === 0) {
    return (
      <div className="rounded-md border border-(--color-border) bg-(--color-bg-surface) p-6">
        <p className="m-0 text-lg font-semibold">Your cart is empty.</p>
        <p className="mt-2 text-(--color-text-secondary)">
          Start with the latest drop and build your order.
        </p>
        <Link className="store-button store-button-primary mt-6" href="/shop">
          Shop now
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="grid gap-3">
        {lines.map((line) => (
          <div
            key={`${line.slug}-${line.size}`}
            className="grid gap-4 rounded-md border border-(--color-border) bg-(--color-bg-surface) p-4 sm:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="m-0 text-lg font-semibold">{line.product.name}</p>
              <p className="m-0 text-sm text-(--color-text-secondary)">
                {line.product.color} · Size {line.size} · {formatPrice(line.product.price)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="cart-stepper"
                type="button"
                onClick={() => updateQuantity(line.slug, line.size, line.quantity - 1)}
                aria-label={`Remove one ${line.product.name}`}
              >
                -
              </button>
              <span className="w-8 text-center font-semibold">{line.quantity}</span>
              <button
                className="cart-stepper"
                type="button"
                onClick={() => updateQuantity(line.slug, line.size, line.quantity + 1)}
                aria-label={`Add one ${line.product.name}`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
      <aside className="h-fit rounded-md border border-(--color-border) bg-(--color-bg-surface) p-6">
        <h2 className="m-0 text-xl font-bold uppercase">Order summary</h2>
        <div className="mt-5 flex justify-between border-t border-(--color-border) pt-4">
          <span className="text-(--color-text-secondary)">Subtotal</span>
          <span className="font-semibold">{formatPrice(subtotal)}</span>
        </div>
        <p className="mt-3 text-sm text-(--color-text-muted)">
          Checkout is being connected. Join the archive for first access when
          orders open.
        </p>
        <div className="mt-5 border-t border-(--color-border) pt-5">
          <p className="m-0 text-sm font-bold uppercase text-(--color-text-primary)">
            {launchConfig.launchDateLabel}
          </p>
          <div className="mt-4">
            <SignupForm label="cart-checkout" compact />
          </div>
        </div>
        <button
          className="store-button store-button-primary mt-6 w-full"
          type="button"
          onClick={() => analytics.beginCheckout(subtotal)}
        >
          Notify me when checkout opens
        </button>
      </aside>
    </div>
  );
}
