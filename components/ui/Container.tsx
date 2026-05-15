interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "aside";
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeStyles = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  size = "xl",
}: ContainerProps) {
  return (
    <Tag className={`container-site ${sizeStyles[size]} ${className}`}>
      {children}
    </Tag>
  );
}

type SectionRhythm = "default" | "tight" | "wide" | "airy";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  /** Vertical padding preset for homepage-style rhythm */
  rhythm?: SectionRhythm;
}

const rhythmClass: Record<SectionRhythm, string> = {
  default: "",
  tight: "section-home-tight",
  wide: "section-home-wide",
  airy: "section-home-airy",
};

export function Section({ children, className = "", id, as: Tag = "section", rhythm = "default" }: SectionProps) {
  const rhythmCls = rhythmClass[rhythm];
  return (
    <Tag id={id} className={`section-padding ${rhythmCls} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
