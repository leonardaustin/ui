import { type InputHTMLAttributes, type ReactNode } from "react";
import { type FieldsetProps } from "./Fieldset";
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label: ReactNode;
    description?: ReactNode;
    controlSize?: "compact" | "comfortable";
}
export interface RadioGroupOption {
    value: string;
    label: ReactNode;
    description?: ReactNode;
    disabled?: boolean;
}
export interface RadioGroupProps extends Omit<FieldsetProps, "onChange"> {
    name?: string;
    options: RadioGroupOption[];
    value: string;
    onChange: (value: string) => void;
    required?: boolean;
    controlSize?: "compact" | "comfortable";
}
declare function RadioGroup({ name, id, options, value, onChange, required, disabled, controlSize, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>> & {
    Group: typeof RadioGroup;
};
export {};
//# sourceMappingURL=Radio.d.ts.map