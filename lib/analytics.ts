import type { TrackingEvent, TrackingPayload } from "@/types";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const isBrowser = typeof window !== "undefined";

const gaEventNames: Record<TrackingEvent, string> = {
  add_to_cart: "add_to_cart",
  begin_checkout: "begin_checkout",
  contact_submit: "generate_lead",
  cta_click: "select_content",
  external_link: "click",
  nav_click: "select_content",
  newsletter_signup: "sign_up",
  page_view: "page_view",
  product_view: "view_item",
  remove_from_cart: "remove_from_cart",
};

const metaEventNames: Partial<Record<TrackingEvent, string>> = {
  add_to_cart: "AddToCart",
  begin_checkout: "InitiateCheckout",
  contact_submit: "Lead",
  newsletter_signup: "Lead",
  page_view: "PageView",
  product_view: "ViewContent",
};

function sendGA(payload: TrackingPayload): void {
  if (!isBrowser || !window.gtag) return;

  window.gtag("event", gaEventNames[payload.event], {
    currency: payload.currency ?? "USD",
    value: payload.value,
    item_id: payload.productId ?? payload.slug,
    item_name: payload.productName ?? payload.label,
    item_category: payload.category,
    item_variant: payload.size,
    quantity: payload.quantity,
    page_path: payload.path,
    page_title: payload.title,
    link_url: payload.href,
  });
}

function sendMeta(payload: TrackingPayload): void {
  if (!isBrowser || !window.fbq) return;

  const eventName = metaEventNames[payload.event];
  if (!eventName) return;

  if (payload.event === "page_view") {
    window.fbq("track", "PageView");
    return;
  }

  window.fbq("track", eventName, {
    content_ids: payload.productId ? [payload.productId] : undefined,
    content_name: payload.productName ?? payload.label,
    content_category: payload.category,
    content_type: payload.productId ? "product" : undefined,
    currency: payload.currency ?? "USD",
    value: payload.value,
    size: payload.size,
    quantity: payload.quantity,
  });
}

function sendEvent(payload: TrackingPayload): void {
  if (!isBrowser) return;

  if (process.env.NODE_ENV !== "production") {
    console.log("[analytics]", payload);
  }

  sendGA(payload);
  sendMeta(payload);
}

export function track(
  event: TrackingEvent,
  data?: Omit<TrackingPayload, "event">,
): void {
  sendEvent({ event, ...data });
}

export const analytics = {
  pageView: (path: string, title?: string) =>
    track("page_view", { path, title }),

  ctaClick: (label: string, href: string) =>
    track("cta_click", { label, href }),

  productView: (product: {
    slug: string;
    name: string;
    category: string;
    price: number;
  }) =>
    track("product_view", {
      productId: product.slug,
      productName: product.name,
      category: product.category,
      value: product.price,
      currency: "USD",
    }),

  projectView: (slug: string) =>
    track("product_view", { slug }),

  addToCart: (product: {
    slug: string;
    name: string;
    category: string;
    price: number;
    size: string;
    quantity?: number;
  }) =>
    track("add_to_cart", {
      productId: product.slug,
      productName: product.name,
      category: product.category,
      size: product.size,
      quantity: product.quantity ?? 1,
      value: product.price * (product.quantity ?? 1),
      currency: "USD",
    }),

  removeFromCart: (product: {
    slug: string;
    name: string;
    category: string;
    price: number;
    size: string;
  }) =>
    track("remove_from_cart", {
      productId: product.slug,
      productName: product.name,
      category: product.category,
      size: product.size,
      quantity: 1,
      value: product.price,
      currency: "USD",
    }),

  beginCheckout: (value: number) =>
    track("begin_checkout", { value, currency: "USD" }),

  newsletterSignup: (email: string, label: string) =>
    track("newsletter_signup", {
      label,
      emailDomain: email.split("@")[1]?.toLowerCase(),
    }),

  contactSubmit: () =>
    track("contact_submit"),

  serviceClick: (label: string) =>
    track("cta_click", { label }),

  navClick: (label: string, href: string) =>
    track("nav_click", { label, href }),

  externalLink: (label: string, href: string) =>
    track("external_link", { label, href }),
};
