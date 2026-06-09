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
 * Dismisses on outside click and/or Escape key press.
 * Supports an optional list of refs to exclude from the outside-click check
 * (e.g. a trigger element that toggles the popover).
 */
export declare function useDismiss(open: boolean, onClose: () => void, refs: RefObject<HTMLElement | null>[], excludeRefs?: RefObject<HTMLElement | null>[], options?: UseDismissOptions): void;
//# sourceMappingURL=useDismiss.d.ts.map