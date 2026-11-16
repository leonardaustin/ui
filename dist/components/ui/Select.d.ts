import { type SelectHTMLAttributes } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface SelectOption {
    value: string;
    label: string;
    /** Keep the option visible but prevent native selection. */
    disabled?: boolean;
}
export interface SelectOptionGroup {
    label: string;
    /** Groups contain leaf options; nested groups are not supported. */
    options: SelectOption[];
}
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
    /** Leaf choices and labelled groups, rendered as native options and optgroups. */
    options: (SelectOption | SelectOptionGroup)[];
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
export {};
//# sourceMappingURL=Select.d.ts.map