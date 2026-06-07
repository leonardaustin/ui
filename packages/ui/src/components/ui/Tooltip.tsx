import { useId, useState, type ReactNode } from "react";

import { cn } from "../../lib/cn";

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: string;
  placement?: Placement;
  children: ReactNode;
}

const placementStyles: Record<Placement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

export function Tooltip({
  content,
  placement = "top",
  children,
}: TooltipProps) {
  const [show, setShow] = useState(false);
  const tooltipId = useId();

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      aria-describedby={show ? tooltipId : undefined}
    >
      {children}
      {show && (
        <div
          id={tooltipId}
          className={cn(
            "text-2xs absolute z-50 px-2 py-1 font-medium whitespace-nowrap",
            "bg-bg-tertiary text-text-primary border-border rounded border shadow-md",
            "animate-fade-in pointer-events-none",
            placementStyles[placement],
          )}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
}
