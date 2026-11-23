import type { ComponentPropsWithRef } from "react";
export type LoadingSpinnerSize = "sm" | "md" | "lg";
export interface LoadingSpinnerProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
    /** Additional utility classes appended to the centering wrapper. */
    className?: string;
    /** Size of the spinner icon. Defaults to `md`. */
    size?: LoadingSpinnerSize;
}
export declare function LoadingSpinner({ className, size, ref, ...rest }: LoadingSpinnerProps): import("react/jsx-runtime").JSX.Element;
