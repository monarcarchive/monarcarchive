"use client";

import Link from "next/link";
import { analytics } from "@/lib/analytics";
import type { CTAVariant } from "@/types";

interface ButtonProps {
  label: string;
  href: string;
  variant?: CTAVariant;
  external?: boolean;
  className?: string;
  trackingLabel?: string;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const variantStyles: Record<CTAVariant, string> = {
  primary:
    "bg-(--color-accent) text-(--color-text-inverse) font-semibold hover:bg-(--color-accent-dim) shadow-[0_0_20px_var(--color-accent-glow)] hover:shadow-[0_0_28px_rgba(0,200,255,0.2)]",
  secondary:
    "bg-transparent text-(--color-text-primary) border border-(--color-border-bright) hover:border-(--color-accent) hover:text-(--color-accent)",
  ghost:
    "bg-transparent text-(--color-text-secondary) hover:text-(--color-text-primary)",
};

const sizeStyles = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-base px-6 py-3 gap-2",
  lg: "text-lg px-8 py-4 gap-2.5",
};

export function Button({
  label,
  href,
  variant = "primary",
  external = false,
  className = "",
  trackingLabel,
  size = "md",
  icon,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-250 focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-3 whitespace-nowrap";

  const handleClick = () => {
    if (trackingLabel) {
      analytics.ctaClick(trackingLabel, href);
    }
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        onClick={handleClick}
        aria-label={label}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName} onClick={handleClick}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {label}
    </Link>
  );
}
