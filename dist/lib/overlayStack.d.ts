export type OverlayEscapeHandler = (event: KeyboardEvent) => void;
/**
 * An overlay's identity and its place in the component tree: `parent` is the
 * overlay it was rendered inside, if any. Overlays opened in the same commit
 * register child-first (React runs child effects before parent ones), so the
 * stack uses this chain, not registration order alone, to keep a nested
 * overlay above the one containing it.
 */
export interface OverlayNode {
    readonly parent: OverlayNode | null;
}
export declare function createOverlayNode(parent: OverlayNode | null): OverlayNode;
/**
 * Registers an open overlay and returns its release function (idempotent).
 * It goes on top of the stack, except below any open overlay nested inside it.
 * `onEscape` runs only while the overlay is top-most in `doc`; it decides
 * itself whether to close, and either way the Escape stops there.
 */
export declare function pushOverlay(node: OverlayNode, onEscape: OverlayEscapeHandler, doc?: Document): () => void;
/**
 * Hides `doc`'s body overflow and returns the release function (idempotent).
 * Locks are counted: the body's original `overflow` comes back only when the
 * last lock is released.
 */
export declare function lockBodyScroll(doc?: Document): () => void;
//# sourceMappingURL=overlayStack.d.ts.map