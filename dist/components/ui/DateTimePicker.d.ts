import { type ControlSize } from "../../providers/ControlSizeContext";
export interface DateTimePickerProps {
    /** IANA zone for display/input. Values and callbacks are real instants. */
    timeZone?: string;
    /** Inherit ControlSizeProvider or override this trigger’s sizing. */
    controlSize?: ControlSize;
    label?: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
}
export declare function DateTimePicker(props: DateTimePickerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DateTimePicker.d.ts.map