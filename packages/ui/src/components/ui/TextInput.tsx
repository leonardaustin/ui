import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

import { cn } from "../../lib/cn";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  /**
   * Pre-rendered icon JSX shown inside the input (e.g. `<Mail className="h-3.5 w-3.5" />`).
   * Unlike Button's `icon`, which takes a component reference, this takes a ReactNode.
   */
  icon?: ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, icon, className, id, readOnly, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {(label || error) && (
          <div className="flex items-center justify-between">
            {label && (
              <label
                htmlFor={inputId}
                className="text-text-secondary font-label text-xs font-medium"
              >
                {label}
              </label>
            )}
            {error && <p className="text-2xs text-red">{error}</p>}
          </div>
        )}
        <div className="relative">
          {icon && (
            <span className="text-text-tertiary absolute top-1/2 left-2.5 -translate-y-1/2">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            readOnly={readOnly}
            className={cn(
              "bg-bg-secondary text-text-primary font-control h-7 w-full px-2 text-xs",
              "rounded-md border",
              "placeholder:text-text-disabled",
              "transition-colors duration-[100ms]",
              "focus:border-accent focus:outline-none",
              "disabled:cursor-not-allowed disabled:opacity-40",
              readOnly &&
                "bg-bg-primary text-text-secondary focus:border-border cursor-default border-dashed",
              icon && "pl-7",
              error ? "border-red" : !readOnly && "border-border",
              readOnly && !error && "border-border",
              className,
            )}
            {...props}
          />
        </div>
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
