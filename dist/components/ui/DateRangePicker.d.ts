import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DateRange {
    start: Date | null;
    end: Date | null;
}
interface DateRangePickerProps {
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    label?: string;
    value: DateRange;
    onChange: (range: DateRange) => void;
    placeholder?: string;
}
export declare function DateRangePicker({ controlSize, label, value, onChange, placeholder, }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DateRangePicker.d.ts.map