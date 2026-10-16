export interface DateRange {
    start: Date | null;
    end: Date | null;
}
interface DateRangePickerProps {
    label?: string;
    value: DateRange;
    onChange: (range: DateRange) => void;
    placeholder?: string;
}
export declare function DateRangePicker({ label, value, onChange, placeholder, }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangePicker.d.ts.map