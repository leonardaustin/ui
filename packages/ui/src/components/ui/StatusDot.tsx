import { cn } from "../../lib/cn";

type Status = "active" | "inactive" | "pending" | "error";

interface StatusDotProps {
  status: Status;
  label?: string;
  className?: string;
}

const dotStyles: Record<Status, string> = {
  active: "bg-green",
  inactive: "bg-text-tertiary",
  pending: "bg-yellow animate-pulse-subtle",
  error: "bg-red",
};

const labelStyles: Record<Status, string> = {
  active: "text-green",
  inactive: "text-text-tertiary",
  pending: "text-yellow",
  error: "text-red",
};

export function StatusDot({ status, label, className }: StatusDotProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className={cn("h-2 w-2 rounded-full", dotStyles[status])} />
      {label && (
        <span className={cn("text-xs", labelStyles[status])}>{label}</span>
      )}
    </span>
  );
}
