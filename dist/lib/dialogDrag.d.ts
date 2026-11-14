import type { Rect } from "./rect";
export interface DragOffset {
    x: number;
    y: number;
}
/**
 * Fallback gap (px) kept between the dialog and the edge of the viewport,
 * used when the `--spacing` token can't be read.
 */
export declare const DRAG_MARGIN = 8;
/**
 * The gap is this many `--spacing` steps (the density token behind the
 * `p-*`/`m-*` utilities), so `2` is the `p-2` gap: 8px at the default
 * density, and it follows the theme's density and the root font size.
 */
export declare const DRAG_MARGIN_STEPS = 2;
/**
 * Turns a computed `--spacing` value (e.g. `"0.25rem"` or `"4px"`) into the
 * drag margin in px. Anything unreadable falls back to `DRAG_MARGIN`.
 */
export declare function dragMarginFromSpacing(spacing: string, rootFontSize: number): number;
/**
 * Clamps a proposed offset. `dialog` and `handle` are measured while the
 * dialog sits at `origin`, `bounds` is the visible area and `margin` is the
 * gap (px) to keep inside it.
 */
export declare function clampDragOffset(proposed: DragOffset, origin: DragOffset, dialog: Rect, handle: Rect, bounds: Rect, margin: number): DragOffset;
/** The CSS `translate` value for an offset ("" at offset 0, the layout spot). */
export declare function dragTranslate({ x, y }: DragOffset): string;
/** How far (px) one arrow-key press on the move handle nudges the dialog. */
export declare const NUDGE_STEP = 10;
/** How far (px) one Shift + arrow-key press nudges the dialog. */
export declare const NUDGE_STEP_LARGE = 50;
/**
 * The offset change for a key pressed on the move handle: the arrow keys
 * nudge by `NUDGE_STEP`, or `NUDGE_STEP_LARGE` with Shift. Any other key
 * returns `null` so it keeps its usual meaning.
 */
export declare function nudgeDelta(key: string, large: boolean): DragOffset | null;
//# sourceMappingURL=dialogDrag.d.ts.map