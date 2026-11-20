import { type ReactNode, type RefObject } from "react";
import { type AnchorPlacement } from "../../lib/anchorPlacement";
/** Where a Dialog opens: the centred layout, or beside its anchor. */
export type DialogPlacement = "center" | AnchorPlacement;
export type DialogSize = "sm" | "md" | "lg" | "xl";
export interface DialogProps {
    /** Maximum width: sm 400px, md 576px, lg 768px, xl 1024px. Defaults to `sm`. */
    size?: DialogSize;
    /** Whether the dialog is shown. It renders nothing when `false`. */
    open: boolean;
    /**
     * Called when the user asks to close: Escape (unless `closeOnEscape` is
     * `false`), a click on the backdrop (unless `closeOnOverlayClick` is
     * `false`) or the close button. None of these fire while `busy`. The
     * dialog doesn't close itself; set `open` to `false` here.
     */
    onClose: () => void;
    /**
     * Heading shown in the title bar, which also names the dialog
     * (`aria-labelledby`). Without it, the dialog is named by `aria-label`, or
     * "Dialog" when that is unset too.
     */
    title?: string;
    /** The dialog body. */
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
    /** Additional utility classes for the dialog panel. */
    className?: string;
    /**
     * Let the user move the dialog by dragging its title bar or the grip
     * handle shown at its bottom-left corner (mouse, touch or pen). The grip is
     * focusable ("Move dialog"): the arrow keys nudge the dialog 10px, or 50px
     * with Shift. It keeps a theme-spacing margin from the viewport edges and
     * reopens in its default position unless `rememberPosition` is set. Off
     * below the `md` breakpoint, where the grip is hidden.
     */
    draggable?: boolean;
    /**
     * Let the user resize the dialog from the handle shown at its bottom-right
     * corner (mouse, touch or pen). The top-left corner stays put while it
     * resizes, and the body scrolls when it's shorter than its content. The
     * handle is focusable ("Resize dialog"): the arrow keys resize the dialog
     * 10px, or 50px with Shift (Right/Down grow it, Left/Up shrink it). It
     * can't get narrower than 280px or shorter than its title bar, footer and a
     * little body, and keeps a theme-spacing margin from the viewport edges.
     * `size` and `className` set the opening size; a resize overrides them
     * until the dialog closes. It reopens at that natural size unless
     * `rememberPosition` is set. Off below the `md` breakpoint, where the
     * handle is hidden.
     */
    resizable?: boolean;
    /**
     * With `draggable` or `resizable`, reopen the dialog as the user left it:
     * at the screen position they last moved it to (by drag or keyboard), and
     * at the size they last resized it to, instead of its default (or
     * anchored) position and natural size. Kept in memory for this Dialog
     * instance only (not persisted), pulled back inside the viewport if the
     * window has shrunk, and cleared below the `md` breakpoint. Ignored
     * without `draggable` or `resizable`.
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
    /**
     * ARIA role. Use `alertdialog` for an urgent message that needs a response,
     * such as a destructive confirmation. Defaults to `dialog`.
     */
    role?: "dialog" | "alertdialog";
    /**
     * Explanatory text shown at the top of the body, above `children`, and
     * linked to the dialog with `aria-describedby`.
     */
    description?: ReactNode;
    /** Accessible name for a dialog without a `title`. Ignored when `title` is set. */
    "aria-label"?: string;
    /**
     * Id of another element that describes the dialog. It is added to the
     * `description` id when both are given.
     */
    "aria-describedby"?: string;
    /**
     * The element to focus when the dialog opens. Defaults to the first
     * focusable element inside it. Ignored if it isn't inside the dialog.
     */
    initialFocusRef?: RefObject<HTMLElement | null>;
    /**
     * The element to return focus to when the dialog closes. Defaults to the
     * element that had focus when it opened.
     */
    returnFocusRef?: RefObject<HTMLElement | null>;
    /**
     * Busy dialogs suppress every dismissal path without removing focus:
     * Escape, backdrop click and the close button do nothing, and the close
     * button is marked `aria-disabled`. Use it while an action is in flight.
     */
    busy?: boolean;
    /**
     * Whether Escape calls `onClose`. Defaults to `true`. When `false`, Escape
     * does nothing and, while this dialog is on top, doesn't reach a dialog or
     * menu beneath it.
     */
    closeOnEscape?: boolean;
    /** Whether a click on the backdrop calls `onClose`. Defaults to `true`. */
    closeOnOverlayClick?: boolean;
    /**
     * Hide the close button in the title bar. Defaults to `false`. Leave the
     * user another way to close the dialog, such as `footer` actions.
     */
    hideCloseButton?: boolean;
}
export declare function Dialog({ open, onClose, title, children, footer, className, size, draggable, resizable, rememberPosition, placement, anchorRef, role, description, "aria-label": ariaLabel, "aria-describedby": describedBy, initialFocusRef, returnFocusRef, busy, closeOnEscape, closeOnOverlayClick, hideCloseButton, }: DialogProps): import("react").ReactPortal | null;
//# sourceMappingURL=Dialog.d.ts.map