export interface RadialSegment {
    label: string;
    value: number;
    max: number;
    color: string;
}
export interface RadialBarChartProps {
    segments: RadialSegment[];
    size?: number;
    strokeWidth?: number;
    gap?: number;
    valueFormatter?: (value: number) => string;
    percentageFormatter?: (value: number) => string;
    showLegend?: boolean;
    ariaLabel?: string;
    className?: string;
}
export declare function RadialBarChart({ segments, size, strokeWidth, gap, valueFormatter, percentageFormatter, showLegend, ariaLabel, className, }: RadialBarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=RadialBarChart.d.ts.map