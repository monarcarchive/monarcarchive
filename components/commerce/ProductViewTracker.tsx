"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

export function ProductViewTracker({
  product,
}: {
  product: {
    slug: string;
    name: string;
    category: string;
    price: number;
  };
}) {
  useEffect(() => {
    analytics.productView(product);
  }, [product]);

  return null;
}
