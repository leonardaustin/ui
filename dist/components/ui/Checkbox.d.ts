import { type ComponentPropsWithRef, type ReactNode } from "react";
export interface CheckboxProps extends Omit<ComponentPropsWithRef<"input">, "type" | "size" | "checked" | "defaultChecked"> {
    /** Whether the checkbox is checked (controlled). */
    checked?: boolean;
    /** Initial checked state when uncontrolled. */
    defaultChecked?: boolean;
    /** Show the mixed state (dash) and expose aria-checked="mixed". */
    indeterminate?: boolean;
    /** Called with the new checked state. */
    onCheckedChange?: (checked: boolean) => void;
    /** Visible label rendered beside the checkbox. */
    label?: ReactNode;
    /** Accessible name when no visible label is given. */
    "aria-label"?: string;
    /** Opt-in larger controls, or inherit ControlSizeProvider. */
    controlSize?: "compact" | "comfortable";
}
export declare function Checkbox({ id, checked: checkedProp, defaultChecked, indeterminate, onChange, onCheckedChange, label, disabled, controlSize, className, "aria-label": ariaLabel, "aria-describedby": describedBy, "aria-invalid": invalid, required, ref, ...props }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
