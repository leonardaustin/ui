export interface StackedBarChartDatum {
    date: string;
    [key: string]: number | string;
}
export interface StackedBarChartSegment {
    color: string;
    key: string;
    label: string;
    opacity?: number;
}
export interface StackedBarChartTooltipRow {
    color?: string;
    label: string;
    value: number;
}
export interface StackedBarChartProps {
    /** One entry per bar, with a `date` label and a numeric value for each segment `key`. */
    data: StackedBarChartDatum[];
    /** Stack layers in order; each maps a `key` in `data` to a `label`, `color`, and optional `opacity`. */
    segments: StackedBarChartSegment[];
    /** Chart height in SVG units; the width scales to the container. Defaults to 220. */
    height?: number;
    /** Accessible label for the chart. Defaults to "Stacked bar chart". */
    ariaLabel?: string;
    /** Build custom hover tooltip rows for a bar. Defaults to one row per segment. */
    tooltipRows?: (item: StackedBarChartDatum) => StackedBarChartTooltipRow[];
    /** Format Y-axis labels. Defaults to compact `k`/`M` formatting. */
    valueFormatter?: (value: number) => string;
    /** Format values in the hover tooltip. */
    tooltipValueFormatter?: (value: number) => string;
    /** Maximum number of X-axis labels to show. */
    xLabelCount?: number;
    /** Preferred gap between bars. The chart reduces this automatically if dense. */
    barGap?: number;
    /** Minimum bar width before the gap is reduced. */
    minBarWidth?: number;
    /** Extra classes for the `<svg>`. */
    className?: string;
}
export declare function StackedBarChart({ data, segments, height, ariaLabel, tooltipRows, valueFormatter, tooltipValueFormatter, xLabelCount, barGap, minBarWidth, className, }: StackedBarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StackedBarChart.d.ts.map