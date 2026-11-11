import { type ReactNode } from "react";
interface DetailPanelProps {
    /**
     * Whether the panel is open. It stays mounted, and its width animates
     * between 0 and the current width; its content renders only while open.
     */
    open: boolean;
    /**
     * Called when the user asks to close: the close button, or Escape when this
     * is the top-most overlay. The panel doesn't close itself; set `open` to
     * `false` here.
     */
    onClose: () => void;
    /** Heading shown in the header bar. */
    title: string;
    /** The panel body, which scrolls when taller than the panel. */
    children: ReactNode;
    /** Additional utility classes for the panel root, for example to set its height. */
    className?: string;
    /** Allow horizontal resize via drag handle. Default true. */
    resizable?: boolean;
    /** Default width in px when the panel opens. */
    defaultWidth?: number;
    /** Minimum width in px during resize. */
    minWidth?: number;
    /** Maximum width in px during resize. */
    maxWidth?: number;
}
export declare function DetailPanel({ open, onClose, title, children, className, resizable, defaultWidth, minWidth, maxWidth, }: DetailPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=DetailPanel.d.ts.map