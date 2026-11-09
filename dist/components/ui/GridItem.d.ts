import { type LayoutElement, type LayoutProps, type LayoutResponsive, type LayoutStyle } from "../../lib/layout";
export interface GridItemOptions {
    /** Number of columns occupied, optionally at each breakpoint. */
    span?: LayoutResponsive<number>;
}
export type GridItemProps<E extends LayoutElement = "div"> = LayoutProps<E, GridItemOptions>;
export declare function GridItem<E extends LayoutElement = "div">({ as, span, className, style, ...props }: GridItemProps<E>): import("react").DetailedReactHTMLElement<Omit<GridItemProps<E>, "className" | "style" | "span" | "as"> & {
    className: string;
    style: LayoutStyle;
}, HTMLElement>;
//# sourceMappingURL=GridItem.d.ts.map