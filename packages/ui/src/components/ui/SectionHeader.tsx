/**
 * SectionHeader — a bordered section heading used throughout the template.
 *
 * This is the most-repeated markup in the codebase (~30+ occurrences).
 * It renders a small, semibold heading with a bottom border to visually
 * separate content sections within a page.
 *
 * @example
 * ```tsx
 * <SectionHeader>Text Inputs</SectionHeader>
 * ```
 *
 * @example With a custom element or extra class
 * ```tsx
 * <SectionHeader as="h3" className="mb-4">Settings</SectionHeader>
 * ```
 */

import type { ElementType, ReactNode } from "react";

import { cn } from "../../lib/cn";

interface SectionHeaderProps {
  /** The heading text or content. */
  children: ReactNode;
  /**
   * The HTML element to render.
   * Defaults to "h2" for semantic correctness within a page that already
   * has an h1 via PageHeader.
   */
  as?: ElementType;
  /** Additional utility classes appended to the root element. */
  className?: string;
  /** Render the dividing bottom border. Defaults to true. */
  border?: boolean;
}

export function SectionHeader({
  children,
  as: Tag = "h2",
  className,
  border = true,
}: SectionHeaderProps) {
  return (
    <Tag
      className={cn(
        /* Base text styling — matches the existing convention:
           12px, semibold, primary color. */
        "text-text-primary font-heading text-xs font-semibold",
        /* Bottom border that visually divides sections. */
        border && "border-border border-b pb-2",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
