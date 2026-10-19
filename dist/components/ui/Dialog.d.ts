import { type ReactNode, type RefObject } from "react";
export interface DialogProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    /**
     * Optional footer rendered below the children.
     * Typically used with `<DialogActions>` for Cancel + Confirm buttons,
     * but can be any ReactNode.
     *
     * @example
     * ```tsx
     * <Dialog
     *   open={open}
     *   onClose={close}
     *   title="Confirm"
     *   footer={<DialogActions onCancel={close} onConfirm={handle} />}
     * >
     *   <p>Are you sure?</p>
     * </Dialog>
     * ```
     */
    footer?: ReactNode;
    className?: string;
    /**
     * Let the user move the dialog by dragging its title bar. It stays inside
     * the viewport and reopens in its default position. Off below the `md`
     * breakpoint, where the dialog spans the screen.
     */
    draggable?: boolean;
    role?: "dialog" | "alertdialog";
    description?: ReactNode;
    "aria-label"?: string;
    "aria-describedby"?: string;
    initialFocusRef?: RefObject<HTMLElement | null>;
    returnFocusRef?: RefObject<HTMLElement | null>;
    /** Busy dialogs suppress every dismissal path without removing focus. */
    busy?: boolean;
    closeOnEscape?: boolean;
    closeOnOverlayClick?: boolean;
    hideCloseButton?: boolean;
}
export declare function Dialog({ open, onClose, title, children, footer, className, draggable, role, description, "aria-label": ariaLabel, "aria-describedby": describedBy, initialFocusRef, returnFocusRef, busy, closeOnEscape, closeOnOverlayClick, hideCloseButton, }: DialogProps): import("react").ReactPortal | null;
//# sourceMappingURL=Dialog.d.ts.map