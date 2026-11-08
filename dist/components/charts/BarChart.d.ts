export interface BarChartDatum {
    label: string;
    value: number;
}
export interface BarChartProps {
    data: BarChartDatum[];
    height?: number;
    /** Explicit domain maximum. Defaults to the largest positive value. */
    maxValue?: number;
    /** Format values shown at the end of each bar. */
    valueFormatter?: (value: number) => string;
    /** Format left-side labels before optional truncation. */
    labelFormatter?: (label: string, datum: BarChartDatum, index: number) => string;
    /** Maximum rendered label length. Omit to render the full formatted label. */
    maxLabelLength?: number;
    /** Width reserved for left-side labels in the SVG viewBox. */
    labelWidth?: number;
    /** Width reserved for right-side values in the SVG viewBox. */
    valueWidth?: number;
    /** Natural row height before the optional height prop scales the chart. */
    barHeight?: number;
    /** Natural gap between rows before the optional height prop scales the chart. */
    gap?: number;
    ariaLabel?: string;
    className?: string;
}
export declare function BarChart({ data, height, maxValue, valueFormatter, labelFormatter, maxLabelLength, labelWidth, valueWidth, barHeight, gap, ariaLabel, className, }: BarChartProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=BarChart.d.ts.map