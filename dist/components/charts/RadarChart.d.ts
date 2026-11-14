export interface RadarDataPoint {
    label: string;
    value: number;
}
export interface RadarChartProps {
    /** Axes of the radar, each with a `label` and numeric `value`, drawn clockwise from the top. */
    data: RadarDataPoint[];
    /** Max value for the scale. Defaults to auto from data. */
    maxValue?: number;
    /** Width and height of the chart in px (minimum 80). Defaults to 240. */
    size?: number;
    /** Number of concentric guide rings. Defaults to 4. */
    rings?: number;
    /** Space in px reserved around the plot for axis labels. Defaults to 18. */
    labelOffset?: number;
    /** Format axis labels before optional truncation. */
    labelFormatter?: (label: string, datum: RadarDataPoint, index: number) => string;
    /** Maximum rendered axis label length. Omit to render the full formatted label. */
    maxLabelLength?: number;
    /** Format values shown on hover. Defaults to `String`. */
    valueFormatter?: (value: number) => string;
    /** Accessible label for the chart. Defaults to "Radar chart". */
    ariaLabel?: string;
    /** Extra classes for the wrapper element. */
    className?: string;
}
export declare function RadarChart({ data, maxValue, size, rings, labelOffset, labelFormatter, maxLabelLength, valueFormatter, ariaLabel, className, }: RadarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=RadarChart.d.ts.map