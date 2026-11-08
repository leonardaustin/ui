import { type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> {
    checked: boolean;
    indeterminate?: boolean;
    /** Existing boolean-first callback; native event is also available. */
    onChange: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
    label?: ReactNode;
    ariaLabel?: string;
    controlSize?: "compact" | "comfortable";
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map