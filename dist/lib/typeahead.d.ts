/** How long (ms) a pause ends a typeahead search and starts a new one. */
export declare const TYPEAHEAD_RESET_MS = 500;
/** The text typed so far and when the last character arrived. */
export interface TypeaheadState {
    text: string;
    at: number;
}
export declare const EMPTY_TYPEAHEAD: TypeaheadState;
/** Current time for typeahead; kept out of components so render stays pure. */
export declare function typeaheadNow(): number;
/** True for a key that adds to a search: one printable character, no shortcut modifier. */
export declare function isTypeaheadKey(event: {
    key: string;
    ctrlKey: boolean;
    metaKey: boolean;
    altKey: boolean;
    getModifierState?: (key: "AltGraph") => boolean;
}): boolean;
/** Whether a search is in progress at `at` (non-empty and not timed out). */
export declare function isTypeaheadActive(state: TypeaheadState, at: number): boolean;
/** The state after typing `char` at `at`; a stale search starts over. */
export declare function appendTypeahead(state: TypeaheadState, char: string, at: number): TypeaheadState;
/**
 * The index of the item a search lands on, or -1 for none. Matching is a
 * case-insensitive prefix test on the trimmed label, and disabled items are
 * skipped.
 *
 * A single character, or the same character typed repeatedly, searches
 * forward from the item after `current` and wraps, so repeating a letter
 * cycles through the items that start with it. A longer search starts at
 * `current` itself, so refining it keeps the current item when it still
 * matches.
 */
export declare function findTypeaheadMatch(labels: readonly string[], isDisabled: (index: number) => boolean, current: number, query: string): number;
//# sourceMappingURL=typeahead.d.ts.map