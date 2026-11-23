import { type ComponentPropsWithRef, type ReactNode } from "react";
export type PopoverPlacement = "top" | "bottom" | "left" | "right";
export type PopoverTriggerProps = Pick<ComponentPropsWithRef<"button">, "ref" | "type" | "onClick" | "aria-haspopup" | "aria-expanded" | "aria-controls">;
export interface PopoverProps extends Omit<ComponentPropsWithRef<"div">, "children"> {
    /** Spread these props onto a focusable button, including its ref. */
    trigger: (props: PopoverTriggerProps) => ReactNode;
    /** Current visibility, controlled by the caller. */
    open: boolean;
    /** Requests that the caller open or close the panel. */
    onOpenChange: (open: boolean) => void;
    /** Preferred side, flipping when there is insufficient room. */
    placement?: PopoverPlacement;
    /** Accessible name of the non-modal dialog. */
    "aria-label": string;
    children: ReactNode;
    /** Additional classes on the popup panel. */
    className?: string;
}
/** An anchored non-modal dialog. Tab remains free to leave the popup. */
export declare function Popover({ trigger, open, onOpenChange, placement, "aria-label": ariaLabel, children, className, ref, id, ...rest }: PopoverProps): import("react/jsx-runtime").JSX.Element;
