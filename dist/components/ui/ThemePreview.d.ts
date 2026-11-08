import type { ElementType } from "react";
export interface ThemePreviewProps {
    label: string;
    active?: boolean;
    icon?: ElementType;
    preview?: {
        bg?: string;
        fg?: string;
    };
    onClick?: () => void;
    className?: string;
}
export declare function ThemePreview({ label, active, icon: Icon, preview, onClick, className, }: ThemePreviewProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemePreview.d.ts.map