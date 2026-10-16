import { type ReactNode } from "react";
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
}
export declare function Dialog({ open, onClose, title, children, footer, className, draggable, }: DialogProps): import("react").ReactPortal | null;
//# sourceMappingURL=Dialog.d.ts.map