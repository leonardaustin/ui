import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  AlertTriangle,
  ArrowDown,
  Clock,
  Columns3,
  Filter,
  Regex,
  Trash2,
  WrapText,
} from "lucide-react";

import {
  Badge,
  Button,
  cn,
  FilterDropdown,
  PageHeader,
  SplitPaneLayout,
  Toggle,
  Toolbar,
  type BadgeColor,
} from "@leonardaustin/ui";

import {
  generateLogEntry,
  initialLogs,
  type LogEntry,
  type LogLevel,
} from "../data/logs";

/* ── Constants ─────────────────────────────────────────────── */

const ALL_LEVELS: LogLevel[] = ["DEBUG", "INFO", "WARN", "ERROR", "FATAL"];

const levelColor: Record<LogLevel, BadgeColor> = {
  DEBUG: "blue",
  INFO: "green",
  WARN: "yellow",
  ERROR: "red",
  FATAL: "red",
};

const levelDotClass: Record<LogLevel, string> = {
  DEBUG: "bg-blue",
  INFO: "bg-green",
  WARN: "bg-yellow",
  ERROR: "bg-red",
  FATAL: "bg-red",
};

const levelTextClass: Record<LogLevel, string> = {
  DEBUG: "text-blue",
  INFO: "text-green",
  WARN: "text-yellow",
  ERROR: "text-red",
  FATAL: "text-red",
};

const levelRowBg: Record<LogLevel, string> = {
  DEBUG: "",
  INFO: "",
  WARN: "",
  ERROR: "",
  FATAL: "bg-red-muted/30",
};

type TimeRange = "15m" | "1h" | "6h" | "24h" | "all";

const timeRangeLabels: Record<TimeRange, string> = {
  "15m": "Last 15 min",
  "1h": "Last 1 hour",
  "6h": "Last 6 hours",
  "24h": "Last 24 hours",
  all: "All time",
};

const timeRangeMs: Record<TimeRange, number> = {
  "15m": 15 * 60_000,
  "1h": 60 * 60_000,
  "6h": 6 * 60 * 60_000,
  "24h": 24 * 60 * 60_000,
  all: Infinity,
};

const TIME_RANGE_KEYS = Object.keys(timeRangeLabels) as TimeRange[];

/* ── Helpers ───────────────────────────────────────────────── */

function formatTimestamp(d: Date): string {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");
  return `${hh}:${mm}:${ss}.${ms}`;
}

function computeCutoff(range: TimeRange): number {
  return timeRangeMs[range] === Infinity ? 0 : Date.now() - timeRangeMs[range];
}

function compileRegex(pattern: string): RegExp | null {
  if (!pattern) return null;
  try {
    return new RegExp(pattern, "gi");
  } catch {
    return null;
  }
}

/** Split text by regex matches and return fragments with match flags. */
function highlightMatches(
  text: string,
  regex: RegExp,
): { text: string; match: boolean }[] {
  const parts: { text: string; match: boolean }[] = [];
  let lastIndex = 0;
  regex.lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, m.index), match: false });
    }
    parts.push({ text: m[0], match: true });
    lastIndex = regex.lastIndex;
    if (m[0].length === 0) {
      regex.lastIndex++;
    }
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), match: false });
  }
  return parts.length > 0 ? parts : [{ text, match: false }];
}

type LogColumn = "line" | "timestamp" | "level" | "source";

const LOG_COLUMNS: { key: LogColumn; label: string }[] = [
  { key: "line", label: "Line #" },
  { key: "timestamp", label: "Timestamp" },
  { key: "level", label: "Level" },
  { key: "source", label: "Source" },
];

/* ── Component ─────────────────────────────────────────────── */

export function Logs() {
  /* ── State ────────────────────────────────────── */
  const [logs, setLogs] = useState<LogEntry[]>(initialLogs);
  const [search, setSearch] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [enabledLevels, setEnabledLevels] = useState<Set<LogLevel>>(
    () => new Set(ALL_LEVELS),
  );
  const [timeRange, setTimeRange] = useState<TimeRange>("24h");
  const [wrap, setWrap] = useState(true);
  const [cutoff, setCutoff] = useState(() => computeCutoff("24h"));
  const [visibleCols, setVisibleCols] = useState<Set<LogColumn>>(
    () => new Set<LogColumn>(["line", "timestamp", "level", "source"]),
  );

  /* Auto-scroll tracking */
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolled = useRef(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  /* ── Derived ──────────────────────────────────── */
  const regex = useMemo(() => compileRegex(search), [search]);
  const isInvalidRegex = search.length > 0 && regex === null;

  const timeFiltered = useMemo(() => {
    return logs.filter((entry) => {
      if (!enabledLevels.has(entry.level)) return false;
      if (cutoff > 0 && entry.timestamp.getTime() < cutoff) return false;
      if (regex) {
        const pattern = new RegExp(regex.source, regex.flags);
        if (
          !pattern.test(entry.message) &&
          !pattern.test(entry.source) &&
          !pattern.test(entry.level)
        ) {
          return false;
        }
      }
      return true;
    });
  }, [logs, enabledLevels, cutoff, regex]);

  const matchCount = search.length > 0 ? timeFiltered.length : null;

  /* ── Streaming ────────────────────────────────── */
  useEffect(() => {
    if (!streaming) return;
    const id = setInterval(
      () => {
        setLogs((prev) => [...prev, generateLogEntry()]);
        setCutoff((prev) => (prev === 0 ? 0 : computeCutoff(timeRange)));
      },
      800 + Math.random() * 1200,
    );
    return () => clearInterval(id);
  }, [streaming, timeRange]);

  /* ── Auto-scroll ──────────────────────────────── */
  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
      isUserScrolled.current = false;
      setShowScrollIndicator(false);
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const observer = new MutationObserver(() => {
      if (!isUserScrolled.current) {
        el.scrollTop = el.scrollHeight;
      } else if (streaming) {
        setShowScrollIndicator(true);
      }
    });
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [streaming]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    isUserScrolled.current = !atBottom;
    if (atBottom) setShowScrollIndicator(false);
  }, []);

  /* ── Level toggle ─────────────────────────────── */
  function toggleLevel(level: LogLevel) {
    setEnabledLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) {
        if (next.size === 1) return prev;
        next.delete(level);
      } else {
        next.add(level);
      }
      return next;
    });
  }

  function toggleColumn(col: LogColumn) {
    setVisibleCols((prev) => {
      const next = new Set(prev);
      if (next.has(col)) next.delete(col);
      else next.add(col);
      return next;
    });
  }

  function clearLogs() {
    setLogs([]);
    setStreaming(false);
  }

  function handleTimeRangeChange(key: TimeRange) {
    setTimeRange(key);
    setCutoff(computeCutoff(key));
  }

  /* ── Render ───────────────────────────────────── */
  return (
    <SplitPaneLayout direction="column">
      <SplitPaneLayout.Main className="gap-4 p-4 md:p-6">
        {/* Page header */}
        <PageHeader
          title="Logs"
          actions={
            <span className="text-text-tertiary text-xs tabular-nums">
              {timeFiltered.length.toLocaleString()} entries
            </span>
          }
        />

        {/* Toolbar */}
        <Toolbar
          start={
            <>
              {/* Regex search — matches SearchInput styling with font-mono */}
              <div className="relative max-w-xs flex-1">
                <Regex className="text-text-tertiary pointer-events-none absolute top-1/2 left-2 h-3.5 w-3.5 -translate-y-1/2" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search regex..."
                  spellCheck={false}
                  className={cn(
                    "bg-bg-secondary text-text-primary h-7 w-full pr-2 pl-7 font-mono text-xs",
                    "border-border rounded-md border",
                    "placeholder:text-text-disabled",
                    "transition-colors duration-[100ms]",
                    "focus:outline-none",
                    isInvalidRegex
                      ? "border-red focus:border-red"
                      : "border-border focus:border-accent",
                  )}
                />
                {isInvalidRegex && (
                  <AlertTriangle className="text-red absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2" />
                )}
              </div>

              {/* Streaming toggle */}
              <div className="flex items-center gap-1.5">
                <div
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors duration-[100ms]",
                    streaming ? "bg-green animate-pulse" : "bg-bg-tertiary",
                  )}
                />
                <Toggle
                  checked={streaming}
                  onChange={setStreaming}
                  label="Stream"
                />
              </div>

              {/* Match count */}
              {matchCount !== null && (
                <span
                  className={cn(
                    "text-2xs hidden whitespace-nowrap sm:block",
                    matchCount === 0 ? "text-yellow" : "text-text-tertiary",
                  )}
                >
                  {matchCount.toLocaleString()} match
                  {matchCount !== 1 ? "es" : ""}
                </span>
              )}
            </>
          }
          end={
            <>
              {/* Right-side filters */}
              {/* Level filter */}
              <FilterDropdown
                icon={Filter}
                align="right"
                items={ALL_LEVELS.map((level) => ({
                  label: level,
                  icon: (
                    <span
                      className={cn(
                        "inline-block h-2.5 w-2.5 rounded-full",
                        levelDotClass[level],
                      )}
                    />
                  ),
                  checked: enabledLevels.has(level),
                  onClick: () => toggleLevel(level),
                }))}
              >
                Level
                {enabledLevels.size < ALL_LEVELS.length
                  ? ` (${enabledLevels.size})`
                  : ""}
              </FilterDropdown>

              {/* Time range */}
              <FilterDropdown
                icon={Clock}
                align="right"
                items={TIME_RANGE_KEYS.map((key) => ({
                  label: timeRangeLabels[key],
                  checked: timeRange === key,
                  onClick: () => handleTimeRangeChange(key),
                }))}
              >
                {timeRangeLabels[timeRange]}
              </FilterDropdown>

              {/* Columns */}
              <FilterDropdown
                icon={Columns3}
                align="right"
                items={LOG_COLUMNS.map((col) => ({
                  label: col.label,
                  checked: visibleCols.has(col.key),
                  onClick: () => toggleColumn(col.key),
                }))}
              >
                Columns
              </FilterDropdown>

              {/* Wrap toggle */}
              <Button
                variant={wrap ? "primary" : "secondary"}
                size="sm"
                icon={WrapText}
                hideLabel
                onClick={() => setWrap((v) => !v)}
              >
                Wrap
              </Button>

              {/* Clear */}
              <Button
                variant="danger"
                size="sm"
                icon={Trash2}
                hideLabel
                onClick={clearLogs}
              >
                Clear
              </Button>
            </>
          }
        />

        {/* Log viewer */}
        <div className="relative min-h-0 flex-1">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className={cn(
              "bg-bg-primary border-border h-full overflow-auto rounded-md border",
              "text-2xs-f font-mono leading-relaxed",
            )}
          >
            {timeFiltered.length === 0 ? (
              <div className="text-text-disabled flex h-full items-center justify-center text-xs">
                {logs.length === 0
                  ? "No logs — toggle streaming to generate entries"
                  : "No matching entries"}
              </div>
            ) : (
              <table className="w-full border-collapse">
                <tbody>
                  {timeFiltered.map((entry, i) => (
                    <LogRow
                      key={entry.id}
                      entry={entry}
                      lineNumber={i + 1}
                      regex={regex}
                      wrap={wrap}
                      visibleCols={visibleCols}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Scroll-to-bottom indicator */}
          {showScrollIndicator && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
              <Button
                variant="primary"
                size="sm"
                icon={ArrowDown}
                onClick={scrollToBottom}
                className="shadow-lg"
              >
                New entries below
              </Button>
            </div>
          )}
        </div>
      </SplitPaneLayout.Main>
    </SplitPaneLayout>
  );
}

/* ── LogRow ─────────────────────────────────────────────────── */

function LogRow({
  entry,
  lineNumber,
  regex,
  wrap,
  visibleCols,
}: {
  entry: LogEntry;
  lineNumber: number;
  regex: RegExp | null;
  wrap: boolean;
  visibleCols: Set<LogColumn>;
}) {
  return (
    <tr
      className={cn(
        "hover:bg-bg-hover/50 border-b border-b-transparent transition-none",
        levelRowBg[entry.level],
      )}
    >
      {/* Line number */}
      {visibleCols.has("line") && (
        <td className="text-text-disabled w-[1%] py-px pr-3 text-right align-top whitespace-nowrap select-none first:pl-3">
          {lineNumber}
        </td>
      )}
      {/* Timestamp */}
      {visibleCols.has("timestamp") && (
        <td className="text-text-tertiary w-[1%] py-px pr-3 align-top whitespace-nowrap first:pl-3">
          {formatTimestamp(entry.timestamp)}
        </td>
      )}
      {/* Level */}
      {visibleCols.has("level") && (
        <td className="w-[1%] py-px pr-3 align-top whitespace-nowrap first:pl-3">
          <Badge color={levelColor[entry.level]}>{entry.level}</Badge>
        </td>
      )}
      {/* Source */}
      {visibleCols.has("source") && (
        <td className="text-text-secondary w-[1%] py-px pr-3 align-top whitespace-nowrap first:pl-3">
          {entry.source}
        </td>
      )}
      {/* Message */}
      <td
        className={cn(
          "py-px pr-3 align-top first:pl-3",
          levelTextClass[entry.level],
          wrap ? "break-all" : "whitespace-nowrap",
        )}
      >
        {regex ? (
          <HighlightedText text={entry.message} regex={regex} />
        ) : (
          <span className="whitespace-pre-wrap">{entry.message}</span>
        )}
      </td>
    </tr>
  );
}

/* ── HighlightedText ──────────────────────────────────────── */

function HighlightedText({ text, regex }: { text: string; regex: RegExp }) {
  const parts = highlightMatches(text, regex);
  return (
    <span className="whitespace-pre-wrap">
      {parts.map((part, i) =>
        part.match ? (
          <mark
            key={i}
            className="bg-accent-subtle text-accent rounded-sm px-0.5"
          >
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </span>
  );
}
