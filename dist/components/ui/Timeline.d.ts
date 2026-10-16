/**
 * Timeline — a vertical timeline with colored dot markers and connector lines.
 *
 * Used on the Profile page to show recent activity. Each item has a colored
 * dot, a vertical connector line (except the last item), and text content.
 *
 * @example
 * ```tsx
 * <Timeline
 *   items={[
 *     { id: 1, dot: "bg-blue",   text: "Deployed v2.4.1",       time: "2h ago" },
 *     { id: 2, dot: "bg-purple", text: "Merged PR #482",        time: "5h ago" },
 *     { id: 3, dot: "bg-green",  text: "Resolved Issue #1024",  time: "Yesterday" },
 *   ]}
 * />
 * ```
 */
interface TimelineItem {
    /** Unique identifier for React keys. */
    id: string | number;
    /**
     * Utility background class for the dot marker.
     * Use semantic color tokens like "bg-blue", "bg-green", "bg-accent".
     */
    dot: string;
    /** Primary text describing the activity. */
    text: string;
    /** Timestamp or relative time string. */
    time: string;
}
interface TimelineProps {
    /** List of timeline entries to render, in chronological order. */
    items: TimelineItem[];
    /** Additional utility classes for the root container. */
    className?: string;
}
export declare function Timeline({ items, className }: TimelineProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Timeline.d.ts.map