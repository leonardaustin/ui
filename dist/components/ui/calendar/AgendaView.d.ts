import { type CalendarAvailability, type CalendarEvent } from "../../../lib/calendar";
interface AgendaViewProps {
    days: Date[];
    events: readonly CalendarEvent[];
    availability: readonly CalendarAvailability[];
    label: string;
}
/** A printable list of days, each with its events (and availability). */
export declare function AgendaView({ days, events, availability, label, }: AgendaViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AgendaView.d.ts.map