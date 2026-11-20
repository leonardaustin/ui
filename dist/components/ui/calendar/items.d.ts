import type { CSSProperties, KeyboardEvent, MouseEvent } from "react";
import { type CalendarAvailability, type CalendarEvent } from "../../../lib/calendar";
import type { CalendarDraft } from "./types";
interface EventBoxProps {
    event: CalendarEvent;
    style: CSSProperties;
    /** Resize handle edge, or none. */
    resizeEdge?: "bottom" | "right";
    compact: boolean;
    /** Title plus one time · status line (timeline rows). */
    dense?: boolean;
    continuesBefore?: boolean;
    continuesAfter?: boolean;
    dragging?: boolean;
    onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
    /**
     * Click handler. Boxes inside the pointer-handled grid only need it for
     * assistive-technology activation (a synthetic click, `detail === 0`).
     */
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}
/** A positioned event in the time grid, all-day row or timeline. */
export declare function EventBox({ event, style, resizeEdge, compact, dense, continuesBefore, continuesAfter, dragging, onKeyDown, onClick, }: EventBoxProps): import("react/jsx-runtime").JSX.Element;
interface BlockBoxProps {
    block: CalendarAvailability;
    style: CSSProperties;
    resizeEdge?: "bottom" | "right";
    continuesAfter?: boolean;
    dragging?: boolean;
    onKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
    /** Like `EventBox`'s `onClick`. */
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}
/**
 * An availability block. In the events layer it's a passive background tint;
 * with `editLayer="availability"` it becomes a focusable, draggable card.
 */
export declare function BlockBox({ block, style, resizeEdge, continuesAfter, dragging, onKeyDown, onClick, }: BlockBoxProps): import("react/jsx-runtime").JSX.Element | null;
/** Drag preview: the proposed time, or why it's not allowed. */
export declare function Ghost({ draft, invalid, style, }: {
    draft: CalendarDraft;
    invalid?: string;
    style: CSSProperties;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=items.d.ts.map