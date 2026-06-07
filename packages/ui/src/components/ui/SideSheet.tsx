import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { X } from "lucide-react";

import { useFocusTrap } from "../../hooks/useFocusTrap";
import { cn } from "../../lib/cn";

export interface SideSheetProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  side?: "left" | "right";
  widthClassName?: string;
  className?: string;
  contentClassName?: string;
}

export function SideSheet({
  open,
  onClose,
  title,
  children,
  footer,
  side = "right",
  widthClassName = "w-[360px]",
  className,
  contentClassName,
}: SideSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  useFocusTrap(sheetRef, open);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex">
      {side === "right" && (
        <div
          className="bg-bg-overlay animate-fade-in flex-1"
          onClick={onClose}
        />
      )}
      <div
        ref={sheetRef}
        className={cn(
          "bg-bg-secondary border-border flex flex-col shadow-lg",
          widthClassName,
          side === "right"
            ? "animate-slide-in-right border-l"
            : "animate-slide-in-left border-r",
          className,
        )}
        style={{ maxWidth: "calc(100vw - 2rem)" }}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === "string" ? title : "Panel"}
      >
        <div className="border-border flex h-10 shrink-0 items-center justify-between border-b px-3">
          {title && (
            <h3 className="text-text-primary truncate text-xs font-semibold">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className={cn("flex-1 overflow-y-auto p-3", contentClassName)}>
          {children}
        </div>
        {footer && (
          <div className="border-border flex gap-2 border-t p-3">{footer}</div>
        )}
      </div>
      {side === "left" && (
        <div
          className="bg-bg-overlay animate-fade-in flex-1"
          onClick={onClose}
        />
      )}
    </div>,
    document.body,
  );
}
