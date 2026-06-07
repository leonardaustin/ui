import { useRef, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "../../lib/cn";

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface CalendarGridProps {
  /** Currently displayed month (year, month). */
  year: number;
  month: number; // 0-indexed
  /** The single selected date (for single pickers). */
  selected?: Date | null;
  /** Start of a selected range. */
  rangeStart?: Date | null;
  /** End of a selected range. */
  rangeEnd?: Date | null;
  /** Date currently being hovered during range selection. */
  hoverDate?: Date | null;
  onSelect: (date: Date) => void;
  onMonthChange: (year: number, month: number) => void;
  onHover?: (date: Date | null) => void;
  /** Minimum selectable date. */
  minDate?: Date;
  /** Maximum selectable date. */
  maxDate?: Date;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  const t = date.getTime();
  const s = Math.min(start.getTime(), end.getTime());
  const e = Math.max(start.getTime(), end.getTime());
  return t > s && t < e;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

export function CalendarGrid({
  year,
  month,
  selected,
  rangeStart,
  rangeEnd,
  hoverDate,
  onSelect,
  onMonthChange,
  onHover,
  minDate,
  maxDate,
}: CalendarGridProps) {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const today = new Date();
  const gridRef = useRef<HTMLDivElement>(null);
  const [focusedDay, setFocusedDay] = useState<number | null>(null);

  function getTabbableDay(): number {
    if (focusedDay !== null && focusedDay >= 1 && focusedDay <= daysInMonth)
      return focusedDay;
    if (
      selected &&
      selected.getFullYear() === year &&
      selected.getMonth() === month
    )
      return selected.getDate();
    if (
      rangeStart &&
      rangeStart.getFullYear() === year &&
      rangeStart.getMonth() === month
    )
      return rangeStart.getDate();
    if (today.getFullYear() === year && today.getMonth() === month)
      return today.getDate();
    return 1;
  }
  const tabbableDay = getTabbableDay();

  function handleDayKeyDown(e: React.KeyboardEvent, day: number) {
    let delta = 0;
    switch (e.key) {
      case "ArrowRight":
        delta = 1;
        break;
      case "ArrowLeft":
        delta = -1;
        break;
      case "ArrowDown":
        delta = 7;
        break;
      case "ArrowUp":
        delta = -7;
        break;
      default:
        return;
    }
    e.preventDefault();
    const nextDay = day + delta;
    if (nextDay >= 1 && nextDay <= daysInMonth) {
      setFocusedDay(nextDay);
      const btn = gridRef.current?.querySelector<HTMLButtonElement>(
        `[data-day="${nextDay}"]`,
      );
      btn?.focus();
    }
  }

  function prevMonth() {
    if (month === 0) onMonthChange(year - 1, 11);
    else onMonthChange(year, month - 1);
  }

  function nextMonth() {
    if (month === 11) onMonthChange(year + 1, 0);
    else onMonthChange(year, month + 1);
  }

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="w-[252px]" ref={gridRef}>
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={prevMonth}
          aria-label="Previous month"
          className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <span
          className="text-text-primary text-xs font-semibold"
          aria-live="polite"
        >
          {MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          aria-label="Next month"
          className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-colors duration-[100ms]"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-0">
        {DAYS.map((d) => (
          <div
            key={d}
            className="text-text-tertiary text-2xs flex h-8 items-center justify-center font-medium"
          >
            {d}
          </div>
        ))}

        {/* Day cells */}
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} className="h-8" />;
          }

          const date = new Date(year, month, day);
          const isToday = isSameDay(date, today);
          const isSelected = selected ? isSameDay(date, selected) : false;
          const isRangeStart = rangeStart ? isSameDay(date, rangeStart) : false;
          const isRangeEnd = rangeEnd ? isSameDay(date, rangeEnd) : false;
          const effectiveEnd = rangeEnd ?? hoverDate;
          const inRange = isInRange(
            date,
            rangeStart ?? null,
            effectiveEnd ?? null,
          );
          const isDisabled =
            (minDate && date < minDate) || (maxDate && date > maxDate);

          return (
            <button
              key={day}
              type="button"
              data-day={day}
              disabled={!!isDisabled}
              tabIndex={day === tabbableDay ? 0 : -1}
              aria-label={`${MONTHS[month]} ${day}, ${year}`}
              aria-current={isToday ? "date" : undefined}
              onClick={() => onSelect(date)}
              onKeyDown={(e) => handleDayKeyDown(e, day)}
              onMouseEnter={() => onHover?.(date)}
              onMouseLeave={() => onHover?.(null)}
              className={cn(
                "flex h-8 w-full cursor-pointer items-center justify-center text-xs transition-colors duration-[100ms]",
                "rounded-md",
                isDisabled && "cursor-not-allowed opacity-30",
                !isDisabled &&
                  !isSelected &&
                  !isRangeStart &&
                  !isRangeEnd &&
                  !inRange &&
                  "hover:bg-bg-hover text-text-primary",
                isToday &&
                  !isSelected &&
                  !isRangeStart &&
                  !isRangeEnd &&
                  "text-accent font-semibold",
                (isSelected || isRangeStart || isRangeEnd) &&
                  "bg-accent text-text-on-accent font-semibold",
                inRange &&
                  !isSelected &&
                  !isRangeStart &&
                  !isRangeEnd &&
                  "bg-accent-muted text-accent",
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
