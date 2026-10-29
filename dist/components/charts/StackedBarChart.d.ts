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
    data: StackedBarChartDatum[];
    segments: StackedBarChartSegment[];
    height?: number;
    ariaLabel?: string;
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
    className?: string;
}
export declare function StackedBarChart({ data, segments, height, ariaLabel, tooltipRows, valueFormatter, tooltipValueFormatter, xLabelCount, barGap, minBarWidth, className, }: StackedBarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StackedBarChart.d.ts.map