import { useMemo, useState } from "react";

import {
  Clock,
  Download,
  Filter,
  KeyRound,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import {
  Badge,
  Button,
  DetailPanel,
  EmptyState,
  FilterDropdown,
  MetadataGrid,
  MetricCard,
  PageHeader,
  ResourceTable,
  SearchInput,
  SplitPaneLayout,
  type BadgeColor,
  type Column,
} from "@leonardaustin/ui";

import {
  auditEvents,
  type AuditCategory,
  type AuditEvent,
  type AuditOutcome,
  type AuditSeverity,
} from "../data/auditEvents";

type AuditFilter<T extends string> = "All" | T;
type TimeRange = "24h" | "7d" | "30d" | "all";

const categories: AuditCategory[] = [
  "Access",
  "Automation",
  "Configuration",
  "Data",
  "Identity",
  "Integration",
];

const outcomes: AuditOutcome[] = ["allowed", "warning", "blocked"];
const severities: AuditSeverity[] = ["low", "medium", "high", "critical"];

const timeRangeLabels: Record<TimeRange, string> = {
  "24h": "Last 24 hours",
  "7d": "Last 7 days",
  "30d": "Last 30 days",
  all: "All time",
};

const timeRangeDays: Record<TimeRange, number> = {
  "24h": 1,
  "7d": 7,
  "30d": 30,
  all: Infinity,
};

const timeRangeKeys = Object.keys(timeRangeLabels) as TimeRange[];
const referenceDate = new Date("2026-04-28T14:00:00Z");

const outcomeColor: Record<AuditOutcome, BadgeColor> = {
  allowed: "green",
  warning: "yellow",
  blocked: "red",
};

const severityColor: Record<AuditSeverity, BadgeColor> = {
  low: "gray",
  medium: "blue",
  high: "yellow",
  critical: "red",
};

const categoryColor: Record<AuditCategory, BadgeColor> = {
  Access: "purple",
  Automation: "blue",
  Configuration: "gray",
  Data: "red",
  Identity: "green",
  Integration: "yellow",
};

function formatEventTime(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatFullEventTime(value: string): string {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "medium",
  }).format(new Date(value));
}

function matchesSearch(event: AuditEvent, query: string): boolean {
  if (!query) return true;
  const haystack = [
    event.id,
    event.action,
    event.actor.name,
    event.actor.email,
    event.target.name,
    event.target.type,
    event.summary,
    event.source,
    event.location,
    event.ipAddress,
    event.requestId,
    event.policy,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function isInTimeRange(event: AuditEvent, range: TimeRange): boolean {
  const days = timeRangeDays[range];
  if (days === Infinity) return true;
  const cutoff = referenceDate.getTime() - days * 24 * 60 * 60 * 1000;
  return new Date(event.occurredAt).getTime() >= cutoff;
}

function countUniqueActors(events: AuditEvent[]): number {
  return new Set(events.map((event) => event.actor.email)).size;
}

const auditCellClass = "py-2 align-top";

export function AuditLog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<AuditFilter<AuditCategory>>("All");
  const [outcome, setOutcome] = useState<AuditFilter<AuditOutcome>>("All");
  const [severity, setSeverity] = useState<AuditFilter<AuditSeverity>>("All");
  const [timeRange, setTimeRange] = useState<TimeRange>("7d");
  const [selectedEvent, setSelectedEvent] = useState<AuditEvent | null>(
    auditEvents[0] ?? null,
  );

  const filteredEvents = useMemo(
    () =>
      auditEvents.filter((event) => {
        if (!matchesSearch(event, search)) return false;
        if (category !== "All" && event.category !== category) return false;
        if (outcome !== "All" && event.outcome !== outcome) return false;
        if (severity !== "All" && event.severity !== severity) return false;
        return isInTimeRange(event, timeRange);
      }),
    [category, outcome, search, severity, timeRange],
  );

  const blockedCount = filteredEvents.filter(
    (event) => event.outcome === "blocked",
  ).length;
  const criticalCount = filteredEvents.filter(
    (event) => event.severity === "critical",
  ).length;
  const columns: Column<AuditEvent>[] = [
    {
      key: "occurredAt",
      header: "Time",
      width: "120px",
      cellClassName: auditCellClass,
      render: (event) => (
        <span className="text-text-tertiary text-2xs-f font-mono tabular-nums">
          {formatEventTime(event.occurredAt)}
        </span>
      ),
    },
    {
      key: "action",
      header: "Event",
      cellClassName: auditCellClass,
      render: (event) => (
        <div className="max-w-[340px]">
          <p className="text-text-primary truncate font-medium">
            {event.action}
          </p>
          <p className="text-text-tertiary truncate">{event.summary}</p>
        </div>
      ),
    },
    {
      key: "actor",
      header: "Actor",
      cellClassName: auditCellClass,
      render: (event) => (
        <div>
          <p className="text-text-primary truncate">{event.actor.name}</p>
          <p className="text-text-tertiary truncate">{event.actor.role}</p>
        </div>
      ),
    },
    {
      key: "target",
      header: "Target",
      cellClassName: auditCellClass,
      render: (event) => (
        <div>
          <p className="text-text-primary truncate">{event.target.name}</p>
          <p className="text-text-tertiary truncate">{event.target.type}</p>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      width: "120px",
      cellClassName: auditCellClass,
      render: (event) => (
        <Badge color={categoryColor[event.category]}>{event.category}</Badge>
      ),
    },
    {
      key: "outcome",
      header: "Outcome",
      width: "100px",
      cellClassName: auditCellClass,
      render: (event) => (
        <Badge color={outcomeColor[event.outcome]} dot>
          {event.outcome}
        </Badge>
      ),
    },
    {
      key: "severity",
      header: "Risk",
      width: "90px",
      cellClassName: auditCellClass,
      render: (event) => (
        <Badge color={severityColor[event.severity]}>{event.severity}</Badge>
      ),
    },
  ];

  return (
    <SplitPaneLayout>
      <SplitPaneLayout.Main className="space-y-4 overflow-y-auto p-4 md:p-6">
        <PageHeader
          title="Audit Log"
          subtitle="System events, policy decisions, and privileged actions"
          actions={
            <>
              <Button icon={Download} size="sm" hideLabel>
                Export
              </Button>
              <Button icon={RefreshCw} size="sm" variant="primary" hideLabel>
                Refresh
              </Button>
            </>
          }
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Visible Events"
            value={filteredEvents.length}
            sub={`${auditEvents.length} total in sample`}
            bar={(filteredEvents.length / auditEvents.length) * 100}
            icon={Clock}
            iconColor="text-blue"
          />
          <MetricCard
            label="Blocked"
            value={blockedCount}
            sub="Policy denials"
            bar={(blockedCount / Math.max(1, filteredEvents.length)) * 100}
            icon={ShieldAlert}
            iconColor="text-red"
          />
          <MetricCard
            label="Critical Risk"
            value={criticalCount}
            sub="Requires review"
            bar={(criticalCount / Math.max(1, filteredEvents.length)) * 100}
            icon={KeyRound}
            iconColor="text-yellow"
          />
          <MetricCard
            label="Actors"
            value={countUniqueActors(filteredEvents)}
            sub="Unique principals"
            icon={UserRound}
            iconColor="text-green"
          />
        </div>

        <div className="space-y-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search actor, action, target, request..."
              className="max-w-md"
            />
            <div className="flex flex-wrap items-center gap-1.5">
              <FilterDropdown
                icon={Filter}
                align="right"
                items={[
                  {
                    label: "All categories",
                    checked: category === "All",
                    onClick: () => setCategory("All"),
                  },
                  ...categories.map((item) => ({
                    label: item,
                    checked: category === item,
                    onClick: () => setCategory(item),
                  })),
                ]}
              >
                {category === "All" ? "Category" : category}
              </FilterDropdown>
              <FilterDropdown
                icon={ShieldCheck}
                align="right"
                items={[
                  {
                    label: "All outcomes",
                    checked: outcome === "All",
                    onClick: () => setOutcome("All"),
                  },
                  ...outcomes.map((item) => ({
                    label: item,
                    checked: outcome === item,
                    onClick: () => setOutcome(item),
                  })),
                ]}
              >
                {outcome === "All" ? "Outcome" : outcome}
              </FilterDropdown>
              <FilterDropdown
                icon={ShieldAlert}
                align="right"
                items={[
                  {
                    label: "All risk levels",
                    checked: severity === "All",
                    onClick: () => setSeverity("All"),
                  },
                  ...severities.map((item) => ({
                    label: item,
                    checked: severity === item,
                    onClick: () => setSeverity(item),
                  })),
                ]}
              >
                {severity === "All" ? "Risk" : severity}
              </FilterDropdown>
              <FilterDropdown
                icon={Clock}
                align="right"
                items={timeRangeKeys.map((item) => ({
                  label: timeRangeLabels[item],
                  checked: timeRange === item,
                  onClick: () => setTimeRange(item),
                }))}
              >
                {timeRangeLabels[timeRange]}
              </FilterDropdown>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <EmptyState
              icon={<Search className="h-5 w-5" />}
              title="No audit events found"
              description="No system events match the current search and filters."
              action={
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                    setOutcome("All");
                    setSeverity("All");
                    setTimeRange("7d");
                  }}
                >
                  Clear filters
                </Button>
              }
            />
          ) : (
            <ResourceTable
              data={filteredEvents}
              columns={columns}
              getRowId={(event) => event.id}
              onRowClick={setSelectedEvent}
            />
          )}
        </div>
      </SplitPaneLayout.Main>

      <DetailPanel
        open={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.action ?? ""}
        defaultWidth={420}
      >
        {selectedEvent && <AuditEventDetails event={selectedEvent} />}
      </DetailPanel>
    </SplitPaneLayout>
  );
}

function AuditEventDetails({ event }: { event: AuditEvent }) {
  return (
    <div className="space-y-4">
      <div className="border-border bg-bg-primary rounded-md border p-3">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Badge color={categoryColor[event.category]}>{event.category}</Badge>
          <span className="text-text-tertiary text-2xs-f font-mono">
            {event.id}
          </span>
        </div>
        <p className="text-text-primary text-sm font-semibold">
          {event.action}
        </p>
        <p className="text-text-secondary mt-1 text-xs">{event.summary}</p>
      </div>

      <MetadataGrid
        labelWidth="86px"
        items={[
          { label: "Time", value: formatFullEventTime(event.occurredAt) },
          {
            label: "Outcome",
            value: (
              <Badge color={outcomeColor[event.outcome]} dot>
                {event.outcome}
              </Badge>
            ),
          },
          {
            label: "Risk",
            value: (
              <Badge color={severityColor[event.severity]}>
                {event.severity}
              </Badge>
            ),
          },
          { label: "Policy", value: event.policy },
          { label: "Source", value: event.source },
          { label: "Request", value: event.requestId },
        ]}
      />

      <div className="border-border border-t pt-3">
        <h3 className="text-text-primary mb-2 text-xs font-semibold">Actor</h3>
        <MetadataGrid
          labelWidth="86px"
          items={[
            { label: "Name", value: event.actor.name },
            { label: "Email", value: event.actor.email },
            { label: "Role", value: event.actor.role },
            { label: "Location", value: event.location },
            { label: "IP", value: event.ipAddress },
          ]}
        />
      </div>

      <div className="border-border border-t pt-3">
        <h3 className="text-text-primary mb-2 text-xs font-semibold">Target</h3>
        <MetadataGrid
          labelWidth="86px"
          items={[
            { label: "Name", value: event.target.name },
            { label: "Type", value: event.target.type },
          ]}
        />
      </div>

      <div className="border-border border-t pt-3">
        <h3 className="text-text-primary mb-2 text-xs font-semibold">
          Changes
        </h3>
        <div className="space-y-2">
          {event.changes.map((change) => (
            <div
              key={change.label}
              className="border-border bg-bg-primary rounded-md border p-2"
            >
              <p className="text-text-primary mb-1 text-xs font-medium">
                {change.label}
              </p>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-xs">
                <span className="text-text-tertiary truncate">
                  {change.from}
                </span>
                <span className="text-text-disabled">to</span>
                <span className="text-text-primary truncate">{change.to}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
