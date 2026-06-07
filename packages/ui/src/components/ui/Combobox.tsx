import { useCallback, useId, useRef, useState } from "react";

import { Check, ChevronDown, Search } from "lucide-react";

import { useDismiss } from "../../hooks/useDismiss";
import { cn } from "../../lib/cn";

interface ComboboxOption {
  value: string;
  label: string;
}

interface ComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export function Combobox({
  options,
  value,
  onChange,
  placeholder = "Select...",
  label,
  className,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  const selected = options.find((o) => o.value === value);
  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSearchChange(val: string) {
    setSearch(val);
    setHighlightedIndex(0);
  }

  function handleInputKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filtered[highlightedIndex]) {
          onChange(filtered[highlightedIndex].value);
          setOpen(false);
        }
        break;
      case "Escape":
        setOpen(false);
        break;
    }
  }

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [ref]);

  function handleOpen() {
    setOpen(true);
    setSearch("");
    setHighlightedIndex(0);
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)} ref={ref}>
      {label && (
        <span className="text-text-secondary font-label text-xs font-medium">
          {label}
        </span>
      )}
      <div
        className="relative"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <button
          type="button"
          onClick={() => (open ? setOpen(false) : handleOpen())}
          className={cn(
            "font-control flex h-7 w-full cursor-pointer items-center rounded-md px-2 pr-7 text-xs",
            "bg-bg-secondary border-border text-text-primary border",
            "hover:bg-bg-hover hover:border-border-strong",
            "transition-colors duration-[100ms]",
            "focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2",
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
            "text-text-tertiary pointer-events-none absolute top-1/2 right-2.5 h-3.5 w-3.5 -translate-y-1/2 transition-transform",
            open && "rotate-180",
          )}
        />

        {open && (
          <div className="bg-bg-tertiary border-border-strong animate-scale-in absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-md border shadow-lg">
            <div className="border-border border-b p-1.5">
              <div className="relative">
                <Search className="text-text-tertiary absolute top-1/2 left-2 h-3 w-3 -translate-y-1/2" />
                <input
                  ref={inputRef}
                  type="text"
                  aria-label="Search options"
                  aria-controls={listboxId}
                  aria-activedescendant={
                    filtered[highlightedIndex]
                      ? `${listboxId}-${highlightedIndex}`
                      : undefined
                  }
                  aria-autocomplete="list"
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Search..."
                  className="bg-bg-secondary text-text-primary border-border placeholder:text-text-disabled focus:border-accent font-control h-7 w-full rounded border pr-2 pl-7 text-xs focus:outline-none"
                />
              </div>
            </div>
            <ul
              id={listboxId}
              className="max-h-48 overflow-y-auto py-1"
              role="listbox"
            >
              {filtered.length === 0 ? (
                <li className="text-text-tertiary px-3 py-2 text-center text-xs">
                  No results
                </li>
              ) : (
                filtered.map((opt, i) => (
                  <li
                    key={opt.value}
                    id={`${listboxId}-${i}`}
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
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
