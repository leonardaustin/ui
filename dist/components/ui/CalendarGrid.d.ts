interface CalendarGridProps {
    /** Explicit zone; day buttons return real instants at midnight in this zone. */
    timeZone?: string;
    /** Currently displayed month (year, month). */
    year: number;
    /** Displayed month, 0-indexed (0 = January). */
    month: number;
    /** The single selected date (for single pickers). */
    selected?: Date | null;
    /** Start of a selected range. */
    rangeStart?: Date | null;
    /** End of a selected range. */
    rangeEnd?: Date | null;
    /** Date currently being hovered during range selection. */
    hoverDate?: Date | null;
    /** Called with the date when a day is chosen. */
    onSelect: (date: Date) => void;
    /** Called with the new year and 0-indexed month when the previous/next buttons are used. */
    onMonthChange: (year: number, month: number) => void;
    /** Called with the hovered date, or null when the pointer leaves a day; used to preview ranges. */
    onHover?: (date: Date | null) => void;
    /** Minimum selectable date. */
    minDate?: Date;
    /** Maximum selectable date. */
    maxDate?: Date;
}
export declare function CalendarGrid({ year, month, timeZone, selected, rangeStart, rangeEnd, hoverDate, onSelect, onMonthChange, onHover, minDate, maxDate, }: CalendarGridProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CalendarGrid.d.ts.map