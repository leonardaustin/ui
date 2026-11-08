import type { ElementType } from "react";
export interface MetricCardProps {
    label: string;
    value: string | number;
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
    bar?: number;
    icon?: ElementType;
    iconColor?: string;
    className?: string;
}
export declare function MetricCard({ label, value, sub, trend, bar, icon: Icon, iconColor, className, }: MetricCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MetricCard.d.ts.map