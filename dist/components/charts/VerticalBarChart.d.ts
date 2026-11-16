export interface VerticalBarChartDatum {
    color?: string;
    label: string;
    value: number;
}
export interface VerticalBarChartProps {
    /** Bars to draw left to right, each with a `label`, numeric `value`, and optional `color`. */
    data: VerticalBarChartDatum[];
    /** Chart height in SVG units; the width scales to the container. Defaults to 180. */
    height?: number;
    /** Explicit domain maximum. Defaults to the largest positive value. */
    maxValue?: number;
    /** Format Y-axis labels. Defaults to compact `k`/`M` formatting. */
    valueFormatter?: (value: number) => string;
    /** Format the hover value. Falls back to locale-grouped numbers. */
    tooltipValueFormatter?: (value: number) => string;
    /** Format X-axis labels before optional truncation. */
    labelFormatter?: (label: string, datum: VerticalBarChartDatum, index: number) => string;
    /** Maximum rendered X-axis label length. Omit to render the full label. */
    maxLabelLength?: number;
    /** Maximum number of X-axis labels to show. */
    xLabelCount?: number;
    /** Preferred gap between bars. The chart reduces this automatically if dense. */
    barGap?: number;
    /** Minimum bar width before the gap is reduced. */
    minBarWidth?: number;
    /** Accessible label for the chart. Defaults to "Vertical bar chart". */
    ariaLabel?: string;
    /** Extra classes for the `<svg>`. */
    className?: string;
}
export declare function VerticalBarChart({ data, height, maxValue, valueFormatter, tooltipValueFormatter, labelFormatter, maxLabelLength, xLabelCount, barGap, minBarWidth, ariaLabel, className, }: VerticalBarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=VerticalBarChart.d.ts.map