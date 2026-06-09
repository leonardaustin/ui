interface DonutSegment {
    name: string;
    value: number;
    color: string;
}
interface DonutChartProps {
    segments: DonutSegment[];
    size?: number;
}
export declare function DonutChart({ segments, size }: DonutChartProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DonutChart.d.ts.map