import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
interface ListItemLinkBase {
    /** Primary content of the row. */
    title: ReactNode;
    /** Leading icon or symbol. */
    icon?: ReactNode;
    /** Secondary information following the title. */
    meta?: ReactNode;
    /** Content aligned to the end of the row. */
    trailing?: ReactNode;
    /** Current destination for links, or pressed state for button rows. */
    active?: boolean;
    className?: string;
}
type LinkAttributes = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};
export type ListItemLinkProps = ListItemLinkBase & ((Omit<LinkAttributes, "children" | "title"> & {
    as?: "a";
    /** Router adapters must render an anchor and forward the supplied props. */
    renderLink?: (props: LinkAttributes) => ReactNode;
}) | (Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "title"> & {
    as: "button";
    renderLink?: never;
}));
export declare function ListItemLink({ title, icon, meta, trailing, active, className, ...root }: ListItemLinkProps): string | number | bigint | boolean | import("react/jsx-runtime").JSX.Element | Iterable<ReactNode> | Promise<string | number | bigint | boolean | import("react").ReactPortal | import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
export {};
