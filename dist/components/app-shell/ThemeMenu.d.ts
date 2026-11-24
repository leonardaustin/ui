import { type ComponentPropsWithRef } from "react";
export interface ThemeMenuProps extends Omit<ComponentPropsWithRef<"button">, "children"> {
    /** Extra classes for the trigger button. */
    className?: string;
    /**
     * Whether this instance opens in response to the global `openThemeMenu()`
     * event. Defaults to true so the single app-shell menu works out of the box;
     * set false on secondary/embedded instances (e.g. a docs example) so a
     * dispatch doesn't pop multiple overlapping popovers at once.
     */
    respondToOpenEvent?: boolean;
}
/**
 * Top-bar appearance control: a button that opens a popover with the full
 * theme customization surface — color mode, theme presets, accent, fonts, and
 * the radius / spacing / type sliders — backed by `useSettings`. Live edits
 * apply immediately; "Save for theme" persists them as overrides for the
 * active theme.
 */
export declare function ThemeMenu({ className, respondToOpenEvent, onClick, ref, ...rest }: ThemeMenuProps): import("react/jsx-runtime").JSX.Element;
