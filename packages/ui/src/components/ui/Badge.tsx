import { cn } from "../../lib/cn";

export type BadgeColor =
  | "green"
  | "yellow"
  | "red"
  | "blue"
  | "purple"
  | "gray";

interface BadgeProps {
  color?: BadgeColor;
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}

const colorStyles: Record<BadgeColor, string> = {
  green: "bg-green-muted text-green",
  yellow: "bg-yellow-muted text-yellow",
  red: "bg-red-muted text-red",
  blue: "bg-blue-muted text-blue",
  purple: "bg-purple-muted text-purple",
  gray: "bg-bg-hover text-text-secondary",
};

const dotColorStyles: Record<BadgeColor, string> = {
  green: "bg-green",
  yellow: "bg-yellow",
  red: "bg-red",
  blue: "bg-blue",
  purple: "bg-purple",
  gray: "bg-text-tertiary",
};

export function Badge({
  color = "gray",
  dot,
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "font-label text-2xs inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-medium",
        colorStyles[color],
        className,
      )}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full", dotColorStyles[color])}
        />
      )}
      {children}
    </span>
  );
}
