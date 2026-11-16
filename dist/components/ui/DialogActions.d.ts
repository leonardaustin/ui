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
    /** Disable both buttons and show busyLabel on the confirm button while an action runs. */
    busy?: boolean;
    /** Confirm button text while busy. Defaults to "Working…". */
    busyLabel?: string;
    /** Ref to the cancel button, e.g. for initial focus. */
    cancelRef?: Ref<HTMLButtonElement>;
    /** Ref to the confirm button, e.g. for initial focus. */
    confirmRef?: Ref<HTMLButtonElement>;
    /** Disable the confirm button without showing the busy state. */
    confirmDisabled?: boolean;
}
export declare function DialogActions({ onCancel, onConfirm, cancelLabel, confirmLabel, confirmVariant, className, busy, busyLabel, cancelRef, confirmRef, confirmDisabled, }: DialogActionsProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DialogActions.d.ts.map