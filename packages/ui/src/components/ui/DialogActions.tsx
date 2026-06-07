/**
 * DialogActions — a right-aligned button footer for dialogs.
 *
 * Provides a consistent Cancel + Confirm button layout used inside
 * `<Dialog>` components. The confirm button supports all `Button` variants
 * so it can be used for destructive confirmations (variant="danger") or
 * standard confirmations (variant="primary").
 *
 * @example Standard confirmation
 * ```tsx
 * <Dialog open={open} onClose={() => setOpen(false)} title="Confirm">
 *   <p>Are you sure?</p>
 *   <DialogActions
 *     onCancel={() => setOpen(false)}
 *     onConfirm={handleConfirm}
 *     confirmLabel="Confirm"
 *   />
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

import { cn } from "../../lib/cn";
import { Button, type ButtonProps } from "./Button";

interface DialogActionsProps {
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
}

export function DialogActions({
  onCancel,
  onConfirm,
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  confirmVariant = "primary",
  className,
}: DialogActionsProps) {
  return (
    <div className={cn("flex justify-end gap-2", className)}>
      <Button variant="ghost" size="sm" onClick={onCancel}>
        {cancelLabel}
      </Button>
      <Button variant={confirmVariant} size="sm" onClick={onConfirm}>
        {confirmLabel}
      </Button>
    </div>
  );
}
