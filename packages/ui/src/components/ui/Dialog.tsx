import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { X } from "lucide-react";

import { useFocusTrap } from "../../hooks/useFocusTrap";
import { cn } from "../../lib/cn";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  /**
   * Optional footer rendered below the children.
   * Typically used with `<DialogActions>` for Cancel + Confirm buttons,
   * but can be any ReactNode.
   *
   * @example
   * ```tsx
   * <Dialog
   *   open={open}
   *   onClose={close}
   *   title="Confirm"
   *   footer={<DialogActions onCancel={close} onConfirm={handle} />}
   * >
   *   <p>Are you sure?</p>
   * </Dialog>
   * ```
   */
  footer?: ReactNode;
  className?: string;
}

export function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  className,
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useFocusTrap(dialogRef, open);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
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
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-4 md:pt-[5vh]">
      <div className="bg-bg-overlay fixed inset-0" onClick={onClose} />
      <div
        ref={dialogRef}
        className={cn(
          "relative z-50 mx-4 mb-8 w-full max-w-[400px] p-6",
          "bg-bg-secondary border-border rounded-lg border",
          "animate-scale-in shadow-lg",
          className,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : "Dialog"}
      >
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h3
              id={titleId}
              className="text-text-primary text-sm font-semibold"
            >
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
        {footer}
      </div>
    </div>,
    document.body,
  );
}
