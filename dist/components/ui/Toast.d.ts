import { type ReactNode } from "react";
export type ToastType = "success" | "error" | "warning" | "info";
export interface ToastOptions {
    type: ToastType;
    /** Optional strong title above the message, included once in the announcement. */
    title?: string;
    message: string;
    /** Milliseconds; defaults to 4000. Non-positive/non-finite stays until dismissed. */
    duration?: number;
}
interface ToastContextValue {
    /**
     * Show a toast. duration is ms (default 4000), auto-dismisses.
     * Must be under <ToastProvider>.
     * @example toast("success", "Saved")
     */
    toast: {
        (type: ToastType, message: string, duration?: number): void;
        (options: ToastOptions): void;
    };
}
/**
 * Access the `toast` function. Requires a <ToastProvider> ancestor; without
 * one, the default context is used and `toast()` is a no-op (nothing renders).
 */
export declare function useToast(): ToastContextValue;
/** Provides toast context and renders the toast stack (top-right, aria-live). */
export declare function ToastProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Toast.d.ts.map