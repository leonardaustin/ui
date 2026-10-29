import { type LayoutAlign, type LayoutBreakpoint, type LayoutElement, type LayoutGap, type LayoutJustify, type LayoutProps, type LayoutStyle } from "../../lib/layout";
export interface InlineOptions {
    gap?: LayoutGap;
    /** Overrides horizontal spacing. */
    gapX?: LayoutGap;
    /** Overrides vertical spacing. */
    gapY?: LayoutGap;
    align?: LayoutAlign;
    justify?: LayoutJustify;
    wrap?: boolean;
    inline?: boolean;
    /** Column below this breakpoint; row at and above it. */
    stackBelow?: LayoutBreakpoint;
}
export type InlineProps<E extends LayoutElement = "div"> = LayoutProps<E, InlineOptions>;
export declare function Inline<E extends LayoutElement = "div">({ as, gap, gapX, gapY, align, justify, wrap, inline, stackBelow, className, style, ...props }: InlineProps<E>): import("react").DetailedReactHTMLElement<Omit<InlineProps<E>, "inline" | "gap" | "className" | "style" | "align" | "as" | "wrap" | "justify" | "gapX" | "gapY" | "stackBelow"> & {
    className: string;
    style: LayoutStyle;
}, HTMLElement>;
//# sourceMappingURL=Inline.d.ts.map