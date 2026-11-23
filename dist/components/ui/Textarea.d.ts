import type { ComponentPropsWithRef } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface TextareaProps extends ComponentPropsWithRef<"textarea"> {
    /** Label text rendered above the textarea and linked to it. */
    label?: string;
    /** Error message shown below the textarea; also marks it invalid and turns the border red. */
    error?: string;
    /** Helper text shown above the textarea and linked via `aria-describedby`. */
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    /** Show a `length/maxLength` counter below the textarea; requires `maxLength` and a string `value`. */
    showCount?: boolean;
}
export declare function Textarea({ label, error, showCount, maxLength, value, className, id, hint, controlSize, required, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ref, ...props }: TextareaProps): import("react/jsx-runtime").JSX.Element;
