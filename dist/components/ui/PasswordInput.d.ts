import { type InputHTMLAttributes } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Label shown above the input. */
    label?: string;
    /** Error message shown above the input; also marks the field invalid and turns the border red. */
    error?: string;
    /** Helper text shown above the input and linked via `aria-describedby`. */
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
}
export declare const PasswordInput: import("react").ForwardRefExoticComponent<PasswordInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=PasswordInput.d.ts.map