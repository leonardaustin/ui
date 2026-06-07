export interface WikiPage {
  id: string;
  title: string;
  content: string;
  parentId: string | null;
  tags: string[];
  updatedAt: string;
  icon?: string;
  order: number;
}

export interface WikiTreeNode {
  page: WikiPage;
  children: WikiTreeNode[];
}

export const wikiPages: WikiPage[] = [
  {
    id: "home",
    title: "Home",
    icon: "\u{1F3E0}",
    parentId: null,
    tags: [],
    updatedAt: "2026-04-08",
    order: 0,
    content: `# Welcome to the Wiki

This is the internal knowledge base for the team. Use the sidebar tree to navigate, or search for a specific page.

## Quick Links

- [Getting Started](/wiki/getting-started) — onboarding and setup
- [Architecture](/wiki/architecture) — system design and decisions
- [Runbooks](/wiki/runbooks) — operational procedures
- [Style Guide](/wiki/style-guide) — code conventions

## Contributing

Pages are authored in Markdown via the CLI. Run \`wiki new <slug>\` to create a page, or \`wiki edit <slug>\` to modify an existing one. Changes are committed to the repo and deployed automatically.`,
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "\u{1F680}",
    parentId: "home",
    tags: ["onboarding", "setup"],
    updatedAt: "2026-04-06",
    order: 0,
    content: `# Getting Started

Welcome to the team. This page covers everything you need to get up and running.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** v20 or later
- **pnpm** v9 or later
- **Docker** for running local services
- **Git** configured with your SSH key

## Clone the Repository

\`\`\`bash
git clone git@github.com:acme/platform.git
cd platform
pnpm install
\`\`\`

## Environment Variables

Copy the example env file and fill in your local values:

\`\`\`bash
cp .env.example .env.local
\`\`\`

| Variable | Description | Required |
|----------|-------------|----------|
| \`DATABASE_URL\` | Postgres connection string | Yes |
| \`REDIS_URL\` | Redis connection string | Yes |
| \`API_KEY\` | Third-party API key | No |
| \`DEBUG\` | Enable debug logging | No |

## Next Steps

Once your environment is set up, head to [Local Development](/wiki/local-development) for the day-to-day workflow.`,
  },
  {
    id: "local-development",
    title: "Local Development",
    icon: "\u{1F4BB}",
    parentId: "getting-started",
    tags: ["onboarding", "setup", "development"],
    updatedAt: "2026-04-05",
    order: 0,
    content: `# Local Development

This page covers the daily development workflow once your environment is set up.

## Starting the Dev Server

\`\`\`bash
pnpm dev
\`\`\`

This starts Vite on \`localhost:5173\` with hot module replacement enabled.

## Running Tests

\`\`\`bash
pnpm test          # Run all tests
pnpm test:watch    # Watch mode
pnpm test:coverage # With coverage report
\`\`\`

## Database Migrations

We use Drizzle for schema management:

\`\`\`bash
pnpm db:generate   # Generate migration from schema changes
pnpm db:migrate    # Apply pending migrations
pnpm db:studio     # Open Drizzle Studio
\`\`\`

## Code Quality

Before committing, always run:

\`\`\`bash
pnpm lint          # ESLint
pnpm format        # Prettier
pnpm build         # TypeScript check + build
\`\`\`

> **Tip:** The pre-commit hook runs lint and format automatically. If it blocks your commit, fix the issues before forcing through.

## Troubleshooting

### Port already in use

Kill the process on port 5173:

\`\`\`bash
lsof -ti:5173 | xargs kill -9
\`\`\`

### Stale dependencies

If you see unexpected module errors after pulling:

\`\`\`bash
rm -rf node_modules
pnpm install
\`\`\``,
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "\u{1F3D7}\uFE0F",
    parentId: "home",
    tags: ["architecture", "infrastructure"],
    updatedAt: "2026-04-07",
    order: 1,
    content: `# Architecture

This page describes the high-level system architecture and key design decisions.

## Overview

The platform follows a modular monolith pattern with clear domain boundaries. The frontend is a single-page React application that communicates with a Go API server over REST and WebSocket connections.

## Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Frontend | React + Vite | SPA with client-side routing |
| API | Go + Chi | RESTful with WebSocket support |
| Database | PostgreSQL | Primary data store |
| Cache | Redis | Sessions, rate limiting, pub/sub |
| Queue | Redis Streams | Async job processing |
| Search | PostgreSQL FTS | Full-text search via \`tsvector\` |

## Key Decisions

### Why a monolith?

We chose a modular monolith over microservices because:

1. **Team size** — with fewer than 10 engineers, the operational overhead of microservices is not justified
2. **Deployment simplicity** — single binary, single deploy pipeline
3. **Shared types** — domain models are used across boundaries without serialization

### Why Go for the API?

- Strong concurrency primitives for WebSocket handling
- Single binary deployment with no runtime dependencies
- Excellent performance characteristics for our workload

### Why not tRPC or GraphQL?

REST with OpenAPI gives us language-agnostic clients, straightforward caching, and simpler debugging. The frontend uses generated TypeScript clients from the OpenAPI spec.

## Diagrams

Architecture diagrams are maintained in \`docs/diagrams/\` using Mermaid. Run \`pnpm docs:diagrams\` to regenerate PNGs from the source files.

See [Service Mesh](/wiki/service-mesh) for details on inter-service communication patterns.`,
  },
  {
    id: "service-mesh",
    title: "Service Mesh",
    icon: "\u{1F578}\uFE0F",
    parentId: "architecture",
    tags: ["architecture", "infrastructure", "networking"],
    updatedAt: "2026-04-03",
    order: 0,
    content: `# Service Mesh

Even within our monolith, we use internal service boundaries with well-defined interfaces. This page documents how those boundaries are enforced.

## Module Boundaries

Each domain module exposes a public API through a \`service.go\` file. Direct imports of internal packages across module boundaries are forbidden — the linter enforces this.

\`\`\`
internal/
  auth/
    service.go      # Public API
    handler.go      # HTTP handlers
    repository.go   # Data access
    model.go        # Domain types
  billing/
    service.go
    ...
\`\`\`

## Inter-Module Communication

Modules communicate through:

1. **Direct calls** — for synchronous, read-heavy operations
2. **Event bus** — for async operations where the caller does not need the result
3. **Outbox pattern** — for operations that must be transactionally consistent with a database write

## Event Bus

We use Redis Streams as a lightweight event bus. Events are published with:

\`\`\`go
bus.Publish(ctx, "user.created", UserCreatedEvent{
    UserID: user.ID,
    Email:  user.Email,
})
\`\`\`

Consumers subscribe to event patterns:

\`\`\`go
bus.Subscribe("user.*", func(ctx context.Context, event Event) error {
    // Handle event
    return nil
})
\`\`\`

## Circuit Breakers

External service calls use circuit breakers with the following defaults:

| Setting | Value |
|---------|-------|
| Failure threshold | 5 consecutive failures |
| Recovery timeout | 30 seconds |
| Half-open requests | 1 |`,
  },
  {
    id: "runbooks",
    title: "Runbooks",
    icon: "\u{1F4D3}",
    parentId: "home",
    tags: ["operations", "oncall"],
    updatedAt: "2026-04-08",
    order: 2,
    content: `# Runbooks

Operational procedures for common incidents and maintenance tasks. These are the first place to look when you are on-call and something goes wrong.

## Active Runbooks

- [Incident Response](/wiki/incident-response) — step-by-step guide for handling production incidents

## Severity Levels

| Level | Description | Response Time | Examples |
|-------|-------------|---------------|----------|
| **SEV1** | Service is down | 15 minutes | Complete outage, data loss |
| **SEV2** | Major degradation | 30 minutes | Partial outage, auth failures |
| **SEV3** | Minor issue | 4 hours | Slow queries, UI glitches |
| **SEV4** | Cosmetic | Next sprint | Typos, minor styling |

## On-Call Rotation

The on-call rotation is managed in PagerDuty. Each engineer is on-call for one week at a time. During your on-call week:

1. Keep your laptop charged and nearby
2. Respond to pages within the SLA for the severity level
3. Escalate if you cannot resolve within 30 minutes
4. Write a post-mortem for any SEV1 or SEV2 incident`,
  },
  {
    id: "incident-response",
    title: "Incident Response",
    icon: "\u{1F6A8}",
    parentId: "runbooks",
    tags: ["operations", "oncall", "incidents"],
    updatedAt: "2026-04-08",
    order: 0,
    content: `# Incident Response

Step-by-step guide for handling production incidents.

## Step 1: Acknowledge

When you receive a page:

1. Acknowledge the alert in PagerDuty
2. Join the \`#incidents\` Slack channel
3. Post: *"Investigating [alert name]. Updates to follow."*

## Step 2: Assess

Determine the severity and blast radius:

- Check the **Grafana dashboard** for error rates and latency
- Check **application logs** for error patterns
- Check **deployment history** — was anything deployed recently?

\`\`\`bash
# Recent deploys
gh run list --limit 5

# Application logs
kubectl logs -l app=api --tail=100 --since=10m
\`\`\`

## Step 3: Mitigate

Prioritise restoring service over finding root cause:

- **Rollback** if a recent deploy correlates with the incident
- **Scale up** if the issue is load-related
- **Toggle feature flag** if a new feature is causing issues
- **Failover** if a dependency is down

> **Important:** Do not attempt fixes that you are not confident about. Escalate to the relevant domain owner instead.

## Step 4: Communicate

Post updates every 15 minutes in \`#incidents\`:

- What you know so far
- What you are trying next
- Estimated time to resolution (if known)

## Step 5: Resolve

Once service is restored:

1. Mark the incident as resolved in PagerDuty
2. Post a summary in \`#incidents\`
3. Create a post-mortem document within 48 hours (SEV1/SEV2 only)
4. Schedule a post-mortem review meeting`,
  },
  {
    id: "style-guide",
    title: "Style Guide",
    icon: "\u{1F3A8}",
    parentId: "home",
    tags: ["development", "conventions"],
    updatedAt: "2026-04-04",
    order: 3,
    content: `# Style Guide

Code conventions and patterns used across the codebase. Following these consistently reduces review friction and keeps the codebase approachable for new team members.

## Naming Conventions

- **Files:** kebab-case for all files (\`user-service.ts\`, \`auth-handler.go\`)
- **Components:** PascalCase (\`UserProfile\`, \`SearchInput\`)
- **Functions:** camelCase in TypeScript, PascalCase for exported Go functions
- **Constants:** SCREAMING_SNAKE_CASE for true constants, camelCase for config values
- **CSS classes:** kebab-case, using semantic color names

## TypeScript Guidelines

### Prefer \`interface\` over \`type\` for object shapes

\`\`\`typescript
// Good
interface User {
  id: string;
  name: string;
}

// Avoid for object shapes
type User = {
  id: string;
  name: string;
};
\`\`\`

### Use \`const\` assertions for literal types

\`\`\`typescript
const ROLES = ["admin", "editor", "viewer"] as const;
type Role = (typeof ROLES)[number];
\`\`\`

### Avoid \`any\` — use \`unknown\` and narrow

\`\`\`typescript
// Bad
function parse(input: any) { ... }

// Good
function parse(input: unknown) {
  if (typeof input !== "string") throw new Error("Expected string");
  return JSON.parse(input);
}
\`\`\`

## Git Conventions

- **Branch names:** \`feat/short-description\`, \`fix/short-description\`
- **Commit messages:** imperative mood, under 72 characters
- **PRs:** one logical change per PR, squash-merge to main`,
  },
];

export const allWikiTags: string[] = [
  ...new Set(wikiPages.flatMap((p) => p.tags)),
].sort();

export function buildWikiTree(pages: WikiPage[]): WikiTreeNode[] {
  const childrenMap = new Map<string | null, WikiPage[]>();
  for (const page of pages) {
    const siblings = childrenMap.get(page.parentId) ?? [];
    siblings.push(page);
    childrenMap.set(page.parentId, siblings);
  }

  function buildNodes(parentId: string | null): WikiTreeNode[] {
    const children = childrenMap.get(parentId) ?? [];
    return children
      .sort((a, b) => a.order - b.order)
      .map((page) => ({
        page,
        children: buildNodes(page.id),
      }));
  }

  return buildNodes(null);
}

export function getAncestors(pageId: string, pages: WikiPage[]): WikiPage[] {
  const byId = new Map(pages.map((p) => [p.id, p]));
  const ancestors: WikiPage[] = [];
  const visited = new Set<string>();
  let current = byId.get(pageId);
  while (current?.parentId) {
    if (visited.has(current.parentId)) break;
    visited.add(current.parentId);
    const parent = byId.get(current.parentId);
    if (!parent) break;
    ancestors.unshift(parent);
    current = parent;
  }
  return ancestors;
}

export function getChildren(pageId: string, pages: WikiPage[]): WikiPage[] {
  return pages
    .filter((p) => p.parentId === pageId)
    .sort((a, b) => a.order - b.order);
}
