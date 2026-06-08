import { type ReactNode } from "react";
type ToastType = "success" | "error" | "warning" | "info";
interface ToastContextValue {
    /**
     * Show a toast. duration is ms (default 4000), auto-dismisses.
     * Must be under <ToastProvider>.
     * @example toast("success", "Saved")
     */
    toast: (type: ToastType, message: string, duration?: number) => void;
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