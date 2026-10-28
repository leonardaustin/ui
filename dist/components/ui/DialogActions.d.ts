/**
 * DialogActions — a right-aligned button footer for dialogs.
 *
 * Provides a consistent Cancel + Confirm button layout for a `<Dialog>`'s
 * `footer`. The confirm button supports all `Button` variants
 * so it can be used for destructive confirmations (variant="danger") or
 * standard confirmations (variant="primary").
 *
 * @example Standard confirmation
 * ```tsx
 * <Dialog
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   title="Confirm"
 *   footer={
 *     <DialogActions
 *       onCancel={() => setOpen(false)}
 *       onConfirm={handleConfirm}
 *       confirmLabel="Confirm"
 *     />
 *   }
 * >
 *   <p>Are you sure?</p>
 * </Dialog>
 * ```
 *
 * @example Destructive action
 * ```tsx
 * <DialogActions
 *   onCancel={() => setOpen(false)}
 *   onConfirm={handleDelete}
 *   confirmLabel="Delete Account"
 *   confirmVariant="danger"
 * />
 * ```
 */
import type { Ref } from "react";
import { type ButtonProps } from "./Button";
export interface DialogActionsProps {
    /** Called when the Cancel button is clicked. */
    onCancel: () => void;
    /** Called when the Confirm button is clicked. */
    onConfirm: () => void;
    /** Label for the cancel button. Defaults to "Cancel". */
    cancelLabel?: string;
    /** Label for the confirm button. Defaults to "Confirm". */
    confirmLabel?: string;
    /**
     * Visual variant for the confirm button.
     * Use "danger" for destructive actions like deleting an account.
     * Defaults to "primary".
     */
    confirmVariant?: ButtonProps["variant"];
    /** Additional utility classes for the root container. */
    className?: string;
    busy?: boolean;
    busyLabel?: string;
    cancelRef?: Ref<HTMLButtonElement>;
    confirmRef?: Ref<HTMLButtonElement>;
    confirmDisabled?: boolean;
}
export declare function DialogActions({ onCancel, onConfirm, cancelLabel, confirmLabel, confirmVariant, className, busy, busyLabel, cancelRef, confirmRef, confirmDisabled, }: DialogActionsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DialogActions.d.ts.map