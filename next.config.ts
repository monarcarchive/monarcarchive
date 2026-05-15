import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** Hostnames (no protocol) allowed to load /_next dev assets when not using localhost. */
function allowedDevOriginsFromEnv(): string[] {
  const raw = process.env.NEXT_ALLOWED_DEV_ORIGINS;
  const defaults = ["localhost:3003", "127.0.0.1:3003"];
  if (!raw) return defaults;
  return [
    ...defaults,
    ...raw
      .split(/[,;\s]+/)
      .map((s) => s.trim())
      .filter(Boolean),
  ];
}

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/projects", destination: "/shop", permanent: true },
      { source: "/services", destination: "/shop", permanent: true },
      { source: "/integrations", destination: "/shop", permanent: true },
      { source: "/university", destination: "/lookbook", permanent: true },
      { source: "/work", destination: "/shop", permanent: true },
      { source: "/work/:path*", destination: "/shop", permanent: true },
    ];
  },
  /* Next 16 blocks LAN / alternate hostnames from fetching dev bundles unless listed here. */
  allowedDevOrigins: allowedDevOriginsFromEnv(),
};

export default withMDX(nextConfig);
