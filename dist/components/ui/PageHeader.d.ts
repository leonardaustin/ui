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
interface PageHeaderProps {
    /** The page title rendered as an h1. */
    title: string;
    /** Optional subtitle displayed below the title in a smaller, muted style. */
    subtitle?: string;
    /**
     * Action buttons or controls aligned to the right of the header.
     * Wrap multiple buttons in a fragment — the component provides a
     * flex container with `gap-2` for consistent spacing.
     */
    actions?: ReactNode;
    /** Additional utility classes appended to the root element. */
    className?: string;
}
export declare function PageHeader({ title, subtitle, actions, className, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=PageHeader.d.ts.map