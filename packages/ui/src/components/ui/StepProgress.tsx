import { Check } from "lucide-react";

import { cn } from "../../lib/cn";

export interface StepProgressProps {
  steps: { label: string; description?: string }[];
  /** Zero-indexed current step. Steps before it render as completed. */
  currentStep: number;
  className?: string;
}

export function StepProgress({
  steps,
  currentStep,
  className,
}: StepProgressProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-1 items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-xs",
                index < currentStep && "bg-accent text-text-on-accent",
                index === currentStep &&
                  "border-accent text-accent border-2 font-semibold",
                index > currentStep &&
                  "bg-bg-tertiary border-border text-text-tertiary border",
              )}
            >
              {index < currentStep ? <Check className="h-4 w-4" /> : index + 1}
            </div>
            <span
              className={cn(
                "text-2xs mt-1.5 hidden sm:block",
                index === currentStep && "text-accent",
                index < currentStep && "text-text-primary",
                index > currentStep && "text-text-tertiary",
              )}
            >
              {step.label}
            </span>
            {step.description && (
              <span className="text-2xs text-text-secondary mt-0.5 hidden sm:block">
                {step.description}
              </span>
            )}
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "mx-2 h-0.5 flex-1",
                index < currentStep ? "bg-accent" : "bg-border",
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
