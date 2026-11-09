import { type ReactNode } from "react";
type Placement = "top" | "bottom" | "left" | "right";
interface TooltipProps {
    /** Text shown in the tooltip. Plain text only. */
    content: string;
    /**
     * Which side of the trigger the tooltip appears on, centred on that side.
     * Defaults to `top`. It does not flip when there is no room.
     */
    placement?: Placement;
    /**
     * The trigger. The tooltip shows on hover or focus of anything inside it
     * and hides on leave, blur or Escape. When this is a single React element,
     * the tooltip's id is added to its `aria-describedby`.
     */
    children: ReactNode;
}
export declare function Tooltip({ content, placement, children, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map