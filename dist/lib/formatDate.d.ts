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
/**
 * Format a "YYYY-MM-DD" date string with abbreviated month.
 * Used in blog cards, list views, and other compact contexts.
 */
export declare function formatDateShort(dateStr: string): string;
/**
 * Format a "YYYY-MM-DD" date string with full month name.
 * Used in blog article pages and other full-width content contexts.
 */
export declare function formatDateLong(dateStr: string): string;
/**
 * Format a date relative to `baseDate` (defaults to now): "just now",
 * "5m ago", "2h ago", "yesterday", then "Apr 5" (with year if it differs
 * from baseDate's year). The implicit `new Date()` default makes this impure,
 * so callers must pass an explicit `baseDate` when used during render.
 */
export declare function formatRelative(date: Date, baseDate?: Date): string;
//# sourceMappingURL=formatDate.d.ts.map