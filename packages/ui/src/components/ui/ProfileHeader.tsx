/**
 * ProfileHeader — a rich header layout for user profile pages.
 *
 * Unlike PageHeader (title + actions), ProfileHeader renders a user's
 * avatar, name, role badge, subtitle, and metadata (location, join date,
 * external links) alongside an action button.
 *
 * @example
 * ```tsx
 * <ProfileHeader
 *   name="Jane Doe"
 *   subtitle="Senior Software Engineer"
 *   badge={<Badge color="purple">Admin</Badge>}
 *   meta={[
 *     { icon: MapPin,      text: "San Francisco, CA" },
 *     { icon: Calendar,    text: "Joined March 2024" },
 *   ]}
 *   action={
 *     <Button variant="secondary" size="sm">
 *       <Edit className="h-3.5 w-3.5" /> Edit
 *     </Button>
 *   }
 * />
 * ```
 */

import type { ElementType, ReactNode } from "react";

import { cn } from "../../lib/cn";
import { Avatar } from "./Avatar";

interface MetaItem {
  /** A Lucide icon component rendered at 12px. */
  icon: ElementType;
  /** The metadata text displayed next to the icon. */
  text: string;
  /** Optional href — renders the item as a link instead of a span. */
  href?: string;
}

interface ProfileHeaderProps {
  /** User display name — rendered as an h1. */
  name: string;
  /** Secondary text below the name (e.g. job title). */
  subtitle?: string;
  /** Optional badge rendered inline with the name (e.g. role badge). */
  badge?: ReactNode;
  /**
   * Metadata items displayed below the subtitle.
   * Each item has an icon + text pair. Items with `href` render as links.
   */
  meta?: MetaItem[];
  /** Action button(s) displayed on the right side of the header. */
  action?: ReactNode;
  /** Additional utility classes for the root container. */
  className?: string;
}

export function ProfileHeader({
  name,
  subtitle,
  badge,
  meta,
  action,
  className,
}: ProfileHeaderProps) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      {/* Large avatar on the left */}
      <Avatar name={name} size="lg" />

      {/* Name, subtitle, and metadata — takes remaining space */}
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h1 className="text-text-primary text-base font-semibold">{name}</h1>
          {badge}
        </div>
        {subtitle && <p className="text-text-tertiary text-xs">{subtitle}</p>}
        {meta && meta.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-3">
            {meta.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="h-3 w-3" /> {item.text}
                </>
              );

              return item.href ? (
                <a
                  key={item.text}
                  href={item.href}
                  className="text-2xs-f text-accent hover:text-accent-hover flex cursor-pointer items-center gap-1"
                >
                  {content}
                </a>
              ) : (
                <span
                  key={item.text}
                  className="text-2xs-f text-text-tertiary flex items-center gap-1"
                >
                  {content}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Action button on the right */}
      {action}
    </div>
  );
}
