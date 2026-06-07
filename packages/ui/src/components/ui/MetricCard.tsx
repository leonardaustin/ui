import type { ElementType } from "react";

import { cn } from "../../lib/cn";

export interface MetricCardProps {
  label: string;
  value: string | number;
  sub?: string;
  bar?: number; // 0-100
  icon?: ElementType;
  iconColor?: string;
  className?: string;
}

export function MetricCard({
  label,
  value,
  sub,
  bar,
  icon: Icon,
  iconColor,
  className,
}: MetricCardProps) {
  return (
    <div
      className={cn(
        "bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3",
        className,
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]",
            iconColor,
          )}
        />
      )}
      <p className="text-2xs-f text-text-tertiary font-label mb-1 font-medium tracking-wider uppercase">
        {label}
      </p>
      <p className="text-text-primary font-data text-xl font-bold tabular-nums">
        {value}
      </p>
      {sub && (
        <p className="text-2xs text-text-tertiary font-label mt-0.5">{sub}</p>
      )}
      {bar !== undefined && (
        <div className="bg-bg-tertiary mt-2 h-[3px] overflow-hidden rounded-md">
          <div
            className="bg-accent h-full rounded-md transition-all duration-[250ms] ease-out"
            style={{ width: `${Math.min(100, Math.max(0, bar))}%` }}
          />
        </div>
      )}
    </div>
  );
}
