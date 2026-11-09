import { type LayoutAlign, type LayoutBreakpoint, type LayoutElement, type LayoutGap, type LayoutJustify, type LayoutProps, type LayoutStyle } from "../../lib/layout";
export interface InlineOptions {
    /** Space between children, in spacing-scale steps. Defaults to 0. */
    gap?: LayoutGap;
    /** Overrides horizontal spacing. */
    gapX?: LayoutGap;
    /** Overrides vertical spacing. */
    gapY?: LayoutGap;
    /** Cross-axis alignment of children. Defaults to `stretch`. */
    align?: LayoutAlign;
    /** Main-axis distribution of children. Defaults to `start`. */
    justify?: LayoutJustify;
    /** Let children wrap onto multiple lines instead of overflowing. */
    wrap?: boolean;
    /** Render as `inline-flex` so the container sits in the text flow instead of filling the line. */
    inline?: boolean;
    /** Column below this breakpoint; row at and above it. */
    stackBelow?: LayoutBreakpoint;
}
export type InlineProps<E extends LayoutElement = "div"> = LayoutProps<E, InlineOptions>;
export declare function Inline<E extends LayoutElement = "div">({ as, gap, gapX, gapY, align, justify, wrap, inline, stackBelow, className, style, ...props }: InlineProps<E>): import("react").DetailedReactHTMLElement<Omit<InlineProps<E>, "inline" | "className" | "gap" | "style" | "align" | "as" | "justify" | "wrap" | "gapX" | "gapY" | "stackBelow"> & {
    className: string;
    style: LayoutStyle;
}, HTMLElement>;
//# sourceMappingURL=Inline.d.ts.map