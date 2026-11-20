import { type RefObject } from "react";
import { type OverlayEscapeHandler, type OverlayNode } from "../lib/overlayStack";
/**
 * The overlay a component is rendered inside. An overlay provides its node
 * (from useOverlayEscape) around its content, so overlays and popovers
 * rendered within it, portalled or not, stack above it even when they open in
 * the same commit.
 */
export declare const OverlayContext: import("react").Context<OverlayNode | null>;
/**
 * Puts an overlay on the shared overlay stack while `open`, so Escape reaches
 * `onEscape` only when it is the top-most open overlay. The overlay joins the
 * stack when it opens and keeps its place while it re-renders; a changing
 * `onEscape` is picked up without re-registering.
 *
 * Escape is heard on `nodeRef`'s document when given (so an overlay rendered
 * into an iframe hears its own keys), else on the global document.
 *
 * Returns the overlay's node; render `<OverlayContext.Provider value={node}>`
 * around the overlay's content so overlays nested in it stack above it.
 */
export declare function useOverlayEscape(open: boolean, onEscape: OverlayEscapeHandler, nodeRef?: RefObject<HTMLElement | null>): OverlayNode;
/**
 * Locks body scroll while `active`; stacked locks release safely. Locks
 * `nodeRef`'s document when given (an overlay rendered into an iframe locks
 * the iframe's body), else the global document.
 */
export declare function useBodyScrollLock(active: boolean, nodeRef?: RefObject<HTMLElement | null>): void;
//# sourceMappingURL=useOverlayStack.d.ts.map