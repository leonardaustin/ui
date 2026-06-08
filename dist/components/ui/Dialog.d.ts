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
}
export declare function Dialog({ open, onClose, title, children, footer, className, }: DialogProps): import("react").ReactPortal | null;
//# sourceMappingURL=Dialog.d.ts.map