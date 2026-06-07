export type LogLevel = "DEBUG" | "INFO" | "WARN" | "ERROR" | "FATAL";

export interface LogEntry {
  id: number;
  timestamp: Date;
  level: LogLevel;
  source: string;
  message: string;
}

const sources = [
  "api-gateway",
  "auth-service",
  "db-pool",
  "scheduler",
  "deploy-agent",
  "metrics-collector",
] as const;

/* Weighted level distribution: ~40% INFO, 25% DEBUG, 20% WARN, 10% ERROR, 5% FATAL */
const weightedLevels: LogLevel[] = [
  ...Array<LogLevel>(8).fill("INFO"),
  ...Array<LogLevel>(5).fill("DEBUG"),
  ...Array<LogLevel>(4).fill("WARN"),
  ...Array<LogLevel>(2).fill("ERROR"),
  ...Array<LogLevel>(1).fill("FATAL"),
];

const messagesByLevel: Record<LogLevel, string[]> = {
  DEBUG: [
    "Resolved DNS for upstream cluster in 2ms",
    "Cache miss for key user:session:a8f3e — fetching from store",
    "Parsed request body: 1.2KB JSON payload",
    "TLS handshake completed with cipher TLS_AES_256_GCM_SHA384",
    "Connection pool stats: active=12 idle=38 waiting=0",
    "Evaluating rate-limit bucket for client 10.0.3.42",
    "JWT claims decoded: sub=usr_7k2m exp=1712851200",
    "Middleware chain: cors -> auth -> ratelimit -> handler (4 stages)",
    "Retry policy: attempt 1/3, backoff 200ms",
    "gRPC channel to metrics-collector healthy, latency p99=4ms",
    "Loading feature flags from config map: 23 flags active",
    "Request context deadline set to 30s",
  ],
  INFO: [
    "GET /api/v1/users 200 OK 34ms",
    "POST /api/v1/auth/login 200 OK 127ms",
    "GET /api/v1/dashboard/metrics 200 OK 89ms",
    "PUT /api/v1/users/42/settings 204 No Content 56ms",
    "Scheduled job cron.cleanup completed in 2.4s — removed 1,847 expired sessions",
    "Deploy started: api-gateway v2.4.2 (commit a3f8c91)",
    "Deploy complete: api-gateway v2.4.2 — 3 pods healthy",
    "Health check passed: all 6 services reporting UP",
    "Database migration 20260408_add_audit_log applied successfully",
    "Metrics flush: 4,218 datapoints written to timeseries store",
    "WebSocket connection established: client ws://dashboard-3 (user: alice)",
    "Background worker processed 86 queued email notifications",
    "Certificate renewal complete: *.example.com expires 2027-04-08",
    "Config reload triggered — 2 values changed (LOG_LEVEL, RATE_LIMIT_RPS)",
    "Graceful shutdown initiated — draining 3 active connections",
    "GET /api/v1/projects/12/builds 200 OK 145ms",
    "POST /api/v1/webhooks/github 202 Accepted 12ms",
    "Ingested 12,480 log lines in batch (3.2MB compressed)",
  ],
  WARN: [
    "GET /api/v1/search?q=* 200 OK 2,340ms — slow query threshold exceeded",
    "Connection pool nearing capacity: 47/50 active connections",
    "Rate limit approaching: client 10.0.3.42 at 890/1000 requests per minute",
    "Disk usage at 82% on /var/log — consider rotation policy",
    "Deprecated header X-Auth-Token used by client; migrate to Authorization bearer",
    "Retry attempt 2/3 for upstream auth-service (timeout after 5s)",
    "Memory usage at 78% (3.1GB / 4GB) — approaching eviction threshold",
    "Stale cache entry served for key dashboard:metrics (age: 342s, max: 300s)",
    "DNS resolution took 1,240ms for auth-service.internal — possible resolver issue",
    "TLS certificate for metrics.internal expires in 14 days",
    "Request payload size 4.8MB exceeds recommended 1MB limit",
    "Goroutine count elevated: 12,847 (baseline: ~8,000)",
  ],
  ERROR: [
    "POST /api/v1/payments 500 Internal Server Error 89ms — transaction rolled back",
    "Connection refused: db-pool-primary:5432 — retrying in 5s",
    "Failed to decode JWT: token signature verification failed",
    "Upstream auth-service returned 503 after 3 retries",
    "Query timeout after 30s: SELECT * FROM audit_log WHERE created_at > $1",
    "Webhook delivery failed: https://hooks.example.com/events — connection reset",
    "OOM kill detected in pod scheduler-worker-2 — restarting",
    "Failed to acquire lock: resource deploy-mutex held by pid 28471 for 120s",
    "Unhandled rejection in async handler: TypeError: Cannot read property 'id' of undefined",
    "Circuit breaker OPEN for db-pool-replica-2 — 5 failures in 60s window",
  ],
  FATAL: [
    "PANIC: index out of range [12] with length 10 in handler ServeHTTP\n  goroutine 847 [running]:\n  api-gateway/handlers.(*Router).ServeHTTP(0xc0004a2000)\n    /app/handlers/router.go:142",
    "Database primary unreachable after 30s — all write operations halted",
    "Configuration validation failed: required key DATABASE_URL not set — refusing to start",
    "Consensus lost: etcd cluster has 1/3 members available — entering read-only mode",
    "SEGFAULT: signal 11 received in worker process pid 1847 — dumping core",
  ],
};

let nextId = 1;

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateEntry(timestamp: Date): LogEntry {
  const level = pick(weightedLevels);
  return {
    id: nextId++,
    timestamp,
    level,
    source: pick(sources),
    message: pick(messagesByLevel[level]),
  };
}

/* Pre-generate ~300 entries spread across the last 24 hours. */
function generateInitialLogs(): LogEntry[] {
  const now = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  const entries: LogEntry[] = [];

  for (let i = 0; i < 300; i++) {
    const offset = Math.random() * twentyFourHours;
    entries.push(generateEntry(new Date(now - twentyFourHours + offset)));
  }

  entries.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());

  /* Re-assign sequential IDs after sorting. */
  entries.forEach((e, i) => {
    e.id = i + 1;
  });
  nextId = entries.length + 1;

  return entries;
}

export const initialLogs: LogEntry[] = generateInitialLogs();

/** Generate a single new log entry with the current timestamp (for streaming). */
export function generateLogEntry(): LogEntry {
  return generateEntry(new Date());
}
