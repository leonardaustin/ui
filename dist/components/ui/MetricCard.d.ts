import type { ElementType } from "react";
export interface MetricCardProps {
    /** Small uppercase caption naming the metric. */
    label: string;
    /** The headline figure. */
    value: string | number;
    /** Secondary line of muted text below the value. */
    sub?: string;
    /**
     * Optional trend indicator rendered below the value. `value` is the change
     * string (e.g. "+12.5%"), `label` is the supporting context (e.g. "vs last
     * week"), and `tone` controls the color of the change: positive (green),
     * negative (red), or neutral (muted).
     */
    trend?: {
        label: string;
        tone: "negative" | "neutral" | "positive";
        value: string;
    };
    /** Progress bar fill as a percentage, clamped to 0-100. Omit to hide the bar. */
    bar?: number;
    /** Icon component drawn as a large faint watermark in the corner. */
    icon?: ElementType;
    /** Class name applied to the icon, typically a text colour utility. */
    iconColor?: string;
    /** Additional utility classes appended to the root element. */
    className?: string;
}
export declare function MetricCard({ label, value, sub, trend, bar, icon: Icon, iconColor, className, }: MetricCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MetricCard.d.ts.map