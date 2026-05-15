import type { SiteConfig } from "@/types";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://monarcarchive.com";

export const siteConfig: SiteConfig = {
  name: "Monarc Archive",
  tagline: "Streetwear drops and everyday uniforms",
  description:
    "Monarc Archive is a streetwear label built around heavyweight fleece, sharp tees, utility bottoms, and limited seasonal drops.",
  url: siteUrl,
  author: "Monarc Archive",
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@monarcarchive.com",
  social: {
    instagram: "https://instagram.com/monarcarchive",
    tiktok: "https://tiktok.com/@monarcarchive",
    twitter: "https://twitter.com/monarcarchive",
  },
  og: {
    title:
      "Monarc Archive — Streetwear drops and essentials",
    description:
      "Shop heavyweight fleece, structured tees, utility bottoms, accessories, and limited Monarc Archive drops.",
    image: "/og/default.png",
  },
};

/** Footer — lead blurb under the logo (tagline lives in `siteConfig.tagline` for meta). */
export const footerIntro =
  "Streetwear built around numbered drops, durable blanks, clean graphics, and pieces you can keep in rotation.";

/** Short line for the footer rail (contact + async). */
export const footerLocationNote =
  "Online drops · U.S. shipping · limited quantities";
