import { type TextareaHTMLAttributes } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
//# sourceMappingURL=Textarea.d.ts.map