import { cn } from "../../lib/cn";

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export function Kbd({ children, className }: KbdProps) {
  return (
    <kbd
      className={cn(
        "text-2xs inline-flex items-center px-1.5 py-0.5 font-mono font-medium",
        "bg-bg-tertiary text-text-secondary border-border rounded border",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
