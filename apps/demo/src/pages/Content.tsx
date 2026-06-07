import { Fragment } from "react";

import {
  Alert,
  AuthorByline,
  Badge,
  Card,
  Kbd,
  PageHeader,
  SectionHeader,
  useSettings,
} from "@leonardaustin/ui";

const fontLabels: Record<string, string> = {
  inter: "Inter",
  "jetbrains-mono": "JetBrains Mono",
  system: "System UI",
};

export function Content() {
  const { fontSize, lineHeight, uiFont } = useSettings();
  return (
    <div className="max-w-4xl space-y-8">
      {/* Page title — uses the shared PageHeader component for consistency. */}
      <PageHeader title="Typography & Content" />

      {/* Headings */}
      <section className="space-y-3">
        <SectionHeader>Headings</SectionHeader>
        <h1 className="text-text-primary text-lg font-semibold">
          Heading 1 — 18px
        </h1>
        <h2 className="text-text-primary text-base font-semibold">
          Heading 2 — 16px
        </h2>
        <h3 className="text-text-primary text-sm font-semibold">
          Heading 3 — 14px
        </h3>
        <h4 className="text-body text-text-primary font-semibold">
          Heading 4 — 13px
        </h4>
      </section>

      {/* Body Text */}
      <section className="space-y-3">
        <SectionHeader>Body Text</SectionHeader>
        <p className="text-body text-text-secondary font-ui leading-relaxed">
          This is body text at the current {fontSize}px size. The dashboard uses{" "}
          {fontLabels[uiFont] ?? uiFont} as its primary font, optimised for
          small sizes with features like alternate glyphs enabled. Line height
          is set to {lineHeight} for comfortable reading density while
          maintaining the compact, information-rich aesthetic.
        </p>
        <p className="text-text-tertiary font-label text-xs leading-relaxed">
          This is smaller supporting text at {Math.round(fontSize * 0.92)}px.
          Used for descriptions, table cells, and secondary information
          throughout the interface.
        </p>
      </section>

      {/* Inline Styles */}
      <section className="space-y-3">
        <SectionHeader>Inline Styles</SectionHeader>
        <p className="text-body text-text-secondary font-ui">
          Text can be{" "}
          <strong className="text-text-primary font-semibold">bold</strong>,{" "}
          <em>italic</em>, or{" "}
          <s className="text-text-tertiary">strikethrough</s>. Links look{" "}
          <a href="#" className="text-accent cursor-pointer hover:underline">
            like this
          </a>
          .
        </p>
        <p className="text-body text-text-secondary font-ui">
          Inline code:{" "}
          <code className="bg-bg-tertiary text-text-primary rounded px-1.5 py-0.5 font-mono text-xs">
            const x = 42
          </code>
        </p>
      </section>

      {/* Code Block */}
      <section className="space-y-3">
        <SectionHeader>Code Block</SectionHeader>
        <pre className="bg-bg-tertiary border-border overflow-x-auto rounded-md border p-4">
          <code className="text-text-primary font-mono text-xs leading-relaxed">{`function greet(name: string) {
  console.log(\`Hello, \${name}!\`)
}

greet('World')`}</code>
        </pre>
      </section>

      {/* Blockquote */}
      <section className="space-y-3">
        <SectionHeader>Blockquote</SectionHeader>
        <blockquote className="border-accent border-l-2 py-1 pl-4">
          <p className="text-body text-text-secondary font-prose italic">
            "Good design is as little design as possible. Less, but better —
            because it concentrates on the essential aspects, and the products
            are not burdened with non-essentials."
          </p>
          <footer className="text-text-tertiary font-label mt-1 text-xs">
            — Dieter Rams
          </footer>
        </blockquote>
      </section>

      {/* Lists */}
      <section className="space-y-3">
        <SectionHeader>Lists</SectionHeader>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p className="text-text-primary font-label mb-2 text-xs font-medium">
              Unordered
            </p>
            <ul className="text-body text-text-secondary font-prose list-inside list-disc space-y-1">
              <li>First item in the list</li>
              <li>Second item with details</li>
              <li>Third item goes here</li>
              <li>Fourth item at the end</li>
            </ul>
          </div>
          <div>
            <p className="text-text-primary font-label mb-2 text-xs font-medium">
              Ordered
            </p>
            <ol className="text-body text-text-secondary font-prose list-inside list-decimal space-y-1">
              <li>Clone the repository</li>
              <li>Install dependencies</li>
              <li>Configure environment</li>
              <li>Start development server</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="space-y-3">
        <SectionHeader>Keyboard Shortcuts</SectionHeader>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-1">
            <span className="text-text-secondary text-xs">Command Palette</span>
            <span className="flex gap-1">
              <Kbd>Cmd</Kbd>
              <Kbd>K</Kbd>
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-text-secondary text-xs">Save</span>
            <span className="flex gap-1">
              <Kbd>Cmd</Kbd>
              <Kbd>S</Kbd>
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-text-secondary text-xs">Close</span>
            <Kbd>Esc</Kbd>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-text-secondary text-xs">Navigate</span>
            <span className="flex gap-1">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd>
            </span>
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <section className="space-y-3">
        <SectionHeader>Dividers</SectionHeader>
        <p className="text-text-secondary text-xs">
          Content above the divider.
        </p>
        <hr className="border-border" />
        <p className="text-text-secondary text-xs">
          Content below the divider.
        </p>
      </section>

      {/* Monospace */}
      <section className="space-y-3">
        <SectionHeader>Monospace / Data</SectionHeader>
        <div className="space-y-1">
          <p className="text-2xs-f text-text-secondary font-mono">
            Resource ID:{" "}
            <span className="text-text-primary">
              d7f3a1b2-c4e5-6789-abcd-ef0123456789
            </span>
          </p>
          <p className="text-2xs-f text-text-secondary font-mono">
            Timestamp:{" "}
            <span className="text-text-primary">2026-04-05T14:32:01.847Z</span>
          </p>
          <p className="text-2xs-f text-text-secondary font-mono">
            SHA: <span className="text-accent">a1b2c3d</span>
          </p>
        </div>
      </section>

      {/* Tabular Numbers */}
      <section className="space-y-3">
        <SectionHeader>Tabular Numbers</SectionHeader>
        <div
          className="space-y-1"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          <p className="text-text-primary font-data text-sm">1,284 users</p>
          <p className="text-text-primary font-data text-sm">42 projects</p>
          <p className="text-text-primary font-data text-sm">99.97% uptime</p>
          <p className="text-text-primary font-data text-sm">186 deploys</p>
        </div>
      </section>

      {/* Content in Cards */}
      <section className="space-y-3">
        <SectionHeader>Content in Cards</SectionHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card
            header={
              <span className="text-text-primary font-label text-xs font-medium">
                Card Header
              </span>
            }
            footer={
              <span className="text-text-tertiary font-label text-2xs">
                Last updated 3 hours ago
              </span>
            }
          >
            <p className="text-text-secondary font-ui text-xs leading-relaxed">
              Cards provide a contained surface for grouping related content.
              They support optional headers and footers for additional context.
            </p>
          </Card>
          <Card>
            <ul className="text-body text-text-secondary font-prose list-inside list-disc space-y-1">
              <li>Authentication service</li>
              <li>Database migrations</li>
              <li>API gateway config</li>
              <li>Worker processes</li>
            </ul>
          </Card>
          <Card>
            <pre className="bg-bg-tertiary overflow-x-auto rounded p-2">
              <code className="text-text-primary text-2xs font-mono leading-relaxed">{`GET /api/v1/users
Accept: application/json
Authorization: Bearer ***`}</code>
            </pre>
          </Card>
        </div>
      </section>

      {/* Multi-Column Layouts */}
      <section className="space-y-3">
        <SectionHeader>Multi-Column Layouts</SectionHeader>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <p className="text-body text-text-secondary font-prose leading-relaxed">
            Two-column layouts are useful for placing related content
            side-by-side. This works well for comparisons, before/after states,
            or simply fitting more information above the fold.
          </p>
          <p className="text-body text-text-secondary font-prose leading-relaxed">
            The grid automatically collapses to a single column on smaller
            screens, ensuring the layout remains readable on mobile devices
            without any additional effort.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-bg-tertiary rounded-md p-3">
            <p className="text-text-tertiary font-label text-2xs">Requests</p>
            <p className="text-text-primary font-data text-base font-semibold">
              12.4k
            </p>
          </div>
          <div className="bg-bg-tertiary rounded-md p-3">
            <p className="text-text-tertiary font-label text-2xs">
              Avg Latency
            </p>
            <p className="text-text-primary font-data text-base font-semibold">
              42ms
            </p>
          </div>
          <div className="bg-bg-tertiary rounded-md p-3">
            <p className="text-text-tertiary font-label text-2xs">Error Rate</p>
            <p className="text-text-primary font-data text-base font-semibold">
              0.03%
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-bg-tertiary rounded-md p-3 sm:col-span-2">
            <p className="text-text-secondary font-prose text-xs leading-relaxed">
              This wider column spans two-thirds of the grid. It works well for
              primary content that needs more horizontal space, such as charts,
              logs, or detailed descriptions.
            </p>
          </div>
          <div className="bg-bg-tertiary rounded-md p-3 sm:col-span-1">
            <p className="text-text-secondary font-prose text-xs leading-relaxed">
              Narrower sidebar column for supplementary content or metadata.
            </p>
          </div>
        </div>
      </section>

      {/* Content with Badges & Status */}
      <section className="space-y-3">
        <SectionHeader>Content with Badges & Status</SectionHeader>
        <p className="text-body text-text-secondary font-ui">
          Deploy is <Badge color="green">healthy</Badge>, build is{" "}
          <Badge color="yellow">pending</Badge>, and the canary is{" "}
          <Badge color="red">failing</Badge>.
        </p>
        <ul className="space-y-2">
          <li className="text-text-secondary flex items-center justify-between text-xs">
            <span>api-gateway</span>
            <Badge color="green" dot>
              Running
            </Badge>
          </li>
          <li className="text-text-secondary flex items-center justify-between text-xs">
            <span>worker-queue</span>
            <Badge color="yellow" dot>
              Degraded
            </Badge>
          </li>
          <li className="text-text-secondary flex items-center justify-between text-xs">
            <span>cron-scheduler</span>
            <Badge color="green" dot>
              Running
            </Badge>
          </li>
          <li className="text-text-secondary flex items-center justify-between text-xs">
            <span>log-ingest</span>
            <Badge color="red" dot>
              Down
            </Badge>
          </li>
        </ul>
        <div className="space-y-px overflow-hidden rounded-md">
          {[
            {
              service: "Auth API",
              region: "us-east-1",
              status: "green" as const,
              label: "Healthy",
            },
            {
              service: "Data Pipeline",
              region: "eu-west-1",
              status: "yellow" as const,
              label: "Degraded",
            },
            {
              service: "CDN Edge",
              region: "ap-south-1",
              status: "green" as const,
              label: "Healthy",
            },
            {
              service: "Search Index",
              region: "us-west-2",
              status: "red" as const,
              label: "Outage",
            },
          ].map((row, i) => (
            <div
              key={row.service}
              className={`flex items-center justify-between px-3 py-2 text-xs ${i % 2 === 0 ? "bg-bg-secondary" : "bg-bg-tertiary"}`}
            >
              <span className="text-text-primary font-label font-medium">
                {row.service}
              </span>
              <span className="text-text-tertiary font-data">{row.region}</span>
              <Badge color={row.status} dot>
                {row.label}
              </Badge>
            </div>
          ))}
        </div>
      </section>

      {/* Image Placeholders & Media */}
      <section className="space-y-3">
        <SectionHeader>Image Placeholders & Media</SectionHeader>
        <div className="bg-bg-tertiary flex h-48 items-center justify-center rounded-md">
          <span className="text-text-tertiary text-xs">
            Full-width image placeholder — 100% x 192px
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="bg-bg-tertiary flex h-32 items-center justify-center rounded-md">
            <span className="text-text-tertiary text-xs">Image A</span>
          </div>
          <div className="bg-bg-tertiary flex h-32 items-center justify-center rounded-md">
            <span className="text-text-tertiary text-xs">Image B</span>
          </div>
        </div>
        <figure>
          <div className="bg-bg-tertiary flex h-40 items-center justify-center rounded-md">
            <span className="text-text-tertiary text-xs">
              Figure with caption
            </span>
          </div>
          <figcaption className="text-text-tertiary font-label text-2xs mt-2 text-center">
            Fig 1. System architecture overview — last updated March 2026
          </figcaption>
        </figure>
      </section>

      {/* Prose / Long-form Content */}
      <section className="space-y-3">
        <SectionHeader>Prose / Long-form Content</SectionHeader>
        <div>
          <h3 className="text-text-primary text-base font-semibold">
            Building Reliable Distributed Systems
          </h3>
          <p className="text-text-tertiary text-xs">
            Patterns and practices for production infrastructure
          </p>
          {/* AuthorByline at size="md" matches the content page's text
              density (12px name, 10px meta) for consistency with blog articles. */}
          <AuthorByline
            size="md"
            name="Alex Chen"
            meta="March 15, 2026"
            className="mt-2"
          />
        </div>
        <p className="text-body text-text-secondary font-prose leading-relaxed">
          Distributed systems introduce failure modes that simply do not exist
          in single-process applications. Network partitions, clock skew, and
          partial failures require fundamentally different approaches to error
          handling, state management, and consistency guarantees. The CAP
          theorem gives us a useful framework, but real-world systems demand
          nuanced trade-offs that go far beyond choosing two out of three.
        </p>
        <p className="text-body text-text-secondary font-prose leading-relaxed">
          Observability is the foundation of reliability. Before you can improve
          a system, you need to understand its behavior under load. Structured
          logging, distributed tracing, and metric aggregation provide the
          visibility required to diagnose issues before they escalate. The best
          teams treat observability as a first-class concern, not an
          afterthought bolted on during incident response.
        </p>
        <p className="text-body text-text-secondary font-prose leading-relaxed">
          Resilience patterns like circuit breakers, bulkheads, and retry
          budgets protect services from cascading failures. A well-placed
          circuit breaker can be the difference between a minor blip and a
          full-scale outage. These patterns are not expensive to implement, but
          they require disciplined testing — including chaos engineering
          practices that deliberately inject failures to validate recovery
          paths.
        </p>
        <div className="bg-bg-tertiary border-accent rounded-r-md border-l-2 p-4">
          <p className="text-body text-text-secondary font-prose italic">
            "The major difference between a thing that might go wrong and a
            thing that cannot possibly go wrong is that when a thing that cannot
            possibly go wrong goes wrong, it usually turns out to be impossible
            to get at or repair."
          </p>
          <p className="text-text-tertiary font-label mt-1 text-xs">
            — Douglas Adams
          </p>
        </div>
        <Alert type="info" title="Note">
          This article covers patterns applicable to most distributed
          architectures. For service-mesh-specific guidance, see the
          infrastructure team's internal wiki.
        </Alert>
      </section>

      {/* Definition Lists / Key-Value Pairs */}
      <section className="space-y-3">
        <SectionHeader>Definition Lists / Key-Value Pairs</SectionHeader>
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
          {[
            ["Region", "us-east-1"],
            ["Status", "Active"],
            ["Plan", "Pro"],
            ["Members", "12"],
            ["Created", "Jan 2026"],
          ].map(([label, value]) => (
            <Fragment key={label}>
              <dt className="text-text-tertiary font-label text-xs">{label}</dt>
              <dd className="text-text-primary font-data text-xs font-medium">
                {value}
              </dd>
            </Fragment>
          ))}
        </dl>
      </section>

      {/* Tables (Semantic HTML) */}
      <section className="space-y-3">
        <SectionHeader>Tables (Semantic HTML)</SectionHeader>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-bg-tertiary">
              <tr>
                <th
                  scope="col"
                  className="text-text-tertiary text-2xs px-3 py-2 text-left font-medium tracking-wider uppercase"
                >
                  Endpoint
                </th>
                <th
                  scope="col"
                  className="text-text-tertiary text-2xs px-3 py-2 text-left font-medium tracking-wider uppercase"
                >
                  Method
                </th>
                <th
                  scope="col"
                  className="text-text-tertiary text-2xs px-3 py-2 text-left font-medium tracking-wider uppercase"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="text-text-tertiary text-2xs px-3 py-2 text-right font-medium tracking-wider uppercase"
                >
                  Latency
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  endpoint: "/api/v1/users",
                  method: "GET",
                  status: 200,
                  latency: "12ms",
                },
                {
                  endpoint: "/api/v1/auth/login",
                  method: "POST",
                  status: 200,
                  latency: "84ms",
                },
                {
                  endpoint: "/api/v1/projects",
                  method: "GET",
                  status: 200,
                  latency: "23ms",
                },
                {
                  endpoint: "/api/v1/deploy",
                  method: "POST",
                  status: 201,
                  latency: "1,204ms",
                },
                {
                  endpoint: "/api/v1/search",
                  method: "GET",
                  status: 504,
                  latency: "30,000ms",
                },
              ].map((row) => (
                <tr
                  key={row.endpoint + row.method}
                  className="border-border border-b"
                >
                  <td className="text-text-secondary px-3 py-2 font-mono text-xs">
                    {row.endpoint}
                  </td>
                  <td className="text-text-secondary px-3 py-2 text-xs">
                    {row.method}
                  </td>
                  <td className="px-3 py-2 text-xs">
                    <span
                      className={
                        row.status >= 500
                          ? "text-red"
                          : row.status >= 400
                            ? "text-yellow"
                            : "text-green"
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="text-text-secondary px-3 py-2 text-right font-mono text-xs">
                    {row.latency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Nested Lists & Checklists */}
      <section className="space-y-3">
        <SectionHeader>Nested Lists & Checklists</SectionHeader>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <p className="text-text-primary mb-2 text-xs font-medium">
              Nested Unordered
            </p>
            <ul className="text-body text-text-secondary list-inside list-disc space-y-1">
              <li>
                Infrastructure
                <ul className="text-text-tertiary mt-1 ml-4 list-inside list-[circle] space-y-1">
                  <li>Compute instances</li>
                  <li>Load balancers</li>
                </ul>
              </li>
              <li>
                Services
                <ul className="text-text-tertiary mt-1 ml-4 list-inside list-[circle] space-y-1">
                  <li>API gateway</li>
                  <li>Message queue</li>
                </ul>
              </li>
              <li>Monitoring</li>
            </ul>
          </div>
          <div>
            <p className="text-text-primary mb-2 text-xs font-medium">
              Nested Ordered
            </p>
            <ol className="text-body text-text-secondary list-inside list-decimal space-y-1">
              <li>
                Planning phase
                <ol className="text-text-tertiary mt-1 ml-4 list-inside list-[lower-alpha] space-y-1">
                  <li>Define requirements</li>
                  <li>Create design doc</li>
                </ol>
              </li>
              <li>
                Implementation
                <ol className="text-text-tertiary mt-1 ml-4 list-inside list-[lower-alpha] space-y-1">
                  <li>Build core API</li>
                  <li>Write tests</li>
                </ol>
              </li>
              <li>Deployment</li>
            </ol>
          </div>
        </div>
        <div>
          <p className="text-text-primary mb-2 text-xs font-medium">
            Checklist
          </p>
          <div className="space-y-1.5">
            {[
              { label: "Configure CI pipeline", checked: true },
              { label: "Add unit test coverage", checked: true },
              { label: "Set up staging environment", checked: true },
              { label: "Run load tests", checked: false },
              { label: "Update runbook", checked: false },
              { label: "Schedule go-live review", checked: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className={`flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded border ${item.checked ? "bg-accent border-accent" : "bg-bg-secondary border-border"}`}
                >
                  {item.checked && (
                    <svg
                      className="text-text-on-accent h-2.5 w-2.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-xs ${item.checked ? "text-text-tertiary line-through" : "text-text-secondary"}`}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
