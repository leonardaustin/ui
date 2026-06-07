import {
  Archive,
  Forward,
  Mail as MailIcon,
  MailOpen,
  MoreHorizontal,
  Paperclip,
  Reply,
  ReplyAll,
  Star,
  Tag,
  Trash2,
} from "lucide-react";

import { Avatar, Badge, Checkbox, cn, DropdownMenu } from "@leonardaustin/ui";

import type { Email, EmailLabel } from "../../data/emails";
import { formatEmailListDate, labelColors } from "../../data/emails";

interface EmailRowProps {
  email: Email;
  isSelected: boolean;
  isActive: boolean;
  onSelect: () => void;
  onStar: () => void;
  onClick: () => void;
  onReply?: () => void;
  onReplyAll?: () => void;
  onForward?: () => void;
  onArchive?: () => void;
  onDelete?: () => void;
  onToggleRead?: () => void;
  onAddLabel?: (label: EmailLabel) => void;
}

export function EmailRow({
  email,
  isSelected,
  isActive,
  onSelect,
  onStar,
  onClick,
  onReply,
  onReplyAll,
  onForward,
  onArchive,
  onDelete,
  onToggleRead,
  onAddLabel,
}: EmailRowProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "border-border group flex h-10 cursor-pointer items-center gap-1.5 border-b px-2",
        isActive
          ? "bg-accent-subtle"
          : isSelected
            ? "bg-bg-hover"
            : "hover:bg-bg-hover",
      )}
    >
      {/* Checkbox */}
      <div
        className="flex shrink-0 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Checkbox checked={isSelected} onChange={onSelect} />
      </div>

      {/* Star */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onStar();
        }}
        className="flex shrink-0 cursor-pointer items-center"
      >
        <Star
          className={cn(
            "h-3.5 w-3.5 transition-colors duration-[100ms]",
            email.isStarred
              ? "fill-yellow text-yellow"
              : "text-text-tertiary hover:text-yellow",
          )}
        />
      </button>

      {/* Avatar — hidden on mobile */}
      <div className="hidden shrink-0 sm:flex">
        <Avatar name={email.from.name} size="xs" />
      </div>

      {/* Sender */}
      <span
        className={cn(
          "w-24 shrink-0 truncate text-xs md:w-28",
          !email.isRead
            ? "text-text-primary font-semibold"
            : "text-text-secondary",
        )}
      >
        {email.from.name}
      </span>

      {/* Subject + snippet */}
      <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden">
        <span
          className={cn(
            "shrink-0 truncate text-xs",
            !email.isRead
              ? "text-text-primary max-w-48 font-semibold md:max-w-64"
              : "text-text-secondary max-w-40 md:max-w-56",
          )}
        >
          {email.subject}
        </span>
        {email.messages.length > 1 && (
          <span className="text-text-tertiary shrink-0 text-xs">
            ({email.messages.length})
          </span>
        )}
        <span className="text-text-tertiary hidden min-w-0 truncate text-xs md:inline">
          — {email.snippet}
        </span>
      </div>

      {/* Labels — hidden on mobile */}
      <div className="hidden max-w-40 items-center gap-1 overflow-hidden lg:flex">
        {email.labels.slice(0, 3).map((label) => (
          <Badge key={label} color={labelColors[label]}>
            {label}
          </Badge>
        ))}
      </div>

      {/* Attachment icon */}
      {email.hasAttachments && (
        <Paperclip className="text-text-tertiary hidden h-3 w-3 shrink-0 sm:block" />
      )}

      {/* Date */}
      <span className="text-text-tertiary w-14 shrink-0 text-right text-xs">
        {formatEmailListDate(email.date)}
      </span>

      {/* Actions dropdown */}
      <div
        className="hidden shrink-0 opacity-0 group-hover:opacity-100 sm:block"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenu
          align="right"
          trigger={
            <button className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded">
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
          }
          items={[
            {
              label: "Reply",
              icon: <Reply className="h-3.5 w-3.5" />,
              onClick: () => onReply?.(),
            },
            {
              label: "Reply all",
              icon: <ReplyAll className="h-3.5 w-3.5" />,
              onClick: () => onReplyAll?.(),
            },
            {
              label: "Forward",
              icon: <Forward className="h-3.5 w-3.5" />,
              onClick: () => onForward?.(),
            },
            { divider: true },
            {
              label: "Archive",
              icon: <Archive className="h-3.5 w-3.5" />,
              onClick: () => onArchive?.(),
            },
            {
              label: email.isRead ? "Mark unread" : "Mark read",
              icon: email.isRead ? (
                <MailIcon className="h-3.5 w-3.5" />
              ) : (
                <MailOpen className="h-3.5 w-3.5" />
              ),
              onClick: () => onToggleRead?.(),
            },
            {
              label: "Label",
              icon: <Tag className="h-3.5 w-3.5" />,
              onClick: () => onAddLabel?.("Work"),
            },
            { divider: true },
            {
              label: "Delete",
              icon: <Trash2 className="h-3.5 w-3.5" />,
              onClick: () => onDelete?.(),
              danger: true,
            },
          ]}
        />
      </div>
    </div>
  );
}
