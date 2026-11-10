import { type SelectHTMLAttributes } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "value"> {
    /** Label text rendered above the select and linked to it. */
    label?: string;
    /** Render the label inside an empty single-select control. Listboxes retain the above label. */
    labelPlacement?: "above" | "placeholder";
    value?: SelectHTMLAttributes<HTMLSelectElement>["value"] | null;
    /** Error message shown next to the label; also marks the select invalid and turns the border red. */
    error?: string;
    /** Helper text shown above the select and linked via `aria-describedby`. */
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    /** Choices rendered as `<option>` elements; `value` is submitted, `label` is shown. */
    options: {
        value: string;
        label: string;
    }[];
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export {};
//# sourceMappingURL=Select.d.ts.map