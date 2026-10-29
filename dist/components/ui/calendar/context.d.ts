import type { CalendarAvailability, CalendarColor, CalendarEvent, CalendarResource, CalendarView, createCalendarDateMath, TimeBounds, Weekday } from "../../../lib/calendar";
import type { CalendarDisplay, CalendarDraft, CalendarLabels, CalendarRenderEvent } from "./types";
/** Resolved configuration shared by every calendar view (internal). */
export interface CalendarContextValue {
    view: CalendarView;
    dates: ReturnType<typeof createCalendarDateMath>;
    timeZone?: string;
    dayBounds: (day: Date) => TimeBounds;
    locale: string;
    hour12: boolean;
    weekStartsOn: Weekday;
    now: Date;
    nowIndicator: boolean;
    labels: CalendarLabels;
    /** Id of the hidden element describing item keyboard controls. */
    itemHelpId: string;
    resources: readonly CalendarResource[];
    resourceById: Map<string, CalendarResource>;
    /** Snap step in minutes. */
    step: number;
    bounds: TimeBounds;
    hourHeight: number;
    slotLabelInterval: number;
    sharedTimeAxis: boolean;
    timelineHourWidth: number;
    resourceMinWidth: number;
    editLayer: "events" | "availability";
    selectable: boolean;
    clickCreateDuration: number;
    hasAvailability: boolean;
    shadeOutsideAvailability: boolean;
    /** Undefined = fit to the cell height. */
    monthMaxEvents?: number;
    agendaShowAvailability: boolean;
    /** Text shown in the grid, month and timeline (not the agenda). */
    display: Required<CalendarDisplay>;
    scrollToMinute?: number;
    scrollAlign: "start" | "center";
    canEditEvent: (event: CalendarEvent) => boolean;
    canEditBlock: (block: CalendarAvailability) => boolean;
    eventColor: (event: CalendarEvent) => CalendarColor;
    blockColor: (block: CalendarAvailability) => CalendarColor;
    statusLabel: (event: CalendarEvent) => string | undefined;
    describeEvent: (event: CalendarEvent) => string;
    describeBlock: (block: CalendarAvailability) => string;
    renderEvent?: CalendarRenderEvent<unknown>;
    hasEventClick: boolean;
    hasBlockClick: boolean;
    clickEvent: (event: CalendarEvent) => void;
    clickBlock: (block: CalendarAvailability) => void;
    /** Returns a rejection reason for a draft, if any. */
    check: (draft: CalendarDraft) => string | undefined;
    /** Validates and emits a draft. Returns false when it was rejected. */
    commit: (draft: CalendarDraft, source: "pointer" | "keyboard") => boolean;
    /** Opens a day (header or month-cell click). */
    openDay: (date: Date) => void;
}
export declare const CalendarContext: import("react").Context<CalendarContextValue | null>;
export declare function useCalendarContext(): CalendarContextValue;
//# sourceMappingURL=context.d.ts.map