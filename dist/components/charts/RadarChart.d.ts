interface RadarDataPoint {
    label: string;
    value: number;
}
interface RadarChartProps {
    data: RadarDataPoint[];
    /** Max value for the scale. Defaults to auto from data. */
    maxValue?: number;
    size?: number;
}
export declare function RadarChart({ data, maxValue, size }: RadarChartProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadarChart.d.ts.map