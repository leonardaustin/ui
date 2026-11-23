import { type ComponentPropsWithRef } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DateTimePickerProps extends Omit<ComponentPropsWithRef<"div">, "defaultValue" | "placeholder" | "children" | "onChange"> {
    /** IANA zone for display/input. Values and callbacks are real instants. */
    timeZone?: string;
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    /** Visible label above the trigger. */
    label?: string;
    /** Selected date and time (controlled), or null. */
    value?: Date | null;
    /** Initially selected instant when uncontrolled. */
    defaultValue?: Date | null;
    /** Called with the chosen instant. */
    onValueChange?: (date: Date | null) => void;
    /** Text shown when no value is selected. Defaults to "Select date & time...". */
    placeholder?: string;
}
export declare function DateTimePicker({ value: valueProp, defaultValue, onValueChange, ...props }: DateTimePickerProps): import("react/jsx-runtime").JSX.Element;
