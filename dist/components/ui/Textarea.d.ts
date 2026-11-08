import { type TextareaHTMLAttributes } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    showCount?: boolean;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
//# sourceMappingURL=Textarea.d.ts.map