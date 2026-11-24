import { type ComponentPropsWithRef } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DateRange {
    start: Date | null;
    end: Date | null;
}
export interface DateRangePickerProps extends Omit<ComponentPropsWithRef<"div">, "defaultValue" | "placeholder" | "children" | "onChange"> {
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    /** Visible label above the trigger. */
    label?: string;
    /** Selected range (controlled); start and end are null while unset. */
    value?: DateRange;
    /** Initially selected range when uncontrolled. */
    defaultValue?: DateRange;
    /** Called with the new range once both ends are chosen. */
    onValueChange?: (range: DateRange) => void;
    /** Text shown when no range is selected. Defaults to "Select date range...". */
    placeholder?: string;
}
export declare function DateRangePicker({ controlSize, label, value: valueProp, defaultValue, onValueChange, placeholder, ref, className, ...rest }: DateRangePickerProps): import("react/jsx-runtime").JSX.Element;
