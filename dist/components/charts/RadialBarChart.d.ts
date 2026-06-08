interface RadialSegment {
    label: string;
    value: number;
    max: number;
    color: string;
}
interface RadialBarChartProps {
    segments: RadialSegment[];
    size?: number;
}
export declare function RadialBarChart({ segments, size }: RadialBarChartProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadialBarChart.d.ts.map