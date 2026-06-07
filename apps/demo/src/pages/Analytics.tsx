import { useState } from "react";

import { ArrowDownRight, Clock, TrendingUp, Users } from "lucide-react";

import {
  AreaChart,
  BarChart,
  Card,
  DonutChart,
  MetricCard,
  PageHeader,
  RadarChart,
  RadialBarChart,
  RadioPill,
  ResourceTable,
  SectionHeader,
  SparkLine,
  VerticalBarChart,
  type Column,
} from "@leonardaustin/ui";

import {
  analyticsData,
  radarData,
  radialData,
  type AnalyticsRange,
  type Referrer,
} from "../data/analytics";

const rangeOptions: { value: AnalyticsRange; label: string }[] = [
  { value: "7d", label: "7 days" },
  { value: "30d", label: "30 days" },
  { value: "90d", label: "90 days" },
  { value: "12m", label: "12 months" },
];

function formatChange(value: number): string {
  return `${value >= 0 ? "+" : ""}${value}%`;
}

const referrerColumns: Column<Referrer>[] = [
  {
    key: "domain",
    header: "Domain",
    sortable: true,
    getValue: (row) => row.domain,
    render: (row) => (
      <span className="text-text-primary font-medium">{row.domain}</span>
    ),
  },
  {
    key: "visits",
    header: "Visits",
    width: "100px",
    sortable: true,
    getValue: (row) => row.visits,
    render: (row) => (
      <span className="text-text-primary tabular-nums">
        {row.visits.toLocaleString()}
      </span>
    ),
  },
  {
    key: "trend",
    header: "Trend",
    width: "80px",
    render: (row) => <SparkLine data={row.trend} />,
  },
  {
    key: "bounceRate",
    header: "Bounce",
    width: "80px",
    sortable: true,
    getValue: (row) => row.bounceRate,
    render: (row) => (
      <span className="text-text-secondary tabular-nums">
        {row.bounceRate}%
      </span>
    ),
  },
];

export function Analytics() {
  const [range, setRange] = useState<AnalyticsRange>("30d");
  const period = analyticsData[range];

  return (
    <div className="space-y-6">
      <PageHeader
        title="Analytics"
        actions={
          <RadioPill options={rangeOptions} value={range} onChange={setRange} />
        }
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          label="Total Views"
          value={period.kpis.totalViews.toLocaleString()}
          sub={formatChange(period.kpis.viewsChange)}
          bar={Math.min(100, (period.kpis.viewsChange / 40) * 100)}
          icon={TrendingUp}
          iconColor="text-blue"
        />
        <MetricCard
          label="Unique Visitors"
          value={period.kpis.uniqueVisitors.toLocaleString()}
          sub={formatChange(period.kpis.visitorsChange)}
          bar={Math.min(100, (period.kpis.visitorsChange / 35) * 100)}
          icon={Users}
          iconColor="text-green"
        />
        <MetricCard
          label="Avg. Duration"
          value={period.kpis.avgSessionDuration}
          sub={formatChange(period.kpis.durationChange)}
          bar={60}
          icon={Clock}
          iconColor="text-purple"
        />
        <MetricCard
          label="Bounce Rate"
          value={`${period.kpis.bounceRate}%`}
          sub={formatChange(period.kpis.bounceChange)}
          bar={period.kpis.bounceRate}
          icon={ArrowDownRight}
          iconColor="text-yellow"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <Card
          header={
            <span className="text-text-primary text-xs font-semibold">
              Traffic Overview
            </span>
          }
        >
          <AreaChart data={period.timeSeries} height={180} />
        </Card>
        <Card
          header={
            <span className="text-text-primary text-xs font-semibold">
              Views by Period
            </span>
          }
        >
          <VerticalBarChart data={period.dailyBreakdown} height={180} />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <Card
          header={
            <span className="text-text-primary text-xs font-semibold">
              Top Pages
            </span>
          }
        >
          <BarChart
            data={period.topPages.map((p) => ({
              label: p.path,
              value: p.views,
            }))}
          />
        </Card>
        <Card
          header={
            <span className="text-text-primary text-xs font-semibold">
              Traffic Sources
            </span>
          }
        >
          <DonutChart segments={period.trafficSources} />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <Card
          header={
            <span className="text-text-primary text-xs font-semibold">
              Performance Scores
            </span>
          }
        >
          <div className="flex items-center justify-center py-2">
            <RadarChart data={radarData} size={220} />
          </div>
        </Card>
        <Card
          header={
            <span className="text-text-primary text-xs font-semibold">
              Key Metrics
            </span>
          }
        >
          <div className="flex items-center justify-center py-2">
            <RadialBarChart segments={radialData} size={200} />
          </div>
        </Card>
      </div>

      <div>
        <SectionHeader border={false} className="mb-3">
          Top Referrers
        </SectionHeader>
        <ResourceTable
          data={period.referrers}
          columns={referrerColumns}
          getRowId={(row) => row.domain}
        />
      </div>
    </div>
  );
}
