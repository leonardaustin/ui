import { type HTMLAttributes, type ReactNode } from "react";
export interface FieldControlAttributes {
    id: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
    required?: boolean;
}
export interface FormFieldProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    /** Stable input ID, generated when omitted and passed to child UI controls. */
    id?: string;
    /** Label text for the control. */
    label: ReactNode;
    /** Helper text shown below the label and linked via aria-describedby. */
    hint?: ReactNode;
    /** Error message; marks the control invalid and links it via aria-describedby. */
    error?: ReactNode;
    /** Show a required asterisk and pass required to the control. */
    required?: boolean;
    /** Text shown beside the label when the field is not required, e.g. "(optional)". */
    optionalLabel?: ReactNode;
    /**
     * `"placeholder"` visually hides the label and asks a child single-value
     * `Select` without its own label to show the label text in its empty closed
     * control. The label stays the accessible name. Only a string label can be
     * shown as a placeholder; any other label stays above. Use it only around a
     * single-value Select.
     */
    labelPlacement?: "above" | "placeholder";
    children: ReactNode | ((attributes: FieldControlAttributes) => ReactNode);
}
/** Label, hint and error association for one native control. */
export declare function FormField({ id, label, hint, error, required, optionalLabel, labelPlacement, children, className, ...props }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
/** Standalone hint text for custom controls; connect its ID with aria-describedby. */
export declare function FieldHint({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
/** Standalone field error associated with its control. */
export declare function FieldError({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FormField.d.ts.map