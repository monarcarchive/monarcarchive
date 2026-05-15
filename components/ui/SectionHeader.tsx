interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Larger display title for flagship sections (e.g. featured work). */
  impact?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  impact = false,
}: SectionHeaderProps) {
  const alignStyles = align === "center" ? "text-center items-center" : "";

  const titleClass = impact
    ? "text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.05rem] font-bold tracking-[-0.025em] text-(--color-text-primary) text-balance leading-[1.08]"
    : "text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.02em] text-(--color-text-primary) text-balance leading-[1.1]";

  return (
    <div className={`flex flex-col gap-3 md:gap-3.5 ${alignStyles} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className={`accent-line ${impact ? "w-12" : ""}`} aria-hidden="true" />
          <span
            className={`text-(--color-accent) font-bold tracking-[0.16em] uppercase ${
              impact ? "text-[11px] sm:text-xs" : "text-xs md:text-sm font-semibold tracking-widest"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={titleClass}>{title}</h2>
      {description && (
        <p
          className={`text-(--color-text-secondary) leading-relaxed max-w-xl text-pretty ${
            impact ? "text-sm md:text-base max-w-[40rem]" : "text-base md:text-lg mt-0.5"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
