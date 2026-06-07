import { MoreVertical, Reply, Star } from "lucide-react";

import { Avatar, DropdownMenu } from "@leonardaustin/ui";

import type { EmailMessage as EmailMessageType } from "../../data/emails";
import { formatEmailDate } from "../../data/emails";
import { moreMenuItems } from "./emailMenuItems";

interface EmailMessageProps {
  message: EmailMessageType;
  isStarred?: boolean;
  onCollapse?: () => void;
  onReply?: () => void;
  onReplyAll?: () => void;
  onForward?: () => void;
  onToggleStar?: () => void;
  onMarkUnread?: () => void;
  onArchive?: () => void;
}

export function EmailMessage({
  message,
  isStarred,
  onCollapse,
  onReply,
  onReplyAll,
  onForward,
  onToggleStar,
  onMarkUnread,
  onArchive,
}: EmailMessageProps) {
  const hasMultipleRecipients =
    message.to.length > 1 || (message.cc && message.cc.length > 0);
  return (
    <div className="space-y-2">
      {/* Header — sender row is clickable to collapse when in a multi-message thread */}
      <div
        className={`flex items-center gap-2 px-3 py-2.5 ${onCollapse ? "hover:bg-bg-hover cursor-pointer" : ""}`}
        onClick={onCollapse}
      >
        <Avatar name={message.from.name} size="sm" />
        <div className="min-w-0 flex-1">
          <span className="text-text-primary truncate text-xs font-semibold">
            {message.from.name}
          </span>
          <p className="text-text-tertiary truncate text-xs">
            to {message.to.map((r) => r.name).join(", ")}
            {message.cc && message.cc.length > 0 && (
              <>, cc: {message.cc.map((r) => r.name).join(", ")}</>
            )}
          </p>
        </div>
        <div
          className="flex shrink-0 items-center gap-0.5"
          onClick={(e) => e.stopPropagation()}
        >
          {onReply && (
            <button
              onClick={onReply}
              className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]"
              title="Reply"
            >
              <Reply className="h-3.5 w-3.5" />
            </button>
          )}
          <span className="text-text-tertiary shrink-0 px-1 text-xs">
            {formatEmailDate(message.date)}
          </span>
          {onToggleStar && (
            <button
              onClick={onToggleStar}
              className={`hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms] ${isStarred ? "text-yellow" : "text-text-tertiary hover:text-text-primary"}`}
              title={isStarred ? "Unstar" : "Star"}
            >
              <Star
                className="h-3.5 w-3.5"
                fill={isStarred ? "currentColor" : "none"}
              />
            </button>
          )}
          <DropdownMenu
            align="right"
            items={moreMenuItems({
              onReply,
              onReplyAll: hasMultipleRecipients ? onReplyAll : undefined,
              onForward,
              onToggleStar,
              isStarred,
              onMarkUnread,
              onArchive,
            })}
            trigger={
              <button
                className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]"
                title="More actions"
              >
                <MoreVertical className="h-3.5 w-3.5" />
              </button>
            }
          />
        </div>
      </div>

      {/* Body */}
      <div className="text-text-primary pr-3 pl-12 text-xs leading-relaxed whitespace-pre-wrap">
        {message.body}
      </div>
    </div>
  );
}
