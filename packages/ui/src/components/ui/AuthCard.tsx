import type { ElementType, ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface AuthCardProps {
  title: string;
  subtitle?: string;
  icon?: ElementType;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function AuthCard({
  title,
  subtitle,
  icon: Icon,
  children,
  footer,
  className,
}: AuthCardProps) {
  return (
    <div className={cn("relative z-10 w-full max-w-sm", className)}>
      <div className="bg-bg-secondary border-border rounded-lg border p-8 shadow-lg">
        <div className="mb-6 flex flex-col items-center">
          {Icon && (
            <div className="bg-accent-muted mb-3 flex h-12 w-12 items-center justify-center rounded-xl">
              <Icon className="text-accent h-6 w-6" />
            </div>
          )}
          <h1 className="text-text-primary text-lg font-semibold">{title}</h1>
          {subtitle && (
            <p className="text-text-secondary mt-1 text-xs">{subtitle}</p>
          )}
        </div>
        {children}
        {footer && (
          <p className="text-text-secondary mt-6 text-center text-xs">
            {footer}
          </p>
        )}
      </div>
    </div>
  );
}
