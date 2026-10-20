import type { HTMLAttributes, ReactNode } from "react";
export interface CardProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
    /** Semantic container; use aria-labelledby to associate a header heading. */
    as?: "div" | "section" | "article" | "aside";
    flush?: boolean;
    bodyClassName?: string;
}
export declare function Card({ children, className, header, footer, as: Root, flush, bodyClassName, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Card.d.ts.map