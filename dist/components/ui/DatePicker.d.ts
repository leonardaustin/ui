import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DatePickerProps {
    /** Optional zone for instant-backed dates. Birth dates/civil dates should use DatePartsInput. */
    timeZone?: string;
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    label?: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    /** Format function for display. Defaults to "MMM D, YYYY". */
    format?: (date: Date) => string;
}
export declare function DatePicker({ controlSize, label, timeZone, value, onChange, placeholder, format, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DatePicker.d.ts.map