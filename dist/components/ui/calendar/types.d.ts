import type { ReactNode } from "react";
import type { CalendarAvailability, CalendarEvent, CalendarEventStatus, CalendarView, DateRange } from "../../../lib/calendar";
/** A new range picked by dragging (or clicking) on empty time. */
export interface CalendarSelection {
    start: Date;
    end: Date;
    allDay: boolean;
    /** Resource of the column or row the selection was made in. */
    resourceId?: string;
    /** How it was made. */
    source: "pointer" | "keyboard";
}
interface ChangeBase {
    action: "move" | "resize";
    start: Date;
    end: Date;
    /** Resource of the column/row it was dropped on (undefined without resources). */
    resourceId?: string;
    /** Resource of the column/row the change started from. */
    previousResourceId?: string;
    /**
     * The item's resource ids with `previousResourceId` replaced by
     * `resourceId`; undefined when the item had none (applies to all).
     */
    resourceIds?: string[];
    source: "pointer" | "keyboard";
}
/** A requested move or resize of an event. The consumer applies it. */
export interface CalendarEventChange<T = unknown> extends ChangeBase {
    event: CalendarEvent<T>;
}
/** A requested move or resize of an availability block. */
export interface CalendarAvailabilityChange<A = unknown> extends ChangeBase {
    availability: CalendarAvailability<A>;
}
/**
 * A proposed create/move/resize, passed to `validate` while the user drags
 * (and before keyboard changes) so you can reject it with a reason.
 */
export type CalendarDraft<T = unknown, A = unknown> = ({
    target: "selection";
    action: "create";
} & Omit<CalendarSelection, "source">) | ({
    target: "event";
} & Omit<CalendarEventChange<T>, "source">) | ({
    target: "availability";
} & Omit<CalendarAvailabilityChange<A>, "source">);
/**
 * Text shown on event boxes, chips and availability blocks in the time
 * grid, month and timeline. Hidden text is removed, never substituted, and
 * stays in the screen-reader labels of events and editable blocks. The
 * agenda always shows it all.
 * Every field defaults to true.
 */
export interface CalendarDisplay {
    /** Start and end times. */
    time?: boolean;
    /** The event's `description` line, e.g. service and room. */
    description?: boolean;
    /** Status labels such as "Tentative". The box styling still marks status. */
    status?: boolean;
    /** The event's `badge`, e.g. "Arrived". */
    badge?: boolean;
    /** Block labels. Off leaves blocks unlabelled rather than "Available". */
    blockLabels?: boolean;
    /**
     * Draw `available` blocks. Off hides them but they still mark working
     * hours for the outside-availability shading. Always on while editing
     * availability.
     */
    availableBlocks?: boolean;
}
/** Visible range reported by `onRangeChange`. */
export interface CalendarRange extends DateRange {
    view: CalendarView;
}
/** Context passed to `renderEvent`. */
export interface CalendarEventRenderContext {
    view: CalendarView;
    /** True when the box is too short for more than one line. */
    compact: boolean;
    /** Formatted time range, e.g. "09:00–09:30". */
    timeLabel: string;
    /**
     * Text for the event's status: undefined when confirmed or when
     * `display.status` is false.
     */
    statusLabel?: string;
}
/** Every user-facing string, for translation or different wording. */
export interface CalendarLabels {
    today: string;
    previous: string;
    next: string;
    view: string;
    allDay: string;
    more: (count: number) => string;
    /** Count announced for a month day, e.g. "3 events". */
    eventCount: (count: number) => string;
    showLess: string;
    noEvents: string;
    noResources: string;
    earlier: (count: number) => string;
    later: (count: number) => string;
    available: string;
    unavailable: string;
    loading: string;
    close: string;
    views: Record<CalendarView, string>;
    status: Record<CalendarEventStatus, string>;
    /** Screen-reader help for the time grid's keyboard controls. */
    gridHelp: string;
    /** Screen-reader help for focused events and blocks. */
    itemHelp: string;
}
/** Partial labels; `views` and `status` may be partial too. */
export type CalendarLabelOverrides = Partial<Omit<CalendarLabels, "views" | "status">> & {
    views?: Partial<CalendarLabels["views"]>;
    status?: Partial<CalendarLabels["status"]>;
};
export declare const DEFAULT_CALENDAR_LABELS: CalendarLabels;
/** Render override for an event's contents. */
export type CalendarRenderEvent<T> = (event: CalendarEvent<T>, context: CalendarEventRenderContext) => ReactNode;
export {};
//# sourceMappingURL=types.d.ts.map