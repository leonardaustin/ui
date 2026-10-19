/**
 * PageHeader — the top-of-page title bar used on every page.
 *
 * Renders a consistent h1 + optional subtitle + right-aligned actions.
 * The layout uses flexbox so that actions naturally push to the right,
 * and the title area takes up remaining space.
 *
 * @example Title only
 * ```tsx
 * <PageHeader title="Forms" />
 * ```
 *
 * @example Title + subtitle + action buttons
 * ```tsx
 * <PageHeader
 *   title="Dashboard"
 *   subtitle="Real-time overview"
 *   actions={
 *     <>
 *       <Button variant="secondary" size="sm">Export</Button>
 *       <Button variant="primary" size="sm">New</Button>
 *     </>
 *   }
 * />
 * ```
 */
import type { ReactNode } from "react";
export interface PageHeaderProps {
    /** The page title rendered as an h1. */
    title: ReactNode;
    /** Optional subtitle displayed below the title in a smaller, muted style. */
    subtitle?: ReactNode;
    eyebrow?: ReactNode;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Allow actions to wrap below the title on narrow screens. */
    wrap?: boolean;
    /**
     * Action buttons or controls aligned to the right of the header.
     * Wrap multiple buttons in a fragment — the component provides a
     * flex container with `gap-2` for consistent spacing.
     */
    actions?: ReactNode;
    /** Additional utility classes appended to the root element. */
    className?: string;
}
export declare function PageHeader({ title, subtitle, actions, className, eyebrow, headingLevel, wrap, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PageHeader.d.ts.map