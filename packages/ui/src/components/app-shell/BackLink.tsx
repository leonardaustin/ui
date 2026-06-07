import type { ReactNode } from "react";

import { ArrowLeft } from "lucide-react";

import { cn } from "../../lib/cn";
import { handleAppShellNavigate, type AppShellNavigate } from "./navigation";

export interface BackLinkProps {
  to: string;
  children: ReactNode;
  onNavigate?: AppShellNavigate;
  className?: string;
}

export function BackLink({
  to,
  children,
  onNavigate,
  className,
}: BackLinkProps) {
  return (
    <a
      href={to}
      onClick={(event) => handleAppShellNavigate(event, to, onNavigate)}
      className={cn(
        "inline-flex items-center gap-1.5",
        "text-text-tertiary text-xs",
        "hover:text-text-primary",
        className,
      )}
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      {children}
    </a>
  );
}
