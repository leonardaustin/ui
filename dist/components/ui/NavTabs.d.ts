import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
export interface NavTab extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
    key: string;
    href: string;
    label: ReactNode;
    badge?: ReactNode;
}
export interface NavTabsProps extends HTMLAttributes<HTMLElement> {
    items: NavTab[];
    activeKey?: string;
    /** Router adapters must render a real anchor and forward all supplied accessibility and class attributes. */
    renderLink?: (props: AnchorHTMLAttributes<HTMLAnchorElement>, item: NavTab) => ReactNode;
}
/** Link navigation: route matching and permissions remain application-owned. */
export declare function NavTabs({ items, activeKey, renderLink, className, "aria-label": label, ...props }: NavTabsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NavTabs.d.ts.map