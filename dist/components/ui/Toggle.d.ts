import type { ComponentPropsWithRef } from "react";
import { type ControlSize } from "../../providers/ControlSizeContext";
export interface ToggleProps extends Omit<ComponentPropsWithRef<"button">, "type" | "role" | "aria-checked" | "children" | "dangerouslySetInnerHTML" | "onChange"> {
    /** Override the size inherited from ControlSizeProvider. */
    controlSize?: ControlSize;
    /** Whether the switch is on. */
    checked?: boolean;
    /** Initial state when uncontrolled. */
    defaultChecked?: boolean;
    /** Called with the new checked value when the switch is clicked. */
    onCheckedChange?: (checked: boolean) => void;
    /** Dims the toggle and blocks interaction. */
    disabled?: boolean;
    /** Text shown beside the switch. */
    label?: string;
    /** ID of an element that names the switch, including when no inline label is shown. */
    "aria-labelledby"?: string;
    /** ID of an element that describes the switch. */
    "aria-describedby"?: string;
    /** Extra classes for the wrapping label element. */
    className?: string;
}
export declare function Toggle({ checked: checkedProp, defaultChecked, onCheckedChange, disabled, label, controlSize, onClick, className, ...rest }: ToggleProps): import("react/jsx-runtime").JSX.Element;
