import { type RefObject } from "react";
import { type AnchorAlign, type AnchorSide } from "../lib/anchorPlacement";
export interface AnchoredPopupOptions {
    /** Preferred side of the anchor; flips to the opposite side when cramped. */
    side: AnchorSide;
    /** Cross-axis alignment against the anchor. Defaults to `center`. */
    align?: AnchorAlign;
    /** Gap (px) between the popup and the anchor. Defaults to 4. */
    gap?: number;
    /** Gap (px) kept from the viewport edges. Defaults to 8. */
    margin?: number;
    /**
     * Called (instead of re-placing) when a scroll or resize leaves the anchor
     * wholly outside the viewport or a clipping ancestor, typically to close
     * the popup rather than leave it clamped to a screen edge, detached from
     * its trigger. Without it the popup stays clamped on screen.
     */
    onAnchorHidden?: () => void;
    /**
     * Sizes the popup to the anchor's width (a listbox under a select-style
     * trigger); the width is written to the popup's style.
     */
    matchAnchorWidth?: boolean;
}
/**
 * Keeps a `position: fixed` popup placed against its anchor while `open`,
 * using `placePopup`: the preferred side, a flip to the opposite side, then a
 * clamp that keeps it on screen. It re-places on window resize, on any scroll
 * (capture, so scrolling containers count) and when the popup or anchor
 * changes size; see `onAnchorHidden` for an anchor scrolled out of view.
 *
 * The popup can be portalled or rendered in place. In place, an ancestor that
 * is the containing block for fixed elements (a transform, translate, filter
 * or containment) is allowed for, so the popup still lands on the anchor.
 * Such an ancestor can come and go with no layout event (an open animation
 * ending, a dragged Dialog's translate), so while open the anchor's box and
 * the fixed origin are also checked once a frame (two rect reads) and on any
 * animationend/transitionend, re-placing only when either has moved.
 *
 * The popup's `left`/`top` are written straight to its style (no re-render),
 * before paint; don't also set them from React. `data-side` records the side
 * used. Sizes come from `offsetWidth`/`offsetHeight`, so an open animation's
 * scale doesn't skew them.
 */
export declare function useAnchoredPopup(open: boolean, anchorRef: RefObject<Element | null>, popupRef: RefObject<HTMLElement | null>, { side, align, gap, margin, onAnchorHidden, matchAnchorWidth, }: AnchoredPopupOptions): void;
//# sourceMappingURL=useAnchoredPopup.d.ts.map