import { type ComponentPropsWithRef } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DatePickerProps extends Omit<ComponentPropsWithRef<"div">, "children" | "defaultValue" | "onChange"> {
    /** Optional zone for instant-backed dates. Birth dates/civil dates should use DatePartsInput. */
    timeZone?: string;
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    label?: string;
    /** Selected date (controlled). */
    value?: Date | null;
    /** Initially selected date when uncontrolled. */
    defaultValue?: Date | null;
    /** Called with the chosen date. */
    onValueChange?: (date: Date | null) => void;
    placeholder?: string;
    /** Format function for display. Defaults to "MMM D, YYYY". */
    format?: (date: Date) => string;
}
export declare function DatePicker({ controlSize, label, timeZone, value: valueProp, defaultValue, onValueChange, placeholder, format, ref, ...rest }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
