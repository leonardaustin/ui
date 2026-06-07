import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface DividerLabelProps {
  children: ReactNode;
  className?: string;
}

export function DividerLabel({ children, className }: DividerLabelProps) {
  return (
    <div className={cn("relative my-6", className)}>
      <div className="absolute inset-0 flex items-center">
        <div className="border-border w-full border-t" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-bg-secondary text-2xs text-text-tertiary px-2 tracking-wider uppercase">
          {children}
        </span>
      </div>
    </div>
  );
}
