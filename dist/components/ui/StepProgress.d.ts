import type { ComponentPropsWithRef } from "react";
export interface StepProgressProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
    /** Ordered steps; `label` shows under each circle (sm and up) with an optional `description` beneath. */
    steps: {
        label: string;
        description?: string;
    }[];
    /** Zero-indexed current step. Steps before it render as completed. */
    currentStep: number;
    /** Extra classes for the root element. */
    className?: string;
}
export declare function StepProgress({ steps, currentStep, className, ref, ...rest }: StepProgressProps): import("react/jsx-runtime").JSX.Element;
