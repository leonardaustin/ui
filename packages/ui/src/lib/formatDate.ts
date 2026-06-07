/**
 * Shared, dependency-free date formatting utilities.
 *
 * @example
 * ```ts
 * formatDateShort("2026-04-05")        // "Apr 5, 2026"
 * formatDateLong("2026-04-05")         // "April 5, 2026"
 * formatRelative(new Date(Date.now())) // "just now"
 * ```
 */

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

/**
 * Format a "YYYY-MM-DD" date string with abbreviated month.
 * Used in blog cards, list views, and other compact contexts.
 */
export function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format a "YYYY-MM-DD" date string with full month name.
 * Used in blog article pages and other full-width content contexts.
 */
export function formatDateLong(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Format a date relative to `baseDate` (defaults to now): "just now",
 * "5m ago", "2h ago", "yesterday", then "Apr 5" (with year if it differs
 * from baseDate's year). The implicit `new Date()` default makes this impure,
 * so callers must pass an explicit `baseDate` when used during render.
 */
export function formatRelative(
  date: Date,
  baseDate: Date = new Date(),
): string {
  const diffMs = baseDate.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 60) return "just now";

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;

  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;

  const diffDay = Math.floor(diffHr / 24);
  if (diffDay === 1) return "yesterday";

  const label = `${MONTHS_SHORT[date.getMonth()]} ${date.getDate()}`;
  if (date.getFullYear() !== baseDate.getFullYear()) {
    return `${label}, ${date.getFullYear()}`;
  }
  return label;
}
