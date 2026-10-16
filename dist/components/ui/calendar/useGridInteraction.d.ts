import { type FocusEvent, type KeyboardEvent, type PointerEvent as ReactPointerEvent, type RefObject } from "react";
import { type CalendarAvailability, type CalendarEvent } from "../../../lib/calendar";
import type { CalendarDraft } from "./types";
export interface GridColumn {
    key: string;
    day: Date;
    resourceId?: string;
}
export interface GridDraftState {
    draft: CalendarDraft;
    invalid?: string;
    itemId?: string;
}
export interface GridCursor {
    column: number;
    start: number;
    end: number;
}
interface Options {
    axis: "x" | "y";
    columns: readonly GridColumn[];
    pxPerMinute: number;
    scrollRef: RefObject<HTMLElement | null>;
    events: ReadonlyMap<string, CalendarEvent>;
    blocks: ReadonlyMap<string, CalendarAvailability>;
    /** Column the keyboard cursor starts in. */
    initialColumn: number;
}
export declare function useGridInteraction({ axis, columns, pxPerMinute, scrollRef, events, blocks, initialColumn, }: Options): {
    drag: GridDraftState | null;
    cursor: GridCursor | null;
    onPointerDown: (e: ReactPointerEvent<HTMLElement>) => void;
    onItemKeyDown: (e: KeyboardEvent<HTMLElement>, type: "event" | "availability", id: string, columnIndex: number) => void;
    onGridFocus: (e: FocusEvent<HTMLElement>) => void;
    onGridBlur: (e: FocusEvent<HTMLElement>) => void;
    onGridKeyDown: (e: KeyboardEvent<HTMLElement>) => void;
};
export {};
//# sourceMappingURL=useGridInteraction.d.ts.map