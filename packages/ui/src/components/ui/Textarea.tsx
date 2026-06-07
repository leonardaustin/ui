import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cn } from "../../lib/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  showCount?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, showCount, maxLength, value, className, id, ...props },
    ref,
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");
    const len = typeof value === "string" ? value.length : 0;
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-text-secondary font-label text-xs font-medium"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          className={cn(
            "bg-bg-secondary text-text-primary font-control min-h-[72px] w-full px-2 py-1.5 text-xs",
            "resize-y rounded-md border",
            "placeholder:text-text-disabled",
            "transition-colors duration-[100ms]",
            "focus:border-accent focus:outline-none",
            error ? "border-red" : "border-border",
            className,
          )}
          {...props}
        />
        <div className="flex justify-between">
          {error && <p className="text-2xs text-red">{error}</p>}
          {showCount && maxLength && (
            <p className="text-2xs text-text-tertiary ml-auto">
              {len}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
