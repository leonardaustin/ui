import {
  Activity as ActivityIcon,
  Download,
  FolderKanban,
  Plus,
  RefreshCw,
  Rocket,
  Users,
} from "lucide-react";

import {
  Badge,
  Button,
  MetricCard,
  PageHeader,
  ResourceTable,
  SectionHeader,
  type Column,
} from "@leonardaustin/ui";

import { metrics, recentActivity, type Activity } from "../data/demo";

const columns: Column<Activity>[] = [
  {
    key: "timestamp",
    header: "Time",
    width: "120px",
    render: (row) => (
      <span className="text-text-tertiary">{row.timestamp}</span>
    ),
  },
  {
    key: "user",
    header: "User",
    sortable: true,
    getValue: (row) => row.user,
    render: (row) => row.user,
  },
  {
    key: "action",
    header: "Action",
    render: (row) => {
      const color =
        row.action === "deployed"
          ? "blue"
          : row.action === "merged"
            ? "purple"
            : row.action === "resolved"
              ? "green"
              : "gray";
      return <Badge color={color}>{row.action}</Badge>;
    },
  },
  {
    key: "resource",
    header: "Resource",
    render: (row) => (
      <span className="text-2xs-f font-mono">{row.resource}</span>
    ),
  },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page title + action buttons — uses the shared PageHeader component
          so every page has a consistent top-of-page layout. */}
      <PageHeader
        title="Dashboard"
        actions={
          <>
            <Button variant="ghost" size="sm">
              <RefreshCw className="h-3.5 w-3.5" />
            </Button>
            <Button variant="secondary" size="sm">
              <Download className="h-3.5 w-3.5" />
              Export
            </Button>
            <Button variant="primary" size="sm">
              <Plus className="h-3.5 w-3.5" />
              New
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label="Total Users"
          value={metrics.totalUsers.toLocaleString()}
          sub="+12% from last month"
          bar={72}
          icon={Users}
          iconColor="text-blue"
        />
        <MetricCard
          label="Active Projects"
          value={metrics.activeProjects}
          sub="8 in progress"
          bar={42}
          icon={FolderKanban}
          iconColor="text-green"
        />
        <MetricCard
          label="Deployments"
          value={metrics.deployments}
          sub="This month"
          bar={86}
          icon={Rocket}
          iconColor="text-purple"
        />
        <MetricCard
          label="Uptime"
          value={`${metrics.uptime}%`}
          sub="Last 30 days"
          bar={metrics.uptime}
          icon={ActivityIcon}
          iconColor="text-yellow"
        />
      </div>

      <div>
        <SectionHeader border={false} className="mb-3">
          Recent Activity
        </SectionHeader>
        <ResourceTable
          data={recentActivity}
          columns={columns}
          getRowId={(row) => row.id}
        />
      </div>
    </div>
  );
}
