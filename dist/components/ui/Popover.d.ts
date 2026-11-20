import { type ComponentPropsWithRef, type ReactNode } from "react";
export type PopoverPlacement = "top" | "bottom" | "left" | "right";
export type PopoverTriggerProps = Pick<ComponentPropsWithRef<"button">, "ref" | "type" | "onClick" | "aria-haspopup" | "aria-expanded" | "aria-controls">;
export interface PopoverProps {
    /** Spread these props onto a focusable button, including its ref. */
    trigger: (props: PopoverTriggerProps) => ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    /** Preferred side, flipping when there is insufficient room. */
    placement?: PopoverPlacement;
    /** Accessible name of the non-modal dialog. */
    ariaLabel: string;
    children: ReactNode;
    /** Additional classes on the popup panel. */
    className?: string;
}
/** An anchored non-modal dialog. Tab remains free to leave the popup. */
export declare function Popover({ trigger, open, onOpenChange, placement, ariaLabel, children, className, }: PopoverProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Popover.d.ts.map