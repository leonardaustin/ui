import { Check, Minus } from "lucide-react";

import { cn } from "../../lib/cn";

export interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function Checkbox({
  checked,
  indeterminate,
  onChange,
  label,
  disabled,
  className,
}: CheckboxProps) {
  const isOn = checked || indeterminate;
  return (
    <label
      className={cn(
        "flex w-fit items-center gap-2.5",
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
        className,
      )}
    >
      <button
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "flex h-4 w-4 shrink-0 items-center justify-center rounded border",
          "transition-colors duration-[100ms]",
          "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
          isOn ? "bg-accent border-accent" : "bg-bg-secondary border-border",
          !disabled && "cursor-pointer",
        )}
      >
        {indeterminate ? (
          <Minus className="text-text-on-accent h-3 w-3" />
        ) : checked ? (
          <Check className="text-text-on-accent h-3 w-3" />
        ) : null}
      </button>
      {label && <span className="text-text-primary text-xs">{label}</span>}
    </label>
  );
}
