/**
 * AuthorByline — avatar + author name + metadata (date, read time, etc.).
 *
 * A compact author attribution row used in blog posts and content pages.
 * Displays the author's avatar alongside their name and an optional
 * secondary line of metadata (typically a date and read time).
 *
 * Two sizes are available:
 * - `"sm"` (default) — 10px text, used in blog cards and compact contexts
 * - `"md"` — 12px name / 10px meta, used in article pages and content sections
 *
 * @example Blog card (compact)
 * ```tsx
 * <AuthorByline
 *   name="Alex Chen"
 *   meta="Apr 5, 2026 · 4 min read"
 * />
 * ```
 *
 * @example Article page (larger)
 * ```tsx
 * <AuthorByline
 *   size="md"
 *   name="Alex Chen"
 *   meta="Apr 5, 2026 · 4 min read"
 *   nameAppend={
 *     <span className="text-text-tertiary font-normal"> · Staff Engineer</span>
 *   }
 * />
 * ```
 */

import type { ReactNode } from "react";

import { cn } from "../../lib/cn";
import { Avatar } from "./Avatar";

interface AuthorBylineProps {
  /** Author display name. */
  name: string;
  /**
   * Secondary metadata string displayed below the name.
   * Typically "Apr 5, 2026 · 4 min read".
   */
  meta?: string;
  /**
   * Optional content appended after the name on the same line.
   * Useful for displaying a role or badge inline with the name.
   */
  nameAppend?: ReactNode;
  /**
   * Text size variant.
   * - "sm" (default): text-2xs for both name and meta — used in cards
   * - "md": text-xs name / text-2xs meta — used in article and content pages
   */
  size?: "sm" | "md";
  /** Additional utility classes for the root container. */
  className?: string;
}

export function AuthorByline({
  name,
  meta,
  nameAppend,
  size = "sm",
  className,
}: AuthorBylineProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Avatar name={name} size="sm" />
      <div>
        <p
          className={cn(
            "text-text-primary font-label font-medium",
            size === "md" ? "text-xs" : "text-2xs",
          )}
        >
          {name}
          {nameAppend}
        </p>
        {meta && (
          <p className="text-text-tertiary font-label text-2xs">{meta}</p>
        )}
      </div>
    </div>
  );
}
