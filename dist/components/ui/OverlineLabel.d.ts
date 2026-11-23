import type { ComponentPropsWithRef, ElementType, ReactNode } from "react";
export interface OverlineLabelProps extends ComponentPropsWithRef<"span"> {
    /** Short label above a group of related content. */
    children: ReactNode;
    /** Semantic element; defaults to span. */
    as?: ElementType;
    className?: string;
}
export declare function OverlineLabel({ children, as: Tag, className, ref, ...rest }: OverlineLabelProps): import("react/jsx-runtime").JSX.Element;
