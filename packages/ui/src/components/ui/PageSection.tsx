import type { ElementType, ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface PageSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  as?: ElementType;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

export function PageSection({
  title,
  description,
  actions,
  children,
  as: Tag = "h2",
  className,
  headerClassName,
  contentClassName,
}: PageSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      {(title || description || actions) && (
        <div
          className={cn(
            "border-border flex items-end justify-between gap-3 border-b pb-2",
            headerClassName,
          )}
        >
          <div className="min-w-0">
            {title && (
              <Tag className="text-text-primary font-heading text-xs font-semibold">
                {title}
              </Tag>
            )}
            {description && (
              <p className="text-text-secondary mt-1 text-xs">{description}</p>
            )}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </section>
  );
}
