import { useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Archive,
  ArrowLeft,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";

import {
  Badge,
  Button,
  DropdownMenu,
  EmptyState,
  SplitPaneLayout,
} from "@leonardaustin/ui";

import { EmailThread } from "../components/email/EmailThread";
import type { ReplyMode } from "../components/email/ReplyDialog";
import {
  emails as allEmails,
  labelColors,
  type EmailMessage,
} from "../data/emails";

export function EmailDetail() {
  const { emailId } = useParams<{ emailId: string }>();
  const navigate = useNavigate();

  const email = useMemo(
    () => allEmails.find((e) => e.id === emailId) ?? null,
    [emailId],
  );

  const [inlineReply, setInlineReply] = useState<{
    mode: ReplyMode;
    message: EmailMessage;
  } | null>(null);

  const prevEmailId = useRef(email?.id);
  if (prevEmailId.current !== email?.id) {
    prevEmailId.current = email?.id;
    if (inlineReply) setInlineReply(null);
  }

  if (!email) {
    return (
      <div className="flex h-full items-center justify-center">
        <EmptyState
          title="Email not found"
          description="This email may have been deleted or moved."
          action={
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate("/inbox")}
            >
              Back to Inbox
            </Button>
          }
        />
      </div>
    );
  }

  const lastMessage = email.messages[email.messages.length - 1];

  return (
    <SplitPaneLayout direction="column">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-3">
        <div className="mx-auto max-w-3xl">
          {/* Header — back, subject, labels, archive/delete */}
          <div className="border-border flex items-center gap-2 border-b px-3 py-2">
            <button
              onClick={() => navigate("/inbox")}
              className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover shrink-0 rounded p-0.5 transition-colors duration-[100ms]"
              title="Back to Inbox"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <h1 className="text-text-primary min-w-0 truncate text-xs font-semibold">
              {email.subject}
            </h1>
            {email.labels.map((label) => (
              <Badge key={label} color={labelColors[label]}>
                {label}
              </Badge>
            ))}
            <div className="flex-1" />
            <Button variant="ghost" size="sm" title="Archive">
              <Archive className="h-3.5 w-3.5" />
            </Button>
            <DropdownMenu
              align="right"
              items={[
                {
                  label: "Delete",
                  icon: <Trash2 className="h-3.5 w-3.5" />,
                  onClick: () => {},
                  danger: true,
                },
              ]}
              trigger={
                <button
                  className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-6 w-6 cursor-pointer items-center justify-center rounded transition-colors duration-[100ms]"
                  title="More"
                >
                  <MoreVertical className="h-3.5 w-3.5" />
                </button>
              }
            />
          </div>

          <div className="px-3">
            <EmailThread
              email={email}
              messages={email.messages}
              inlineReply={inlineReply}
              onSetInlineReply={setInlineReply}
              onToggleStar={() => {}}
              onMarkUnread={() => {}}
              onArchive={() => {}}
            />

            {/* Action bar — inline below thread, same max-width */}
            <div className="mt-3 flex items-center gap-1.5">
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setInlineReply({ mode: "reply", message: lastMessage })
                }
              >
                <Reply className="h-3.5 w-3.5" />
                Reply
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setInlineReply({ mode: "replyAll", message: lastMessage })
                }
              >
                <ReplyAll className="h-3.5 w-3.5" />
                Reply All
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  setInlineReply({ mode: "forward", message: lastMessage })
                }
              >
                <Forward className="h-3.5 w-3.5" />
                Forward
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SplitPaneLayout>
  );
}
