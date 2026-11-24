import { type TextInputProps } from "./TextInput";
export interface TimeInputProps extends Omit<TextInputProps, "type" | "value" | "defaultValue"> {
    /** Controlled time string: empty, HH:mm, or HH:mm:ss when seconds are enabled by step. */
    value?: string;
    /** Initial time string when uncontrolled. */
    defaultValue?: string;
    /** Called with the native time input's value after each change. */
    onValueChange?: (value: string) => void;
}
/** Native time input. Set step (in seconds) to expose seconds where supported by the browser. */
export declare function TimeInput({ value, defaultValue, onValueChange, onChange, ref, ...props }: TimeInputProps): import("react/jsx-runtime").JSX.Element;
