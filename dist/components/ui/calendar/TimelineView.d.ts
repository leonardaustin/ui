import { type CalendarAvailability, type CalendarEvent } from "../../../lib/calendar";
interface TimelineViewProps {
    day: Date;
    events: readonly CalendarEvent[];
    availability: readonly CalendarAvailability[];
    label: string;
}
/** One day, one horizontal row per resource, grouped by `resource.group`. */
export declare function TimelineView({ day, events, availability, label, }: TimelineViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TimelineView.d.ts.map