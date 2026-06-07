import { useState } from "react";

import { MoreVertical, Star } from "lucide-react";

import { Avatar, cn, DropdownMenu } from "@leonardaustin/ui";

import type {
  Email,
  EmailMessage as EmailMessageType,
} from "../../data/emails";
import { formatEmailDate } from "../../data/emails";
import { moreMenuItems } from "./emailMenuItems";
import { EmailMessage } from "./EmailMessage";
import { InlineReplyComposer } from "./InlineReplyComposer";
import type { ReplyMode } from "./ReplyDialog";

interface EmailThreadProps {
  email: Email;
  messages: EmailMessageType[];
  inlineReply: { mode: ReplyMode; message: EmailMessageType } | null;
  onSetInlineReply: (
    reply: { mode: ReplyMode; message: EmailMessageType } | null,
  ) => void;
  onToggleStar?: () => void;
  onMarkUnread?: () => void;
  onArchive?: () => void;
}

export function EmailThread({
  email,
  messages,
  inlineReply,
  onSetInlineReply,
  onToggleStar,
  onMarkUnread,
  onArchive,
}: EmailThreadProps) {
  // All messages expanded by default if <=2, otherwise only the last one
  const [expanded, setExpanded] = useState<Set<number>>(() => {
    if (messages.length <= 2) {
      return new Set(messages.map((_, i) => i));
    }
    return new Set([messages.length - 1]);
  });

  function toggleExpanded(index: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  const renderComposer = (msg: EmailMessageType) =>
    inlineReply && inlineReply.message.id === msg.id ? (
      <InlineReplyComposer
        key={`${inlineReply.mode}-${msg.id}`}
        mode={inlineReply.mode}
        email={email}
        message={inlineReply.message}
        onClose={() => onSetInlineReply(null)}
      />
    ) : null;

  if (messages.length === 1) {
    return (
      <div className="-mx-3">
        <EmailMessage
          message={messages[0]}
          isStarred={email.isStarred}
          onReply={() =>
            onSetInlineReply({ mode: "reply", message: messages[0] })
          }
          onReplyAll={() =>
            onSetInlineReply({ mode: "replyAll", message: messages[0] })
          }
          onForward={() =>
            onSetInlineReply({ mode: "forward", message: messages[0] })
          }
          onToggleStar={onToggleStar}
          onMarkUnread={onMarkUnread}
          onArchive={onArchive}
        />
        {renderComposer(messages[0])}
      </div>
    );
  }

  return (
    <div className="-mx-3 space-y-0">
      {messages.map((msg, i) => {
        const isExpanded = expanded.has(i);
        return (
          <div
            key={msg.id}
            className={cn(
              "border-border border-b last:border-b-0",
              isExpanded ? "pb-3" : "",
            )}
          >
            {isExpanded ? (
              <div>
                <EmailMessage
                  message={msg}
                  isStarred={email.isStarred}
                  onCollapse={() => toggleExpanded(i)}
                  onReply={() =>
                    onSetInlineReply({ mode: "reply", message: msg })
                  }
                  onReplyAll={() =>
                    onSetInlineReply({ mode: "replyAll", message: msg })
                  }
                  onForward={() =>
                    onSetInlineReply({ mode: "forward", message: msg })
                  }
                  onToggleStar={onToggleStar}
                  onMarkUnread={onMarkUnread}
                  onArchive={onArchive}
                />
                {renderComposer(msg)}
              </div>
            ) : (
              <div
                onClick={() => toggleExpanded(i)}
                className="hover:bg-bg-hover flex w-full cursor-pointer items-center gap-2 px-3 py-2.5 text-left transition-colors duration-[100ms]"
              >
                <Avatar name={msg.from.name} size="sm" />
                <div className="min-w-0 flex-1">
                  <span className="text-text-primary truncate text-xs font-semibold">
                    {msg.from.name}
                  </span>
                  <p className="text-text-tertiary truncate text-xs">
                    {msg.body.slice(0, 80)}...
                  </p>
                </div>
                <div
                  className="flex shrink-0 items-center gap-0.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-text-tertiary shrink-0 px-1 text-xs">
                    {formatEmailDate(msg.date)}
                  </span>
                  {onToggleStar && (
                    <button
                      onClick={onToggleStar}
                      className={`hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms] ${email.isStarred ? "text-yellow" : "text-text-tertiary hover:text-text-primary"}`}
                      title={email.isStarred ? "Unstar" : "Star"}
                    >
                      <Star
                        className="h-3.5 w-3.5"
                        fill={email.isStarred ? "currentColor" : "none"}
                      />
                    </button>
                  )}
                  <DropdownMenu
                    align="right"
                    items={moreMenuItems({
                      onReply: () =>
                        onSetInlineReply({ mode: "reply", message: msg }),
                      onReplyAll: () =>
                        onSetInlineReply({ mode: "replyAll", message: msg }),
                      onForward: () =>
                        onSetInlineReply({ mode: "forward", message: msg }),
                      onToggleStar,
                      isStarred: email.isStarred,
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
            )}
          </div>
        );
      })}
    </div>
  );
}
