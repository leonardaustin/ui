import { type ReactNode } from "react";
type Placement = "top" | "bottom" | "left" | "right";
interface TooltipProps {
    content: string;
    placement?: Placement;
    children: ReactNode;
}
export declare function Tooltip({ content, placement, children, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map