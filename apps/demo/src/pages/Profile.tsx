import {
  Calendar,
  CheckSquare,
  Edit,
  ExternalLink,
  FolderKanban,
  GitCommitHorizontal,
  MapPin,
} from "lucide-react";

import {
  Badge,
  Button,
  cn,
  ProfileHeader,
  SectionHeader,
  Timeline,
} from "@leonardaustin/ui";

const timeline = [
  {
    id: 1,
    action: "Deployed api-gateway v2.4.1",
    time: "2 hours ago",
    color: "bg-blue",
  },
  {
    id: 2,
    action: "Merged PR #482 — Auth refactor",
    time: "5 hours ago",
    color: "bg-purple",
  },
  {
    id: 3,
    action: "Resolved Issue #1024",
    time: "Yesterday",
    color: "bg-green",
  },
  {
    id: 4,
    action: "Created monitoring alert rule",
    time: "2 days ago",
    color: "bg-yellow",
  },
  {
    id: 5,
    action: "Updated team permissions",
    time: "3 days ago",
    color: "bg-accent",
  },
];

export function Profile() {
  return (
    <div className="max-w-2xl space-y-6">
      {/* ProfileHeader — a rich header for user pages with avatar, name,
          badge, subtitle, metadata items, and an action button. */}
      <ProfileHeader
        name="Jane Doe"
        subtitle="Senior Software Engineer"
        badge={<Badge color="purple">Admin</Badge>}
        meta={[
          { icon: MapPin, text: "San Francisco, CA" },
          { icon: Calendar, text: "Joined March 2024" },
          { icon: ExternalLink, text: "github.com/janedoe", href: "#" },
        ]}
        action={
          <Button variant="secondary" size="sm">
            <Edit className="h-3.5 w-3.5" />
            Edit
          </Button>
        }
      />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {(
          [
            {
              label: "Projects",
              value: "12",
              sub: "4 active",
              icon: FolderKanban,
              color: "text-blue",
            },
            {
              label: "Tasks",
              value: "89",
              sub: "6 in progress",
              icon: CheckSquare,
              color: "text-green",
            },
            {
              label: "Commits",
              value: "342",
              sub: "This month",
              icon: GitCommitHorizontal,
              color: "text-purple",
            },
          ] as const
        ).map((stat) => (
          <div
            key={stat.label}
            className="bg-bg-secondary border-border relative overflow-hidden rounded-md border p-3"
          >
            <stat.icon
              className={cn(
                "absolute -right-9 -bottom-9 h-44 w-44 -rotate-45 opacity-[0.06]",
                stat.color,
              )}
            />
            <p className="text-2xs-f text-text-tertiary mb-1 font-medium tracking-wider uppercase">
              {stat.label}
            </p>
            <p className="text-text-primary font-mono text-2xl font-bold tabular-nums">
              {stat.value}
            </p>
            <p className="text-2xs text-text-tertiary mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Activity Timeline — uses the Timeline component to render a vertical
          timeline with colored dot markers and connector lines. The data is
          mapped from the local timeline const to match the component's format. */}
      <div>
        <SectionHeader className="mb-3">Recent Activity</SectionHeader>
        <Timeline
          items={timeline.map((item) => ({
            id: item.id,
            dot: item.color,
            text: item.action,
            time: item.time,
          }))}
        />
      </div>
    </div>
  );
}
