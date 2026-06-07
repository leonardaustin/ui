import { cn } from "../../lib/cn";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export function Toggle({
  checked,
  onChange,
  disabled,
  label,
  className,
}: ToggleProps) {
  return (
    <label
      className={cn(
        "flex w-fit items-center",
        disabled ? "cursor-not-allowed opacity-40" : "cursor-pointer",
        className,
      )}
      style={{ gap: 10 }}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative shrink-0 rounded-full border transition-colors duration-[100ms]",
          "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
          checked ? "bg-accent border-accent" : "bg-bg-tertiary border-border",
          !disabled && "cursor-pointer",
        )}
        style={{ width: 36, height: 20 }}
      >
        <span
          className="bg-control-knob absolute top-1/2 rounded-full transition-[left] duration-[100ms]"
          style={{
            width: 14,
            height: 14,
            marginTop: -7,
            left: checked ? 19 : 3,
            boxShadow: "0 0 1px rgba(0,0,0,0.1), 2px 0 4px rgba(0,0,0,0.35)",
          }}
        />
      </button>
      {label && <span className="text-text-secondary text-xs">{label}</span>}
    </label>
  );
}
