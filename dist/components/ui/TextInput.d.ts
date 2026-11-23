import type { ComponentPropsWithRef, ReactNode } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface TextInputProps extends ComponentPropsWithRef<"input"> {
    /** Label text rendered above the input and linked to it. */
    label?: string;
    /** Error message shown next to the label; also marks the input invalid and turns the border red. */
    error?: string;
    /** Helper text shown above the input and linked via `aria-describedby`. */
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    /**
     * Pre-rendered icon JSX shown inside the input (e.g. `<Mail className="h-3.5 w-3.5" />`).
     * Unlike Button's `icon`, which takes a component reference, this takes a ReactNode.
     */
    icon?: ReactNode;
}
export declare function TextInput({ label, error, icon, className, id, readOnly, hint, controlSize, required, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ref, ...props }: TextInputProps): import("react/jsx-runtime").JSX.Element;
