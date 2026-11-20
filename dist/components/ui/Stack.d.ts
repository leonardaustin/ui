import { type LayoutAlign, type LayoutElement, type LayoutGap, type LayoutJustify, type LayoutProps, type LayoutStyle } from "../../lib/layout";
export interface StackOptions {
    /** Spacing units between children; defaults to zero. */
    gap?: LayoutGap;
    /** Cross-axis alignment of children; defaults to `stretch`. */
    align?: LayoutAlign;
    /** Main-axis distribution of children; defaults to `start`. */
    justify?: LayoutJustify;
}
export type StackProps<E extends LayoutElement = "div"> = LayoutProps<E, StackOptions>;
export declare function Stack<E extends LayoutElement = "div">({ as, gap, align, justify, className, style, ...props }: StackProps<E>): import("react").DetailedReactHTMLElement<Omit<StackProps<E>, "className" | "gap" | "style" | "align" | "as" | "justify"> & {
    className: string;
    style: LayoutStyle;
}, HTMLElement>;
//# sourceMappingURL=Stack.d.ts.map