import type { ReactNode } from "react";

import {
  Archive,
  ChevronDown,
  FolderInput,
  Mail as MailIcon,
  MailOpen,
  PanelRight,
  Pencil,
  Square,
  Tag,
  Trash2,
} from "lucide-react";

import { Button, Checkbox, DropdownMenu, SearchInput } from "@leonardaustin/ui";

import type { EmailCategory, EmailLabel } from "../../data/emails";

export type ViewMode = "list" | "right";

interface EmailToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectedCount: number;
  allSelected: boolean;
  someSelected: boolean;
  onToggleAll: () => void;
  onSelectAll: () => void;
  onSelectNone: () => void;
  onSelectRead: () => void;
  onSelectUnread: () => void;
  onArchive: () => void;
  onDelete: () => void;
  onMarkRead: () => void;
  onMarkUnread: () => void;
  onMoveTo: (category: EmailCategory) => void;
  onAddLabel: (label: EmailLabel) => void;
  onCompose: () => void;
}

const allLabels: EmailLabel[] = [
  "Work",
  "Personal",
  "Finance",
  "Updates",
  "Social",
];
const viewModeIcons: Record<ViewMode, ReactNode> = {
  list: <Square className="h-3.5 w-3.5" />,
  right: <PanelRight className="h-3.5 w-3.5" />,
};

const moveTargets: { label: string; value: EmailCategory }[] = [
  { label: "Inbox", value: "inbox" },
  { label: "Trash", value: "trash" },
];

export function EmailToolbar({
  search,
  onSearchChange,
  viewMode,
  onViewModeChange,
  selectedCount,
  allSelected,
  someSelected,
  onToggleAll,
  onSelectAll,
  onSelectNone,
  onSelectRead,
  onSelectUnread,
  onArchive,
  onDelete,
  onMarkRead,
  onMarkUnread,
  onMoveTo,
  onAddLabel,
  onCompose,
}: EmailToolbarProps) {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5">
      {/* Select checkbox + dropdown */}
      <div className="flex shrink-0 items-center">
        <Checkbox
          checked={allSelected}
          indeterminate={someSelected && !allSelected}
          onChange={onToggleAll}
        />
        <DropdownMenu
          trigger={
            <button className="text-text-tertiary hover:text-text-primary flex h-5 w-4 cursor-pointer items-center justify-center">
              <ChevronDown className="h-3 w-3" />
            </button>
          }
          items={[
            { label: "All", onClick: onSelectAll },
            { label: "None", onClick: onSelectNone },
            { label: "Read", onClick: onSelectRead },
            { label: "Unread", onClick: onSelectUnread },
          ]}
        />
      </div>

      {/* Bulk actions (show when items selected) */}
      {selectedCount > 0 ? (
        <div className="flex items-center gap-1">
          {/* Bulk action buttons — icon always visible, label hides on
              small screens via the `icon` + `hideLabel` props on Button. */}
          <Button
            icon={Archive}
            hideLabel
            variant="ghost"
            size="sm"
            onClick={onArchive}
            title="Archive"
          >
            Archive
          </Button>
          <Button
            icon={Trash2}
            hideLabel
            variant="ghost"
            size="sm"
            onClick={onDelete}
            title="Delete"
          >
            Delete
          </Button>
          <Button
            icon={MailOpen}
            hideLabel="lg"
            variant="ghost"
            size="sm"
            onClick={onMarkRead}
            title="Mark read"
          >
            Read
          </Button>
          <Button
            icon={MailIcon}
            hideLabel="lg"
            variant="ghost"
            size="sm"
            onClick={onMarkUnread}
            title="Mark unread"
          >
            Unread
          </Button>
          <DropdownMenu
            trigger={
              <Button icon={FolderInput} hideLabel variant="ghost" size="sm">
                Move
              </Button>
            }
            items={moveTargets.map((t) => ({
              label: t.label,
              onClick: () => onMoveTo(t.value),
            }))}
          />
          <DropdownMenu
            trigger={
              <Button icon={Tag} hideLabel variant="ghost" size="sm">
                Label
              </Button>
            }
            items={allLabels.map((l) => ({
              label: l,
              onClick: () => onAddLabel(l),
            }))}
          />
          <span className="text-text-tertiary ml-1 text-xs">
            {selectedCount} selected
          </span>
        </div>
      ) : (
        <>
          {/* Search */}
          <SearchInput
            value={search}
            onChange={onSearchChange}
            placeholder="Search emails..."
            className="max-w-xs flex-1"
          />

          <div className="ml-auto flex items-center gap-2">
            {/* View toggle — hidden on mobile */}
            <div className="hidden md:flex">
              <DropdownMenu
                trigger={
                  <button className="border-border bg-bg-secondary text-text-secondary hover:bg-bg-hover hover:text-text-primary flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border transition-colors duration-[100ms]">
                    {viewModeIcons[viewMode]}
                  </button>
                }
                items={[
                  {
                    label: "No Pane",
                    icon: <Square className="h-3.5 w-3.5" />,
                    checked: viewMode === "list",
                    onClick: () => onViewModeChange("list"),
                  },
                  {
                    label: "Right Pane",
                    icon: <PanelRight className="h-3.5 w-3.5" />,
                    checked: viewMode === "right",
                    onClick: () => onViewModeChange("right"),
                  },
                ]}
              />
            </div>

            {/* Compose button — icon always visible, label shows at sm+ */}
            <Button
              icon={Pencil}
              hideLabel
              variant="primary"
              size="sm"
              onClick={onCompose}
            >
              Compose
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
