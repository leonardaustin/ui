import type { HTMLAttributes, ReactNode } from "react";
export interface CardProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    /** Content for the top bar, separated from the body by a border. */
    header?: ReactNode;
    /** Content for the bottom bar, separated from the body by a border. */
    footer?: ReactNode;
    /** Semantic container; use aria-labelledby to associate a header heading. */
    as?: "div" | "section" | "article" | "aside";
    /** Remove the body padding, e.g. for tables or full-bleed content. */
    flush?: boolean;
    /** Additional utility classes for the body wrapper. */
    bodyClassName?: string;
}
export declare function Card({ children, className, header, footer, as: Root, flush, bodyClassName, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Card.d.ts.map