import { type HTMLAttributes, type ReactNode, type Ref } from "react";
type Placement = "top" | "bottom" | "left" | "right";
export interface TooltipProps extends Omit<HTMLAttributes<HTMLElement>, "content" | "children"> {
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
     * the tooltip's id is added to its `aria-describedby`, and any other props
     * given to the Tooltip (and its `ref`) are passed on to it. A component
     * child must pass these on to a DOM element for them to take effect.
     */
    children: ReactNode;
    /**
     * Passed on to the child element (or the wrapper, when the child isn't a
     * single element), merged with the child's own ref.
     */
    ref?: Ref<HTMLElement>;
}
export declare function Tooltip({ content, placement, children, ref: outer, ...passed }: TooltipProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tooltip.d.ts.map