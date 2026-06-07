import { useLayoutEffect, useState, type RefObject } from "react";

/**
 * Returns whether a popup should open upward: true when the space below the
 * trigger can't fit the menu (measured once the menu mounts on `open`).
 */
export function useDropUp(
  open: boolean,
  triggerRef: RefObject<HTMLElement | null>,
  menuRef: RefObject<HTMLElement | null>,
): boolean {
  const [dropUp, setDropUp] = useState(false);

  useLayoutEffect(() => {
    if (!open || !menuRef.current || !triggerRef.current) return;
    const trigger = triggerRef.current.getBoundingClientRect();
    const menu = menuRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - trigger.bottom;
    setDropUp(spaceBelow < menu.height + 8);
    // Refs are stable; only re-measure when the popup opens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return dropUp;
}
