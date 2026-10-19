interface CalendarGridProps {
    /** Currently displayed month (year, month). */
    year: number;
    month: number;
    /** The single selected date (for single pickers). */
    selected?: Date | null;
    /** Start of a selected range. */
    rangeStart?: Date | null;
    /** End of a selected range. */
    rangeEnd?: Date | null;
    /** Date currently being hovered during range selection. */
    hoverDate?: Date | null;
    onSelect: (date: Date) => void;
    onMonthChange: (year: number, month: number) => void;
    onHover?: (date: Date | null) => void;
    /** Minimum selectable date. */
    minDate?: Date;
    /** Maximum selectable date. */
    maxDate?: Date;
}
export declare function CalendarGrid({ year, month, selected, rangeStart, rangeEnd, hoverDate, onSelect, onMonthChange, onHover, minDate, maxDate, }: CalendarGridProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CalendarGrid.d.ts.map