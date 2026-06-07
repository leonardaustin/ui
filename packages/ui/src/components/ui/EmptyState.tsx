import type { ReactNode } from "react";

import { Inbox } from "lucide-react";

import { cn } from "../../lib/cn";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center px-4 py-12",
        className,
      )}
    >
      <div className="bg-bg-tertiary text-text-tertiary mb-3 flex h-10 w-10 items-center justify-center rounded-md">
        {icon || <Inbox className="h-5 w-5" />}
      </div>
      <p className="text-text-primary mb-1 text-sm font-medium">{title}</p>
      {description && (
        <p className="text-text-secondary max-w-[300px] text-center text-xs">
          {description}
        </p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
