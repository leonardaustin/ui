export type Priority = "critical" | "high" | "medium" | "low";
export type ColumnId =
  | "backlog"
  | "todo"
  | "in-progress"
  | "in-review"
  | "done";

export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  assignee: string;
  labels: string[];
  dueDate: string;
  columnId: ColumnId;
  order: number;
}

export interface KanbanColumnDef {
  id: ColumnId;
  title: string;
  wipLimit?: number;
}

export const columns: KanbanColumnDef[] = [
  { id: "backlog", title: "Backlog" },
  { id: "todo", title: "Todo" },
  { id: "in-progress", title: "In Progress", wipLimit: 3 },
  { id: "in-review", title: "In Review", wipLimit: 2 },
  { id: "done", title: "Done" },
];

export const assignees = [
  "Alice Chen",
  "Bob Martinez",
  "Carol Kim",
  "David Okafor",
  "Eva Lindqvist",
  "Grace Tanaka",
];

export const allLabels = [
  "frontend",
  "backend",
  "infra",
  "design",
  "bug",
  "security",
  "docs",
  "testing",
];

export const tasks: KanbanTask[] = [
  {
    id: "task-1",
    title: "Design REST API schema for billing service",
    description:
      "Define OpenAPI spec for the new billing endpoints including invoices, subscriptions, and payment methods.",
    priority: "high",
    assignee: "Alice Chen",
    labels: ["backend", "docs"],
    dueDate: "Apr 15",
    columnId: "backlog",
    order: 0,
  },
  {
    id: "task-2",
    title: "Add rate limiting to public API",
    description:
      "Implement token-bucket rate limiting on all public-facing endpoints. Target: 1000 req/min per API key.",
    priority: "critical",
    assignee: "David Okafor",
    labels: ["backend", "security"],
    dueDate: "Apr 12",
    columnId: "backlog",
    order: 1,
  },
  {
    id: "task-3",
    title: "Create onboarding wizard component",
    description:
      "Multi-step wizard with progress indicator for new user signup flow. Must support back/forward navigation.",
    priority: "medium",
    assignee: "Bob Martinez",
    labels: ["frontend", "design"],
    dueDate: "Apr 18",
    columnId: "backlog",
    order: 2,
  },
  {
    id: "task-4",
    title: "Migrate sessions table to partitioned schema",
    description:
      "Partition the sessions table by month to improve query performance. Write reversible migration.",
    priority: "high",
    assignee: "Carol Kim",
    labels: ["backend", "infra"],
    dueDate: "Apr 14",
    columnId: "backlog",
    order: 3,
  },
  {
    id: "task-5",
    title: "Set up E2E test suite with Playwright",
    description:
      "Configure Playwright for critical user flows: login, dashboard load, settings update. Run in CI.",
    priority: "medium",
    assignee: "Grace Tanaka",
    labels: ["testing", "infra"],
    dueDate: "Apr 20",
    columnId: "backlog",
    order: 4,
  },
  {
    id: "task-6",
    title: "Implement WebSocket notifications",
    description:
      "Real-time push notifications via WebSocket for deployment status and alert triggers.",
    priority: "high",
    assignee: "Eva Lindqvist",
    labels: ["backend", "frontend"],
    dueDate: "Apr 16",
    columnId: "backlog",
    order: 5,
  },
  {
    id: "task-7",
    title: "Build search results page with filters",
    description:
      "Full-text search UI with faceted filters for type, date range, and author. Use existing SearchInput component.",
    priority: "medium",
    assignee: "Bob Martinez",
    labels: ["frontend"],
    dueDate: "Apr 22",
    columnId: "todo",
    order: 0,
  },
  {
    id: "task-8",
    title: "Add RBAC middleware for admin routes",
    description:
      "Role-based access control middleware that checks JWT claims against route permissions.",
    priority: "critical",
    assignee: "Alice Chen",
    labels: ["backend", "security"],
    dueDate: "Apr 11",
    columnId: "todo",
    order: 1,
  },
  {
    id: "task-9",
    title: "Fix timezone handling in scheduled jobs",
    description:
      "Cron jobs fire at wrong times for non-UTC users. Store and evaluate all schedules in UTC.",
    priority: "high",
    assignee: "David Okafor",
    labels: ["backend", "bug"],
    dueDate: "Apr 13",
    columnId: "todo",
    order: 2,
  },
  {
    id: "task-10",
    title: "Implement dark mode toggle persistence",
    description:
      "Save theme preference to user settings API and sync across tabs via localStorage events.",
    priority: "low",
    assignee: "Grace Tanaka",
    labels: ["frontend"],
    dueDate: "Apr 25",
    columnId: "todo",
    order: 3,
  },
  {
    id: "task-11",
    title: "Add CSV export for audit log",
    description:
      "Allow admins to export filtered audit log entries as CSV. Stream large exports to avoid memory issues.",
    priority: "medium",
    assignee: "Carol Kim",
    labels: ["backend", "frontend"],
    dueDate: "Apr 19",
    columnId: "todo",
    order: 4,
  },
  {
    id: "task-12",
    title: "Refactor auth token refresh flow",
    description:
      "Replace polling-based token refresh with interceptor pattern. Queue failed requests during refresh.",
    priority: "high",
    assignee: "Alice Chen",
    labels: ["frontend", "security"],
    dueDate: "Apr 14",
    columnId: "in-progress",
    order: 0,
  },
  {
    id: "task-13",
    title: "Build drag-and-drop file upload",
    description:
      "Dropzone component with progress bars, retry on failure, and multi-file support. Max 10MB per file.",
    priority: "medium",
    assignee: "Bob Martinez",
    labels: ["frontend", "design"],
    dueDate: "Apr 17",
    columnId: "in-progress",
    order: 1,
  },
  {
    id: "task-14",
    title: "Optimize N+1 queries in projects endpoint",
    description:
      "Projects list endpoint makes 1 query per project for members. Batch with a single JOIN query.",
    priority: "critical",
    assignee: "David Okafor",
    labels: ["backend"],
    dueDate: "Apr 10",
    columnId: "in-progress",
    order: 2,
  },
  {
    id: "task-15",
    title: "Add OpenTelemetry tracing to API layer",
    description:
      "Instrument all HTTP handlers with OpenTelemetry spans. Export to Jaeger for local dev, OTLP in prod.",
    priority: "medium",
    assignee: "Eva Lindqvist",
    labels: ["backend", "infra"],
    dueDate: "Apr 18",
    columnId: "in-review",
    order: 0,
  },
  {
    id: "task-16",
    title: "Redesign settings page layout",
    description:
      "Move from single-column to tabbed layout. Sections: Profile, Security, Notifications, API Keys.",
    priority: "high",
    assignee: "Bob Martinez",
    labels: ["frontend", "design"],
    dueDate: "Apr 15",
    columnId: "in-review",
    order: 1,
  },
  {
    id: "task-17",
    title: "Write API documentation for v2 endpoints",
    description:
      "Document all v2 API endpoints with request/response examples. Use OpenAPI 3.1 format.",
    priority: "low",
    assignee: "Carol Kim",
    labels: ["docs"],
    dueDate: "Apr 20",
    columnId: "done",
    order: 0,
  },
  {
    id: "task-18",
    title: "Set up GitHub Actions CI pipeline",
    description:
      "Lint, test, build, and deploy preview for every PR. Use Ubicloud runners for cost savings.",
    priority: "high",
    assignee: "Eva Lindqvist",
    labels: ["infra"],
    dueDate: "Apr 8",
    columnId: "done",
    order: 1,
  },
  {
    id: "task-19",
    title: "Fix memory leak in WebSocket handler",
    description:
      "Connections not cleaned up on client disconnect. Add proper close handler and connection tracking.",
    priority: "critical",
    assignee: "Alice Chen",
    labels: ["backend", "bug"],
    dueDate: "Apr 9",
    columnId: "done",
    order: 2,
  },
  {
    id: "task-20",
    title: "Add input validation to all form components",
    description:
      "Consistent validation pattern across forms using zod schemas. Show inline error messages.",
    priority: "medium",
    assignee: "Grace Tanaka",
    labels: ["frontend"],
    dueDate: "Apr 12",
    columnId: "done",
    order: 3,
  },
  {
    id: "task-21",
    title: "Implement SSO with SAML provider",
    description:
      "Enterprise SSO support via SAML 2.0. Handle IdP-initiated and SP-initiated flows.",
    priority: "high",
    assignee: "David Okafor",
    labels: ["backend", "security"],
    dueDate: "Apr 24",
    columnId: "backlog",
    order: 6,
  },
  {
    id: "task-22",
    title: "Add keyboard shortcuts for common actions",
    description:
      "Global keyboard shortcuts: Cmd+K for search, Cmd+N for new item, Escape to close panels.",
    priority: "low",
    assignee: "Grace Tanaka",
    labels: ["frontend"],
    dueDate: "Apr 28",
    columnId: "backlog",
    order: 7,
  },
  {
    id: "task-23",
    title: "Create database backup automation",
    description:
      "Automated daily pg_dump to S3 with 30-day retention. Add restore verification step.",
    priority: "high",
    assignee: "Eva Lindqvist",
    labels: ["infra"],
    dueDate: "Apr 16",
    columnId: "todo",
    order: 5,
  },
];
