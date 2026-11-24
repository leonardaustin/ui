import { type ComponentPropsWithRef } from "react";
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
export interface SelectProps extends Omit<ComponentPropsWithRef<"select">, "value"> {
    /** Label text rendered above the select and linked to it. */
    label?: string;
    /** Render the label inside an empty single-select control. Listboxes retain the above label. */
    labelPlacement?: "above" | "placeholder";
    value?: ComponentPropsWithRef<"select">["value"] | null;
    /** Error message shown next to the label; also marks the select invalid and turns the border red. */
    error?: string;
    /** Helper text shown above the select and linked via `aria-describedby`. */
    hint?: string;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: ControlSize;
    /** Leaf choices and labelled groups, rendered as native options and optgroups. */
    options: (SelectOption | SelectOptionGroup)[];
}
export declare function Select({ label, labelPlacement, error, options, className, id, hint, controlSize, required, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ref, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
