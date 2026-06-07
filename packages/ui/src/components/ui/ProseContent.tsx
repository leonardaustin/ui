import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

export interface ProseContentProps {
  children: ReactNode;
  className?: string;
}

export function ProseContent({ children, className }: ProseContentProps) {
  return <div className={cn("ui-prose", className)}>{children}</div>;
}
