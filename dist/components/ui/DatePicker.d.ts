interface DatePickerProps {
    label?: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    /** Format function for display. Defaults to "MMM D, YYYY". */
    format?: (date: Date) => string;
}
export declare function DatePicker({ label, value, onChange, placeholder, format, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DatePicker.d.ts.map