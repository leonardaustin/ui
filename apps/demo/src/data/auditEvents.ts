export type AuditCategory =
  | "Access"
  | "Automation"
  | "Configuration"
  | "Data"
  | "Identity"
  | "Integration";

export type AuditOutcome = "allowed" | "blocked" | "warning";
export type AuditSeverity = "low" | "medium" | "high" | "critical";

export interface AuditActor {
  name: string;
  email: string;
  role: string;
}

export interface AuditTarget {
  name: string;
  type: string;
}

export interface AuditChange {
  label: string;
  from: string;
  to: string;
}

export interface AuditEvent {
  id: string;
  occurredAt: string;
  category: AuditCategory;
  action: string;
  actor: AuditActor;
  target: AuditTarget;
  outcome: AuditOutcome;
  severity: AuditSeverity;
  source: string;
  location: string;
  ipAddress: string;
  requestId: string;
  policy: string;
  summary: string;
  changes: AuditChange[];
}

export const auditEvents: AuditEvent[] = [
  {
    id: "evt_9x4k21",
    occurredAt: "2026-04-28T13:48:22Z",
    category: "Identity",
    action: "MFA requirement updated",
    actor: {
      name: "Maya Chen",
      email: "maya.chen@example.com",
      role: "Security admin",
    },
    target: { name: "Engineering workspace", type: "Policy" },
    outcome: "allowed",
    severity: "medium",
    source: "Admin console",
    location: "London, GB",
    ipAddress: "203.0.113.42",
    requestId: "req_7D3C1BB2",
    policy: "Strong authentication",
    summary: "MFA enforcement changed from optional to required for engineers.",
    changes: [
      { label: "MFA mode", from: "Optional", to: "Required" },
      { label: "Grace period", from: "14 days", to: "7 days" },
    ],
  },
  {
    id: "evt_9x4j88",
    occurredAt: "2026-04-28T12:31:09Z",
    category: "Access",
    action: "Privileged session started",
    actor: {
      name: "Noah Patel",
      email: "noah.patel@example.com",
      role: "Platform engineer",
    },
    target: { name: "Production database", type: "Database" },
    outcome: "warning",
    severity: "high",
    source: "Access gateway",
    location: "Manchester, GB",
    ipAddress: "198.51.100.18",
    requestId: "req_3AD8F20E",
    policy: "Just-in-time access",
    summary: "Privileged database session opened after manager approval.",
    changes: [
      { label: "Access level", from: "Read-only", to: "Admin" },
      { label: "Expires", from: "N/A", to: "45 minutes" },
    ],
  },
  {
    id: "evt_9x4h50",
    occurredAt: "2026-04-28T10:16:44Z",
    category: "Data",
    action: "Bulk export blocked",
    actor: {
      name: "Elena Rossi",
      email: "elena.rossi@example.com",
      role: "Sales operations",
    },
    target: { name: "Customer accounts", type: "Dataset" },
    outcome: "blocked",
    severity: "critical",
    source: "Data loss prevention",
    location: "Milan, IT",
    ipAddress: "192.0.2.67",
    requestId: "req_64A1C29F",
    policy: "Restricted customer export",
    summary: "CSV export exceeded the personal data threshold and was blocked.",
    changes: [
      { label: "Rows requested", from: "500", to: "18,420" },
      { label: "Export format", from: "N/A", to: "CSV" },
    ],
  },
  {
    id: "evt_9x4f03",
    occurredAt: "2026-04-27T22:58:10Z",
    category: "Configuration",
    action: "Webhook destination changed",
    actor: {
      name: "Ava Thompson",
      email: "ava.thompson@example.com",
      role: "Release manager",
    },
    target: { name: "Billing events webhook", type: "Webhook" },
    outcome: "allowed",
    severity: "high",
    source: "API",
    location: "Dublin, IE",
    ipAddress: "203.0.113.96",
    requestId: "req_5B3E92AA",
    policy: "Production change window",
    summary: "Webhook endpoint rotated during the approved deployment window.",
    changes: [
      {
        label: "Endpoint",
        from: "hooks-v1.example.com",
        to: "hooks-v2.example.com",
      },
      { label: "Signing secret", from: "Existing", to: "Rotated" },
    ],
  },
  {
    id: "evt_9x4d77",
    occurredAt: "2026-04-27T18:24:37Z",
    category: "Automation",
    action: "Service account token created",
    actor: {
      name: "Deploy Bot",
      email: "deploy-bot@example.com",
      role: "Automation",
    },
    target: { name: "GitHub deploy integration", type: "Service account" },
    outcome: "allowed",
    severity: "medium",
    source: "CI pipeline",
    location: "Ashburn, US",
    ipAddress: "198.51.100.142",
    requestId: "req_8F9C12D0",
    policy: "Managed automation",
    summary: "A scoped deployment token was created for the release workflow.",
    changes: [
      { label: "Token scope", from: "None", to: "deploy:write" },
      { label: "Expiry", from: "N/A", to: "24 hours" },
    ],
  },
  {
    id: "evt_9x4b19",
    occurredAt: "2026-04-27T15:09:51Z",
    category: "Integration",
    action: "OAuth app consent denied",
    actor: {
      name: "Lucas Meyer",
      email: "lucas.meyer@example.com",
      role: "Contractor",
    },
    target: { name: "Calendar Sync Pro", type: "OAuth app" },
    outcome: "blocked",
    severity: "high",
    source: "Identity provider",
    location: "Berlin, DE",
    ipAddress: "192.0.2.23",
    requestId: "req_2B8D47F1",
    policy: "Third-party app review",
    summary:
      "Consent request included mail and calendar scopes not approved for contractors.",
    changes: [
      {
        label: "Requested scopes",
        from: "profile",
        to: "profile mail calendar",
      },
      { label: "Approval state", from: "Pending", to: "Blocked" },
    ],
  },
  {
    id: "evt_9x4971",
    occurredAt: "2026-04-26T20:42:18Z",
    category: "Access",
    action: "Suspicious sign-in challenged",
    actor: {
      name: "Priya Shah",
      email: "priya.shah@example.com",
      role: "Finance lead",
    },
    target: { name: "Finance dashboard", type: "Application" },
    outcome: "warning",
    severity: "medium",
    source: "Risk engine",
    location: "Toronto, CA",
    ipAddress: "203.0.113.11",
    requestId: "req_6C0E917A",
    policy: "Adaptive access",
    summary:
      "Sign-in required an additional verification step because the location was new.",
    changes: [
      { label: "Risk score", from: "18", to: "64" },
      { label: "Challenge", from: "None", to: "MFA prompt" },
    ],
  },
  {
    id: "evt_9x4634",
    occurredAt: "2026-04-26T11:05:06Z",
    category: "Configuration",
    action: "Retention policy updated",
    actor: {
      name: "Jon Bell",
      email: "jon.bell@example.com",
      role: "Compliance manager",
    },
    target: { name: "Audit event retention", type: "Retention policy" },
    outcome: "allowed",
    severity: "low",
    source: "Admin console",
    location: "New York, US",
    ipAddress: "198.51.100.204",
    requestId: "req_149EA2D4",
    policy: "Compliance retention",
    summary: "Audit event retention was extended to support quarterly review.",
    changes: [
      { label: "Retention", from: "180 days", to: "365 days" },
      { label: "Archive", from: "Disabled", to: "Enabled" },
    ],
  },
  {
    id: "evt_9x4300",
    occurredAt: "2026-04-25T17:36:55Z",
    category: "Data",
    action: "API key viewed",
    actor: {
      name: "Sam Green",
      email: "sam.green@example.com",
      role: "Developer",
    },
    target: { name: "Payments production key", type: "Secret" },
    outcome: "allowed",
    severity: "critical",
    source: "Secrets vault",
    location: "Edinburgh, GB",
    ipAddress: "203.0.113.73",
    requestId: "req_7AA00E81",
    policy: "Secret access logging",
    summary:
      "Production API key was revealed in the vault UI after break-glass confirmation.",
    changes: [
      { label: "Visibility", from: "Hidden", to: "Revealed once" },
      { label: "Break-glass reason", from: "N/A", to: "Payment incident" },
    ],
  },
  {
    id: "evt_9x4104",
    occurredAt: "2026-04-25T09:12:29Z",
    category: "Identity",
    action: "User role downgraded",
    actor: {
      name: "Maya Chen",
      email: "maya.chen@example.com",
      role: "Security admin",
    },
    target: { name: "Owen Brooks", type: "User" },
    outcome: "allowed",
    severity: "low",
    source: "Admin console",
    location: "London, GB",
    ipAddress: "203.0.113.42",
    requestId: "req_35D78BF6",
    policy: "Least privilege",
    summary:
      "User role was reduced after the temporary support assignment ended.",
    changes: [
      { label: "Role", from: "Admin", to: "Viewer" },
      { label: "Group", from: "Support escalation", to: "Customer success" },
    ],
  },
  {
    id: "evt_9x3912",
    occurredAt: "2026-04-24T23:44:12Z",
    category: "Automation",
    action: "Scheduled job paused",
    actor: {
      name: "Incident Bot",
      email: "incident-bot@example.com",
      role: "Automation",
    },
    target: { name: "Nightly invoice sync", type: "Job" },
    outcome: "warning",
    severity: "medium",
    source: "Scheduler",
    location: "Ashburn, US",
    ipAddress: "198.51.100.141",
    requestId: "req_4F79AC18",
    policy: "Incident safeguards",
    summary:
      "Automated job paused after upstream billing errors crossed the threshold.",
    changes: [
      { label: "Job state", from: "Running", to: "Paused" },
      { label: "Failure rate", from: "1.8%", to: "12.4%" },
    ],
  },
  {
    id: "evt_9x3508",
    occurredAt: "2026-04-23T14:19:04Z",
    category: "Integration",
    action: "SAML certificate rotated",
    actor: {
      name: "Ava Thompson",
      email: "ava.thompson@example.com",
      role: "Release manager",
    },
    target: { name: "Enterprise SSO", type: "SAML connection" },
    outcome: "allowed",
    severity: "high",
    source: "Identity provider",
    location: "Dublin, IE",
    ipAddress: "203.0.113.96",
    requestId: "req_66F102CB",
    policy: "Certificate lifecycle",
    summary: "SAML signing certificate rotated before expiration.",
    changes: [
      { label: "Certificate", from: "2025 primary", to: "2026 primary" },
      { label: "Expiry", from: "2026-05-02", to: "2027-04-23" },
    ],
  },
];
