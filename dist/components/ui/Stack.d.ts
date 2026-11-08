import { type LayoutAlign, type LayoutElement, type LayoutGap, type LayoutJustify, type LayoutProps, type LayoutStyle } from "../../lib/layout";
export interface StackOptions {
    /** Spacing units between children; defaults to zero. */
    gap?: LayoutGap;
    align?: LayoutAlign;
    justify?: LayoutJustify;
}
export type StackProps<E extends LayoutElement = "div"> = LayoutProps<E, StackOptions>;
export declare function Stack<E extends LayoutElement = "div">({ as, gap, align, justify, className, style, ...props }: StackProps<E>): import("react").DetailedReactHTMLElement<Omit<StackProps<E>, "gap" | "className" | "style" | "align" | "as" | "justify"> & {
    className: string;
    style: LayoutStyle;
}, HTMLElement>;
//# sourceMappingURL=Stack.d.ts.map