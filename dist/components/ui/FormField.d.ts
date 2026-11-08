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
    label: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
    required?: boolean;
    optionalLabel?: ReactNode;
    children: ReactNode | ((attributes: FieldControlAttributes) => ReactNode);
}
/** Label, hint and error association for one native control. */
export declare function FormField({ id, label, hint, error, required, optionalLabel, children, className, ...props }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
/** Standalone hint text for custom controls; connect its ID with aria-describedby. */
export declare function FieldHint({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
/** Standalone field error associated with its control. */
export declare function FieldError({ className, ...props }: HTMLAttributes<HTMLParagraphElement>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FormField.d.ts.map