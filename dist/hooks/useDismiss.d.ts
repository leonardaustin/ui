import { type RefObject } from "react";
/**
 * Dismisses on outside click and/or Escape key press.
 * Supports an optional list of refs to exclude from the outside-click check
 * (e.g. a trigger element that toggles the popover).
 */
export declare function useDismiss(open: boolean, onClose: () => void, refs: RefObject<HTMLElement | null>[], excludeRefs?: RefObject<HTMLElement | null>[]): void;
//# sourceMappingURL=useDismiss.d.ts.map