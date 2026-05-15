interface BadgeProps {
  label: string;
  variant?: "default" | "accent" | "muted";
  className?: string;
}

const variantStyles = {
  default:
    "bg-(--color-bg-elevated) text-(--color-text-secondary) border border-(--color-border)",
  accent:
    "bg-(--color-accent-subtle) text-(--color-accent) border border-[rgba(0,200,255,0.2)]",
  muted:
    "bg-transparent text-(--color-text-muted) border border-(--color-border)",
};

export function Badge({ label, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
