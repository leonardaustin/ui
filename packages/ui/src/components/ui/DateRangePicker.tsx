import { useCallback, useRef, useState } from "react";

import { Calendar } from "lucide-react";

import { useDismiss } from "../../hooks/useDismiss";
import { useDropUp } from "../../hooks/useDropUp";
import { cn } from "../../lib/cn";
import { CalendarGrid } from "./CalendarGrid";

export interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface DateRangePickerProps {
  label?: string;
  value: DateRange;
  onChange: (range: DateRange) => void;
  placeholder?: string;
}

const MONTHS_SHORT = [
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

function formatDate(date: Date): string {
  return `${MONTHS_SHORT[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatRange(range: DateRange): string {
  if (range.start && range.end) {
    return `${formatDate(range.start)} – ${formatDate(range.end)}`;
  }
  if (range.start) return formatDate(range.start);
  return "";
}

export function DateRangePicker({
  label,
  value,
  onChange,
  placeholder = "Select date range...",
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropUp = useDropUp(open, ref, menuRef);

  const now = new Date();
  const [leftYear, setLeftYear] = useState(
    value.start?.getFullYear() ?? now.getFullYear(),
  );
  const [leftMonth, setLeftMonth] = useState(
    value.start?.getMonth() ?? now.getMonth(),
  );
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  // Selection state: first click = start, second click = end
  const [picking, setPicking] = useState<"start" | "end">("start");
  const [tempStart, setTempStart] = useState<Date | null>(value.start);
  const [tempEnd, setTempEnd] = useState<Date | null>(value.end);

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [ref]);

  // Right calendar is always one month ahead of left
  const rightYear = leftMonth === 11 ? leftYear + 1 : leftYear;
  const rightMonth = leftMonth === 11 ? 0 : leftMonth + 1;

  function handleToggle() {
    if (!open) {
      setTempStart(value.start);
      setTempEnd(value.end);
      setPicking(value.start && value.end ? "start" : "start");
      if (value.start) {
        setLeftYear(value.start.getFullYear());
        setLeftMonth(value.start.getMonth());
      }
    }
    setOpen(!open);
  }

  function handleSelect(date: Date) {
    if (picking === "start") {
      setTempStart(date);
      setTempEnd(null);
      setPicking("end");
    } else {
      // Ensure start <= end
      if (tempStart && date < tempStart) {
        setTempEnd(tempStart);
        setTempStart(date);
      } else {
        setTempEnd(date);
      }
      setPicking("start");
      // Commit
      const start = tempStart && date < tempStart ? date : tempStart;
      const end = tempStart && date < tempStart ? tempStart : date;
      onChange({ start, end });
      setOpen(false);
    }
  }

  function prevMonth() {
    if (leftMonth === 0) {
      setLeftYear(leftYear - 1);
      setLeftMonth(11);
    } else {
      setLeftMonth(leftMonth - 1);
    }
  }

  function nextMonth() {
    if (leftMonth === 11) {
      setLeftYear(leftYear + 1);
      setLeftMonth(0);
    } else {
      setLeftMonth(leftMonth + 1);
    }
  }

  const displayValue = value.start || value.end ? formatRange(value) : "";

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
          {displayValue ? (
            displayValue
          ) : (
            <span className="text-text-disabled">{placeholder}</span>
          )}
        </button>
        <Calendar className="text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" />

        {open && (
          <div
            ref={menuRef}
            role="dialog"
            aria-label="Choose date range"
            className={cn(
              "bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg",
              dropUp ? "bottom-full mb-1" : "top-full mt-1",
            )}
          >
            {/* Shared prev/next navigation */}
            <div className="mb-2 flex items-center justify-between">
              <button
                type="button"
                onClick={prevMonth}
                aria-label="Previous month"
                className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]"
              >
                <span className="text-xs">‹</span>
              </button>
              <span className="text-text-tertiary text-2xs" aria-live="polite">
                {picking === "start" ? "Select start date" : "Select end date"}
              </span>
              <button
                type="button"
                onClick={nextMonth}
                aria-label="Next month"
                className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]"
              >
                <span className="text-xs">›</span>
              </button>
            </div>

            <div className="flex gap-4">
              <CalendarGrid
                year={leftYear}
                month={leftMonth}
                rangeStart={tempStart}
                rangeEnd={tempEnd}
                hoverDate={picking === "end" ? hoverDate : null}
                onSelect={handleSelect}
                onMonthChange={(y, m) => {
                  setLeftYear(y);
                  setLeftMonth(m);
                }}
                onHover={setHoverDate}
              />
              <CalendarGrid
                year={rightYear}
                month={rightMonth}
                rangeStart={tempStart}
                rangeEnd={tempEnd}
                hoverDate={picking === "end" ? hoverDate : null}
                onSelect={handleSelect}
                onMonthChange={(y, m) => {
                  // Shift left calendar so right stays one ahead
                  if (m === 0) {
                    setLeftYear(y - 1);
                    setLeftMonth(11);
                  } else {
                    setLeftYear(y);
                    setLeftMonth(m - 1);
                  }
                }}
                onHover={setHoverDate}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
