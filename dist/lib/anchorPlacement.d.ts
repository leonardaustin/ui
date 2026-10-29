import type { Rect } from "./rect";
export type AnchorSide = "top" | "bottom" | "left" | "right";
/**
 * A fixed side (flipping to the opposite side when it doesn't fit), or
 * `auto`: each side from the most room to the least, using the first that
 * fits.
 */
export type AnchorPlacement = AnchorSide | "auto";
export interface PlacementOptions {
    /** The floating box's size. */
    size: {
        width: number;
        height: number;
    };
    /** The visible area the box must stay inside. */
    bounds: Rect;
    /** Gap (px) kept between the box and every edge of `bounds`. */
    margin: number;
    /** Gap (px) kept between the box and the anchor. */
    gap: number;
}
export interface PlacedBox {
    side: AnchorSide;
    /** Viewport coordinates for the floating box's top-left corner. */
    left: number;
    top: number;
}
/** Free space between the anchor and the edge of `bounds` on one side. */
export declare function roomOnSide(anchor: Rect, bounds: Rect, side: AnchorSide): number;
/**
 * Places the box `gap` px from the anchor on one side, or returns null when
 * it doesn't fit there wholly inside `bounds` less `margin` (including when
 * the anchor itself is off screen). Along the cross-axis the box is centred
 * on the anchor and then shifted to stay inside the margins.
 */
export declare function placeOnSide(side: AnchorSide, anchor: Rect, { size: { width, height }, bounds, margin, gap }: PlacementOptions): PlacedBox | null;
/**
 * Resolves a placement: a fixed side, then its opposite (a flip); `auto`
 * tries every side from the most room to the least. Returns null (the
 * caller centres the box) without an anchor, when the anchor isn't visible
 * within `bounds`, or when no candidate side fits.
 */
export declare function placeAgainstAnchor(placement: AnchorPlacement, anchor: Rect | null, options: PlacementOptions): PlacedBox | null;
//# sourceMappingURL=anchorPlacement.d.ts.map