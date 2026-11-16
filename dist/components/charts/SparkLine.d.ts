export interface SparkLineProps {
    /** Values to plot left to right. Renders nothing with fewer than two points. */
    data: number[];
    /** Width in px. Defaults to 60. */
    width?: number;
    /** Height in px. Defaults to 20. */
    height?: number;
    /** Lower bound of the Y scale. Defaults to the smallest value in `data`. */
    minValue?: number;
    /** Upper bound of the Y scale. Defaults to the largest value in `data`. */
    maxValue?: number;
    /** Line thickness in px. Defaults to 1.5. */
    strokeWidth?: number;
    /** Inset in px between the line and the edge of the SVG. Defaults to 1. */
    padding?: number;
    /**
     * Stroke (and area fill) color. Defaults to the accent color
     * (`var(--accent)`), matching prior behavior. Pass `"currentColor"` to inherit
     * the surrounding text color, or any CSS color/variable to override.
     */
    color?: string;
    /**
     * Render a translucent area fill beneath the line. Off by default, preserving
     * the plain-line appearance.
     */
    area?: boolean;
    /** Opacity of the area fill when `area` is on. Defaults to 0.15. */
    areaOpacity?: number;
    /** Accessible label for the chart. Defaults to "Sparkline chart". */
    ariaLabel?: string;
    /** Extra classes for the `<svg>`. */
    className?: string;
}
export declare function SparkLine({ data, width, height, minValue, maxValue, strokeWidth, padding, color, area, areaOpacity, ariaLabel, className, }: SparkLineProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=SparkLine.d.ts.map