"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

/** MonarcArchive logo mark - `public/brand/monarcharchive-logo.png`, square 1024x1024. */
export const brandLogoPath = "/brand/monarcharchive-logo.png" as const;

export function SiteLogo({
  className = "",
  imgClassName = "",
  onClick,
  priority = false,
}: {
  className?: string;
  imgClassName?: string;
  onClick?: () => void;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center gap-2 md:gap-2.5 shrink-0 rounded-sm ${className}`}
      aria-label={`${siteConfig.name} — Home`}
    >
      <Image
        src={brandLogoPath}
        alt=""
        role="presentation"
        width={1024}
        height={1024}
        priority={priority}
        unoptimized
        sizes="48px"
        className={`h-10 w-10 md:h-11 md:w-11 object-contain object-center select-none shrink-0 ${imgClassName}`}
      />
      <span className="text-base md:text-lg font-semibold tracking-tight text-(--color-text-primary) leading-none">
        MonarcArchive
      </span>
    </Link>
  );
}
