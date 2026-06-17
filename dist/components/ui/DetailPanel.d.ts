import { type ReactNode } from "react";
interface DetailPanelProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
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