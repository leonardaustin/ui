import type { BadgeColor } from "@leonardaustin/ui";

export type EmailLabel = "Work" | "Personal" | "Finance" | "Updates" | "Social";
export type EmailCategory = "inbox" | "sent" | "drafts" | "starred" | "trash";

export interface EmailAddress {
  name: string;
  email: string;
}

export interface EmailMessage {
  id: string;
  from: EmailAddress;
  to: EmailAddress[];
  cc?: EmailAddress[];
  date: string;
  body: string;
}

export interface Email {
  id: string;
  threadId: string;
  from: EmailAddress;
  to: EmailAddress[];
  subject: string;
  snippet: string;
  messages: EmailMessage[];
  date: string;
  isRead: boolean;
  isStarred: boolean;
  labels: EmailLabel[];
  category: EmailCategory;
  hasAttachments: boolean;
}

export const labelColors: Record<EmailLabel, BadgeColor> = {
  Work: "blue",
  Personal: "purple",
  Finance: "green",
  Updates: "gray",
  Social: "yellow",
};

export function formatEmailDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffHr = Math.floor(diffMs / 3600000);

  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday =
    d.getDate() === yesterday.getDate() &&
    d.getMonth() === yesterday.getMonth() &&
    d.getFullYear() === yesterday.getFullYear();

  if (isToday) {
    if (diffMin < 1) return "Just now";
    if (diffMin < 60) return `${diffMin}m`;
    return `${diffHr}h`;
  }
  if (isYesterday) return "Yesterday";

  const diffDay = Math.floor(diffMs / 86400000);
  if (diffDay < 7) {
    return d.toLocaleDateString("en-US", { weekday: "short" });
  }

  if (d.getFullYear() === now.getFullYear()) {
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

/** Compact date for email list rows: "22:10" if today, "23 APR" otherwise */
export function formatEmailListDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();

  const isToday =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();

  if (isToday) {
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }

  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

// Helper to produce ISO strings relative to now
function daysAgo(days: number, hours = 0, minutes = 0): string {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(d.getHours() - hours, d.getMinutes() - minutes, 0, 0);
  return d.toISOString();
}

const me: EmailAddress = {
  name: "Leonard Austin",
  email: "leonard@example.com",
};

export const emails: Email[] = [
  // --- Inbox emails ---
  {
    id: "1",
    threadId: "t1",
    from: { name: "Sarah Chen", email: "sarah.chen@acme.co" },
    to: [me],
    subject: "Q2 Planning: Updated timeline and deliverables",
    snippet:
      "Hi team, I've updated the Q2 planning doc with revised timelines based on our discussion...",
    date: daysAgo(0, 0, 12),
    isRead: false,
    isStarred: true,
    labels: ["Work", "Personal", "Updates"],
    category: "inbox",
    hasAttachments: true,
    messages: [
      {
        id: "1a",
        from: { name: "Sarah Chen", email: "sarah.chen@acme.co" },
        to: [me],
        date: daysAgo(0, 2),
        body: "Hi team,\n\nI've put together the initial Q2 planning document. Key milestones:\n\n1. API v2 launch — April 15\n2. Mobile app beta — May 1\n3. Dashboard redesign — May 15\n\nPlease review and let me know if the timelines look realistic.\n\nBest,\nSarah",
      },
      {
        id: "1b",
        from: me,
        to: [{ name: "Sarah Chen", email: "sarah.chen@acme.co" }],
        date: daysAgo(0, 1),
        body: "Thanks Sarah. The API v2 timeline looks tight — can we push it to April 22? The auth migration is taking longer than expected.",
      },
      {
        id: "1c",
        from: { name: "Sarah Chen", email: "sarah.chen@acme.co" },
        to: [me],
        date: daysAgo(0, 0, 12),
        body: "Good point. I've updated the Q2 planning doc with revised timelines based on our discussion. API v2 now targets April 22.\n\nI've also attached the updated Gantt chart for reference.\n\nLet me know if there's anything else to adjust.",
      },
    ],
  },
  {
    id: "2",
    threadId: "t2",
    from: { name: "GitHub", email: "notifications@github.com" },
    to: [me],
    subject: "[leonardaustin/ui] PR #47: Add dark mode toggle",
    snippet:
      "mergify[bot] commented: This PR has been approved and will be merged automatically...",
    date: daysAgo(0, 0, 45),
    isRead: false,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "2a",
        from: { name: "GitHub", email: "notifications@github.com" },
        to: [me],
        date: daysAgo(0, 0, 45),
        body: "mergify[bot] commented on PR #47:\n\nThis PR has been approved and will be merged automatically when all checks pass.\n\n---\nView it on GitHub: https://github.com/leonardaustin/ui/pull/47",
      },
    ],
  },
  {
    id: "3",
    threadId: "t3",
    from: {
      name: "Alessandro Monteverdi",
      email: "alex.r@designstudio.io",
    },
    to: [me],
    subject: "Design review: New component library mockups",
    snippet:
      "Hey! I finished the mockups for the new component library. Check out the Figma link below...",
    date: daysAgo(0, 1, 30),
    isRead: false,
    isStarred: false,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: true,
    messages: [
      {
        id: "3a",
        from: {
          name: "Alessandro Monteverdi",
          email: "alex.r@designstudio.io",
        },
        to: [me],
        date: daysAgo(0, 1, 30),
        body: "Hey!\n\nI finished the mockups for the new component library. Check out the Figma link below:\n\nhttps://figma.com/example-link\n\nKey changes from last iteration:\n- Simplified button variants (removed outline-dashed)\n- Added new badge component with dot indicator\n- Refined color palette for better contrast\n\nLet me know your thoughts before I hand off to engineering.\n\nCheers,\nAlex",
      },
    ],
  },
  {
    id: "4",
    threadId: "t4",
    from: { name: "Stripe", email: "receipts@stripe.com" },
    to: [me],
    subject: "Your receipt from Acme Corp — $49.00",
    snippet: "Payment to Acme Corp for Pro Plan (Monthly). Amount: $49.00...",
    date: daysAgo(0, 3),
    isRead: true,
    isStarred: false,
    labels: ["Finance"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "4a",
        from: { name: "Stripe", email: "receipts@stripe.com" },
        to: [me],
        date: daysAgo(0, 3),
        body: "Payment to Acme Corp\n\nPro Plan (Monthly)\nAmount: $49.00\nDate: April 5, 2026\nCard: •••• 4242\n\nView receipt: https://dashboard.stripe.com/receipts/example",
      },
    ],
  },
  {
    id: "5",
    threadId: "t5",
    from: { name: "Marcus Johnson", email: "marcus.j@devteam.co" },
    to: [me, { name: "Sarah Chen", email: "sarah.chen@acme.co" }],
    subject: "Re: Database migration strategy",
    snippet:
      "I ran the benchmarks on the new schema. Results look promising — 40% improvement in query...",
    date: daysAgo(0, 5),
    isRead: true,
    isStarred: true,
    labels: ["Work", "Finance", "Updates"],
    category: "inbox",
    hasAttachments: true,
    messages: [
      {
        id: "5a",
        from: me,
        to: [
          { name: "Marcus Johnson", email: "marcus.j@devteam.co" },
          { name: "Sarah Chen", email: "sarah.chen@acme.co" },
        ],
        date: daysAgo(1, 2),
        body: "Team,\n\nI've been looking at our database migration options. Two approaches:\n\n1. Blue-green deployment with pg_dump/restore\n2. Online migration with pgloader + logical replication\n\nOption 2 is more complex but gives us zero downtime. Thoughts?\n\nLeonard",
      },
      {
        id: "5b",
        from: { name: "Sarah Chen", email: "sarah.chen@acme.co" },
        to: [me, { name: "Marcus Johnson", email: "marcus.j@devteam.co" }],
        date: daysAgo(0, 8),
        body: "I'd lean toward option 2 since we can't afford downtime during business hours. Marcus, can you benchmark both approaches on the staging dataset?",
      },
      {
        id: "5c",
        from: { name: "Marcus Johnson", email: "marcus.j@devteam.co" },
        to: [me, { name: "Sarah Chen", email: "sarah.chen@acme.co" }],
        date: daysAgo(0, 5),
        body: "I ran the benchmarks on the new schema. Results look promising — 40% improvement in query latency on the top 10 queries.\n\nOption 2 (logical replication) worked flawlessly on staging. Total sync time for our 200GB dataset: ~45 minutes.\n\nI'll write up the runbook and share by EOD tomorrow.\n\nAttached: benchmark_results.csv",
      },
    ],
  },
  {
    id: "6",
    threadId: "t6",
    from: { name: "LinkedIn", email: "notifications@linkedin.com" },
    to: [me],
    subject: "You have 3 new connection requests",
    snippet: "Emily Zhang, David Park, and 1 other want to connect with you...",
    date: daysAgo(0, 7),
    isRead: true,
    isStarred: false,
    labels: ["Social"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "6a",
        from: { name: "LinkedIn", email: "notifications@linkedin.com" },
        to: [me],
        date: daysAgo(0, 7),
        body: "You have 3 new connection requests:\n\n- Emily Zhang, Senior Engineer at Google\n- David Park, CTO at StartupXYZ\n- Rachel Kim, Product Manager at Meta\n\nView your invitations on LinkedIn.",
      },
    ],
  },
  {
    id: "7",
    threadId: "t7",
    from: { name: "Christopherson Williams", email: "julia@freelance.dev" },
    to: [me],
    subject: "Invoice #2024-089 — March development work",
    snippet:
      "Hi Leonard, please find attached the invoice for March. Total: $3,200...",
    date: daysAgo(1),
    isRead: false,
    isStarred: false,
    labels: ["Finance", "Work"],
    category: "inbox",
    hasAttachments: true,
    messages: [
      {
        id: "7a",
        from: { name: "Christopherson Williams", email: "julia@freelance.dev" },
        to: [me],
        date: daysAgo(1),
        body: "Hi Leonard,\n\nPlease find attached the invoice for March development work.\n\nSummary:\n- API integration (16 hours): $1,600\n- Bug fixes (8 hours): $800\n- Code review & consultation (8 hours): $800\n\nTotal: $3,200\nPayment terms: Net 30\n\nThanks for the continued partnership!\n\nJulia",
      },
    ],
  },
  {
    id: "8",
    threadId: "t8",
    from: { name: "AWS", email: "no-reply@aws.amazon.com" },
    to: [me],
    subject: "Your AWS bill for March 2026 is available",
    snippet:
      "Your AWS bill for the period March 1-31, 2026 is now available. Total: $142.37...",
    date: daysAgo(1, 4),
    isRead: true,
    isStarred: false,
    labels: ["Finance"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "8a",
        from: { name: "AWS", email: "no-reply@aws.amazon.com" },
        to: [me],
        date: daysAgo(1, 4),
        body: "Your AWS bill for the period March 1-31, 2026 is now available.\n\nTotal charges: $142.37\n\nBreakdown:\n- EC2: $67.20\n- RDS: $45.00\n- S3: $12.17\n- CloudFront: $8.50\n- Other: $9.50\n\nView your bill at https://console.aws.amazon.com/billing",
      },
    ],
  },
  {
    id: "9",
    threadId: "t9",
    from: { name: "Priya Sharma", email: "priya@acme.co" },
    to: [me],
    subject: "Onboarding feedback — Week 1",
    snippet:
      "Hi Leonard! Just wanted to share some thoughts on my first week. The codebase docs are great...",
    date: daysAgo(1, 6),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "9a",
        from: { name: "Priya Sharma", email: "priya@acme.co" },
        to: [me],
        date: daysAgo(1, 6),
        body: "Hi Leonard!\n\nJust wanted to share some thoughts on my first week.\n\nThe codebase docs are great — especially the architecture decision records. A few things I noticed:\n\n1. The local dev setup guide is missing the Redis configuration step\n2. The API docs reference an endpoint that was deprecated\n3. The team wiki link in the README is broken\n\nHappy to submit PRs for these if you'd like!\n\nBest,\nPriya",
      },
    ],
  },
  {
    id: "10",
    threadId: "t10",
    from: { name: "Tom Bradley", email: "tom.b@acme.co" },
    to: [me],
    subject: "Friday team lunch — vote on restaurant",
    snippet:
      "Hey everyone! Time to pick a spot for Friday lunch. Options: 1) Thai Garden...",
    date: daysAgo(2),
    isRead: true,
    isStarred: false,
    labels: ["Personal"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "10a",
        from: { name: "Tom Bradley", email: "tom.b@acme.co" },
        to: [me],
        date: daysAgo(2, 3),
        body: "Hey everyone!\n\nTime to pick a spot for Friday lunch. Options:\n\n1) Thai Garden — great pad thai, vegetarian options\n2) Burger Lab — new craft burger place\n3) Sakura Sushi — all-you-can-eat lunch special\n\nReply with your vote by Thursday!\n\nTom",
      },
      {
        id: "10b",
        from: me,
        to: [{ name: "Tom Bradley", email: "tom.b@acme.co" }],
        date: daysAgo(2),
        body: "I'll go with Sakura Sushi — the lunch special is hard to beat!",
      },
    ],
  },
  {
    id: "11",
    threadId: "t11",
    from: { name: "Datadog", email: "alerts@datadoghq.com" },
    to: [me],
    subject: "[RECOVERED] High error rate on api-prod",
    snippet:
      "The monitor 'API Error Rate > 5%' has recovered. Duration: 12 minutes...",
    date: daysAgo(2, 5),
    isRead: true,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "11a",
        from: { name: "Datadog", email: "alerts@datadoghq.com" },
        to: [me],
        date: daysAgo(2, 5),
        body: "Monitor: API Error Rate > 5%\nStatus: RECOVERED\nTriggered: 2026-04-03 14:23 UTC\nRecovered: 2026-04-03 14:35 UTC\nDuration: 12 minutes\n\nPeak error rate: 8.2%\nAffected endpoints: /api/v1/users, /api/v1/orders\n\nView on Datadog: https://app.datadoghq.com/monitors/example",
      },
    ],
  },
  {
    id: "12",
    threadId: "t12",
    from: { name: "Emma Wilson", email: "emma.w@design.co" },
    to: [me],
    subject: "Brand guidelines v2 — ready for review",
    snippet:
      "Hi Leonard, the updated brand guidelines are ready. Major changes include new typography...",
    date: daysAgo(2, 8),
    isRead: false,
    isStarred: true,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: true,
    messages: [
      {
        id: "12a",
        from: { name: "Emma Wilson", email: "emma.w@design.co" },
        to: [me],
        date: daysAgo(2, 8),
        body: "Hi Leonard,\n\nThe updated brand guidelines are ready. Major changes include:\n\n- New typography scale (switched from Inter to Geist)\n- Refined color palette with better a11y contrast ratios\n- Updated icon set guidelines\n- New illustration style guide\n\nAttached: brand-guidelines-v2.pdf\n\nPlease review by end of next week.\n\nBest,\nEmma",
      },
    ],
  },
  {
    id: "13",
    threadId: "t13",
    from: { name: "Vercel", email: "notifications@vercel.com" },
    to: [me],
    subject: "Deployment successful: leonardaustin/ui (production)",
    snippet: "Your deployment to production was successful. URL: https://...",
    date: daysAgo(3),
    isRead: true,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "13a",
        from: { name: "Vercel", email: "notifications@vercel.com" },
        to: [me],
        date: daysAgo(3),
        body: 'Deployment successful!\n\nProject: leonardaustin/ui\nEnvironment: Production\nBranch: main\nCommit: abc1234 — "Add dark mode toggle"\nBuild time: 42s\nURL: https://ui.leonardaustin.dev',
      },
    ],
  },
  {
    id: "14",
    threadId: "t14",
    from: { name: "Rachel Kim", email: "rachel.k@startup.io" },
    to: [me],
    subject: "Coffee next week?",
    snippet:
      "Hey Leonard! It's been a while since we caught up. Are you free for coffee next Tuesday...",
    date: daysAgo(3, 2),
    isRead: true,
    isStarred: false,
    labels: ["Personal"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "14a",
        from: { name: "Rachel Kim", email: "rachel.k@startup.io" },
        to: [me],
        date: daysAgo(3, 2),
        body: "Hey Leonard!\n\nIt's been a while since we caught up. Are you free for coffee next Tuesday or Wednesday afternoon? I'd love to hear about what you're building.\n\nAlso, I might have a interesting opportunity to discuss — our team is looking for a technical advisor.\n\nLet me know!\nRachel",
      },
    ],
  },
  {
    id: "15",
    threadId: "t15",
    from: { name: "Jake Torres", email: "jake.t@acme.co" },
    to: [me],
    subject: "Re: Code review feedback — auth module",
    snippet: "Thanks for the detailed review! I've addressed all comments...",
    date: daysAgo(3, 4),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "15a",
        from: me,
        to: [{ name: "Jake Torres", email: "jake.t@acme.co" }],
        date: daysAgo(4),
        body: "Jake,\n\nGood progress on the auth module. A few things:\n\n1. The token refresh logic should handle concurrent requests (use a mutex or queue)\n2. Consider moving the JWT validation to middleware instead of per-handler\n3. The error messages leak internal details — use generic messages for 401/403\n\nOtherwise looks solid. Let me know when it's ready for another pass.\n\nLeonard",
      },
      {
        id: "15b",
        from: { name: "Jake Torres", email: "jake.t@acme.co" },
        to: [me],
        date: daysAgo(3, 4),
        body: "Thanks for the detailed review! I've addressed all comments:\n\n1. Added a token refresh queue with deduplication\n2. Moved JWT validation to middleware — much cleaner\n3. Sanitized all error responses\n\nPushed to the PR. Ready for re-review when you have a chance.",
      },
    ],
  },
  {
    id: "16",
    threadId: "t16",
    from: { name: "Notion", email: "notify@makenotion.com" },
    to: [me],
    subject: "Weekly digest: 5 pages updated in Engineering",
    snippet:
      "Pages updated this week in Engineering workspace: API Docs, Migration Runbook...",
    date: daysAgo(4),
    isRead: true,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "16a",
        from: { name: "Notion", email: "notify@makenotion.com" },
        to: [me],
        date: daysAgo(4),
        body: "Weekly digest for Engineering workspace\n\nPages updated this week:\n1. API Docs — updated by Sarah Chen\n2. Migration Runbook — updated by Marcus Johnson\n3. Q2 OKRs — updated by Sarah Chen\n4. On-call Playbook — updated by Jake Torres\n5. Architecture Decision Records — updated by Leonard Austin",
      },
    ],
  },
  {
    id: "17",
    threadId: "t17",
    from: { name: "Mike Chen", email: "mike.c@acme.co" },
    to: [me],
    subject: "VPN access request — new contractor",
    snippet:
      "Hey Leonard, can you approve VPN access for our new contractor Julia Nakamura...",
    date: daysAgo(4, 3),
    isRead: false,
    isStarred: false,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "17a",
        from: { name: "Mike Chen", email: "mike.c@acme.co" },
        to: [me],
        date: daysAgo(4, 3),
        body: "Hey Leonard,\n\nCan you approve VPN access for our new contractor Julia Nakamura? She'll need access to:\n\n- Staging environment\n- Internal wiki\n- GitHub org (read-only for now)\n\nHer start date is next Monday. I've already submitted the IT ticket (#4521).\n\nThanks,\nMike",
      },
    ],
  },
  {
    id: "18",
    threadId: "t18",
    from: { name: "Figma", email: "notifications@figma.com" },
    to: [me],
    subject: "Alex Rivera commented on 'Dashboard Redesign'",
    snippet:
      "Alex Rivera left a comment: 'What about using a gradient for the header section...'",
    date: daysAgo(5),
    isRead: true,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "18a",
        from: { name: "Figma", email: "notifications@figma.com" },
        to: [me],
        date: daysAgo(5),
        body: "Alex Rivera commented on 'Dashboard Redesign':\n\n\"What about using a gradient for the header section? I think it would add more depth and match the new brand direction.\"\n\nView in Figma: https://figma.com/example-dashboard",
      },
    ],
  },
  {
    id: "19",
    threadId: "t19",
    from: { name: "Security Team", email: "security@acme.co" },
    to: [me],
    subject: "Action required: Rotate your API keys",
    snippet:
      "As part of our quarterly security review, please rotate your API keys by April 10...",
    date: daysAgo(5, 6),
    isRead: false,
    isStarred: true,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "19a",
        from: { name: "Security Team", email: "security@acme.co" },
        to: [me],
        date: daysAgo(5, 6),
        body: "Hi team,\n\nAs part of our quarterly security review, please rotate your API keys by April 10, 2026.\n\nAffected services:\n- GitHub Personal Access Tokens\n- AWS Access Keys\n- Datadog API Keys\n- Stripe Test Keys\n\nInstructions: https://wiki.acme.co/security/key-rotation\n\nPlease confirm completion by replying to this email.\n\nSecurity Team",
      },
    ],
  },
  {
    id: "20",
    threadId: "t20",
    from: { name: "Newsletter", email: "hello@bytesized.dev" },
    to: [me],
    subject: "This week in web dev: React 20 preview, CSS nesting lands",
    snippet:
      "Top stories: React 20 compiler preview, CSS nesting in all major browsers, Bun 2.0...",
    date: daysAgo(6),
    isRead: true,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "20a",
        from: { name: "Newsletter", email: "hello@bytesized.dev" },
        to: [me],
        date: daysAgo(6),
        body: "This Week in Web Dev\n\n1. React 20 Compiler Preview — automatic memoization is here\n2. CSS Nesting lands in all major browsers\n3. Bun 2.0 released with native S3 support\n4. TypeScript 6.0 beta with pattern matching\n5. Deno KV goes generally available\n\nRead more: https://bytesized.dev/issue/42",
      },
    ],
  },
  {
    id: "21",
    threadId: "t21",
    from: { name: "David Park", email: "david.p@venture.vc" },
    to: [me],
    subject: "Intro: CTO of BuildFast (YC W26)",
    snippet:
      "Hi Leonard, I wanted to introduce you to Jamie Lee, CTO of BuildFast (YC W26 batch)...",
    date: daysAgo(6, 4),
    isRead: true,
    isStarred: true,
    labels: ["Personal"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "21a",
        from: { name: "David Park", email: "david.p@venture.vc" },
        to: [me, { name: "Jamie Lee", email: "jamie@buildfast.dev" }],
        date: daysAgo(6, 4),
        body: "Hi Leonard,\n\nI wanted to introduce you to Jamie Lee, CTO of BuildFast (YC W26 batch). They're building developer tools for deployment automation and I think you two would have a lot to talk about.\n\nJamie — Leonard leads engineering at Acme and has deep experience with CI/CD and infrastructure.\n\nI'll leave it to you both to connect!\n\nBest,\nDavid",
      },
    ],
  },
  {
    id: "22",
    threadId: "t22",
    from: { name: "HR Team", email: "hr@acme.co" },
    to: [me],
    subject: "Reminder: Submit your PTO requests for Q2",
    snippet:
      "Please submit any planned time off for Q2 by April 15. Use the HR portal...",
    date: daysAgo(7),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "22a",
        from: { name: "HR Team", email: "hr@acme.co" },
        to: [me],
        date: daysAgo(7),
        body: "Hi everyone,\n\nPlease submit any planned time off for Q2 (April-June) by April 15.\n\nUse the HR portal: https://hr.acme.co/pto\n\nReminder: You have 8 PTO days remaining this year.\n\nThanks,\nHR Team",
      },
    ],
  },
  {
    id: "23",
    threadId: "t23",
    from: { name: "Sentry", email: "noreply@sentry.io" },
    to: [me],
    subject: "New issue: TypeError in UserProfile component",
    snippet:
      "TypeError: Cannot read properties of undefined (reading 'avatar')...",
    date: daysAgo(7, 3),
    isRead: false,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "23a",
        from: { name: "Sentry", email: "noreply@sentry.io" },
        to: [me],
        date: daysAgo(7, 3),
        body: "New Issue in leonardaustin/ui\n\nTypeError: Cannot read properties of undefined (reading 'avatar')\n\nFile: src/components/UserProfile.tsx:42\nBrowser: Chrome 124\nOS: macOS 15.2\nEvents: 23\nUsers affected: 8\n\nView on Sentry: https://sentry.io/issues/example",
      },
    ],
  },

  // --- Sent emails ---
  {
    id: "24",
    threadId: "t24",
    from: me,
    to: [{ name: "Sarah Chen", email: "sarah.chen@acme.co" }],
    subject: "Updated architecture diagram",
    snippet:
      "Hi Sarah, here's the updated architecture diagram showing the new microservices layout...",
    date: daysAgo(1, 2),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "sent",
    hasAttachments: true,
    messages: [
      {
        id: "24a",
        from: me,
        to: [{ name: "Sarah Chen", email: "sarah.chen@acme.co" }],
        date: daysAgo(1, 2),
        body: "Hi Sarah,\n\nHere's the updated architecture diagram showing the new microservices layout. Key changes:\n\n- Extracted auth service from the monolith\n- Added message queue between order service and notification service\n- New API gateway layer\n\nLet me know if this aligns with your vision for Q2.\n\nLeonard",
      },
    ],
  },
  {
    id: "25",
    threadId: "t25",
    from: me,
    to: [{ name: "Jake Torres", email: "jake.t@acme.co" }],
    subject: "Welcome to the team!",
    snippet:
      "Hey Jake, welcome aboard! Here are some resources to get you started...",
    date: daysAgo(3, 6),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "sent",
    hasAttachments: false,
    messages: [
      {
        id: "25a",
        from: me,
        to: [{ name: "Jake Torres", email: "jake.t@acme.co" }],
        date: daysAgo(3, 6),
        body: "Hey Jake,\n\nWelcome aboard! Here are some resources to get you started:\n\n1. Engineering Wiki: https://wiki.acme.co/eng\n2. Local dev setup: https://wiki.acme.co/eng/setup\n3. Code style guide: https://wiki.acme.co/eng/style\n4. On-call handbook: https://wiki.acme.co/eng/oncall\n\nYour buddy for the first month is Marcus. Don't hesitate to reach out with any questions!\n\nLeonard",
      },
    ],
  },
  {
    id: "26",
    threadId: "t26",
    from: me,
    to: [{ name: "Rachel Kim", email: "rachel.k@startup.io" }],
    subject: "Re: Coffee next week?",
    snippet: "Hey Rachel! Tuesday afternoon works great. How about 2pm at...",
    date: daysAgo(2, 8),
    isRead: true,
    isStarred: false,
    labels: ["Personal"],
    category: "sent",
    hasAttachments: false,
    messages: [
      {
        id: "26a",
        from: me,
        to: [{ name: "Rachel Kim", email: "rachel.k@startup.io" }],
        date: daysAgo(2, 8),
        body: "Hey Rachel!\n\nTuesday afternoon works great. How about 2pm at Blue Bottle on Market Street?\n\nWould love to hear about the advisor role too.\n\nSee you then!\nLeonard",
      },
    ],
  },
  {
    id: "27",
    threadId: "t27",
    from: me,
    to: [{ name: "Priya Sharma", email: "priya@acme.co" }],
    subject: "Re: Onboarding feedback — Week 1",
    snippet:
      "Great catches Priya! Yes please go ahead and submit PRs for those fixes...",
    date: daysAgo(1, 3),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "sent",
    hasAttachments: false,
    messages: [
      {
        id: "27a",
        from: me,
        to: [{ name: "Priya Sharma", email: "priya@acme.co" }],
        date: daysAgo(1, 3),
        body: "Great catches Priya!\n\nYes please go ahead and submit PRs for those fixes. Tag me as reviewer.\n\nAlso, if you notice anything else during onboarding, keep a running list. We'll do a proper retro at the end of your first month.\n\nWelcome to the team!\nLeonard",
      },
    ],
  },
  {
    id: "28",
    threadId: "t28",
    from: me,
    to: [{ name: "Security Team", email: "security@acme.co" }],
    subject: "Re: Action required: Rotate your API keys",
    snippet: "Done. All keys rotated and verified. Details below...",
    date: daysAgo(4, 2),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "sent",
    hasAttachments: false,
    messages: [
      {
        id: "28a",
        from: me,
        to: [{ name: "Security Team", email: "security@acme.co" }],
        date: daysAgo(4, 2),
        body: "Done. All keys rotated and verified.\n\n- GitHub PAT: rotated ✓\n- AWS Access Keys: rotated ✓\n- Datadog API Key: rotated ✓\n- Stripe Test Key: rotated ✓\n\nAll services confirmed working with new keys.\n\nLeonard",
      },
    ],
  },

  // --- Drafts ---
  {
    id: "29",
    threadId: "t29",
    from: me,
    to: [{ name: "Jamie Lee", email: "jamie@buildfast.dev" }],
    subject: "Re: Intro from David — happy to connect",
    snippet:
      "Hi Jamie, thanks for the intro from David. I'd love to learn more about...",
    date: daysAgo(5),
    isRead: true,
    isStarred: false,
    labels: ["Personal"],
    category: "drafts",
    hasAttachments: false,
    messages: [
      {
        id: "29a",
        from: me,
        to: [{ name: "Jamie Lee", email: "jamie@buildfast.dev" }],
        date: daysAgo(5),
        body: "Hi Jamie,\n\nThanks for the intro from David. I'd love to learn more about BuildFast — deployment automation is right up my alley.\n\nAre you free for a 30-minute call next week? I'm flexible on timing.\n\n[DRAFT — finish and send]",
      },
    ],
  },
  {
    id: "30",
    threadId: "t30",
    from: me,
    to: [{ name: "Engineering All", email: "eng-all@acme.co" }],
    subject: "RFC: Adopting OpenTelemetry for distributed tracing",
    snippet:
      "Team, I'd like to propose we adopt OpenTelemetry for our distributed tracing needs...",
    date: daysAgo(3),
    isRead: true,
    isStarred: true,
    labels: ["Work"],
    category: "drafts",
    hasAttachments: false,
    messages: [
      {
        id: "30a",
        from: me,
        to: [{ name: "Engineering All", email: "eng-all@acme.co" }],
        date: daysAgo(3),
        body: "Team,\n\nI'd like to propose we adopt OpenTelemetry for our distributed tracing needs.\n\nBackground:\n- Currently using a mix of Datadog APM and custom logging\n- Vendor lock-in is becoming a concern\n- Need standardized trace context propagation across services\n\nProposal:\n- Adopt OpenTelemetry SDK across all Go services\n- Use OTLP exporter to Datadog (backward compatible)\n- Migrate custom spans to OTel conventions\n\n[DRAFT — add migration timeline and cost analysis]",
      },
    ],
  },
  {
    id: "31",
    threadId: "t31",
    from: me,
    to: [{ name: "HR Team", email: "hr@acme.co" }],
    subject: "PTO request — May 19-23",
    snippet: "Hi HR team, I'd like to request PTO for May 19-23 (5 days)...",
    date: daysAgo(2),
    isRead: true,
    isStarred: false,
    labels: ["Personal"],
    category: "drafts",
    hasAttachments: false,
    messages: [
      {
        id: "31a",
        from: me,
        to: [{ name: "HR Team", email: "hr@acme.co" }],
        date: daysAgo(2),
        body: "Hi HR team,\n\nI'd like to request PTO for May 19-23 (5 days).\n\nI'll ensure all critical work is handed off to Marcus before I leave.\n\n[DRAFT — confirm dates with Sarah first]",
      },
    ],
  },

  // --- Trash ---
  {
    id: "32",
    threadId: "t32",
    from: { name: "Promo", email: "deals@techstore.com" },
    to: [me],
    subject: "🔥 Flash sale: 50% off all monitors this weekend only!",
    snippet:
      "Don't miss out! 50% off all monitors including the UltraWide 34\" curved...",
    date: daysAgo(3),
    isRead: true,
    isStarred: false,
    labels: [],
    category: "trash",
    hasAttachments: false,
    messages: [
      {
        id: "32a",
        from: { name: "Promo", email: "deals@techstore.com" },
        to: [me],
        date: daysAgo(3),
        body: 'FLASH SALE: 50% off all monitors this weekend only!\n\nFeatured deals:\n- UltraWide 34" Curved: $299 (was $599)\n- 4K 27" IPS: $199 (was $399)\n- Gaming 32" 165Hz: $249 (was $499)\n\nShop now at techstore.com',
      },
    ],
  },
  {
    id: "33",
    threadId: "t33",
    from: { name: "Spam Filter", email: "noreply@spamcheck.co" },
    to: [me],
    subject: "Your weekly spam report",
    snippet:
      "12 messages were filtered this week. 0 false positives detected...",
    date: daysAgo(5),
    isRead: true,
    isStarred: false,
    labels: [],
    category: "trash",
    hasAttachments: false,
    messages: [
      {
        id: "33a",
        from: { name: "Spam Filter", email: "noreply@spamcheck.co" },
        to: [me],
        date: daysAgo(5),
        body: "Weekly Spam Report\n\nMessages filtered: 12\nFalse positives: 0\n\nTop blocked domains:\n- marketing-blast.com (4)\n- surveys-unlimited.net (3)\n- free-prizes.xyz (5)",
      },
    ],
  },
  {
    id: "34",
    threadId: "t34",
    from: { name: "Old Newsletter", email: "weekly@deprecated-tech.io" },
    to: [me],
    subject: "Issue #412: The future of jQuery",
    snippet: "This week: Why jQuery still matters in 2026, plus tips for...",
    date: daysAgo(8),
    isRead: true,
    isStarred: false,
    labels: [],
    category: "trash",
    hasAttachments: false,
    messages: [
      {
        id: "34a",
        from: { name: "Old Newsletter", email: "weekly@deprecated-tech.io" },
        to: [me],
        date: daysAgo(8),
        body: "Issue #412: The Future of jQuery\n\nThis week: Why jQuery still matters in 2026\n\n...just kidding. We're shutting down this newsletter. Thanks for reading!",
      },
    ],
  },
  {
    id: "35",
    threadId: "t35",
    from: { name: "Conference", email: "tickets@techconf2026.com" },
    to: [me],
    subject: "Early bird registration closing soon!",
    snippet:
      "TechConf 2026 early bird pricing ends April 1. Register now and save 30%...",
    date: daysAgo(10),
    isRead: true,
    isStarred: false,
    labels: [],
    category: "trash",
    hasAttachments: false,
    messages: [
      {
        id: "35a",
        from: { name: "Conference", email: "tickets@techconf2026.com" },
        to: [me],
        date: daysAgo(10),
        body: "TechConf 2026\n\nEarly bird pricing ends April 1!\n\nRegular: $999\nEarly bird: $699 (save 30%)\n\nSpeakers include:\n- Linus Torvalds\n- Kelsey Hightower\n- Sarah Drasner\n\nRegister: https://techconf2026.com/register",
      },
    ],
  },

  // A few more inbox items for bulk
  {
    id: "36",
    threadId: "t36",
    from: { name: "CI Bot", email: "ci@acme.co" },
    to: [me],
    subject: "Build #1847 failed on branch feature/auth-refactor",
    snippet:
      "Build failed. 3 test failures in auth_test.go. See details below...",
    date: daysAgo(1, 8),
    isRead: false,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "36a",
        from: { name: "CI Bot", email: "ci@acme.co" },
        to: [me],
        date: daysAgo(1, 8),
        body: "Build #1847 FAILED\n\nBranch: feature/auth-refactor\nCommit: def5678\nDuration: 3m 22s\n\nFailing tests:\n- TestTokenRefresh (auth_test.go:45)\n- TestConcurrentTokenRefresh (auth_test.go:89)\n- TestTokenExpiry (auth_test.go:112)\n\nView build: https://ci.acme.co/builds/1847",
      },
    ],
  },
  {
    id: "37",
    threadId: "t37",
    from: { name: "PagerDuty", email: "alerts@pagerduty.com" },
    to: [me],
    subject: "[RESOLVED] Incident #891: High latency on payments service",
    snippet:
      "Incident #891 has been resolved. Duration: 28 minutes. Root cause: connection pool...",
    date: daysAgo(4, 7),
    isRead: true,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "37a",
        from: { name: "PagerDuty", email: "alerts@pagerduty.com" },
        to: [me],
        date: daysAgo(4, 7),
        body: "Incident #891: RESOLVED\n\nService: payments-service\nSeverity: P2\nDuration: 28 minutes\nRoot cause: Connection pool exhaustion due to leaked connections in retry logic\nFix: Added connection timeout and proper cleanup in retry handler\n\nView incident: https://pagerduty.com/incidents/891",
      },
    ],
  },
  {
    id: "38",
    threadId: "t38",
    from: { name: "Lisa Wang", email: "lisa.w@acme.co" },
    to: [me],
    subject: "Team retro action items — March",
    snippet:
      "Here are the action items from our March retro: 1) Improve PR review turnaround...",
    date: daysAgo(5, 2),
    isRead: true,
    isStarred: false,
    labels: ["Work"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "38a",
        from: { name: "Lisa Wang", email: "lisa.w@acme.co" },
        to: [me],
        date: daysAgo(5, 2),
        body: "Hi team,\n\nHere are the action items from our March retro:\n\n1. Improve PR review turnaround time (target: < 24h)\n   Owner: Leonard\n2. Add more integration tests for payment flows\n   Owner: Marcus\n3. Document deployment rollback procedures\n   Owner: Jake\n4. Set up automated dependency updates\n   Owner: Priya\n\nLet's check in on these at next month's retro.\n\nLisa",
      },
    ],
  },
  {
    id: "39",
    threadId: "t39",
    from: { name: "Google Calendar", email: "calendar@google.com" },
    to: [me],
    subject: "Reminder: 1:1 with Sarah Chen tomorrow at 10am",
    snippet:
      "You have a meeting tomorrow: 1:1 with Sarah Chen, 10:00 AM - 10:30 AM...",
    date: daysAgo(1, 12),
    isRead: true,
    isStarred: false,
    labels: [],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "39a",
        from: { name: "Google Calendar", email: "calendar@google.com" },
        to: [me],
        date: daysAgo(1, 12),
        body: "Reminder: 1:1 with Sarah Chen\n\nWhen: Tomorrow, 10:00 AM - 10:30 AM\nWhere: Google Meet (link in calendar event)\n\nAgenda:\n- Q2 planning review\n- Team hiring update\n- Auth module timeline",
      },
    ],
  },
  {
    id: "40",
    threadId: "t40",
    from: { name: "npm", email: "support@npmjs.com" },
    to: [me],
    subject: "Security advisory: Critical vulnerability in lodash < 4.17.21",
    snippet:
      "A critical prototype pollution vulnerability has been found in lodash versions...",
    date: daysAgo(6, 5),
    isRead: false,
    isStarred: false,
    labels: ["Updates"],
    category: "inbox",
    hasAttachments: false,
    messages: [
      {
        id: "40a",
        from: { name: "npm", email: "support@npmjs.com" },
        to: [me],
        date: daysAgo(6, 5),
        body: "Security Advisory\n\nPackage: lodash\nSeverity: CRITICAL\nVulnerability: Prototype Pollution\nAffected versions: < 4.17.21\nCVE: CVE-2026-XXXXX\n\nRecommendation: Update to lodash@4.17.21 or later immediately.\n\nnpm audit fix --force\n\nLearn more: https://npmjs.com/advisories/example",
      },
    ],
  },
];
