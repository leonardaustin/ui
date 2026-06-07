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

import { cn } from "../../lib/cn";

/* eslint-disable react-refresh/only-export-components */

/* ── Root container ─────────────────────────────────────────────────── */

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

function SplitPaneLayoutRoot({
  children,
  direction = "row",
  className,
}: SplitPaneLayoutProps) {
  return (
    <div
      className={cn(
        /* Break out of the page padding set by AppShell.
           -m-4 on mobile, -m-6 on md+ matches the AppShell's p-4 / md:p-6. */
        "-m-4 md:-m-6",
        /* Fill the remaining viewport height below the top bar.
           On mobile, also subtract the bottom nav height. */
        "flex h-[calc(100vh-var(--topbar-height)-var(--bottomnav-height))] gap-0 md:h-[calc(100vh-var(--topbar-height))]",
        /* Direction */
        direction === "column" && "flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ── Main content area ──────────────────────────────────────────────── */

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
function Main({ children, className }: MainProps) {
  return (
    <div
      className={cn(
        "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ── Compose the component ──────────────────────────────────────────── */

/**
 * Attach sub-components so consumers can write:
 *   <SplitPaneLayout>
 *     <SplitPaneLayout.Main>...</SplitPaneLayout.Main>
 *   </SplitPaneLayout>
 */
export const SplitPaneLayout = Object.assign(SplitPaneLayoutRoot, { Main });
