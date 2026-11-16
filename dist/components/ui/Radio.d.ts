import { type InputHTMLAttributes, type ReactNode } from "react";
import { type FieldsetProps } from "./Fieldset";
export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    /** Label shown next to the radio. */
    label: ReactNode;
    /** Muted help text below the label, linked via `aria-describedby`. */
    description?: ReactNode;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: "compact" | "comfortable";
}
export interface RadioGroupOption {
    /** Value submitted when this option is selected; also its React key. */
    value: string;
    /** Content shown for the option. */
    label: ReactNode;
    /** Muted help text below the option label. */
    description?: ReactNode;
    /** Disables just this option. */
    disabled?: boolean;
}
export interface RadioGroupProps extends Omit<FieldsetProps, "onChange"> {
    /** Name shared by the radios. Defaults to a generated id. */
    name?: string;
    /** The options to render, in order. */
    options: RadioGroupOption[];
    /** Value of the currently selected option. */
    value: string;
    /** Called with the option's value when the user selects it. */
    onChange: (value: string) => void;
    /** Marks the radios as required. */
    required?: boolean;
    /** Opt-in larger control, or inherit ControlSizeProvider. */
    controlSize?: "compact" | "comfortable";
}
declare function RadioGroup({ name, id, options, value, onChange, required, disabled, controlSize, ...props }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>> & {
    Group: typeof RadioGroup;
};
export {};
//# sourceMappingURL=Radio.d.ts.map