import { type SelectHTMLAttributes } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    error?: string;
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    options: {
        value: string;
        label: string;
    }[];
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export {};
//# sourceMappingURL=Select.d.ts.map