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
}
export declare function StackedBarChart({ data, segments, height, ariaLabel, tooltipRows, }: StackedBarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StackedBarChart.d.ts.map