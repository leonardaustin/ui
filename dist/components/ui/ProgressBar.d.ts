import { type ProgressHTMLAttributes } from "react";
export interface ProgressBarProps extends Omit<ProgressHTMLAttributes<HTMLProgressElement>, "value" | "max" | "children" | "aria-label" | "aria-labelledby"> {
    /** Accessible label, also displayed above the progress indicator. */
    label: string;
    /** Omit for indeterminate progress. Values outside the range are clamped. */
    value?: number;
    min?: number;
    max?: number;
    /** Theme colour used for the filled portion. */
    color?: "accent" | "green" | "blue" | "yellow" | "red";
    /** Overlay diagonal stripes on the fill. */
    striped?: boolean;
    /** Animate stripes or indeterminate progress; respects reduced motion. */
    animated?: boolean;
}
/** Native progress semantics. Announce workflow milestones separately rather than every percentage change. */
export declare const ProgressBar: import("react").ForwardRefExoticComponent<ProgressBarProps & import("react").RefAttributes<HTMLProgressElement>>;
//# sourceMappingURL=ProgressBar.d.ts.map