import { forwardRef, type SelectHTMLAttributes } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {(label || error) && (
          <div className="flex items-center justify-between">
            {label && (
              <label
                htmlFor={selectId}
                className="text-text-secondary font-label text-xs font-medium"
              >
                {label}
              </label>
            )}
            {error && <p className="text-2xs text-red">{error}</p>}
          </div>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "bg-bg-secondary text-text-primary font-control h-7 w-full px-2 pr-7 text-xs",
              "appearance-none rounded-md border",
              "transition-colors duration-[100ms]",
              "focus:border-accent focus:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-40",
              "cursor-pointer",
              error ? "border-red" : "border-border",
              className,
            )}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2" />
        </div>
      </div>
    );
  },
);

Select.displayName = "Select";
