import { useCallback, useEffect, useRef, useState } from "react";

import {
  Archive,
  Forward,
  Mail,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
  X,
} from "lucide-react";

import { Badge, Button, cn, DropdownMenu, EmptyState } from "@leonardaustin/ui";

import type {
  Email,
  EmailMessage as EmailMessageType,
} from "../../data/emails";
import { labelColors } from "../../data/emails";
import { EmailThread } from "./EmailThread";
import type { ReplyMode } from "./ReplyDialog";

interface EmailReadingPanelProps {
  email: Email | null;
  onClose: () => void;
  onArchive?: () => void;
  onDelete?: () => void;
  className?: string;
}

export function EmailReadingPanel({
  email,
  onClose,
  onArchive,
  onDelete,
  className,
}: EmailReadingPanelProps) {
  const [size, setSize] = useState<number | null>(null);
  const dragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const prevEmailId = useRef(email?.id);
  const [inlineReply, setInlineReply] = useState<{
    mode: ReplyMode;
    message: EmailMessageType;
  } | null>(null);

  // Reset inline reply when switching emails
  if (prevEmailId.current !== email?.id) {
    prevEmailId.current = email?.id;
    if (inlineReply) setInlineReply(null);
  }

  useEffect(() => {
    if (!email) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (inlineReply) {
          setInlineReply(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [email, onClose, inlineReply]);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    const onMouseMove = (ev: MouseEvent) => {
      if (!dragging.current || !containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      const parentRect = parent.getBoundingClientRect();
      const newWidth = parentRect.right - ev.clientX;
      const clamped = Math.max(280, Math.min(newWidth, parentRect.width * 0.7));
      setSize(clamped);
    };

    const onMouseUp = () => {
      dragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }, []);

  const sizeStyle = size ? { width: `${size}px`, flexShrink: 0 } : undefined;

  return (
    <div
      ref={containerRef}
      style={sizeStyle}
      className={cn(
        "bg-bg-secondary border-border relative flex min-h-0 min-w-0 flex-col border-l",
        !size && "w-1/2 shrink-0",
        className,
      )}
    >
      {/* Drag handle */}
      <div
        onMouseDown={onMouseDown}
        className="hover:bg-accent/30 active:bg-accent/50 absolute top-0 bottom-0 left-0 z-10 w-1 cursor-col-resize"
      />
      {email ? (
        <>
          {/* Header */}
          <div className="border-border flex shrink-0 items-center gap-2 border-b px-3 py-[8px]">
            <h3 className="text-text-primary min-w-0 flex-1 truncate text-xs font-semibold">
              {email.subject}
            </h3>
            <button
              onClick={onClose}
              className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover shrink-0 rounded p-0.5 transition-colors duration-[100ms]"
              title="Close"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Labels + archive/delete */}
          <div className="border-border flex shrink-0 items-center gap-1 border-b px-3 py-1.5">
            {email.labels.map((label) => (
              <Badge key={label} color={labelColors[label]}>
                {label}
              </Badge>
            ))}
            <div className="flex-1" />
            <Button
              variant="ghost"
              size="sm"
              onClick={onArchive}
              title="Archive"
            >
              <Archive className="h-3.5 w-3.5" />
            </Button>
            <DropdownMenu
              align="right"
              items={[
                {
                  label: "Delete",
                  icon: <Trash2 className="h-3.5 w-3.5" />,
                  onClick: () => onDelete?.(),
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

          {/* Thread content */}
          <div className="bg-bg-primary flex-1 overflow-y-auto px-3 pb-3">
            <EmailThread
              email={email}
              messages={email.messages}
              inlineReply={inlineReply}
              onSetInlineReply={setInlineReply}
              onToggleStar={() => {}}
              onMarkUnread={() => {}}
              onArchive={onArchive}
            />
          </div>

          {/* Action bar */}
          <div className="bg-bg-primary border-border flex items-center gap-1.5 border-t px-3 py-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                setInlineReply({
                  mode: "reply",
                  message: email.messages[email.messages.length - 1],
                })
              }
            >
              <Reply className="h-3.5 w-3.5" />
              Reply
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                setInlineReply({
                  mode: "replyAll",
                  message: email.messages[email.messages.length - 1],
                })
              }
            >
              <ReplyAll className="h-3.5 w-3.5" />
              Reply All
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                setInlineReply({
                  mode: "forward",
                  message: email.messages[email.messages.length - 1],
                })
              }
            >
              <Forward className="h-3.5 w-3.5" />
              Forward
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <EmptyState
            icon={<Mail className="h-5 w-5" />}
            title="No email selected"
            description="Select an email from the list to read it here"
          />
        </div>
      )}
    </div>
  );
}
