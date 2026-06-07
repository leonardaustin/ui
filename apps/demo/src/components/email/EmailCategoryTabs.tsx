import { File, Inbox, Send, Star, Trash2 } from "lucide-react";

import { cn } from "@leonardaustin/ui";

import type { EmailCategory } from "../../data/emails";

interface CategoryTab {
  key: EmailCategory;
  label: string;
  icon: React.ReactNode;
  count?: number;
}

interface EmailCategoryTabsProps {
  active: EmailCategory;
  onChange: (category: EmailCategory) => void;
  counts: Record<EmailCategory, number>;
}

export function EmailCategoryTabs({
  active,
  onChange,
  counts,
}: EmailCategoryTabsProps) {
  const tabs: CategoryTab[] = [
    {
      key: "inbox",
      label: "Inbox",
      icon: <Inbox className="h-3.5 w-3.5" />,
      count: counts.inbox,
    },
    {
      key: "sent",
      label: "Sent",
      icon: <Send className="h-3.5 w-3.5" />,
    },
    {
      key: "drafts",
      label: "Drafts",
      icon: <File className="h-3.5 w-3.5" />,
      count: counts.drafts,
    },
    {
      key: "starred",
      label: "Starred",
      icon: <Star className="h-3.5 w-3.5" />,
      count: counts.starred,
    },
    {
      key: "trash",
      label: "Trash",
      icon: <Trash2 className="h-3.5 w-3.5" />,
    },
  ];

  return (
    <div className="border-border flex overflow-x-auto border-b">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={cn(
            "relative flex shrink-0 cursor-pointer items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors duration-[100ms]",
            "hover:text-text-primary",
            tab.key === active ? "text-accent" : "text-text-tertiary",
          )}
        >
          {tab.icon}
          <span>{tab.label}</span>
          {tab.count != null && tab.count > 0 && (
            <span
              className={cn(
                "min-w-[18px] rounded-md px-1.5 py-0.5 text-center text-xs leading-none font-medium",
                tab.key === active
                  ? "bg-accent/15 text-accent"
                  : "bg-bg-hover text-text-tertiary",
              )}
            >
              {tab.count}
            </span>
          )}
          {tab.key === active && (
            <div className="bg-accent absolute right-0 bottom-0 left-0 h-0.5 rounded-md" />
          )}
        </button>
      ))}
    </div>
  );
}
