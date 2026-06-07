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

import { cn } from "../../lib/cn";

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

export function PageHeader({
  title,
  subtitle,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      {/* Title area — left-aligned, takes remaining space. */}
      <div>
        <h1 className="text-text-primary font-heading text-sm font-semibold">
          {title}
        </h1>
        {subtitle && <p className="text-text-tertiary text-xs">{subtitle}</p>}
      </div>

      {/* Actions area — right-aligned, with consistent button spacing.
          Only rendered when actions are provided to avoid an empty flex child. */}
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
