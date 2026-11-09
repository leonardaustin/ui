export interface RadialSegment {
    label: string;
    value: number;
    max: number;
    color: string;
}
export interface RadialBarChartProps {
    /** Concentric rings drawn outside in; each has a `label`, `value`, `max` it is measured against, and `color`. */
    segments: RadialSegment[];
    /** Width and height of the chart in px. Defaults to 200. */
    size?: number;
    /** Thickness of each ring in px. Defaults to 14. */
    strokeWidth?: number;
    /** Space between rings in px. Defaults to 6. */
    gap?: number;
    /** Format the `value` and `max` shown in the tooltip. Defaults to `String`. */
    valueFormatter?: (value: number) => string;
    /** Format each ring's percentage of its `max`. Defaults to a rounded whole number with `%`. */
    percentageFormatter?: (value: number) => string;
    /** Show the legend with each ring's percentage below the chart. Defaults to `true`. */
    showLegend?: boolean;
    /** Accessible label for the chart. Defaults to "Radial bar chart". */
    ariaLabel?: string;
    /** Extra classes for the wrapper element. */
    className?: string;
}
export declare function RadialBarChart({ segments, size, strokeWidth, gap, valueFormatter, percentageFormatter, showLegend, ariaLabel, className, }: RadialBarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=RadialBarChart.d.ts.map