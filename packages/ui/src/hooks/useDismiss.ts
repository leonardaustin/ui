import { useEffect, type RefObject } from "react";

/**
 * Dismisses on outside click and/or Escape key press.
 * Supports an optional list of refs to exclude from the outside-click check
 * (e.g. a trigger element that toggles the popover).
 */
export function useDismiss(
  open: boolean,
  onClose: () => void,
  refs: RefObject<HTMLElement | null>[],
  excludeRefs?: RefObject<HTMLElement | null>[],
) {
  useEffect(() => {
    if (!open) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (excludeRefs?.some((r) => r.current?.contains(target))) return;
      if (refs.every((r) => r.current && !r.current.contains(target))) {
        onClose();
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose, refs, excludeRefs]);
}
