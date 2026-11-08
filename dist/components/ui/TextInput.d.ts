import { type InputHTMLAttributes, type ReactNode } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    /**
     * Pre-rendered icon JSX shown inside the input (e.g. `<Mail className="h-3.5 w-3.5" />`).
     * Unlike Button's `icon`, which takes a component reference, this takes a ReactNode.
     */
    icon?: ReactNode;
}
export declare const TextInput: import("react").ForwardRefExoticComponent<TextInputProps & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=TextInput.d.ts.map