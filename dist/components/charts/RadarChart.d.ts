export interface RadarDataPoint {
    label: string;
    value: number;
}
export interface RadarChartProps {
    data: RadarDataPoint[];
    /** Max value for the scale. Defaults to auto from data. */
    maxValue?: number;
    size?: number;
    rings?: number;
    labelOffset?: number;
    labelFormatter?: (label: string, datum: RadarDataPoint, index: number) => string;
    maxLabelLength?: number;
    valueFormatter?: (value: number) => string;
    ariaLabel?: string;
    className?: string;
}
export declare function RadarChart({ data, maxValue, size, rings, labelOffset, labelFormatter, maxLabelLength, valueFormatter, ariaLabel, className, }: RadarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=RadarChart.d.ts.map