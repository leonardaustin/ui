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
//# sourceMappingURL=dialogDrag.d.ts.map