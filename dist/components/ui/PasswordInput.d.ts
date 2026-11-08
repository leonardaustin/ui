import { type InputHTMLAttributes } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
}
export declare const PasswordInput: import("react").ForwardRefExoticComponent<PasswordInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=PasswordInput.d.ts.map