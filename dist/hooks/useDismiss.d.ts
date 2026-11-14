import { type RefObject } from "react";
export interface UseDismissOptions {
    /**
     * Whether an outside click dismisses. Defaults to true. Set false to "pin"
     * the surface open so only Escape (or a trigger toggle) closes it — e.g. a
     * popover meant to persist across background interactions.
     */
    outsideClick?: boolean;
}
/**
 * Why `useDismiss` closed the surface: an outside click (focus is going
 * wherever the user clicked) or Escape (the surface may want to return focus
 * to its trigger).
 */
export type DismissReason = "outside-click" | "escape";
/**
 * Dismisses on outside click and/or Escape key press. Escape reaches the
 * surface only while it's the top-most open overlay (see useOverlayEscape).
 * Supports an optional list of refs to exclude from the outside-click check
 * (e.g. a trigger element that toggles the popover). Returns the overlay node
 * to provide through OverlayContext for nested overlays.
 */
export declare function useDismiss(open: boolean, onClose: (reason: DismissReason) => void, refs: RefObject<HTMLElement | null>[], excludeRefs?: RefObject<HTMLElement | null>[], options?: UseDismissOptions): import("../lib/overlayStack").OverlayNode;
//# sourceMappingURL=useDismiss.d.ts.map