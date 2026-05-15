interface MetricPillProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

export function MetricPill({ value, label, description, className = "" }: MetricPillProps) {
  return (
    <div
      className={`flex flex-col gap-1 p-4 rounded-xl bg-(--color-bg-elevated) border border-(--color-border) ${className}`}
    >
      <span className="text-2xl font-bold text-(--color-accent) leading-none">
        {value}
      </span>
      <span className="text-sm font-medium text-(--color-text-primary)">{label}</span>
      {description && (
        <span className="text-xs text-(--color-text-muted)">{description}</span>
      )}
    </div>
  );
}

export function MetricInline({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-3xl font-bold text-(--color-accent) leading-none">{value}</span>
      <span className="text-sm text-(--color-text-muted)">{label}</span>
    </div>
  );
}
