/* ============================================================
   MONARCARCHIVE - Global Types
   Shared type definitions for the storefront.
   ============================================================ */

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  email: string;
  social: {
    instagram?: string;
    tiktok?: string;
    twitter?: string;
  };
  og: {
    title: string;
    description: string;
    image: string;
  };
}

export type CTAVariant = "primary" | "secondary" | "ghost";

export type TrackingEvent =
  | "cta_click"
  | "page_view"
  | "product_view"
  | "add_to_cart"
  | "remove_from_cart"
  | "begin_checkout"
  | "newsletter_signup"
  | "contact_submit"
  | "nav_click"
  | "external_link";

export interface TrackingPayload {
  event: TrackingEvent;
  label?: string;
  href?: string;
  slug?: string;
  path?: string;
  title?: string;
  productId?: string;
  productName?: string;
  category?: string;
  size?: string;
  quantity?: number;
  value?: number;
  currency?: "USD";
  emailDomain?: string;
}
