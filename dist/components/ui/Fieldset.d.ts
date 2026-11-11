import { type FieldsetHTMLAttributes, type ReactNode } from "react";
export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
    /** Group caption rendered as the fieldset legend. */
    legend: ReactNode;
    /** Helper text shown below the legend and linked via aria-describedby. */
    hint?: ReactNode;
    /** Error message shown below the hint; marks child fields invalid. */
    error?: ReactNode;
}
/** Group choices without forcing a shared input ID or required state. */
export declare function Fieldset({ id, legend, hint, error, children, className, "aria-describedby": describedBy, ...props }: FieldsetProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Fieldset.d.ts.map