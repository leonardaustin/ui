import type { ComponentPropsWithRef, CSSProperties } from "react";
export interface SkeletonProps extends ComponentPropsWithRef<"div"> {
    /** CSS width of the placeholder. */
    width?: CSSProperties["width"];
    /** CSS height of the placeholder. */
    height?: CSSProperties["height"];
}
/** Decorative placeholder. Label the surrounding loading region and set aria-busy there. */
export declare function Skeleton({ className, width, height, style, ref, ...props }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
