import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { X } from "lucide-react";

import { cn } from "../../lib/cn";

interface DetailPanelProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
  /** Allow horizontal resize via drag handle. Default true. */
  resizable?: boolean;
  /** Default width in px when the panel opens. */
  defaultWidth?: number;
  /** Minimum width in px during resize. */
  minWidth?: number;
  /** Maximum width in px during resize. */
  maxWidth?: number;
}

const DEFAULT_WIDTH = 360;
const MIN_WIDTH = 260;
const MAX_WIDTH = 700;

export function DetailPanel({
  open,
  onClose,
  title,
  children,
  className,
  resizable = true,
  defaultWidth = DEFAULT_WIDTH,
  minWidth = MIN_WIDTH,
  maxWidth = MAX_WIDTH,
}: DetailPanelProps) {
  const [width, setWidth] = useState(defaultWidth);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!resizable) return;
      e.preventDefault();
      dragging.current = true;
      startX.current = e.clientX;
      startWidth.current = width;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [resizable, width],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      const delta = startX.current - e.clientX;
      const next = Math.max(
        minWidth,
        Math.min(maxWidth, startWidth.current + delta),
      );
      setWidth(next);
    },
    [minWidth, maxWidth],
  );

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      className={cn(
        "border-border bg-bg-secondary relative shrink-0 overflow-hidden border-l",
        "transition-[width] duration-[200ms] ease-out",
        className,
      )}
      style={{ width: open ? width : 0 }}
    >
      {open && (
        <div className="animate-fade-in flex h-full flex-col" style={{ width }}>
          {/* Resize handle */}
          {resizable && (
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="hover:bg-accent/30 active:bg-accent/40 absolute top-0 left-0 z-10 h-full w-1 cursor-col-resize select-none"
            />
          )}

          {/* Header */}
          <div className="border-border flex h-10 shrink-0 items-center justify-between border-b px-3">
            <h3 className="text-text-primary truncate text-xs font-semibold">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded"
              aria-label="Close panel"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-3">{children}</div>
        </div>
      )}
    </div>
  );
}
