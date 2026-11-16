import { type ComponentPropsWithoutRef } from "react";
import { TextInput } from "./TextInput";
export interface TimeInputProps extends Omit<ComponentPropsWithoutRef<typeof TextInput>, "type" | "value" | "defaultValue" | "onChange"> {
    /** Controlled time string: empty, HH:mm, or HH:mm:ss when seconds are enabled by step. */
    value: string;
    /** Called with the native time input's value after each change. */
    onChange: (value: string) => void;
}
/** Native time input. Set step (in seconds) to expose seconds where supported by the browser. */
export declare const TimeInput: import("react").ForwardRefExoticComponent<TimeInputProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=TimeInput.d.ts.map