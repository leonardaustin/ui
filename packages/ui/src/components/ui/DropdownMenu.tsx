import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import { Check } from "lucide-react";

import { useDismiss } from "../../hooks/useDismiss";
import { cn } from "../../lib/cn";

interface DropdownContentItem {
  label: string;
  icon?: ReactNode;
  shortcut?: string;
  checked?: boolean;
  onClick: () => void;
  danger?: boolean;
  divider?: false;
}

interface DropdownDivider {
  divider: true;
}

export type DropdownItem = DropdownContentItem | DropdownDivider;

interface DropdownMenuProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: "left" | "right";
}

/**
 * Menu whose panel portals to document.body. Position is captured from the
 * trigger rect at open time and not recomputed, so it does not reposition on
 * scroll/resize while open.
 */
export function DropdownMenu({
  trigger,
  items,
  align = "right",
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0, triggerWidth: 0 });
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const actionItems = useMemo(
    () => items.filter((item): item is DropdownContentItem => !item.divider),
    [items],
  );

  const close = useCallback(() => {
    setOpen(false);
    setFocusedIndex(-1);
  }, []);
  useDismiss(open, close, [menuRef], [triggerRef]);

  // Keyboard navigation inside the menu
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIndex((i) => (i + 1) % actionItems.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIndex(
          (i) => (i - 1 + actionItems.length) % actionItems.length,
        );
      } else if (e.key === "Enter" && focusedIndex >= 0) {
        e.preventDefault();
        actionItems[focusedIndex].onClick();
        close();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, focusedIndex, actionItems, close]);

  // Focus the active item when index changes
  useEffect(() => {
    if (!open || focusedIndex < 0 || !menuRef.current) return;
    const buttons =
      menuRef.current.querySelectorAll<HTMLElement>('[role="menuitem"]');
    buttons[focusedIndex]?.focus();
  }, [open, focusedIndex]);

  function handleOpen() {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPos({
      top: rect.bottom + 4,
      left: align === "right" ? rect.right : rect.left,
      triggerWidth: rect.width,
    });
    setOpen(!open);
    setFocusedIndex(-1);
  }

  let actionIndex = -1;

  return (
    <>
      <div ref={triggerRef} onClick={handleOpen}>
        {trigger}
      </div>
      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="menu"
            className="bg-bg-tertiary border-border-strong animate-scale-in fixed z-[100] w-max rounded-md border py-1 shadow-lg"
            style={{
              top: pos.top,
              minWidth: pos.triggerWidth,
              ...(align === "right"
                ? { right: window.innerWidth - pos.left }
                : { left: pos.left }),
            }}
          >
            {items.map((item, i) => {
              if (item.divider) {
                return (
                  <div
                    key={`divider-${i}`}
                    className="border-border my-1 border-t"
                    role="separator"
                  />
                );
              }
              actionIndex++;
              const currentActionIndex = actionIndex;
              return (
                <button
                  key={item.label || `item-${i}`}
                  role="menuitem"
                  tabIndex={currentActionIndex === focusedIndex ? 0 : -1}
                  onClick={() => {
                    item.onClick();
                    close();
                  }}
                  onMouseEnter={() => setFocusedIndex(currentActionIndex)}
                  className={cn(
                    "flex h-7 w-full cursor-pointer items-center gap-2 px-4 text-left text-xs",
                    "transition-colors duration-[100ms]",
                    "focus:outline-none",
                    item.danger
                      ? "text-red hover:bg-red-muted focus:bg-red-muted"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:text-text-primary focus:bg-bg-hover",
                  )}
                >
                  {item.icon && (
                    <span className="flex h-3.5 w-3.5 shrink-0 items-center">
                      {item.icon}
                    </span>
                  )}
                  <span className="flex-1">{item.label}</span>
                  {item.shortcut && (
                    <span className="text-2xs text-text-tertiary ml-auto pl-4 font-mono">
                      {item.shortcut}
                    </span>
                  )}
                  {item.checked && (
                    <Check className="text-accent ml-auto h-3.5 w-3.5 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>,
          document.body,
        )}
    </>
  );
}
