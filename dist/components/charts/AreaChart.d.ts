export interface AreaChartDatum {
    date: string;
    value: number;
}
export interface AreaChartProps {
    data: AreaChartDatum[];
    height?: number;
    /**
     * Force the lower bound of the Y-axis. When omitted the axis fits the data
     * (or starts at zero if `startAtZero` is enabled).
     */
    minValue?: number;
    /** Force the upper bound of the Y-axis. When omitted it fits the data. */
    maxValue?: number;
    /**
     * Anchor the Y-axis at zero for non-negative data. Defaults to `false`, which
     * fits the axis tightly to the data range (the original behavior).
     */
    startAtZero?: boolean;
    /** Format the Y-axis bound labels. Defaults to compact `k`/`M` formatting. */
    valueFormatter?: (value: number) => string;
    /**
     * Format the value shown in the hover tooltip. Falls back to
     * `valueFormatter`, then to the default compact formatting.
     */
    tooltipValueFormatter?: (value: number) => string;
    /** Maximum number of X-axis labels to show. */
    xLabelCount?: number;
    ariaLabel?: string;
    className?: string;
}
export declare function AreaChart({ data, height, minValue, maxValue, startAtZero, valueFormatter, tooltipValueFormatter, xLabelCount, ariaLabel, className, }: AreaChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AreaChart.d.ts.map