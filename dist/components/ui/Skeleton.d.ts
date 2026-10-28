import type { CSSProperties, HTMLAttributes } from "react";
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
}
/** Decorative placeholder. Label the surrounding loading region and set aria-busy there. */
export declare function Skeleton({ className, width, height, style, ...props }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Skeleton.d.ts.map