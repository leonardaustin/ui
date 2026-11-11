import { type DismissReason } from "./useDismiss";
/**
 * Why a popover closed: `useDismiss`'s reasons, a choice made in the popup
 * (`select`), the trigger toggling it (`toggle`), or its trigger scrolling
 * out of view (`anchor-hidden`).
 */
export type PopoverCloseReason = DismissReason | "select" | "toggle" | "anchor-hidden";
export interface PopoverOptions {
    /** The trigger's `aria-haspopup`: what kind of popup it opens. */
    haspopup: "listbox" | "dialog";
    /** Size the popup to the trigger's width (a listbox). */
    matchWidth?: boolean;
    /** A disabled field can't be open: the popup reads as closed. */
    disabled?: boolean;
    /** The field has a visible label (rendered with `labelId`). */
    labelled?: boolean;
}
/**
 * Popup chrome shared by the select-like fields. The popup is `fixed` (placed
 * by useAnchoredPopup) but rendered in place, after the trigger, so it keeps
 * its tab order and stays inside a surrounding Dialog's focus trap.
 */
export declare const POPOVER_PANEL_CLASS = "bg-bg-tertiary border-border-strong animate-scale-in fixed top-0 left-0 z-[100] rounded-md border shadow-lg";
/**
 * The trigger/popup wiring shared by SelectDropdown, Combobox, DatePicker,
 * DateRangePicker and DateTimePicker:
 *
 * - open state, closed by an outside click or Escape (`useDismiss`, so Escape
 *   reaches the popup through the overlay stack and a popup in a Dialog
 *   closes alone);
 * - placement against `anchorRef` (`useAnchoredPopup`: below the trigger,
 *   flipping above and clamping on screen, following scrolls, closing when
 *   the trigger scrolls out of view);
 * - focus back on the trigger on Escape and on a choice, and when the popup
 *   closes for a hidden trigger while focus is inside it;
 * - ids and the trigger's `aria-haspopup`/`aria-expanded`/`aria-controls`
 *   plus `aria-labelledby` (label then trigger, so the name reads "Label,
 *   value").
 *
 * Wire `rootRef` to the field's root (the label included, so clicking it
 * doesn't dismiss), `anchorRef` to the box the popup lines up with,
 * `triggerRef` and `triggerAria` to the trigger button, `popupRef` to the
 * popup panel, and `popupId` to the element `aria-controls` names (the
 * listbox or dialog). Destructure the result: the React compiler's lint
 * treats every property of an object holding refs as a ref.
 */
export declare function usePopover({ haspopup, matchWidth, disabled, labelled, }: PopoverOptions): {
    open: boolean;
    /** Opens the popup (a no-op while disabled). */
    show: () => void;
    close: (reason?: PopoverCloseReason) => void;
    rootRef: import("react").RefObject<HTMLDivElement | null>;
    anchorRef: import("react").RefObject<HTMLDivElement | null>;
    triggerRef: import("react").RefObject<HTMLButtonElement | null>;
    popupRef: import("react").RefObject<HTMLDivElement | null>;
    labelId: string;
    triggerId: string;
    popupId: string;
    /**
     * The trigger's id and popup ARIA. With `labelled`, `aria-labelledby`
     * names it by the visible label followed by its own text (the value).
     */
    triggerAria: {
        id: string;
        "aria-haspopup": "dialog" | "listbox";
        "aria-expanded": boolean;
        "aria-controls": string | undefined;
        "aria-labelledby": string | undefined;
    };
};
//# sourceMappingURL=usePopover.d.ts.map