import { type LayoutAlign, type LayoutElement, type LayoutGap, type LayoutProps, type LayoutResponsive, type LayoutStyle } from "../../lib/layout";
export interface GridOptions {
    /** Equal columns, a CSS template, or values at mobile-first breakpoints. */
    columns?: LayoutResponsive<number | string>;
    /** Space between rows and columns, in spacing-scale steps. Defaults to 0. */
    gap?: LayoutGap;
    /** Overrides the gap between columns. */
    gapX?: LayoutGap;
    /** Overrides the gap between rows. */
    gapY?: LayoutGap;
    /** Vertical alignment of each item within its grid area. Defaults to `stretch`. */
    align?: LayoutAlign;
    /** Align each item within its grid area. */
    justify?: "start" | "center" | "end" | "stretch";
}
export type GridProps<E extends LayoutElement = "div"> = LayoutProps<E, GridOptions>;
export declare function Grid<E extends LayoutElement = "div">({ as, columns, gap, gapX, gapY, align, justify, className, style, ...props }: GridProps<E>): import("react").DetailedReactHTMLElement<Omit<GridProps<E>, "columns" | "className" | "gap" | "style" | "align" | "as" | "justify" | "gapX" | "gapY"> & {
    className: string;
    style: LayoutStyle;
}, HTMLElement>;
//# sourceMappingURL=Grid.d.ts.map