import { type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> {
    /** Whether the checkbox is checked (controlled). */
    checked: boolean;
    /** Show the mixed state (dash) and expose aria-checked="mixed". */
    indeterminate?: boolean;
    /** Existing boolean-first callback; native event is also available. */
    onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
    /** Visible label rendered beside the checkbox. */
    label?: ReactNode;
    /** Accessible name when no visible label is given; aria-label takes precedence. */
    ariaLabel?: string;
    /** Opt-in larger controls, or inherit ControlSizeProvider. */
    controlSize?: "compact" | "comfortable";
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map