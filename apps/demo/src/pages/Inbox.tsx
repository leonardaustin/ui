import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Search } from "lucide-react";

import {
  Button,
  EmptyState,
  PaginationBar,
  SplitPaneLayout,
} from "@leonardaustin/ui";

import { ComposeDialog } from "../components/email/ComposeDialog";
import { EmailCategoryTabs } from "../components/email/EmailCategoryTabs";
import { EmailReadingPanel } from "../components/email/EmailReadingPanel";
import { EmailRow } from "../components/email/EmailRow";
import { EmailToolbar, type ViewMode } from "../components/email/EmailToolbar";
import { ReplyDialog, type ReplyMode } from "../components/email/ReplyDialog";
import {
  emails as allEmails,
  type Email,
  type EmailCategory,
  type EmailMessage,
} from "../data/emails";
import { useEmailState } from "../hooks/useEmailState";

/* Page-size options — overrides PaginationBar's default (10/25/50)
   because the inbox shows more items per page by default. */
const PAGE_SIZE_OPTIONS = [
  { value: "25", label: "25 per page" },
  { value: "50", label: "50 per page" },
  { value: "100", label: "100 per page" },
];

export function Inbox() {
  const navigate = useNavigate();
  const {
    emails,
    selectedIds,
    toggleStar,
    toggleRead,
    markRead,
    markUnread,
    archiveEmails,
    deleteEmails,
    moveToCategory,
    addLabel,
    toggleSelect,
    selectAll,
    selectNone,
    selectRead,
    selectUnread,
  } = useEmailState(allEmails);

  const [category, setCategory] = useState<EmailCategory>("inbox");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);
  const [viewMode, setViewMode] = useState<ViewMode>(() => {
    try {
      const stored = localStorage.getItem("inbox-view-mode");
      return stored === "right" ? stored : "list";
    } catch {
      return "list";
    }
  });
  const setViewModePersisted = (mode: ViewMode) => {
    setViewMode(mode);
    try {
      localStorage.setItem("inbox-view-mode", mode);
    } catch {
      /* storage unavailable */
    }
  };
  const showPane = viewMode === "right";
  const [activeEmailId, setActiveEmailId] = useState<string | null>(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [replyState, setReplyState] = useState<{
    open: boolean;
    mode: ReplyMode;
    email: Email | null;
    message: EmailMessage | null;
  }>({ open: false, mode: "reply", email: null, message: null });

  // Category counts
  const counts = useMemo(() => {
    const c: Record<EmailCategory, number> = {
      inbox: 0,
      sent: 0,
      drafts: 0,
      starred: 0,
      trash: 0,
    };
    for (const e of emails) {
      c[e.category]++;
      if (e.isStarred) c.starred++;
    }
    return c;
  }, [emails]);

  // Filter emails by category + search
  const filtered = useMemo(() => {
    return emails.filter((e) => {
      if (category === "starred") {
        if (!e.isStarred) return false;
      } else if (e.category !== category) {
        return false;
      }
      if (search) {
        const q = search.toLowerCase();
        return (
          e.from.name.toLowerCase().includes(q) ||
          e.subject.toLowerCase().includes(q) ||
          e.snippet.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [emails, category, search]);

  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const allSelected =
    paged.length > 0 && paged.every((e) => selectedIds.has(e.id));
  const someSelected = paged.some((e) => selectedIds.has(e.id));
  const selectedArray = Array.from(selectedIds);

  const activeEmail = activeEmailId
    ? (emails.find((e) => e.id === activeEmailId) ?? null)
    : null;

  // Auto-mark read when opening in panel
  const openInPanel = useCallback(
    (email: Email) => {
      setActiveEmailId(email.id);
      if (!email.isRead) {
        markRead([email.id]);
      }
    },
    [markRead],
  );

  function handleEmailClick(email: Email) {
    if (showPane && window.innerWidth >= 768) {
      openInPanel(email);
    } else {
      if (!email.isRead) markRead([email.id]);
      navigate(`/inbox/${email.id}`);
    }
  }

  function handleCategoryChange(cat: EmailCategory) {
    setCategory(cat);
    setPage(1);
    selectNone();
    setActiveEmailId(null);
  }

  function openReply(mode: ReplyMode, email: Email, message: EmailMessage) {
    setReplyState({ open: true, mode, email, message });
  }

  return (
    <SplitPaneLayout direction="row">
      {/* Main email list — wrapped in SplitPaneLayout.Main so the layout
          fills the viewport and scrolls independently of the reading pane. */}
      <SplitPaneLayout.Main>
        <EmailCategoryTabs
          active={category}
          onChange={handleCategoryChange}
          counts={counts}
        />

        <EmailToolbar
          search={search}
          onSearchChange={(v) => {
            setSearch(v);
            setPage(1);
          }}
          viewMode={viewMode}
          onViewModeChange={setViewModePersisted}
          selectedCount={selectedIds.size}
          allSelected={allSelected}
          someSelected={someSelected}
          onToggleAll={() => {
            if (allSelected) {
              paged.forEach((e) => {
                if (selectedIds.has(e.id)) toggleSelect(e.id);
              });
            } else {
              selectAll(paged.map((e) => e.id));
            }
          }}
          onSelectAll={() => selectAll(paged.map((e) => e.id))}
          onSelectNone={selectNone}
          onSelectRead={() => selectRead(paged)}
          onSelectUnread={() => selectUnread(paged)}
          onArchive={() => archiveEmails(selectedArray)}
          onDelete={() => deleteEmails(selectedArray)}
          onMarkRead={() => markRead(selectedArray)}
          onMarkUnread={() => markUnread(selectedArray)}
          onMoveTo={(cat) => moveToCategory(selectedArray, cat)}
          onAddLabel={(label) => addLabel(selectedArray, label)}
          onCompose={() => setComposeOpen(true)}
        />

        {/* Email list */}
        {filtered.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <EmptyState
              icon={<Search className="h-5 w-5" />}
              title="No emails found"
              description={
                search
                  ? `No emails match "${search}"`
                  : `No emails in ${category}`
              }
              action={
                search ? (
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSearch("")}
                  >
                    Clear search
                  </Button>
                ) : undefined
              }
            />
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {paged.map((email) => (
                <EmailRow
                  key={email.id}
                  email={email}
                  isSelected={selectedIds.has(email.id)}
                  isActive={activeEmailId === email.id}
                  onSelect={() => toggleSelect(email.id)}
                  onStar={() => toggleStar(email.id)}
                  onClick={() => handleEmailClick(email)}
                  onReply={() =>
                    openReply(
                      "reply",
                      email,
                      email.messages[email.messages.length - 1],
                    )
                  }
                  onReplyAll={() =>
                    openReply(
                      "replyAll",
                      email,
                      email.messages[email.messages.length - 1],
                    )
                  }
                  onForward={() =>
                    openReply(
                      "forward",
                      email,
                      email.messages[email.messages.length - 1],
                    )
                  }
                  onArchive={() => archiveEmails([email.id])}
                  onDelete={() => deleteEmails([email.id])}
                  onToggleRead={() => toggleRead(email.id)}
                  onAddLabel={(label) => addLabel([email.id], label)}
                />
              ))}
            </div>

            {/* Pagination footer — reuses the shared PaginationBar component
                with a top border to separate it from the email list. */}
            <PaginationBar
              page={page}
              pageSize={pageSize}
              total={filtered.length}
              pageSizeOptions={PAGE_SIZE_OPTIONS}
              onPageChange={setPage}
              onPageSizeChange={(size) => {
                setPageSize(size);
                setPage(1);
              }}
              className="border-border border-t px-2 py-1.5"
            />
          </>
        )}
      </SplitPaneLayout.Main>

      {/* Reading pane (right or bottom mode, desktop) */}
      {showPane && (
        <EmailReadingPanel
          key={viewMode}
          className="hidden md:flex"
          email={activeEmail}
          onClose={() => setActiveEmailId(null)}
          onArchive={() => {
            if (activeEmailId) {
              archiveEmails([activeEmailId]);
              setActiveEmailId(null);
            }
          }}
          onDelete={() => {
            if (activeEmailId) {
              deleteEmails([activeEmailId]);
              setActiveEmailId(null);
            }
          }}
        />
      )}

      {/* Compose dialog */}
      <ComposeDialog open={composeOpen} onClose={() => setComposeOpen(false)} />

      {/* Reply dialog */}
      {replyState.email && replyState.message && (
        <ReplyDialog
          open={replyState.open}
          onClose={() =>
            setReplyState({
              open: false,
              mode: "reply",
              email: null,
              message: null,
            })
          }
          mode={replyState.mode}
          email={replyState.email}
          message={replyState.message}
        />
      )}
    </SplitPaneLayout>
  );
}
