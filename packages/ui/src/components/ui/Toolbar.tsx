import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface ToolbarProps {
  start?: ReactNode;
  end?: ReactNode;
  children?: ReactNode;
  className?: string;
  startClassName?: string;
  endClassName?: string;
}

export function Toolbar({
  start,
  end,
  children,
  className,
  startClassName,
  endClassName,
}: ToolbarProps) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <div className={cn("flex flex-1 items-center gap-3", startClassName)}>
        {start ?? children}
      </div>
      {end && (
        <div className={cn("flex items-center gap-1.5", endClassName)}>
          {end}
        </div>
      )}
    </div>
  );
}
