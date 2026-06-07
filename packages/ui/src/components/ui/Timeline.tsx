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

import { cn } from "../../lib/cn";

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

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {items.map((item, i) => (
        <div key={item.id} className="flex gap-3">
          {/* Dot + connector line column */}
          <div className="flex flex-col items-center">
            {/* Colored dot — 8px circle aligned with the first line of text */}
            <div
              className={cn(item.dot, "mt-1.5 h-2 w-2 shrink-0 rounded-full")}
            />
            {/* Connector line — links this dot to the next one.
                Hidden on the last item to avoid a dangling line. */}
            {i < items.length - 1 && (
              <div className="bg-border mt-1 w-px flex-1" />
            )}
          </div>

          {/* Text content */}
          <div className={cn("pb-4", i === items.length - 1 && "pb-0")}>
            <p className="text-text-primary text-xs">{item.text}</p>
            <p className="text-2xs text-text-tertiary mt-0.5">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
