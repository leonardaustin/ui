import { type ComponentPropsWithRef } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface PasswordInputProps extends ComponentPropsWithRef<"input"> {
    /** Label shown above the input. */
    label?: string;
    /** Error message shown above the input; also marks the field invalid and turns the border red. */
    error?: string;
    /** Helper text shown above the input and linked via `aria-describedby`. */
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
}
export declare function PasswordInput({ label, error, className, id, hint, controlSize, required, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ref, ...props }: PasswordInputProps): import("react/jsx-runtime").JSX.Element;
