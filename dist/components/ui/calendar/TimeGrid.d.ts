import { type CalendarAvailability, type CalendarEvent } from "../../../lib/calendar";
interface TimeGridProps {
    days: Date[];
    events: readonly CalendarEvent[];
    availability: readonly CalendarAvailability[];
    /** Accessible name for the grid, e.g. the toolbar title. */
    label: string;
}
export declare function TimeGrid({ days, events, availability, label }: TimeGridProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TimeGrid.d.ts.map