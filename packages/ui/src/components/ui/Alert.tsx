import { useState } from "react";

import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

import { cn } from "../../lib/cn";

type AlertType = "success" | "warning" | "error" | "info";

export interface AlertProps {
  type: AlertType;
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  className?: string;
}

const styles: Record<
  AlertType,
  { bg: string; border: string; icon: typeof Info; iconColor: string }
> = {
  success: {
    bg: "bg-green-muted",
    border: "border-green/30",
    icon: CheckCircle2,
    iconColor: "text-green",
  },
  warning: {
    bg: "bg-yellow-muted",
    border: "border-yellow/30",
    icon: AlertTriangle,
    iconColor: "text-yellow",
  },
  error: {
    bg: "bg-red-muted",
    border: "border-red/30",
    icon: XCircle,
    iconColor: "text-red",
  },
  info: {
    bg: "bg-blue-muted",
    border: "border-blue/30",
    icon: Info,
    iconColor: "text-blue",
  },
};

export function Alert({
  type,
  title,
  children,
  dismissible,
  className,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  const s = styles[type];
  const Icon = s.icon;

  return (
    <div
      className={cn(
        "flex gap-2.5 rounded-md border p-3",
        s.bg,
        s.border,
        className,
      )}
    >
      <Icon className={cn("mt-0.5 h-4 w-4 shrink-0", s.iconColor)} />
      <div className="min-w-0 flex-1">
        {title && (
          <p className="text-text-primary mb-0.5 text-xs font-semibold">
            {title}
          </p>
        )}
        <div className="text-text-secondary text-xs">{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={() => setDismissed(true)}
          className="text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded"
          aria-label="Dismiss"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
