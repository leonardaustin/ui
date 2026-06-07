import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";

import { cn } from "../../lib/cn";

type ToastType = "success" | "error" | "warning" | "info";

interface ToastItem {
  id: number;
  type: ToastType;
  message: string;
  duration: number;
}

interface ToastContextValue {
  /**
   * Show a toast. duration is ms (default 4000), auto-dismisses.
   * Must be under <ToastProvider>.
   * @example toast("success", "Saved")
   */
  toast: (type: ToastType, message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue>({ toast: () => {} });

/**
 * Access the `toast` function. Requires a <ToastProvider> ancestor; without
 * one, the default context is used and `toast()` is a no-op (nothing renders).
 */
export function useToast() {
  return useContext(ToastContext);
}

/** Provides toast context and renders the toast stack (top-right, aria-live). */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const nextId = useRef(0);

  const toast = useCallback(
    (type: ToastType, message: string, duration = 4000) => {
      const id = nextId.current++;
      setToasts((prev) => [...prev, { id, type, message, duration }]);
    },
    [],
  );

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        className="pointer-events-none fixed top-3 right-3 z-[100] flex flex-col gap-2"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <ToastMessage key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const icons: Record<ToastType, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

const barColors: Record<ToastType, string> = {
  success: "bg-green",
  error: "bg-red",
  warning: "bg-yellow",
  info: "bg-blue",
};

const iconColors: Record<ToastType, string> = {
  success: "text-green",
  error: "text-red",
  warning: "text-yellow",
  info: "text-blue",
};

function ToastMessage({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: () => void;
}) {
  const [progress, setProgress] = useState(100);
  const Icon = icons[toast.type];
  /* Error/warning toasts interrupt the user (assertive); others are polite. */
  const assertive = toast.type === "error" || toast.type === "warning";

  /* Store onDismiss in a ref so the timer effect doesn't restart when
     the parent re-renders with a new closure. Without this, every
     setProgress call triggers a parent re-render (toasts state update),
     which creates a new onDismiss function, which restarts this effect,
     resetting the progress bar back to 100%. */
  const onDismissRef = useRef(onDismiss);
  useEffect(() => {
    onDismissRef.current = onDismiss;
  }, [onDismiss]);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / toast.duration) * 100);
      setProgress(remaining);
      if (remaining <= 0) {
        onDismissRef.current();
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [toast.duration]);

  return (
    <div
      role={assertive ? "alert" : "status"}
      aria-live={assertive ? "assertive" : "polite"}
      className="bg-bg-secondary border-border animate-slide-down pointer-events-auto relative w-80 overflow-hidden rounded-lg border shadow-lg"
    >
      <div
        className={cn(
          "absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-md",
          barColors[toast.type],
        )}
      />
      <div className="flex items-center gap-2.5 p-3 pl-3.5">
        <Icon className={cn("h-4 w-4 shrink-0", iconColors[toast.type])} />
        <p className="text-text-primary flex-1 text-xs">{toast.message}</p>
        <button
          onClick={onDismiss}
          className="text-text-tertiary hover:text-text-primary flex h-5 w-5 cursor-pointer items-center justify-center rounded"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
      <div className="bg-bg-tertiary mx-3 mb-1 h-0.5 overflow-hidden rounded-md">
        <div
          className="bg-border h-full rounded-md transition-all duration-[100ms]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
