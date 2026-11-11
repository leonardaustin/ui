import { type CalendarAvailability, type CalendarEvent } from "../../../lib/calendar";
interface MonthViewProps {
    date: Date;
    events: readonly CalendarEvent[];
    availability: readonly CalendarAvailability[];
    label: string;
}
export declare function MonthView({ date, events, availability, label, }: MonthViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=MonthView.d.ts.map