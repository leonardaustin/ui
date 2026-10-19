export declare function clamp(value: number, min: number, max: number): number;
export declare function formatCompactValue(value: number): string;
export declare function resolveChartColor(color: string | undefined): string;
export declare function getLabelIndices(length: number, labelCount: number): number[];
export declare function getPositiveValue(value: number): number;
export interface ChartTooltipPosition {
    height: number;
    placement: "above" | "below";
    width: number;
    x: number;
    y: number;
}
export interface FloatingTooltipStyle {
    left: number;
    minWidth: number;
    top: number;
    transform: string;
    width: number;
}
interface TooltipSizeOptions {
    maxWidth?: number;
    minWidth?: number;
    paddingX?: number;
}
interface TooltipPositionOptions {
    boundsHeight: number;
    boundsWidth: number;
    height: number;
    margin?: number;
    offset?: number;
    width: number;
}
interface FloatingTooltipStyleOptions extends TooltipPositionOptions {
    anchorX: number;
    anchorY: number;
}
export declare function truncateChartLabel(label: string, maxLength?: number): string;
export declare function estimateTextWidth(text: string, fontSize?: number): number;
export declare function estimateTooltipWidth(rows: string[], { maxWidth, minWidth, paddingX }?: TooltipSizeOptions): number;
export declare function getSvgTooltipPosition(anchorX: number, anchorY: number, { boundsHeight, boundsWidth, height, margin, offset, width, }: TooltipPositionOptions): ChartTooltipPosition;
export declare function getFloatingTooltipStyle({ anchorX, anchorY, boundsHeight, boundsWidth, height, margin, offset, width, }: FloatingTooltipStyleOptions): FloatingTooltipStyle;
export {};
//# sourceMappingURL=chartUtils.d.ts.map