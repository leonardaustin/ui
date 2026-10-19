export interface DragOffset {
    x: number;
    y: number;
}
/** A viewport-relative box, as returned by `getBoundingClientRect()`. */
export interface DragRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
/** Gap kept between the dialog and the edge of the viewport. */
export declare const DRAG_MARGIN = 8;
/**
 * Clamps a proposed offset. `dialog` and `handle` are measured while the
 * dialog sits at `origin`, and `bounds` is the visible area.
 */
export declare function clampDragOffset(proposed: DragOffset, origin: DragOffset, dialog: DragRect, handle: DragRect, bounds: DragRect, margin?: number): DragOffset;
/** The CSS `translate` value for an offset ("" at the opening position). */
export declare function dragTranslate({ x, y }: DragOffset): string;
//# sourceMappingURL=dialogDrag.d.ts.map