import {
  BookOpen,
  Bug,
  GitBranch,
  LayoutList,
  MessageSquare,
  Palette,
} from "lucide-react";

import { Badge, cn, SectionHeader } from "@leonardaustin/ui";

interface StepIntegrationsProps {
  connected: Set<string>;
  onToggle: (id: string) => void;
}

const integrations = [
  {
    id: "github",
    name: "GitHub",
    description: "Source control and CI/CD",
    icon: GitBranch,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Team messaging",
    icon: MessageSquare,
  },
  {
    id: "jira",
    name: "Jira",
    description: "Issue tracking",
    icon: Bug,
  },
  {
    id: "figma",
    name: "Figma",
    description: "Design collaboration",
    icon: Palette,
  },
  {
    id: "linear",
    name: "Linear",
    description: "Project management",
    icon: LayoutList,
  },
  {
    id: "notion",
    name: "Notion",
    description: "Docs and wikis",
    icon: BookOpen,
  },
];

export function StepIntegrations({
  connected,
  onToggle,
}: StepIntegrationsProps) {
  return (
    <div className="space-y-4">
      <SectionHeader>Connect Your Tools</SectionHeader>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => {
          const isConnected = connected.has(integration.id);
          const Icon = integration.icon;
          return (
            <button
              key={integration.id}
              type="button"
              onClick={() => onToggle(integration.id)}
              className={cn(
                "bg-bg-secondary cursor-pointer rounded-md border p-4 text-left transition-colors duration-[100ms]",
                isConnected
                  ? "border-accent"
                  : "border-border hover:border-border-strong",
              )}
            >
              <div className="flex items-start justify-between">
                <Icon
                  className={cn(
                    "h-6 w-6",
                    isConnected ? "text-accent" : "text-text-secondary",
                  )}
                />
                <Badge color={isConnected ? "green" : "gray"}>
                  {isConnected ? "Connected" : "Connect"}
                </Badge>
              </div>
              <p className="text-text-primary mt-2 text-xs font-medium">
                {integration.name}
              </p>
              <p className="text-text-tertiary text-2xs">
                {integration.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
