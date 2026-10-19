/**
 * Calendar — a Google-Calendar-style scheduler for bookings and availability.
 *
 * Views: day, 3-day, work week, week (default), month, agenda and a resource
 * timeline. Pass `resources` to split time-grid columns per clinician/room.
 * Availability blocks render as a background layer (time outside them is
 * striped as busy); switch `editLayer` to "availability" to drag those instead of
 * events.
 *
 * Fully controlled: the calendar never changes your data. Drag-to-create,
 * move and resize (pointer or keyboard) call `onCreate`, `onEventChange` and
 * `onAvailabilityChange`; apply the change to your state (or reject it in
 * `validate`, which also drives the live drag preview).
 *
 * Dates are real instants. Set timeZone to an IANA zone (e.g. Europe/London)
 * for practice-zone display and elapsed transition-day axes; the default
 * retains browser-local wall-clock behavior.
 *
 * @example
 * ```tsx
 * <Calendar
 *   events={bookings}
 *   availability={expandAvailabilityRules(rules, range)}
 *   resources={clinicians}
 *   slotDuration={15}
 *   onCreate={(sel) => openNewBooking(sel)}
 *   onEventChange={(change) => moveBooking(change)}
 *   onRangeChange={setRange}
 * />
 * ```
 */
import { type ReactNode } from "react";
import { type CalendarAvailability, type CalendarEvent, type CalendarResource, type CalendarView, type Weekday } from "../../lib/calendar";
import { type CalendarAvailabilityChange, type CalendarDisplay, type CalendarDraft, type CalendarEventChange, type CalendarLabelOverrides, type CalendarRange, type CalendarRenderEvent, type CalendarSelection } from "./calendar/types";
export interface CalendarProps<T = unknown, A = unknown> {
    /** Bookings/events to show. Filter them to the visible range for speed. */
    events?: readonly CalendarEvent<T>[];
    /**
     * Availability and absence blocks, drawn behind events. Use
     * `expandAvailabilityRules` to turn weekly rules into blocks. When provided,
     * time no block covers is striped as busy (see `shadeOutsideAvailability`).
     */
    availability?: readonly CalendarAvailability<A>[];
    /**
     * Resources (clinicians, rooms…). Time-grid views get one column per
     * resource per day; the timeline gets one row each. Events need a matching
     * `resourceId` to appear in resource views — add an "Unassigned" resource
     * for events without one.
     */
    resources?: readonly CalendarResource[];
    /** Controlled view. */
    view?: CalendarView;
    /** Initial view when uncontrolled. Defaults to `week`. */
    defaultView?: CalendarView;
    onViewChange?: (view: CalendarView) => void;
    /** Views offered by the toolbar switcher. */
    views?: readonly CalendarView[];
    /** Controlled anchor date (any time on the day to show). */
    date?: Date;
    /** Initial anchor date when uncontrolled. Defaults to today. */
    defaultDate?: Date;
    onDateChange?: (date: Date) => void;
    /** Fires with the visible [start, end) range whenever it changes — fetch here. */
    onRangeChange?: (range: CalendarRange) => void;
    /** First day of the week. Defaults to 1 (Monday). */
    weekStartsOn?: Weekday;
    /** Days in the `workWeek` view. Defaults to Monday–Friday. */
    workWeekDays?: readonly Weekday[];
    /** Days in the `agenda` view. Defaults to 7. */
    agendaDays?: number;
    /** First visible time, "HH:mm". Defaults to "07:00". */
    slotMinTime?: string;
    /** Last visible time, "HH:mm" ("24:00" allowed). Defaults to "20:00". */
    slotMaxTime?: string;
    /** Snap step and keyboard step in minutes (5, 10, 15, 30…). Defaults to 15. */
    slotDuration?: number;
    /** Minutes between time labels. Defaults to 60. */
    slotLabelInterval?: number;
    /** Pixel height of one hour in time-grid views. Defaults to 48. */
    hourHeight?: number;
    /** Pixel width of one hour in the timeline. Defaults to 96. */
    timelineHourWidth?: number;
    /** Minimum width of a resource column. Defaults to 120. */
    resourceMinWidth?: number;
    /**
     * Time to scroll to on mount, "HH:mm". Defaults to the earliest visible
     * availability, else 08:00.
     */
    scrollToTime?: string;
    /**
     * Where the scroll time lands: at the top (left in the timeline) of the
     * visible hours, or in the middle. Defaults to "start".
     */
    scrollAlign?: "start" | "center";
    /** Current time for the now-line and "Today". Defaults to the live clock. */
    now?: Date;
    /** Show the current-time line. Defaults to true. */
    nowIndicator?: boolean;
    /**
     * Which layer the pointer edits. `events` (default): availability is a
     * passive background. `availability`: blocks become draggable cards and
     * events are dimmed.
     */
    editLayer?: "events" | "availability";
    /** Disable every create, move and resize. */
    readOnly?: boolean;
    /** Allow creating by drag/click on empty time. Defaults to `!!onCreate`. */
    selectable?: boolean;
    /** Length in minutes of a click (not drag) or keyboard create. Defaults to 30. */
    clickCreateDuration?: number;
    /**
     * Stripe time no block covers as busy, like an absence. Defaults to true.
     */
    shadeOutsideAvailability?: boolean;
    /** Empty time was selected (drag, click, Enter, or a month-day click). */
    onCreate?: (selection: CalendarSelection) => void;
    onEventClick?: (event: CalendarEvent<T>) => void;
    /** An event was moved or resized. Enables event dragging. */
    onEventChange?: (change: CalendarEventChange<T>) => void;
    onAvailabilityClick?: (availability: CalendarAvailability<A>) => void;
    /**
     * A block was moved or resized (in `editLayer="availability"`). For a
     * recurring occurrence (`seriesId` set) ask whether it applies to this
     * occurrence or the series.
     */
    onAvailabilityChange?: (change: CalendarAvailabilityChange<A>) => void;
    /**
     * Return a reason to reject a proposed create/move/resize. Called while
     * dragging (the preview shows the reason) and before each callback.
     */
    validate?: (draft: CalendarDraft<T, A>) => string | null | undefined | void;
    /**
     * A change was dropped but `validate` rejected it. Keyboard, click and
     * month-chip changes have no live drag preview, so this is their only
     * feedback: wire it up (e.g. to a toast) whenever you pass `validate`.
     */
    onInvalidChange?: (draft: CalendarDraft<T, A>, reason: string) => void;
    /** A day header or month day number was clicked. Defaults to opening the day view. */
    onDateClick?: (date: Date) => void;
    /** Replace the contents of an event box. */
    renderEvent?: CalendarRenderEvent<T>;
    /** Rows per month cell before "+N more". Defaults to as many as fit. */
    monthMaxEvents?: number;
    /** List availability in the agenda view. Defaults to true. */
    agendaShowAvailability?: boolean;
    /**
     * Text shown on boxes, chips and blocks outside the agenda, e.g.
     * `{ time: false, status: false }`. Hidden text is removed, not replaced.
     */
    display?: CalendarDisplay;
    /**
     * View used instead of multi-day time grids when the calendar is narrower
     * than `narrowWidth`. Defaults to `day`; false keeps the chosen view.
     */
    narrowView?: CalendarView | false;
    /** Width in px below which `narrowView` applies. Defaults to 640. */
    narrowWidth?: number;
    /** Locale for dates and times. Defaults to "en-GB". */
    locale?: string;
    /** IANA timezone for display, civil navigation and input. Defaults to the browser zone. Dates and callbacks always retain real instant identity. */
    timeZone?: string;
    /** 12-hour clock. Defaults to false. */
    hour12?: boolean;
    /** Override any user-facing string. */
    labels?: CalendarLabelOverrides;
    /** Show the built-in toolbar. Defaults to true. */
    toolbar?: boolean;
    /** Extra toolbar content (filters, "New" button), before the view switcher. */
    toolbarActions?: ReactNode;
    /** Dim the calendar and show a spinner. */
    loading?: boolean;
    className?: string;
    /** Accessible name for the calendar region. */
    "aria-label"?: string;
}
export declare function Calendar<T = unknown, A = unknown>({ events, availability, resources, view: viewProp, defaultView, onViewChange, views, date: dateProp, defaultDate, onDateChange, onRangeChange, weekStartsOn, workWeekDays, agendaDays, slotMinTime, slotMaxTime, slotDuration, slotLabelInterval, hourHeight, timelineHourWidth, resourceMinWidth, scrollToTime, scrollAlign, now: nowProp, nowIndicator, editLayer, readOnly, selectable, clickCreateDuration, shadeOutsideAvailability, onCreate, onEventClick, onEventChange, onAvailabilityClick, onAvailabilityChange, validate, onInvalidChange, onDateClick, renderEvent, monthMaxEvents, agendaShowAvailability, display, narrowView, narrowWidth, locale, timeZone, hour12, labels: labelOverrides, toolbar, toolbarActions, loading, className, "aria-label": ariaLabel, }: CalendarProps<T, A>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Calendar.d.ts.map