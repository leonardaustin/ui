export interface CodeEdit {
    slots: string[];
    /** Box to focus after the edit. */
    focus: number;
}
/** Spreads `value`'s digits across `length` slots; anything else is dropped. */
export declare function toSlots(value: string, length: number): string[];
/**
 * Works out what the user added to a box. A box that already held a digit
 * and still contains it received an insertion; that text ends at the caret.
 * Otherwise (empty box, or the selected digit was replaced) it's the raw value.
 */
export declare function insertedText(raw: string, current: string, caret: number | null): string;
/**
 * Applies text arriving in box `index` from typing, autofill or paste.
 * Returns null when the text isn't usable, so the edit is ignored.
 *
 * - A standalone run of exactly `length` digits anywhere in the text (e.g.
 *   "Your code is 123456") replaces the whole code.
 * - Text made only of digits, spaces and dashes fills from `index` onward,
 *   or replaces the whole code when it holds exactly `length` digits.
 */
export declare function applyText(slots: readonly string[], index: number, text: string): CodeEdit | null;
/** Handles an input event on box `index`; an empty value clears that box. */
export declare function applyInput(slots: readonly string[], index: number, raw: string, caret: number | null): CodeEdit | null;
/** Backspace clears the box, or steps back and clears the previous one. */
export declare function applyBackspace(slots: readonly string[], index: number): CodeEdit | null;
//# sourceMappingURL=codeInput.d.ts.map