import { type ReactNode } from "react";
export interface DetailPanelProps {
    /** Content renders only while open. Closing animates the width to zero. */
    open: boolean;
    /** Close request from the button or Escape. Consumers may intercept it. */
    onClose: () => void;
    /** Visible heading and accessible name for the non-modal region. */
    title: ReactNode;
    children: ReactNode;
    className?: string;
    /** Additional header controls, before the close button. */
    headerActions?: ReactNode;
    /** Stick below --detail-panel-top (default 0px), with a viewport-height body. */
    sticky?: boolean;
    /** Allow pointer and keyboard resizing. Default true. */
    resizable?: boolean;
    /** Pixel sizing is used when no fraction props are supplied. Defaults to 360. */
    defaultWidth?: number;
    /** Default 260px. */
    minWidth?: number;
    /** Default 700px. */
    maxWidth?: number;
    /** Controlled share of the parent's content width (0–1). */
    fraction?: number;
    /** Initial/reset fraction. Default 0.5 in fraction mode. */
    defaultFraction?: number;
    /** Default 0.3 in fraction mode. */
    minFraction?: number;
    /** Default 0.7 in fraction mode. */
    maxFraction?: number;
    /** Resize request; persistence belongs to the consumer. */
    onFractionChange?: (fraction: number) => void;
    /** Show a 3rem rail while preserving mounted body content. Default false. */
    collapsed?: boolean;
    /** Supplying this renders collapse/expand controls. */
    onCollapsedChange?: (collapsed: boolean) => void;
    railIndicator?: ReactNode;
    /** Position over the right side of a positioned parent, without a backdrop. */
    overlay?: boolean;
    /** Focus the heading on opening. Default true. Closing never restores focus. */
    autoFocus?: boolean;
}
export declare function DetailPanel({ open, onClose, title, children, className, headerActions, sticky, resizable, defaultWidth, minWidth, maxWidth, fraction, defaultFraction, minFraction, maxFraction, onFractionChange, collapsed, onCollapsedChange, railIndicator, overlay, autoFocus, }: DetailPanelProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=DetailPanel.d.ts.map