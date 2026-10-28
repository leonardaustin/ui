import { type ReactNode } from "react";
export interface SideSheetProps {
    open: boolean;
    onClose: () => void;
    title?: ReactNode;
    children: ReactNode;
    footer?: ReactNode;
    side?: "left" | "right";
    widthClassName?: string;
    className?: string;
    contentClassName?: string;
}
export declare function SideSheet({ open, onClose, title, children, footer, side, widthClassName, className, contentClassName, }: SideSheetProps): import("react").ReactPortal | null;
//# sourceMappingURL=SideSheet.d.ts.map