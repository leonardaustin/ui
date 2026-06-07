import type { ElementType } from "react";

import { cn } from "../../lib/cn";

export interface ThemePreviewProps {
  label: string;
  active?: boolean;
  icon?: ElementType;
  preview?: {
    bg?: string;
    fg?: string;
  };
  onClick?: () => void;
  className?: string;
}

export function ThemePreview({
  label,
  active,
  icon: Icon,
  preview,
  onClick,
  className,
}: ThemePreviewProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-md border p-3 transition-colors duration-[100ms]",
        active
          ? "border-accent bg-accent-muted"
          : "border-border bg-bg-secondary hover:bg-bg-hover hover:border-border-strong",
        className,
      )}
    >
      <div
        className="border-border-strong/20 flex h-10 w-full items-center justify-center rounded border"
        style={{ backgroundColor: preview?.bg }}
      >
        <div
          className="h-1.5 w-8 rounded-md"
          style={{ backgroundColor: preview?.fg }}
        />
      </div>
      <div className="flex items-center gap-1.5">
        {Icon && <Icon className="h-3 w-3" />}
        <span className="text-xs font-medium">{label}</span>
      </div>
    </button>
  );
}
