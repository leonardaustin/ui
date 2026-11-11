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
export declare function ProfileHeader({ name, subtitle, badge, meta, action, className, }: ProfileHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ProfileHeader.d.ts.map