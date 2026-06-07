import { useCallback, useId, useRef, useState } from "react";

import { Check, ChevronDown } from "lucide-react";

import { useDismiss } from "../../hooks/useDismiss";
import { useDropUp } from "../../hooks/useDropUp";
import { cn } from "../../lib/cn";

interface SelectDropdownOption {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  options: SelectDropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  size?: "sm" | "md";
}

export function SelectDropdown({
  options,
  value,
  onChange,
  label,
  placeholder = "Select...",
  className,
  size = "md",
}: SelectDropdownProps) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropUp = useDropUp(open, ref, menuRef);
  const selectId = useId();
  const listboxId = `${selectId}-listbox`;

  const selected = options.find((o) => o.value === value);

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [ref]);

  function handleToggle() {
    if (!open) {
      const idx = options.findIndex((o) => o.value === value);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    }
    setOpen(!open);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const idx = options.findIndex((o) => o.value === value);
        setHighlightedIndex(idx >= 0 ? idx : 0);
        setOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (options[highlightedIndex]) {
          onChange(options[highlightedIndex].value);
          setOpen(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
    }
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)} ref={ref}>
      {label && (
        <span className="text-text-secondary font-label text-xs font-medium">
          {label}
        </span>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-activedescendant={
            open && highlightedIndex >= 0
              ? `${selectId}-option-${highlightedIndex}`
              : undefined
          }
          className={cn(
            "font-control flex w-full cursor-pointer items-center rounded-md text-xs",
            "bg-bg-secondary border-border text-text-primary border",
            "hover:bg-bg-hover hover:border-border-strong",
            "transition-colors duration-[100ms]",
            "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
            size === "sm" ? "h-6 px-2 pr-6" : "h-7 px-2 pr-7",
          )}
        >
          {selected ? (
            selected.label
          ) : (
            <span className="text-text-disabled">{placeholder}</span>
          )}
        </button>
        <ChevronDown
          className={cn(
            "text-text-tertiary pointer-events-none absolute top-1/2 h-3 w-3 -translate-y-1/2 transition-transform",
            size === "sm" ? "right-1.5" : "right-2",
            open && "rotate-180",
          )}
        />

        {open && (
          <div
            ref={menuRef}
            className={cn(
              "bg-bg-tertiary border-border-strong animate-scale-in absolute right-0 left-0 z-[100] overflow-hidden rounded-md border shadow-lg",
              dropUp ? "bottom-full mb-1" : "top-full mt-1",
            )}
          >
            <ul
              id={listboxId}
              className="max-h-48 overflow-y-auto py-1"
              role="listbox"
            >
              {options.map((opt, i) => (
                <li
                  key={opt.value}
                  id={`${selectId}-option-${i}`}
                  role="option"
                  aria-selected={opt.value === value}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  onMouseEnter={() => setHighlightedIndex(i)}
                  className={cn(
                    "font-control flex h-7 w-full cursor-pointer items-center gap-2 px-3 text-xs",
                    "transition-colors duration-[100ms]",
                    i === highlightedIndex
                      ? "bg-accent-muted text-accent"
                      : opt.value === value
                        ? "text-accent"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
                  )}
                >
                  <span className="flex-1 truncate">{opt.label}</span>
                  {opt.value === value && (
                    <Check className="h-3 w-3 shrink-0" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
