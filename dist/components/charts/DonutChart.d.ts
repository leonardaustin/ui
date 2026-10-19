export interface DonutSegment {
    name: string;
    value: number;
    color: string;
}
export interface DonutChartProps {
    segments: DonutSegment[];
    size?: number;
    strokeWidth?: number;
    valueFormatter?: (value: number) => string;
    percentageFormatter?: (value: number) => string;
    showLegend?: boolean;
    ariaLabel?: string;
    className?: string;
}
export declare function DonutChart({ segments, size, strokeWidth, valueFormatter, percentageFormatter, showLegend, ariaLabel, className, }: DonutChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DonutChart.d.ts.map