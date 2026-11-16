import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
export interface NavTab extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
    /** Unique identifier, matched against `activeKey` and used as the list key. */
    key: string;
    /** Destination URL of the tab link. */
    href: string;
    /** Content of the tab link. */
    label: ReactNode;
    /** Small pill shown after the label, such as a count. */
    badge?: ReactNode;
}
export interface NavTabsProps extends HTMLAttributes<HTMLElement> {
    /** The tabs to render, in order. */
    items: NavTab[];
    /** Key of the current tab; it is styled as active and given `aria-current="page"`. */
    activeKey?: string;
    /** Router adapters must render a real anchor and forward all supplied accessibility and class attributes. */
    renderLink?: (props: AnchorHTMLAttributes<HTMLAnchorElement>, item: NavTab) => ReactNode;
}
/** Link navigation: route matching and permissions remain application-owned. */
export declare function NavTabs({ items, activeKey, renderLink, className, "aria-label": label, ...props }: NavTabsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NavTabs.d.ts.map