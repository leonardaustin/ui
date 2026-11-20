import type { Rect } from "./rect";
export interface DialogBoxSize {
    width: number;
    height: number;
}
/** The narrowest (px) a user can make a dialog by resizing it. */
export declare const RESIZE_MIN_WIDTH = 280;
/**
 * The least body height (px) a user can leave by resizing: the title bar and
 * footer always fit, plus this much of the (scrolling) body.
 */
export declare const RESIZE_MIN_BODY = 48;
/** How far (px) one arrow-key press on the resize handle resizes. */
export declare const RESIZE_STEP = 10;
/** How far (px) one Shift + arrow-key press resizes. */
export declare const RESIZE_STEP_LARGE = 50;
/**
 * The smallest and largest size a dialog whose top-left corner sits at
 * `left`/`top` may take inside `bounds`, keeping `margin` px from its
 * right and bottom edges. `minimum` is the preferred minimum and `current`
 * the dialog's size now: a dialog that is already smaller than `minimum`
 * (a narrow `className`, say) may stay that small rather than jump bigger,
 * and when the viewport has no room for the minimum, the minimum wins.
 */
export declare function resizeLimits({ left, top }: {
    left: number;
    top: number;
}, current: DialogBoxSize, minimum: DialogBoxSize, bounds: Rect, margin: number): {
    min: DialogBoxSize;
    max: DialogBoxSize;
};
/** Clamps a proposed size between `min` and `max`, rounded to whole px. */
export declare function clampDialogSize(proposed: DialogBoxSize, { min, max }: {
    min: DialogBoxSize;
    max: DialogBoxSize;
}): DialogBoxSize;
/**
 * The size change for a key pressed on the resize handle: ArrowRight and
 * ArrowDown grow the dialog, ArrowLeft and ArrowUp shrink it, by
 * `RESIZE_STEP`, or `RESIZE_STEP_LARGE` with Shift. Any other key returns
 * `null` so it keeps its usual meaning.
 */
export declare function resizeDelta(key: string, large: boolean): DialogBoxSize | null;
//# sourceMappingURL=dialogResize.d.ts.map