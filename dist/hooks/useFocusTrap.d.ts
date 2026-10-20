import { type RefObject } from "react";
export interface FocusTrapOptions {
    initialFocusRef?: RefObject<HTMLElement | null>;
    returnFocusRef?: RefObject<HTMLElement | null>;
}
/** Traps focus while active, restoring the explicit target or the opener. */
export declare function useFocusTrap(containerRef: RefObject<HTMLElement | null>, active: boolean, { initialFocusRef, returnFocusRef }?: FocusTrapOptions): void;
//# sourceMappingURL=useFocusTrap.d.ts.map