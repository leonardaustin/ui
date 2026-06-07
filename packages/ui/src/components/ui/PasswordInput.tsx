import { forwardRef, useState, type InputHTMLAttributes } from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "../../lib/cn";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="flex flex-col gap-1.5">
        {(label || error) && (
          <div className="flex items-center justify-between">
            {label && (
              <label
                htmlFor={inputId}
                className="text-text-secondary text-xs font-medium"
              >
                {label}
              </label>
            )}
            {error && <p className="text-2xs text-red">{error}</p>}
          </div>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={showPassword ? "text" : "password"}
            className={cn(
              "bg-bg-secondary text-text-primary h-7 w-full rounded-md border px-2 pr-8 text-xs",
              "placeholder:text-text-disabled",
              "transition-colors duration-[100ms]",
              "focus:border-accent focus:outline-none",
              error ? "border-red" : "border-border",
              className,
            )}
            {...props}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-text-tertiary hover:text-text-primary absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="h-3.5 w-3.5" />
            ) : (
              <Eye className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
