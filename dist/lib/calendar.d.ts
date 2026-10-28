/** Civil values are labels; Date values returned here always identify real instants. */
export interface CalendarDateParts {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
}
export declare function calendarDateParts(date: Date, timeZone?: string): CalendarDateParts;
/**
 * Resolve a civil time in an IANA zone. `compatible` chooses the first repeated
 * occurrence and shifts a missing time forward by the gap (like Date/Temporal).
 * `reject` rejects both gaps and repeats; `later` chooses the second occurrence.
 */
export declare function calendarDateFromParts(parts: CalendarDateParts, timeZone?: string, disambiguation?: "compatible" | "earlier" | "later" | "reject"): Date;
/**
 * Calendar layouts. `threeDay` and `workWeek` are time grids like `week`;
 * `timeline` is a single day with one horizontal row per resource.
 */
export type CalendarView = "day" | "threeDay" | "workWeek" | "week" | "month" | "agenda" | "timeline";
/** 0 = Sunday … 6 = Saturday, matching `Date#getDay()`. */
export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;
/** Semantic colours, mapped to the theme's colour tokens. */
export type CalendarColor = "accent" | "blue" | "green" | "yellow" | "red" | "purple" | "gray";
/**
 * Booking state. `tentative` is unconfirmed (e.g. awaiting confirmation),
 * `held` is capacity reserved without a booking, `cancelled` stays visible
 * but muted. Non-confirmed statuses also render a text label (unless
 * `display.status` is false), and the box styling always differs, so status
 * never relies on colour alone.
 */
export type CalendarEventStatus = "confirmed" | "tentative" | "held" | "cancelled";
/** `available` blocks are bookable time; `unavailable` blocks are absences. */
export type AvailabilityKind = "available" | "unavailable";
/** A column (time grid) or row (timeline): a clinician, room, etc. */
export interface CalendarResource {
    id: string;
    title: string;
    /** Second line in the header, e.g. a role or site. */
    subtitle?: string;
    /** Timeline rows are grouped (and collapsible) by this label. */
    group?: string;
    /** Default colour for this resource's events and availability. */
    color?: CalendarColor;
}
/** A booking, appointment or other event. End is exclusive. */
export interface CalendarEvent<T = unknown> {
    id: string;
    title: string;
    start: Date;
    end: Date;
    /** Shown in the all-day row. Events lasting 24h or more go there too. */
    allDay?: boolean;
    /**
     * Resource(s) the event belongs to. An array shows the event in each
     * resource's column — e.g. both the clinician's and the room's row.
     */
    resourceId?: string | readonly string[];
    color?: CalendarColor;
    status?: CalendarEventStatus;
    /** Secondary line, e.g. service and room. */
    description?: string;
    /** Short extra label, e.g. "Arrived" or "Unpaid". */
    badge?: string;
    /** Set false to stop this event being moved or resized. */
    editable?: boolean;
    /**
     * A temporary stand-in, such as the slot behind an open "new booking"
     * dialog. Drawn raised in its colour, it can't be focused, clicked, moved
     * or resized, and the agenda leaves it out.
     */
    placeholder?: boolean;
    /** Your own payload, passed back untouched in callbacks. */
    data?: T;
}
/** A block of availability (or unavailability) drawn behind events. */
export interface CalendarAvailability<T = unknown> {
    id: string;
    start: Date;
    end: Date;
    /** Defaults to `available`. */
    kind?: AvailabilityKind;
    /**
     * Resource(s) this block applies to. Omit to apply it to every column
     * (e.g. a practice closure).
     */
    resourceId?: string | readonly string[];
    /** Label such as a room name or an absence category. */
    label?: string;
    color?: CalendarColor;
    /** Set false to stop this block being moved or resized. */
    editable?: boolean;
    /** A temporary stand-in, like `CalendarEvent.placeholder`. */
    placeholder?: boolean;
    /** Recurring rule this occurrence came from (see `expandAvailabilityRules`). */
    seriesId?: string;
    /** The occurrence's civil date ("YYYY-MM-DD") within its series. */
    occurrenceKey?: string;
    data?: T;
}
/** Half-open range [start, end). */
export interface DateRange {
    start: Date;
    end: Date;
}
export interface CalendarViewOptions {
    /** First day of the week. Defaults to 1 (Monday). */
    weekStartsOn?: Weekday;
    /** Days shown by `workWeek`. Defaults to Monday–Friday. */
    workWeekDays?: readonly Weekday[];
    /** Days shown by `agenda`. Defaults to 7. */
    agendaDays?: number;
}
export declare const MINUTES_PER_DAY = 1440;
/** Local midnight at the start of `date`'s day. */
export declare function startOfDay(date: Date): Date;
/** Adds calendar days, keeping the wall-clock time (DST-safe). */
export declare function addDays(date: Date, days: number): Date;
/** Adds wall-clock minutes. */
export declare function addMinutes(date: Date, minutes: number): Date;
/** Adds months, clamping the day (31 Jan + 1 month = 28/29 Feb). */
export declare function addMonths(date: Date, months: number): Date;
/** Midnight on the first day of `date`'s week. */
export declare function startOfWeek(date: Date, weekStartsOn?: Weekday): Date;
export declare function startOfMonth(date: Date): Date;
export declare function isSameDay(a: Date, b: Date): boolean;
/** Whole calendar days from `b` to `a` (ignores time and DST). */
export declare function differenceInDays(a: Date, b: Date): number;
/** Wall-clock minutes since local midnight, including fractions. */
export declare function minutesOfDay(date: Date): number;
/** The local time `minutes` after midnight on `day` (may roll over). */
export declare function dateAtMinutes(day: Date, minutes: number): Date;
/** Parses "HH:mm" (or "H:mm"; "24:00" allowed) into minutes. */
export declare function parseTime(value: string): number;
/** Formats minutes as "HH:mm" (1440 → "24:00"). */
export declare function formatTimeOfDay(minutes: number): string;
/** Civil date key "YYYY-MM-DD" for `date`'s local day. */
export declare function toDateKey(date: Date): string;
/** Local midnight for a "YYYY-MM-DD" key. */
export declare function fromDateKey(key: string): Date;
/** Snaps minutes to a multiple of `step`. */
export declare function snapMinutes(minutes: number, step: number, mode?: "round" | "floor" | "ceil"): number;
/** Snaps a date's wall-clock time on its own day to `step` minutes. */
export declare function snapDate(date: Date, step: number, mode?: "round" | "floor" | "ceil"): Date;
/** Clamps `value` into [min, max]. */
export declare function clamp(value: number, min: number, max: number): number;
/** The time-grid views (vertical day columns). */
export declare function isTimeGridView(view: CalendarView): boolean;
/** Days shown by `view` for the anchor `date`, in order. */
export declare function getVisibleDays(view: CalendarView, date: Date, options?: CalendarViewOptions): Date[];
/** Month grid as whole weeks, from the week containing the 1st. */
export declare function getMonthWeeks(date: Date, weekStartsOn?: Weekday): Date[][];
/** The [start, end) range covered by `view`. */
export declare function getViewRange(view: CalendarView, date: Date, options?: CalendarViewOptions): DateRange;
/** The anchor date one page before (-1) or after (1) `date`. */
export declare function shiftDate(view: CalendarView, date: Date, direction: -1 | 1, options?: CalendarViewOptions): Date;
/** Cached `Intl.DateTimeFormat`. */
export declare function getFormatter(locale: string, options: Intl.DateTimeFormatOptions): Intl.DateTimeFormat;
export interface FormatOptions {
    /** BCP 47 locale. Defaults to "en-GB". */
    locale?: string;
    /** 12-hour clock. Defaults to false (24-hour). */
    hour12?: boolean;
    /** Explicit IANA timezone; omitted uses the browser zone. */
    timeZone?: string;
}
/** "09:30" (or "9:30 am" with `hour12`). */
export declare function formatTime(date: Date, options?: FormatOptions): string;
/** "09:30–10:00". */
export declare function formatTimeRange(start: Date, end: Date, options?: FormatOptions): string;
/** Hour gutter label: "09:00" (or "9 am"). */
export declare function formatHourLabel(minutes: number, options?: FormatOptions): string;
/** "Thursday 16 October 2026". */
export declare function formatLongDate(date: Date, locale?: string): string;
/** Toolbar title for a view, e.g. "13 – 19 October 2026". */
export declare function formatRangeTitle(view: CalendarView, date: Date, options?: CalendarViewOptions & {
    locale?: string;
}): string;
/** True when [aStart, aEnd) and [bStart, bEnd) share any time. */
export declare function rangesOverlap(aStart: number, aEnd: number, bStart: number, bEnd: number): boolean;
/** The part of [start, end) that falls on `day`, in minutes of that day. */
export interface DaySegment {
    startMinute: number;
    endMinute: number;
    /** The interval began on an earlier day. */
    continuesBefore: boolean;
    /** The interval carries on into a later day. */
    continuesAfter: boolean;
}
export declare function daySegment(start: Date, end: Date, day: Date): DaySegment | null;
/** Sorts and merges overlapping or touching [start, end) pairs. */
export declare function mergeIntervals(intervals: ReadonlyArray<readonly [number, number]>): Array<[number, number]>;
/** [start, end) minus every interval in `cuts`. */
export declare function subtractIntervals(start: number, end: number, cuts: ReadonlyArray<readonly [number, number]>): Array<[number, number]>;
export interface LayoutItem {
    id: string;
    start: number;
    end: number;
}
export interface LayoutSlot {
    /** Zero-based column within the overlapping cluster. */
    column: number;
    /** Columns in the cluster. Left = column / columns. */
    columns: number;
    /** Columns this item can widen across. Width = span / columns. */
    span: number;
}
/**
 * Lays out overlapping intervals in side-by-side columns. Items that overlap
 * (directly or through a chain) form a cluster sharing a column count; each
 * item takes the first free column and then widens right across columns that
 * have nothing overlapping it. `minDuration` treats very short items as at
 * least that long so their rendered boxes don't collide.
 */
export declare function layoutOverlaps(items: readonly LayoutItem[], minDuration?: number): Map<string, LayoutSlot>;
/**
 * Stacks intervals into lanes (rows) so none in a lane overlap. Used by the
 * all-day row and timeline rows. Returns each id's lane and the lane count.
 */
export declare function packLanes(items: readonly LayoutItem[]): {
    lanes: Map<string, number>;
    count: number;
};
/** Normalises a `resourceId` field to an array (empty = all resources). */
export declare function resourceIdsOf(value: string | readonly string[] | undefined): readonly string[];
/** Whether an item with `value` belongs in `resourceId`'s column. */
export declare function matchesResource(value: string | readonly string[] | undefined, resourceId: string | undefined, { emptyMatchesAll }: {
    emptyMatchesAll: boolean;
}): boolean;
/** Replaces `from` with `to` in an item's resource ids. */
export declare function replaceResource(value: string | readonly string[] | undefined, from: string | undefined, to: string | undefined): string[] | undefined;
/**
 * Resources with any event or available block in `range` — an "active
 * schedule" filter. Absences (`unavailable` blocks) don't count, and items
 * without a resource id don't make every resource active.
 */
export declare function getActiveResourceIds(range: DateRange, events: ReadonlyArray<Pick<CalendarEvent, "start" | "end" | "resourceId">>, availability?: ReadonlyArray<Pick<CalendarAvailability, "start" | "end" | "resourceId" | "kind">>): Set<string>;
export interface WeeklyRecurrence {
    /** Days of the week the rule repeats on. */
    weekdays: readonly Weekday[];
    /** Repeat every N weeks, counted from the rule's start week. Default 1. */
    interval?: number;
    /** Last date (inclusive) as "YYYY-MM-DD". Omit for no end. */
    until?: string;
    /** Occurrence dates ("YYYY-MM-DD") to skip, e.g. detached exceptions. */
    exclusions?: readonly string[];
}
/** A weekly (or one-off) availability rule with civil dates and times. */
export interface AvailabilityRule<T = unknown> {
    id: string;
    /** First date as "YYYY-MM-DD". */
    startDate: string;
    /** "HH:mm" local start time. */
    startTime: string;
    /** "HH:mm" local end time; at or before `startTime` means overnight. */
    endTime: string;
    /** Omit or null for a one-off block on `startDate`. */
    recurrence?: WeeklyRecurrence | null;
    kind?: AvailabilityKind;
    resourceId?: string | readonly string[];
    label?: string;
    color?: CalendarColor;
    editable?: boolean;
    data?: T;
}
/**
 * Expands rules into concrete blocks overlapping `range`. Each occurrence's
 * id is `${rule.id}@${dateKey}`, with `seriesId` and `occurrenceKey` set so a
 * move or resize can be applied to "this occurrence" or "this and following".
 * Intervals count whole weeks from the week containing `startDate`.
 * With options.timeZone, civil rules resolve in that zone (compatible DST
 * disambiguation); normalized occurrences with no positive duration are omitted.
 */
export declare function expandAvailabilityRules<T>(rules: ReadonlyArray<AvailabilityRule<T>>, range: DateRange, options?: {
    weekStartsOn?: Weekday;
    timeZone?: string;
}): CalendarAvailability<T>[];
/** Visible window of a time grid, in minutes of the day. */
export interface TimeBounds {
    min: number;
    max: number;
}
/** Converts a pointer offset (px from the grid's top/left) into minutes. */
export declare function offsetToMinutes(offsetPx: number, pxPerMinute: number, bounds: TimeBounds): number;
/**
 * New range when dragging to create: from the slot under the anchor to the
 * slot under the pointer, inclusive, on `day`. Edges that fall in a
 * spring-forward gap clamp to its end, so the range is never longer than the
 * slots dragged over.
 */
export declare function computeCreateRange(day: Date, anchorMinute: number, pointerMinute: number, step: number, bounds: TimeBounds): DateRange;
/**
 * New range when moving an item so the point grabbed (`grabOffsetMinutes`
 * after its start) follows the pointer on `day`. Keeps the duration (in
 * elapsed time, so a move never resizes across a DST change), snaps the
 * start to `step`, and keeps a single-day item inside `bounds`.
 */
export declare function computeMoveRange(original: DateRange, day: Date, pointerMinute: number, grabOffsetMinutes: number, step: number, bounds: TimeBounds): DateRange;
/**
 * New end when dragging an item's end edge on `day` (the day of its last
 * segment). The end snaps to `step` and stays at least one step after the
 * start (or the day's start, for an item that began earlier).
 */
export declare function computeResizeEnd(original: DateRange, day: Date, pointerMinute: number, step: number, bounds: TimeBounds): Date;
/**
 * Keyboard nudge (Alt+arrow) by `minutes`, keeping the elapsed duration.
 * Like a pointer move, an item inside the visible window stays inside it, so
 * it never scrolls out of view and takes focus with it.
 */
export declare function computeNudgeRange(range: DateRange, minutes: number, bounds: TimeBounds): DateRange;
/** Moves a range by wall-clock minutes. */
export declare function shiftRange(range: DateRange, minutes: number): DateRange;
/** Moves a range by whole days, keeping wall-clock times. */
export declare function shiftRangeDays(range: DateRange, days: number): DateRange;
/** Whether two ranges are the same instants. */
export declare function sameRange(a: DateRange, b: DateRange): boolean;
/** Whether an event belongs in the all-day row rather than the time grid. */
export declare function isAllDayLike(item: {
    allDay?: boolean;
    start: Date;
    end: Date;
}): boolean;
/** Events touching `day`, all-day first then by start time and length. */
export declare function eventsOnDay<E extends CalendarEvent>(events: readonly E[], day: Date): E[];
/**
 * Scoped date operations. The default retains the browser-local wall-clock
 * contract. An explicit zone uses elapsed minutes from zoned midnight for
 * layout and gestures: spring days have 1380 minutes, autumn days 1500.
 * Civil input is resolved separately with `wallDateAtMinutes`.
 */
export declare function createCalendarDateMath(timeZone?: string): {
    parts: (date: Date) => CalendarDateParts;
    weekday: (date: Date) => Weekday;
    startOfDay: (date: Date) => Date;
    addDays: (date: Date, days: number) => Date;
    addMonths: (date: Date, months: number) => Date;
    addMinutes: (date: Date, minutes: number) => Date;
    startOfWeek: (date: Date, weekStartsOn?: Weekday) => Date;
    startOfMonth: (date: Date) => Date;
    toDateKey: (date: Date) => string;
    fromDateKey: (value: string) => Date;
    differenceInDays: (a: Date, b: Date) => number;
    isSameDay: (a: Date, b: Date) => boolean;
    dateAtMinutes: typeof dateAtMinutes;
    wallDateAtMinutes: (day: Date, minutes: number) => Date;
    minutesOfDay: typeof minutesOfDay;
    getMonthWeeks: (date: Date, weekStartsOn?: Weekday) => Date[][];
    getVisibleDays: (view: CalendarView, date: Date, options?: CalendarViewOptions) => Date[];
    getViewRange: (view: CalendarView, date: Date, options?: CalendarViewOptions) => DateRange;
    shiftDate: (view: CalendarView, date: Date, direction: -1 | 1, options?: CalendarViewOptions) => Date;
    getFormatter: (locale: string, options: Intl.DateTimeFormatOptions) => Intl.DateTimeFormat;
    formatLongDate: (date: Date, locale?: string) => string;
    formatRangeTitle: (view: CalendarView, date: Date, options?: CalendarViewOptions & {
        locale?: string;
    }) => string;
    daySegment: (start: Date, end: Date, day: Date) => DaySegment | null;
    isAllDayLike: (item: {
        allDay?: boolean;
        start: Date;
        end: Date;
    }) => boolean;
    eventsOnDay: <E extends CalendarEvent>(events: readonly E[], day: Date) => E[];
    computeCreateRange: (day: Date, anchor: number, pointer: number, step: number, bounds: TimeBounds) => DateRange;
    computeMoveRange: (original: DateRange, day: Date, pointer: number, grab: number, step: number, bounds: TimeBounds) => DateRange;
    computeResizeEnd: (original: DateRange, day: Date, pointer: number, step: number, bounds: TimeBounds) => Date;
    computeNudgeRange: (range: DateRange, delta: number, bounds: TimeBounds) => DateRange;
    shiftRangeDays: (range: DateRange & {
        allDay?: boolean;
    }, days: number) => DateRange;
    /** Civil gap boundaries clamp to the transition; wholly missing windows are rejected. */
    dayBounds: (day: Date, bounds: TimeBounds) => TimeBounds;
};
//# sourceMappingURL=calendar.d.ts.map