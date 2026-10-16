export interface SparkLineProps {
    data: number[];
    width?: number;
    height?: number;
    minValue?: number;
    maxValue?: number;
    strokeWidth?: number;
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
    areaOpacity?: number;
    ariaLabel?: string;
    className?: string;
}
export declare function SparkLine({ data, width, height, minValue, maxValue, strokeWidth, padding, color, area, areaOpacity, ariaLabel, className, }: SparkLineProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=SparkLine.d.ts.map