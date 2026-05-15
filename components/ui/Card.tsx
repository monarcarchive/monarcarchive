interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  hoverable?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className = "",
  as: Tag = "div",
  hoverable = false,
  padding = "md",
}: CardProps) {
  const hoverStyles = hoverable
    ? "cursor-pointer transition-all duration-250 hover:-translate-y-1 hover:border-(--color-border-bright) hover:shadow-[0_0_24px_var(--color-accent-glow)]"
    : "";

  return (
    <Tag
      className={`surface ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </Tag>
  );
}
