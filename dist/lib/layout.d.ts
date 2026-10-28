import type { ComponentPropsWithRef, CSSProperties } from "react";
export type LayoutGap = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;
export type LayoutBreakpoint = "sm" | "md" | "lg" | "xl";
export type LayoutResponsive<T> = T | Partial<Record<"base" | LayoutBreakpoint, T>>;
export type LayoutElement = "div" | "section" | "article" | "ul" | "ol" | "li" | "nav" | "header" | "footer" | "main" | "aside" | "form" | "span" | "dl" | "fieldset";
export type LayoutAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type LayoutJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
export type LayoutProps<E extends LayoutElement, P> = P & {
    as?: E;
} & Omit<ComponentPropsWithRef<E>, keyof P | "as">;
export type LayoutStyle = CSSProperties & Record<`--${string}`, string | number | undefined>;
/** All breakpoints are local: nested layouts must not inherit a parent's inputs. */
export declare function responsiveStyle<T extends string | number>(name: string, value: LayoutResponsive<T>, format: (value: T) => string, fallback: T): LayoutStyle;
export declare function columnTemplate(value: number | string): string;
export declare function spacingStyle(gap?: LayoutGap, gapX?: LayoutGap, gapY?: LayoutGap): LayoutStyle;
export declare function flexAlign(value: LayoutAlign): string;
export declare function flexJustify(value: LayoutJustify): string;
//# sourceMappingURL=layout.d.ts.map