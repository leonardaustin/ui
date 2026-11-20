import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DateRange {
    start: Date | null;
    end: Date | null;
}
interface DateRangePickerProps {
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    /** Visible label above the trigger. */
    label?: string;
    /** Selected range (controlled); start and end are null while unset. */
    value: DateRange;
    /** Called with the new range once both ends are chosen. */
    onChange: (range: DateRange) => void;
    /** Text shown when no range is selected. Defaults to "Select date range...". */
    placeholder?: string;
}
export declare function DateRangePicker({ controlSize, label, value, onChange, placeholder, }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangePicker.d.ts.map