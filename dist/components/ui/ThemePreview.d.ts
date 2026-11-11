import type { ElementType } from "react";
export interface ThemePreviewProps {
    /** Text shown beneath the preview swatch. */
    label: string;
    /** Highlights the card with the accent border as the selected theme. */
    active?: boolean;
    /** Icon component rendered before the label. */
    icon?: ElementType;
    /** Swatch colors: `bg` is the swatch background, `fg` the bar drawn inside it. */
    preview?: {
        bg?: string;
        fg?: string;
    };
    /** Called when the card is clicked. */
    onClick?: () => void;
    /** Extra classes for the button element. */
    className?: string;
}
export declare function ThemePreview({ label, active, icon: Icon, preview, onClick, className, }: ThemePreviewProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemePreview.d.ts.map