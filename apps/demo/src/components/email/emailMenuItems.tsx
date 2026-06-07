import {
  Archive,
  Forward,
  MailOpen,
  Reply,
  ReplyAll,
  Star,
} from "lucide-react";

import type { DropdownItem } from "@leonardaustin/ui";

export function moreMenuItems(opts: {
  onReply?: () => void;
  onReplyAll?: () => void;
  onForward?: () => void;
  onToggleStar?: () => void;
  isStarred?: boolean;
  onMarkUnread?: () => void;
  onArchive?: () => void;
}): DropdownItem[] {
  const items: DropdownItem[] = [];
  if (opts.onReply)
    items.push({
      label: "Reply",
      icon: <Reply className="h-3.5 w-3.5" />,
      onClick: opts.onReply,
    });
  if (opts.onReplyAll)
    items.push({
      label: "Reply All",
      icon: <ReplyAll className="h-3.5 w-3.5" />,
      onClick: opts.onReplyAll,
    });
  if (opts.onForward)
    items.push({
      label: "Forward",
      icon: <Forward className="h-3.5 w-3.5" />,
      onClick: opts.onForward,
    });
  if (items.length > 0) items.push({ divider: true });
  if (opts.onToggleStar)
    items.push({
      label: opts.isStarred ? "Unstar" : "Star",
      icon: <Star className="h-3.5 w-3.5" />,
      onClick: opts.onToggleStar,
    });
  if (opts.onMarkUnread)
    items.push({
      label: "Mark as unread",
      icon: <MailOpen className="h-3.5 w-3.5" />,
      onClick: opts.onMarkUnread,
    });
  if (opts.onArchive)
    items.push({
      label: "Archive",
      icon: <Archive className="h-3.5 w-3.5" />,
      onClick: opts.onArchive,
    });
  return items;
}
