import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Search } from "lucide-react";

import { useFocusTrap } from "../../hooks/useFocusTrap";
import { cn } from "../../lib/cn";
import {
  COMMAND_PALETTE_EVENT,
  DEFAULT_COMMAND_PALETTE_SHORTCUT,
  matchesCommandPaletteShortcut,
  type CommandPaletteShortcut,
} from "./commandPaletteEvents";
import { navigateToPath, type AppShellNavigate } from "./navigation";
import type { AppShellNavItem } from "./types";

export interface CommandPaletteProps {
  items: AppShellNavItem[];
  eventName?: string;
  shortcut?: CommandPaletteShortcut;
  placeholder?: string;
  emptyLabel?: string;
  onNavigate?: AppShellNavigate;
  onSelect?: (item: AppShellNavItem) => void;
}

function matchesItem(item: AppShellNavItem, query: string) {
  const normalized = query.toLowerCase();
  return [item.label, item.path, ...(item.keywords ?? [])].some((value) =>
    value.toLowerCase().includes(normalized),
  );
}

/**
 * Searchable page palette. Opens via a document-level keydown listener matching
 * `shortcut` (default ⌘K), or when the `eventName` CustomEvent is dispatched on
 * `document` (see openCommandPalette()); the shortcut also toggles it closed.
 */
export function CommandPalette({
  items,
  eventName = COMMAND_PALETTE_EVENT,
  shortcut = DEFAULT_COMMAND_PALETTE_SHORTCUT,
  placeholder = "Search pages...",
  emptyLabel = "No results found",
  onNavigate,
  onSelect,
}: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useFocusTrap(containerRef, open);

  const filtered = items.filter((item) => matchesItem(item, query));

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSelectedIndex(0);
    setTimeout(() => inputRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (matchesCommandPaletteShortcut(event, shortcut)) {
        event.preventDefault();
        if (open) setOpen(false);
        else openPalette();
      }
    };
    const handleCustomOpen = () => {
      if (!open) openPalette();
    };
    document.addEventListener("keydown", handleKey);
    document.addEventListener(eventName, handleCustomOpen);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener(eventName, handleCustomOpen);
    };
  }, [eventName, open, openPalette, shortcut]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setSelectedIndex(0);
  }

  function handleSelect(item: AppShellNavItem) {
    onSelect?.(item);
    navigateToPath(item.path, onNavigate);
    setOpen(false);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((index) => Math.min(index + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter" && filtered[selectedIndex]) {
      handleSelect(filtered[selectedIndex]);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]">
      <div
        className="bg-bg-overlay fixed inset-0"
        onClick={() => setOpen(false)}
      />
      <div
        ref={containerRef}
        className="bg-bg-secondary border-border animate-scale-in relative z-50 mx-4 w-full max-w-[520px] overflow-hidden rounded-xl border shadow-lg"
        onKeyDown={handleKeyDown}
      >
        <div className="border-border flex items-center gap-3 border-b px-4">
          <Search className="text-text-tertiary h-4 w-4 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={filtered.length > 0}
            aria-controls={listboxId}
            aria-activedescendant={
              filtered[selectedIndex]
                ? `${listboxId}-${selectedIndex}`
                : undefined
            }
            aria-autocomplete="list"
            aria-label="Search pages"
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
            placeholder={placeholder}
            className="text-text-primary placeholder:text-text-disabled h-11 flex-1 bg-transparent text-sm focus:outline-none"
          />
          <kbd className="text-2xs bg-bg-tertiary text-text-tertiary border-border hidden items-center rounded border px-1.5 py-0.5 font-mono font-medium sm:inline-flex">
            Esc
          </kbd>
        </div>

        <ul
          id={listboxId}
          role="listbox"
          aria-label="Pages"
          className="max-h-[320px] overflow-y-auto px-2 py-2"
        >
          {filtered.length === 0 ? (
            <li className="text-text-tertiary px-3 py-6 text-center text-xs">
              {emptyLabel}
            </li>
          ) : (
            filtered.map((item, index) => (
              <li
                key={item.path}
                id={`${listboxId}-${index}`}
                role="option"
                aria-selected={index === selectedIndex}
                onClick={() => handleSelect(item)}
                className={cn(
                  "flex h-9 w-full cursor-pointer items-center gap-3 rounded-md px-3 text-left",
                  "transition-colors duration-[100ms]",
                  index === selectedIndex
                    ? "bg-accent-muted text-accent"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-hover",
                )}
              >
                <span className="shrink-0 opacity-60">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-medium">{item.label}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
