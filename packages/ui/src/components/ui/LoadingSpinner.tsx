import { Loader2 } from "lucide-react";

import { cn } from "../../lib/cn";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };

export function LoadingSpinner({
  className,
  size = "md",
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "flex min-h-[200px] items-center justify-center",
        className,
      )}
    >
      <Loader2 className={cn("text-accent animate-spin", sizes[size])} />
    </div>
  );
}
