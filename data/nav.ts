import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  { label: "Archive", href: "/collections" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
];

export const footerLinks: { group: string; links: NavLink[] }[] = [
  {
    group: "Site",
    links: [
      { label: "Shop", href: "/shop" },
      { label: "Collections", href: "/collections" },
      { label: "Lookbook", href: "/lookbook" },
      { label: "Journal", href: "/journal" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    group: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/monarcarchive", external: true },
      { label: "TikTok", href: "https://tiktok.com/@monarcarchive", external: true },
      { label: "Twitter / X", href: "https://twitter.com/monarcarchive", external: true },
    ],
  },
  {
    group: "Legal",
    links: [
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
