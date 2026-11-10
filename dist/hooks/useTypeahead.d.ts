/**
 * Tracks the characters typed in a short burst. Call `push` from a key
 * handler to get the search text, `active` to ask whether a search is in
 * progress (a Space then belongs to it), and `clear` when the list closes.
 */
export declare function useTypeahead(): {
    push(char: string): string;
    active(): boolean;
    clear(): void;
};
//# sourceMappingURL=useTypeahead.d.ts.map