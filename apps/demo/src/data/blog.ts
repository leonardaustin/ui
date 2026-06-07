export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: { name: string; role: string };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  coverGradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "zero-downtime-deployments",
    title: "Zero-Downtime Deployments with Rolling Updates",
    excerpt:
      "How we eliminated deployment windows and moved to continuous delivery with rolling updates across our fleet.",
    content: `Rolling deployments changed the way our team ships software. Before adopting them, every release meant a scheduled maintenance window, a nervous on-call engineer watching dashboards, and an implicit promise that nothing would break. We were deploying once a week at best, and the blast radius of each release kept growing.

The key insight was decoupling deployment from release. By routing traffic gradually to new instances while draining old ones, we could verify each canary cohort before promoting to the full fleet. Our load balancer health checks became the gatekeepers — if a new instance failed to pass readiness probes within 30 seconds, the rollout would automatically pause and alert the deploying engineer.

We also invested in feature flags to separate code deployment from feature activation. A deploy could land in production on Monday and the feature it carried would not be enabled until Thursday, after the product team reviewed analytics from the staging ring. This separation gave us confidence to deploy multiple times per day without coordinating across teams.

One subtle issue we hit was database schema compatibility. A rolling deploy means old and new code runs simultaneously, so every migration must be backward-compatible. We adopted an expand-and-contract pattern: first deploy the code that can handle both old and new schemas, then run the migration, then clean up the old code paths in a follow-up release.

Six months in, our deploy frequency went from weekly to about 15 times per day. Incident rates dropped because each release carried fewer changes. The most important cultural shift was that deploys became boring — and boring is exactly what you want from infrastructure.`,
    author: { name: "Alice Chen", role: "Platform Engineer" },
    publishedAt: "2026-04-07",
    readTime: "6 min read",
    tags: ["Deployment", "Infrastructure", "CI/CD"],
    featured: true,
    coverGradient: "linear-gradient(135deg, #1e3a5f 0%, #2d6a4f 100%)",
  },
  {
    id: "building-design-system-tokens",
    title: "Building a Design System Around Tokens, Not Components",
    excerpt:
      "Why we rebuilt our design system from the ground up starting with design tokens instead of UI components.",
    content: `Most design systems start with a component library: buttons, inputs, cards, modals. Ours did too, and within a year we had 140 components that were difficult to theme and nearly impossible to keep consistent across three product surfaces. The root cause was that we had built the roof before pouring the foundation.

Design tokens are the atomic values — colors, spacing scales, type ramps, radii, shadows — that every component references. When tokens are well-structured, a component does not need to know whether it is rendering in a dark theme or a compact density mode. It simply reads the token, and the token resolves to the right value for the current context.

We restructured our tokens into three tiers. Global tokens define the raw palette: blue-500, spacing-4, font-size-sm. Alias tokens map semantic meaning onto globals: color-text-primary, spacing-inline-md. Component tokens are the narrowest scope: button-padding-x, card-border-radius. Changes cascade downward — updating a global token automatically ripples through every alias and component that references it.

The migration took about eight weeks. We wrote codemods to replace hard-coded hex values and pixel sizes with token references, then visually diffed every page in Chromatic to catch regressions. The long tail of one-off overrides was the hardest part; each had to be individually evaluated to decide whether it deserved its own component token or was simply a mistake.

The payoff was immediate. Shipping a new theme went from a two-sprint project to a single pull request that swapped one token file. Designers could iterate on spacing and color in Figma and export tokens that engineers consumed without manual translation. Our component count actually shrank because many "variants" turned out to be the same component under different token values.`,
    author: { name: "Bob Martinez", role: "Design Engineer" },
    publishedAt: "2026-04-04",
    readTime: "7 min read",
    tags: ["Design Systems", "Frontend", "CSS"],
    featured: true,
    coverGradient: "linear-gradient(135deg, #6b21a8 0%, #2563eb 100%)",
  },
  {
    id: "observability-beyond-logging",
    title:
      "Observability Beyond Logging: Traces, Metrics, and the Glue Between Them",
    excerpt:
      "Logs alone are not enough. Here is how we connected traces, metrics, and logs into a single observability story.",
    content: `When our service count crossed 30, debugging production issues with logs alone became untenable. A single user request could touch eight services, and correlating log lines across them meant grepping for request IDs in multiple dashboards. We needed traces.

We instrumented every service with OpenTelemetry and shipped spans to a Tempo backend. The immediate win was a waterfall view of any request: you could see that 400ms of a 600ms response was spent waiting on a downstream cache miss. But traces by themselves only help when you already know which request to look at.

The real power came from connecting the three signals. We configured our metric dashboards to link spikes in error rate or latency to exemplar traces. Clicking a data point on a latency percentile chart would open the slowest trace from that time window. From the trace, each span linked to the structured logs emitted during its execution. This three-click path — metric anomaly to trace to log line — cut our mean time to diagnose from 45 minutes to under 10.

We also started deriving metrics from spans rather than emitting them separately. Request duration, error counts, and throughput could all be computed from trace data, which meant one instrumentation point instead of two. The trade-off is higher cardinality in the trace pipeline, but with tail-based sampling we kept storage costs within budget.

The cultural change mattered as much as the tooling. We made trace IDs visible in API error responses, so support engineers could paste them directly into the tracing UI. On-call runbooks now start with "find the trace" instead of "check the logs." Observability went from a platform team concern to something every engineer interacts with daily.`,
    author: { name: "Eva Lindqvist", role: "SRE" },
    publishedAt: "2026-04-01",
    readTime: "7 min read",
    tags: ["Observability", "Infrastructure", "DevOps"],
    featured: false,
    coverGradient: "linear-gradient(135deg, #0f766e 0%, #164e63 100%)",
  },
  {
    id: "api-design-lessons",
    title: "Five API Design Mistakes We Made So You Don't Have To",
    excerpt:
      "Lessons learned from three years of maintaining a public API consumed by hundreds of integrators.",
    content: `Our public API launched in 2023 with 12 endpoints and a swagger doc. Three years and 140 endpoints later, we have a backlog of design decisions we wish we could undo. Here are the five that cost us the most engineering time.

First, we used sequential integer IDs in URLs. This made enumeration attacks trivial and forced us to bolt on authorization checks that could have been avoided with opaque UUIDs. Migrating existing integrators to the new ID format took six months of dual-format support. Second, we nested resources too deeply. A path like /orgs/{id}/projects/{id}/environments/{id}/deployments/{id} is painful to construct and even worse to paginate. Flatter routes with query-parameter scoping would have been simpler for everyone.

Third, we returned different response shapes for list and detail endpoints of the same resource. The list version omitted fields to save bandwidth, but clients ended up making N+1 calls to get the full objects. A fields query parameter or a consistent shape with optional expansion would have saved thousands of redundant requests per day. Fourth, we did not version our webhook payloads. Adding a field is usually safe, but renaming or removing one broke consumers silently. We now version webhook schemas independently of the REST API.

Fifth, and most painful, we used HTTP status codes inconsistently. A 400 sometimes meant a validation error and sometimes meant a business-logic rejection, with no machine-readable error code to distinguish them. We introduced a structured error envelope with a code, message, and details array, but legacy clients still rely on parsing the message string.

The overarching lesson is that API design is a write-once contract. Every shortcut you take in v1 becomes a compatibility constraint you carry forever. Invest in design reviews, write integration tests from the consumer's perspective, and treat your API changelog as a first-class product artifact.`,
    author: { name: "David Okafor", role: "Backend Engineer" },
    publishedAt: "2026-03-28",
    readTime: "6 min read",
    tags: ["API Design", "Backend", "Architecture"],
    featured: false,
    coverGradient: "linear-gradient(135deg, #9f1239 0%, #7c2d12 100%)",
  },
  {
    id: "safe-database-migrations",
    title: "Running Database Migrations Without Breaking Production",
    excerpt:
      "A practical guide to schema changes that do not require downtime or break running application code.",
    content: `Database migrations are one of the few operations where a mistake can take down your entire product in seconds. We learned this the hard way when an ALTER TABLE on a 200-million-row table locked writes for 11 minutes during peak traffic. Here is the playbook we developed afterward.

The cardinal rule is that every migration must be backward-compatible with the currently deployed application code. This means you never rename or drop a column in the same release that stops reading it. Instead, use the expand-and-contract pattern: add the new column, deploy code that writes to both old and new, backfill the new column, deploy code that reads only from new, then drop the old column in a later release.

For large tables, we avoid long-running locks by using online schema change tools. On PostgreSQL, we rely on pg_repack for table rewrites and CREATE INDEX CONCURRENTLY for index additions. On MySQL, gh-ost gives us pausable, auditable migrations that replicate changes through the binlog rather than locking the table. Both approaches let us run multi-hour data transformations without affecting read or write latency.

Testing migrations in staging is necessary but not sufficient. Schema changes interact with data volume, concurrent query load, and replication lag in ways that a staging environment with 1% of production data cannot reproduce. We run migration dry runs against a production replica with real traffic shadowed to it. The replica is disposable — if the migration fails or causes unexpected locking, we discard it and iterate.

We also version our migration tooling independently of application deploys. Migrations run as a separate CI job that gates the application deploy. If the migration job fails or times out, the application deploy does not proceed. This separation means a developer can iterate on a tricky migration without touching the application release pipeline.`,
    author: { name: "Grace Tanaka", role: "Database Engineer" },
    publishedAt: "2026-03-22",
    readTime: "8 min read",
    tags: ["Databases", "Backend", "Infrastructure"],
    featured: false,
    coverGradient: "linear-gradient(135deg, #854d0e 0%, #365314 100%)",
  },
  {
    id: "cicd-pipeline-performance",
    title: "How We Cut Our CI Pipeline from 18 Minutes to 4",
    excerpt:
      "Practical techniques for speeding up CI/CD pipelines without sacrificing test coverage or reliability.",
    content: `Our CI pipeline had crept up to 18 minutes per push. Engineers were stacking PRs, context-switching while waiting, and occasionally merging without waiting for green. The feedback loop was broken. We set a target of under five minutes and hit 4:12 within a quarter.

The largest single win was parallelizing test suites. We split our test matrix by package and ran shards concurrently across multiple runners. This alone dropped wall-clock time from 18 to 9 minutes. The trick was balancing shard sizes: we instrumented each test's duration and used a greedy bin-packing algorithm to distribute them evenly. Without balancing, one slow shard would bottleneck the entire pipeline.

Caching was the second lever. We cached dependency installation, compiled artifacts, and Docker layer caches between runs. The key insight was using content-addressable cache keys tied to lockfile hashes rather than branch names. This meant that a new branch based on main would immediately benefit from main's cache, and merging back would not invalidate it.

We also moved linting and type-checking to a pre-push hook running locally, so CI only ran tests. This was controversial — some engineers disliked local gates — but it eliminated an entire CI stage and caught issues before they consumed shared compute. For engineers who preferred to push work-in-progress, we added a [skip lint] commit trailer that bypassed the hook.

The remaining gains came from smaller optimizations: replacing a full Docker build with a multi-stage build that only rebuilt changed layers, switching from a general-purpose runner image to a slim custom one with pre-installed toolchains, and deduplicating redundant setup steps across jobs. None of these individually saved more than 90 seconds, but together they shaved off the last four minutes.`,
    author: { name: "Hassan Ali", role: "DevOps Engineer" },
    publishedAt: "2026-03-17",
    readTime: "5 min read",
    tags: ["CI/CD", "DevOps", "Performance"],
    featured: false,
    coverGradient: "linear-gradient(135deg, #1e40af 0%, #6d28d9 100%)",
  },
  {
    id: "developer-experience-internal-tools",
    title: "Investing in Developer Experience for Internal Tools",
    excerpt:
      "Why treating internal tools like products — with onboarding, docs, and feedback loops — pays off at scale.",
    content: `Internal tools are often the unloved stepchildren of engineering organizations. They get built under deadline pressure, documented in a Slack thread, and maintained by whoever happens to remember how they work. At 50 engineers this is manageable. At 200 it becomes a tax on every team.

We started treating internal tools like products by assigning a small DX team — two engineers and a part-time designer — whose mandate was to reduce friction in the development workflow. Their first project was an audit: they shadowed engineers for a week, timing every workflow from "I have an idea" to "it is running in production." The bottlenecks were not where we expected. The slowest step was not CI or deployment but environment setup: getting a local dev environment running with all service dependencies took an average of 47 minutes.

The DX team built a single CLI command that spun up a containerized environment with pre-seeded databases, mock third-party services, and hot-reload configured. Setup time dropped to under three minutes. Adoption was nearly instant because the tool was faster than the manual process it replaced — no mandate or migration needed.

Next they tackled documentation. Instead of a wiki that drifted out of date, they built a docs-as-code system where each service's README was tested in CI. If a setup command in the README failed, the build broke. This aligned incentives: the team that changed a service also had to update its docs, because the pipeline would not let them merge otherwise.

The hardest lesson was that developer experience is never finished. Every new service, dependency, or workflow creates new friction. The DX team now runs a quarterly developer survey and triages the results like a product backlog. The highest-leverage improvements often surprise us — last quarter the top request was not a new tool but better error messages in an existing one.`,
    author: { name: "Iris Novak", role: "DX Lead" },
    publishedAt: "2026-03-12",
    readTime: "6 min read",
    tags: ["Developer Experience", "Engineering Culture", "Tooling"],
    featured: false,
    coverGradient: "linear-gradient(135deg, #4338ca 0%, #0e7490 100%)",
  },
  {
    id: "frontend-performance-budget",
    title: "Enforcing a Frontend Performance Budget in CI",
    excerpt:
      "How we built guardrails that catch performance regressions before they reach users.",
    content: `Our web application had accumulated 2.4MB of JavaScript over two years. No single PR was responsible — each added a reasonable 10-20KB — but the aggregate effect was a first-contentful-paint time north of four seconds on mid-range devices. We needed a systematic approach, not another one-off optimization sprint.

We defined a performance budget: 200KB of compressed JavaScript for the initial route, 3 seconds for Largest Contentful Paint on a simulated 4G connection, and a Cumulative Layout Shift score below 0.1. These numbers were based on our analytics — the 75th percentile of our users' devices and connections, not a best-case lab setup.

The budget lives in a JSON config file checked into the repo. Our CI pipeline runs Lighthouse against a production-like build and compares the results to the budget. If any metric exceeds its threshold, the pipeline fails and posts a comment on the PR with a breakdown of what regressed. The comment includes a bundle analysis link so the author can see exactly which import pushed the budget over.

The first month was painful. We had to make hard choices: replacing a 60KB date library with native Intl APIs, lazy-loading three below-the-fold sections, and switching from a monolithic CSS framework to scoped utility classes. These changes were individually small but collectively brought us under budget.

Maintaining the budget requires ongoing vigilance. We review it quarterly and tighten thresholds as we find new optimization opportunities. The most effective cultural lever has been making performance visible: a dashboard in our office shows real-user LCP and CLS trends, and the team that introduces a regression is responsible for fixing it. Performance went from an abstract goal to a concrete, measurable, and shared responsibility.`,
    author: { name: "James Wright", role: "Frontend Engineer" },
    publishedAt: "2026-03-06",
    readTime: "5 min read",
    tags: ["Performance", "Frontend", "CI/CD"],
    featured: false,
    coverGradient: "linear-gradient(135deg, #b91c1c 0%, #c2410c 100%)",
  },
];

export const allTags: string[] = [
  ...new Set(blogPosts.flatMap((post) => post.tags)),
];
