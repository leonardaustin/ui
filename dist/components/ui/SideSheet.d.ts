import { type ReactNode } from "react";
export interface SideSheetProps {
    /** Whether the sheet is shown. It renders nothing when `false`. */
    open: boolean;
    /**
     * Called when the user asks to close: Escape (when this is the top-most
     * overlay), a click on the backdrop or the close button. The sheet doesn't
     * close itself; set `open` to `false` here.
     */
    onClose: () => void;
    /**
     * Heading shown in the header. A string also names the dialog
     * (`aria-label`); otherwise it is named "Panel".
     */
    title?: ReactNode;
    /** The sheet body, which scrolls when taller than the sheet. */
    children: ReactNode;
    /** Pinned below the body, for example action buttons. Omit for no footer. */
    footer?: ReactNode;
    /** Edge the sheet slides in from. Defaults to `right`. */
    side?: "left" | "right";
    /**
     * Utility class setting the sheet's width. Defaults to `w-[360px]`; the
     * sheet is never wider than the viewport minus 2rem.
     */
    widthClassName?: string;
    /** Enable pointer and keyboard resizing at viewport widths of 640px and up. Defaults to `false`. */
    resizable?: boolean;
    /** Additional utility classes for the sheet panel. */
    className?: string;
    /** Additional utility classes for the scrolling body. */
    contentClassName?: string;
}
export declare function SideSheet({ open, onClose, title, children, footer, side, widthClassName, resizable, className, contentClassName, }: SideSheetProps): import("react").ReactPortal | null;
//# sourceMappingURL=SideSheet.d.ts.map