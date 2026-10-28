import { type ReactNode, type RefObject } from "react";
import { type AnchorPlacement } from "../../lib/anchorPlacement";
/** Where a Dialog opens: the centred layout, or beside its anchor. */
export type DialogPlacement = "center" | AnchorPlacement;
export type DialogSize = "sm" | "md" | "lg" | "xl";
export interface DialogProps {
    /** Maximum width: sm 400px, md 576px, lg 768px, xl 1024px. */
    size?: DialogSize;
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
     * Let the user move the dialog by dragging its title bar. It keeps a
     * theme-spacing margin from the viewport edges and reopens in its default
     * position unless `rememberPosition` is set. Off below the `md`
     * breakpoint.
     */
    draggable?: boolean;
    /**
     * With `draggable`, reopen the dialog at the screen position the user last
     * dragged it to, instead of its default (or anchored) position. Kept in
     * memory for this Dialog instance only (not persisted), pulled back inside
     * the viewport if the window has shrunk, and cleared below the `md`
     * breakpoint. Ignored without `draggable`.
     */
    rememberPosition?: boolean;
    /**
     * Where the dialog opens. `center` (default) is the usual layout: centred
     * horizontally, near the top of the viewport. `top`, `bottom`, `left` and
     * `right` open it beside `anchorRef`, flipping to the opposite side when
     * it doesn't fit there; `auto` tries each side from the most room to the
     * least and uses the first that fits. When no candidate side fits, or
     * there's no usable anchor, it falls back to `center`. Re-checked when the
     * window resizes or scrolls and when the dialog changes size. Ignored
     * below the `md` breakpoint.
     */
    placement?: DialogPlacement;
    /**
     * The element an anchored `placement` opens against, usually the button
     * that opened the dialog. Ignored when `placement` is `center`. If it's
     * unset, detached or hidden, the element that had focus when the dialog
     * opened is used instead; Safari doesn't focus buttons on click, so pass
     * `anchorRef` for reliable placement.
     */
    anchorRef?: RefObject<HTMLElement | null>;
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
export declare function Dialog({ open, onClose, title, children, footer, className, size, draggable, rememberPosition, placement, anchorRef, role, description, "aria-label": ariaLabel, "aria-describedby": describedBy, initialFocusRef, returnFocusRef, busy, closeOnEscape, closeOnOverlayClick, hideCloseButton, }: DialogProps): import("react").ReactPortal | null;
//# sourceMappingURL=Dialog.d.ts.map