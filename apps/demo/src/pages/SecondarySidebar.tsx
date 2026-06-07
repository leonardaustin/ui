import { useCallback, useMemo, useRef, useState } from "react";

import {
  CheckCircle2,
  Clock3,
  MessageSquare,
  MoreHorizontal,
  Settings2,
} from "lucide-react";

import {
  Badge,
  Button,
  cn,
  SearchInput,
  SplitPaneLayout,
  type BadgeColor,
} from "@leonardaustin/ui";

type SidebarBadge = {
  label: string;
  color: BadgeColor;
};

type SidebarItem = {
  id: string;
  title: string;
  description: string;
  meta: string;
  status: "Active" | "Review" | "Queued" | "Blocked";
  badges: SidebarBadge[];
};

const SECONDARY_MIN = 260;
const SECONDARY_MAX = 460;
const SECONDARY_DEFAULT = 328;
const RESIZE_STEP = 16;

const sidebarItems: SidebarItem[] = [
  {
    id: "workspace",
    title: "Workspace Navigation",
    description:
      "Primary navigation model for authenticated product areas with nested sections and fast scan labels.",
    meta: "Updated 12 min ago",
    status: "Active",
    badges: [
      { label: "Shell", color: "blue" },
      { label: "Core", color: "purple" },
    ],
  },
  {
    id: "review-queue",
    title: "Review Queue",
    description:
      "Dense task queue for moderation, approvals, support triage, or any workflow with short summaries.",
    meta: "18 open items",
    status: "Review",
    badges: [
      { label: "Ops", color: "green" },
      { label: "SLA", color: "yellow" },
    ],
  },
  {
    id: "release-notes",
    title: "Release Notes",
    description:
      "Content rail for draft notes, rollout status, owner comments, and links into the publishing flow.",
    meta: "3 drafts",
    status: "Queued",
    badges: [
      { label: "Docs", color: "blue" },
      { label: "Draft", color: "gray" },
    ],
  },
  {
    id: "incident-room",
    title: "Incident Room",
    description:
      "A focused response view for timeline updates, owners, severity labels, and active remediation work.",
    meta: "SEV-2",
    status: "Blocked",
    badges: [
      { label: "Live", color: "red" },
      { label: "API", color: "purple" },
    ],
  },
  {
    id: "research",
    title: "Research Library",
    description:
      "Structured collection browser for notes, customer quotes, experiment results, and source material.",
    meta: "42 sources",
    status: "Active",
    badges: [
      { label: "UX", color: "green" },
      { label: "Beta", color: "yellow" },
    ],
  },
];

const statusColor: Record<SidebarItem["status"], BadgeColor> = {
  Active: "green",
  Review: "yellow",
  Queued: "blue",
  Blocked: "red",
};

function clampSidebarWidth(width: number) {
  return Math.min(SECONDARY_MAX, Math.max(SECONDARY_MIN, width));
}

function persistSidebarWidth(width: number) {
  try {
    localStorage.setItem("secondary-sidebar-width", String(width));
  } catch {
    /* storage unavailable */
  }
}

function readStoredWidth() {
  try {
    const raw = localStorage.getItem("secondary-sidebar-width");
    if (raw !== null) {
      const stored = Number(raw);
      if (Number.isFinite(stored)) {
        return clampSidebarWidth(stored);
      }
    }
  } catch {
    /* storage unavailable */
  }
  return SECONDARY_DEFAULT;
}

export function SecondarySidebar() {
  const [sidebarWidth, setSidebarWidth] = useState(readStoredWidth);
  const [isResizing, setIsResizing] = useState(false);
  const [activeId, setActiveId] = useState(sidebarItems[0].id);
  const [query, setQuery] = useState("");
  const sidebarRef = useRef<HTMLElement>(null);
  const dragging = useRef(false);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sidebarItems;
    return sidebarItems.filter((item) =>
      [item.title, item.description, item.status, item.meta]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [query]);

  const activeItem =
    sidebarItems.find((item) => item.id === activeId) ?? sidebarItems[0];

  const updateWidth = useCallback((width: number) => {
    const next = clampSidebarWidth(width);
    setSidebarWidth(next);
    return next;
  }, []);

  const onMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (!sidebarRef.current) return;
      event.preventDefault();
      const sidebarLeft = sidebarRef.current.getBoundingClientRect().left;
      let latestWidth = sidebarWidth;
      dragging.current = true;
      setIsResizing(true);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      const onMouseMove = (ev: MouseEvent) => {
        if (!dragging.current) return;
        latestWidth = updateWidth(ev.clientX - sidebarLeft);
      };

      const onMouseUp = () => {
        dragging.current = false;
        setIsResizing(false);
        persistSidebarWidth(latestWidth);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [sidebarWidth, updateWidth],
  );

  const onResizeKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const direction = event.key === "ArrowLeft" ? -1 : 1;
      const next = updateWidth(sidebarWidth + direction * RESIZE_STEP);
      persistSidebarWidth(next);
    },
    [sidebarWidth, updateWidth],
  );

  return (
    <SplitPaneLayout className="bg-bg-primary">
      <aside
        ref={sidebarRef}
        className={cn(
          "border-border bg-bg-primary relative hidden min-h-0 shrink-0 border-r md:flex md:flex-col",
          !isResizing && "transition-[width] duration-[200ms] ease-out",
        )}
        style={{ width: sidebarWidth }}
      >
        {/*
        Leaving here for future reference in case an app requires a collapsable second sidebar.
        <div
          className={cn(
            "border-border flex shrink-0 items-center border-b",
            sidebarCollapsed ? "justify-center px-2" : "gap-2 px-3",
          )}
          style={{ height: "var(--topbar-height)" }}
        >
          <button
            type="button"
            onClick={toggleCollapsed}
            className="text-text-tertiary hover:text-text-primary hover:bg-bg-hover flex h-7 w-7 cursor-pointer items-center justify-center rounded"
            aria-label={
              sidebarCollapsed
                ? "Expand secondary sidebar"
                : "Collapse secondary sidebar"
            }
            title={
              sidebarCollapsed
                ? "Expand secondary sidebar"
                : "Collapse secondary sidebar"
            }
          >
            {sidebarCollapsed ? (
              <PanelLeftDashed className="h-4 w-4" />
            ) : (
              <PanelLeft className="h-4 w-4" />
            )}
          </button>
          {!sidebarCollapsed && <div className="bg-border h-4 w-px" />}
          {!sidebarCollapsed && (
            <div className="min-w-0">
              <h1 className="text-text-primary truncate text-xs font-semibold">
                Secondary Sidebar
              </h1>
            </div>
          )}
        </div>
        */}

        <div className="border-border border-b p-3">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search sections"
          />
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div>
            <section>
              <div>
                {filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      "border-border relative w-full cursor-pointer border-b px-3 py-2 text-left transition-colors duration-[100ms]",
                      activeId === item.id
                        ? "bg-accent-subtle"
                        : "hover:bg-bg-hover",
                    )}
                  >
                    {activeId === item.id && (
                      <span className="bg-accent absolute top-0 bottom-0 left-0 w-[3px]" />
                    )}
                    <div className="flex items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex min-w-0 items-center gap-2">
                          <h3 className="text-text-primary truncate text-xs font-medium">
                            {item.title}
                          </h3>
                          <Badge color={statusColor[item.status]} dot>
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-text-tertiary mt-1 line-clamp-2 text-xs leading-5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {item.badges.map((badge) => (
                        <Badge key={badge.label} color={badge.color}>
                          {badge.label}
                        </Badge>
                      ))}
                      <span className="text-2xs text-text-tertiary ml-auto">
                        {item.meta}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div
          role="separator"
          aria-label="Resize secondary sidebar"
          aria-orientation="vertical"
          aria-valuemin={SECONDARY_MIN}
          aria-valuemax={SECONDARY_MAX}
          aria-valuenow={Math.round(sidebarWidth)}
          tabIndex={0}
          onMouseDown={onMouseDown}
          onKeyDown={onResizeKeyDown}
          className="hover:bg-accent/30 active:bg-accent/50 focus:bg-accent/50 absolute top-0 right-0 bottom-0 z-10 w-1 cursor-col-resize focus:outline-none"
        />
      </aside>

      <SplitPaneLayout.Main>
        <div className="border-border bg-bg-secondary flex shrink-0 flex-col gap-3 border-b p-3 md:hidden">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-text-primary truncate text-sm font-semibold">
                Secondary Sidebar
              </h1>
              <p className="text-text-tertiary text-xs">
                Mobile uses a compact section switcher.
              </p>
            </div>
            <Button variant="icon" size="sm" aria-label="Page settings">
              <Settings2 className="h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "border-border shrink-0 rounded-md border px-3 py-2 text-left",
                  activeId === item.id
                    ? "bg-accent-muted text-accent"
                    : "text-text-secondary bg-bg-primary",
                )}
              >
                <span className="block max-w-40 truncate text-xs font-medium">
                  {item.title}
                </span>
                <Badge color={statusColor[item.status]}>{item.status}</Badge>
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <Badge color={statusColor[activeItem.status]} dot>
                    {activeItem.status}
                  </Badge>
                  {activeItem.badges.map((badge) => (
                    <Badge key={badge.label} color={badge.color}>
                      {badge.label}
                    </Badge>
                  ))}
                </div>
                <h2 className="text-text-primary text-sm font-semibold">
                  {activeItem.title}
                </h2>
                <p className="text-text-tertiary mt-1 max-w-2xl text-xs leading-5">
                  {activeItem.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm" icon={MessageSquare}>
                  Comment
                </Button>
                <Button variant="primary" size="sm" icon={CheckCircle2}>
                  Use Template
                </Button>
                <Button variant="icon" size="sm" aria-label="More actions">
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1fr_280px]">
              <section className="border-border bg-bg-tertiary rounded-lg border">
                <div className="border-border flex items-center justify-between border-b px-4 py-3">
                  <h3 className="text-text-primary text-xs font-semibold">
                    Layout Notes
                  </h3>
                  <span className="text-2xs text-text-tertiary">
                    {activeItem.meta}
                  </span>
                </div>
                <div className="space-y-4 p-4">
                  {[
                    "The secondary sidebar starts immediately to the right of the app sidebar on desktop.",
                    "Each item supports a title, paragraph copy, status, timestamp metadata, and multiple badges.",
                    "The rail can be resized with pointer drag or focused and nudged with the left and right arrow keys.",
                  ].map((note) => (
                    <div key={note} className="flex gap-3">
                      <CheckCircle2 className="text-green mt-0.5 h-4 w-4 shrink-0" />
                      <p className="text-text-secondary text-xs leading-5">
                        {note}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border-border bg-bg-tertiary rounded-lg border">
                <div className="border-border flex items-center justify-between border-b px-4 py-3">
                  <h3 className="text-text-primary text-xs font-semibold">
                    Activity
                  </h3>
                  <Clock3 className="text-text-tertiary h-3.5 w-3.5" />
                </div>
                <div className="divide-border divide-y">
                  {[
                    "Sidebar width adjusted",
                    "Template metadata updated",
                    "Status badges reviewed",
                  ].map((event, index) => (
                    <div key={event} className="px-4 py-3">
                      <p className="text-text-primary text-xs font-medium">
                        {event}
                      </p>
                      <p className="text-2xs text-text-tertiary mt-1">
                        {index + 1}h ago
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </SplitPaneLayout.Main>
    </SplitPaneLayout>
  );
}
