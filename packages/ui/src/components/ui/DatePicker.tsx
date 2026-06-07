import { useCallback, useRef, useState } from "react";

import { Calendar } from "lucide-react";

import { useDismiss } from "../../hooks/useDismiss";
import { useDropUp } from "../../hooks/useDropUp";
import { cn } from "../../lib/cn";
import { CalendarGrid } from "./CalendarGrid";

interface DatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  /** Format function for display. Defaults to "MMM D, YYYY". */
  format?: (date: Date) => string;
}

function defaultFormat(date: Date): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function DatePicker({
  label,
  value,
  onChange,
  placeholder = "Select date...",
  format = defaultFormat,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropUp = useDropUp(open, ref, menuRef);

  const now = new Date();
  const [viewYear, setViewYear] = useState(
    value?.getFullYear() ?? now.getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState(
    value?.getMonth() ?? now.getMonth(),
  );

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [ref]);

  function handleSelect(date: Date) {
    onChange(date);
    setOpen(false);
  }

  function handleToggle() {
    if (!open && value) {
      setViewYear(value.getFullYear());
      setViewMonth(value.getMonth());
    }
    setOpen(!open);
  }

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      {label && (
        <span className="text-text-secondary text-xs font-medium">{label}</span>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={cn(
            "flex h-7 w-full cursor-pointer items-center rounded-md text-xs",
            "bg-bg-secondary border-border text-text-primary border",
            "hover:bg-bg-hover hover:border-border-strong",
            "transition-colors duration-[100ms]",
            "px-2 pr-7",
          )}
        >
          {value ? (
            format(value)
          ) : (
            <span className="text-text-disabled">{placeholder}</span>
          )}
        </button>
        <Calendar className="text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" />

        {open && (
          <div
            ref={menuRef}
            role="dialog"
            aria-label="Choose date"
            className={cn(
              "bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg",
              dropUp ? "bottom-full mb-1" : "top-full mt-1",
            )}
          >
            <CalendarGrid
              year={viewYear}
              month={viewMonth}
              selected={value}
              onSelect={handleSelect}
              onMonthChange={(y, m) => {
                setViewYear(y);
                setViewMonth(m);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
