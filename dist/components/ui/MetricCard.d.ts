import type { ElementType } from "react";
export interface MetricCardProps {
    label: string;
    value: string | number;
    sub?: string;
    bar?: number;
    icon?: ElementType;
    iconColor?: string;
    className?: string;
}
export declare function MetricCard({ label, value, sub, bar, icon: Icon, iconColor, className, }: MetricCardProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=MetricCard.d.ts.map