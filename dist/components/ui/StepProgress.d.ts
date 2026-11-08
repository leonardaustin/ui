export interface StepProgressProps {
    steps: {
        label: string;
        description?: string;
    }[];
    /** Zero-indexed current step. Steps before it render as completed. */
    currentStep: number;
    className?: string;
}
export declare function StepProgress({ steps, currentStep, className, }: StepProgressProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=StepProgress.d.ts.map