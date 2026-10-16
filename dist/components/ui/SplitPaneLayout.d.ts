/**
 * SplitPaneLayout — a full-viewport-height container with main + panel areas.
 *
 * Used by Tables, Inbox, Components, and EmailDetail to create a layout
 * that breaks out of the page padding and fills the remaining viewport
 * height below the top bar. The main content area scrolls independently.
 *
 * The component uses a CSS calc based on `--topbar-height` to fill the
 * viewport minus the top navigation bar.
 *
 * @example With a side panel
 * ```tsx
 * <SplitPaneLayout>
 *   <SplitPaneLayout.Main>
 *     <ResourceTable ... />
 *   </SplitPaneLayout.Main>
 *   <DetailPanel open={panelOpen} onClose={close}>
 *     ...
 *   </DetailPanel>
 * </SplitPaneLayout>
 * ```
 *
 * @example Column direction (e.g. Inbox bottom split)
 * ```tsx
 * <SplitPaneLayout direction="column">
 *   <SplitPaneLayout.Main>...</SplitPaneLayout.Main>
 *   <ReadingPanel orientation="bottom" />
 * </SplitPaneLayout>
 * ```
 *
 * @example EmailDetail — single column, no split
 * ```tsx
 * <SplitPaneLayout direction="column">
 *   <div>toolbar</div>
 *   <div className="flex-1 overflow-y-auto">content</div>
 * </SplitPaneLayout>
 * ```
 */
import type { ReactNode } from "react";
interface SplitPaneLayoutProps {
    children: ReactNode;
    /**
     * Flex direction of the split.
     * - "row" (default): side-by-side layout (main | panel)
     * - "column": stacked layout (main / panel)
     */
    direction?: "row" | "column";
    /** Additional utility classes for the root container. */
    className?: string;
}
declare function SplitPaneLayoutRoot({ children, direction, className, }: SplitPaneLayoutProps): import("react/jsx-runtime").JSX.Element;
interface MainProps {
    children: ReactNode;
    /** Additional utility classes. */
    className?: string;
}
/**
 * The scrollable main content area within a SplitPaneLayout.
 * Prevents flex children from expanding beyond available space
 * via min-w-0 and min-h-0.
 */
declare function Main({ children, className }: MainProps): import("react/jsx-runtime").JSX.Element;
/**
 * Attach sub-components so consumers can write:
 *   <SplitPaneLayout>
 *     <SplitPaneLayout.Main>...</SplitPaneLayout.Main>
 *   </SplitPaneLayout>
 */
export declare const SplitPaneLayout: typeof SplitPaneLayoutRoot & {
    Main: typeof Main;
};
export {};
//# sourceMappingURL=SplitPaneLayout.d.ts.map