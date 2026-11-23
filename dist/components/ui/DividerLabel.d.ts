import type { ComponentPropsWithRef, ReactNode } from "react";
export interface DividerLabelProps extends ComponentPropsWithRef<"div"> {
    /** Label shown centred between the two rules. */
    children: ReactNode;
    /** Additional utility classes for the root element. */
    className?: string;
}
export declare function DividerLabel({ children, className, ref, ...rest }: DividerLabelProps): import("react/jsx-runtime").JSX.Element;
