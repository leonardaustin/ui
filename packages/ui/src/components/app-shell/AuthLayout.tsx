import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface AuthLayoutProps {
  children?: ReactNode;
  className?: string;
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <div
      className={cn(
        "bg-bg-primary relative flex min-h-svh items-center justify-center p-4",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, var(--accent-muted) 0%, transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}
