import type { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
interface CardBaseProps {
    children: ReactNode;
    /** Content for the top bar, separated from the body by a border. */
    header?: ReactNode;
    /** Content for the bottom bar, separated from the body by a border. */
    footer?: ReactNode;
    /** Full-width content above the header and body, without their padding. */
    cover?: ReactNode;
    /** Adds an accent border. Buttons expose aria-pressed and selected links expose aria-current="page". */
    selected?: boolean;
    /** Remove the body padding, e.g. for tables or full-bleed content. */
    flush?: boolean;
    /** Additional utility classes for the body wrapper. */
    bodyClassName?: string;
}
type LinkAttributes = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type"> & {
    href: string;
};
export interface CardProps extends CardBaseProps, Omit<HTMLAttributes<HTMLElement>, "children" | "type" | "disabled"> {
    /** Semantic container; use aria-labelledby to associate a header heading. */
    as?: "div" | "section" | "article" | "aside";
    type?: never;
    disabled?: never;
}
export interface CardButtonProps extends CardBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    as: "button";
    /** Native button type when as="button"; defaults to button. */
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    /** Native disabled state when as="button". */
    disabled?: boolean;
}
export interface CardLinkProps extends CardBaseProps, Omit<LinkAttributes, "children"> {
    as: "a";
    type?: never;
    disabled?: never;
    /** Router adapters must render an anchor and forward the supplied props. */
    renderLink?: (props: LinkAttributes) => ReactNode;
}
export declare function Card({ children, className, header, footer, cover, selected, flush, bodyClassName, ...root }: (CardProps & {
    href?: never;
    renderLink?: never;
}) | (CardButtonProps & {
    href?: never;
    renderLink?: never;
}) | CardLinkProps): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export {};
//# sourceMappingURL=Card.d.ts.map