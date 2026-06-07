import { cn } from "../../lib/cn";

interface RadioPillProps<T extends string> {
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

export function RadioPill<T extends string>({
  options,
  value,
  onChange,
  disabled,
  className,
  "aria-label": ariaLabel,
}: RadioPillProps<T>) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={cn(
        "border-border inline-flex overflow-hidden rounded-md border",
        disabled && "cursor-not-allowed opacity-40",
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          role="radio"
          aria-checked={opt.value === value}
          disabled={disabled}
          onClick={() => onChange(opt.value)}
          className={cn(
            "font-control px-3 py-1.5 text-xs font-medium transition-colors duration-[100ms]",
            "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-[-2px]",
            !disabled && "cursor-pointer",
            opt.value === value
              ? "bg-accent text-text-on-accent"
              : "bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
