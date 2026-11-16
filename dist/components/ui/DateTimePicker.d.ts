import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DateTimePickerProps {
    /** IANA zone for display/input. Values and callbacks are real instants. */
    timeZone?: string;
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    /** Visible label above the trigger. */
    label?: string;
    /** Selected date and time (controlled), or null. */
    value: Date | null;
    /** Called with the chosen instant. */
    onChange: (date: Date | null) => void;
    /** Text shown when no value is selected. Defaults to "Select date & time...". */
    placeholder?: string;
}
export declare function DateTimePicker(props: DateTimePickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DateTimePicker.d.ts.map