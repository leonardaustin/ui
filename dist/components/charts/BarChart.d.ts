import { type ComponentPropsWithRef } from "react";
export interface BarChartDatum {
    label: string;
    value: number;
}
export interface BarChartProps extends Omit<ComponentPropsWithRef<"svg">, "children" | "viewBox" | "width"> {
    /** Bars to draw top to bottom, each with a `label` and numeric `value`. */
    data: BarChartDatum[];
    /** Total chart height in SVG units; rows scale to fit. Defaults to the natural height from `barHeight` and `gap`. */
    height?: number;
    /** Explicit domain maximum. Defaults to the largest positive value. */
    maxValue?: number;
    /** Format values shown at the end of each bar. */
    valueFormatter?: (value: number) => string;
    /** Format left-side labels before optional truncation. */
    labelFormatter?: (label: string, datum: BarChartDatum, index: number) => string;
    /** Maximum rendered label length. Omit to render the full formatted label. */
    maxLabelLength?: number;
    /** Width reserved for left-side labels in the SVG viewBox. */
    labelWidth?: number;
    /** Width reserved for right-side values in the SVG viewBox. */
    valueWidth?: number;
    /** Natural row height before the optional height prop scales the chart. */
    barHeight?: number;
    /** Natural gap between rows before the optional height prop scales the chart. */
    gap?: number;
    /** Accessible label for the chart. Defaults to "Horizontal bar chart". */
    "aria-label"?: string;
    /** Extra classes for the `<svg>`. */
    className?: string;
}
export declare function BarChart({ data, height, maxValue, valueFormatter, labelFormatter, maxLabelLength, labelWidth, valueWidth, barHeight, gap, "aria-label": ariaLabel, className, ref, ...rest }: BarChartProps): import("react/jsx-runtime").JSX.Element;
