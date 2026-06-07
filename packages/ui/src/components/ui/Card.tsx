import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface CardProps {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

export function Card({ children, className, header, footer }: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-secondary border-border overflow-hidden rounded-md border",
        className,
      )}
    >
      {header && (
        <div className="border-border border-b px-3 py-2.5">{header}</div>
      )}
      <div className="p-3">{children}</div>
      {footer && (
        <div className="border-border bg-bg-primary/50 border-t px-3 py-2.5">
          {footer}
        </div>
      )}
    </div>
  );
}
