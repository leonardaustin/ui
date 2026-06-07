import { useCallback, useRef, useState } from "react";

import { Calendar } from "lucide-react";

import { useDismiss } from "../../hooks/useDismiss";
import { useDropUp } from "../../hooks/useDropUp";
import { cn } from "../../lib/cn";
import { CalendarGrid } from "./CalendarGrid";

interface DateTimePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
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

type Period = "AM" | "PM";

/** Convert 24h to 12h display. */
function to12h(h24: number): { hour12: number; period: Period } {
  if (h24 === 0) return { hour12: 12, period: "AM" };
  if (h24 < 12) return { hour12: h24, period: "AM" };
  if (h24 === 12) return { hour12: 12, period: "PM" };
  return { hour12: h24 - 12, period: "PM" };
}

/** Convert 12h + period back to 24h. */
function to24h(hour12: number, period: Period): number {
  if (period === "AM") return hour12 === 12 ? 0 : hour12;
  return hour12 === 12 ? 12 : hour12 + 12;
}

function formatDateTime(date: Date): string {
  const month = MONTHS_SHORT[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const { hour12, period } = to12h(date.getHours());
  const m = String(date.getMinutes()).padStart(2, "0");
  return `${month} ${day}, ${year} ${hour12}:${m} ${period}`;
}

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function DateTimePicker({
  label,
  value,
  onChange,
  placeholder = "Select date & time...",
}: DateTimePickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropUp = useDropUp(open, ref, menuRef);

  const now = new Date();
  const initH = value
    ? to12h(value.getHours())
    : { hour12: 12, period: "PM" as Period };

  const [viewYear, setViewYear] = useState(
    value?.getFullYear() ?? now.getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState(
    value?.getMonth() ?? now.getMonth(),
  );
  const [hours, setHours] = useState(String(initH.hour12));
  const [minutes, setMinutes] = useState(
    value ? pad2(value.getMinutes()) : "00",
  );
  const [period, setPeriod] = useState<Period>(initH.period);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);

  const close = useCallback(() => setOpen(false), []);
  useDismiss(open, close, [ref]);

  function handleSelectDate(date: Date) {
    setSelectedDate(date);
  }

  function handleHoursChange(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, 2);
    setHours(digits);

    // Auto-switch AM/PM: if they type 13-23, convert to 12h and flip to PM
    const num = parseInt(digits, 10);
    if (!isNaN(num) && num >= 13 && num <= 23) {
      setHours(String(num - 12));
      setPeriod("PM");
    } else if (num === 0) {
      setHours("12");
      setPeriod("AM");
    }
  }

  function handleConfirm() {
    if (!selectedDate) return;
    const h12 = Math.max(1, Math.min(12, parseInt(hours, 10) || 12));
    const m = Math.max(0, Math.min(59, parseInt(minutes, 10) || 0));
    const h24 = to24h(h12, period);
    const result = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      h24,
      m,
    );
    onChange(result);
    setOpen(false);
  }

  function handleToggle() {
    if (!open && value) {
      setViewYear(value.getFullYear());
      setViewMonth(value.getMonth());
      setSelectedDate(value);
      const h = to12h(value.getHours());
      setHours(String(h.hour12));
      setPeriod(h.period);
      setMinutes(pad2(value.getMinutes()));
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
            formatDateTime(value)
          ) : (
            <span className="text-text-disabled">{placeholder}</span>
          )}
        </button>
        <Calendar className="text-text-tertiary pointer-events-none absolute top-1/2 right-2 h-3 w-3 -translate-y-1/2" />

        {open && (
          <div
            ref={menuRef}
            role="dialog"
            aria-label="Choose date and time"
            className={cn(
              "bg-bg-tertiary border-border-strong animate-scale-in absolute left-0 z-[100] rounded-md border p-3 shadow-lg",
              dropUp ? "bottom-full mb-1" : "top-full mt-1",
            )}
          >
            <CalendarGrid
              year={viewYear}
              month={viewMonth}
              selected={selectedDate}
              onSelect={handleSelectDate}
              onMonthChange={(y, m) => {
                setViewYear(y);
                setViewMonth(m);
              }}
            />

            {/* Time selector */}
            <div className="border-border mt-3 flex items-center gap-2 border-t pt-3">
              <span className="text-text-secondary text-2xs font-medium">
                Time
              </span>
              <div className="flex items-center gap-1">
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={hours}
                  onChange={(e) => handleHoursChange(e.target.value)}
                  aria-label="Hour"
                  className="bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
                />
                <span className="text-text-tertiary text-xs">:</span>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={2}
                  value={minutes}
                  onChange={(e) =>
                    setMinutes(e.target.value.replace(/\D/g, "").slice(0, 2))
                  }
                  aria-label="Minute"
                  className="bg-bg-secondary border-border text-text-primary focus:border-accent h-6 w-8 rounded-md border text-center text-xs focus:outline-none"
                />
              </div>

              {/* AM/PM toggle */}
              <div
                className="border-border inline-flex overflow-hidden rounded-md border"
                role="group"
                aria-label="Time period"
              >
                <button
                  type="button"
                  onClick={() => setPeriod("AM")}
                  aria-pressed={period === "AM"}
                  className={cn(
                    "text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]",
                    period === "AM"
                      ? "bg-accent text-text-on-accent"
                      : "bg-bg-secondary text-text-secondary hover:bg-bg-hover",
                  )}
                >
                  AM
                </button>
                <button
                  type="button"
                  onClick={() => setPeriod("PM")}
                  aria-pressed={period === "PM"}
                  className={cn(
                    "text-2xs cursor-pointer px-2 py-0.5 font-medium transition-colors duration-[100ms]",
                    period === "PM"
                      ? "bg-accent text-text-on-accent"
                      : "bg-bg-secondary text-text-secondary hover:bg-bg-hover",
                  )}
                >
                  PM
                </button>
              </div>

              <button
                type="button"
                onClick={handleConfirm}
                disabled={!selectedDate}
                className={cn(
                  "ml-auto h-6 rounded-md px-3 text-xs font-medium transition-colors duration-[100ms]",
                  selectedDate
                    ? "bg-accent text-text-on-accent hover:bg-accent-hover cursor-pointer"
                    : "bg-bg-hover text-text-disabled cursor-not-allowed",
                )}
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
