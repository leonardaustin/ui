export interface DonutSegment {
    name: string;
    value: number;
    color: string;
}
export interface DonutChartProps {
    /** Slices to draw; each has a `name`, `value`, and `color` (chart color token or any CSS color). Non-positive values draw nothing. */
    segments: DonutSegment[];
    /** Diameter of the donut in px. Defaults to 180. */
    size?: number;
    /** Ring thickness in px. Defaults to 28. */
    strokeWidth?: number;
    /** Format segment values in the tooltip, center total, and legend. Defaults to locale-grouped numbers. */
    valueFormatter?: (value: number) => string;
    /** Format each segment's share of the total. Defaults to one decimal place with a `%` sign. */
    percentageFormatter?: (value: number) => string;
    /** Show the legend with each segment's value below the chart. Defaults to `true`. */
    showLegend?: boolean;
    /** Accessible label for the chart. Defaults to "Donut chart". */
    ariaLabel?: string;
    /** Extra classes for the wrapper element. */
    className?: string;
}
export declare function DonutChart({ segments, size, strokeWidth, valueFormatter, percentageFormatter, showLegend, ariaLabel, className, }: DonutChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DonutChart.d.ts.map