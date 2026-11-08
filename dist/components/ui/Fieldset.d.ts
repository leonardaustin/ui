import { type FieldsetHTMLAttributes, type ReactNode } from "react";
export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend: ReactNode;
    hint?: ReactNode;
    error?: ReactNode;
}
/** Group choices without forcing a shared input ID or required state. */
export declare function Fieldset({ id, legend, hint, error, children, className, "aria-describedby": describedBy, ...props }: FieldsetProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Fieldset.d.ts.map