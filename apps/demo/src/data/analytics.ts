export interface TimeSeriesPoint {
  date: string;
  value: number;
}

export interface AnalyticsKPIs {
  totalViews: number;
  uniqueVisitors: number;
  avgSessionDuration: string;
  bounceRate: number;
  viewsChange: number;
  visitorsChange: number;
  durationChange: number;
  bounceChange: number;
}

export interface TopPage {
  path: string;
  views: number;
  trend: number[];
}

export interface TrafficSource {
  name: string;
  value: number;
  color: string;
}

export interface Referrer {
  domain: string;
  visits: number;
  trend: number[];
  bounceRate: number;
}

export interface DailyBreakdown {
  label: string;
  value: number;
}

export interface AnalyticsPeriod {
  kpis: AnalyticsKPIs;
  timeSeries: TimeSeriesPoint[];
  dailyBreakdown: DailyBreakdown[];
  topPages: TopPage[];
  trafficSources: TrafficSource[];
  referrers: Referrer[];
}

export interface RadarDataPoint {
  label: string;
  value: number;
}

export interface RadialSegment {
  label: string;
  value: number;
  max: number;
  color: string;
}

export type AnalyticsRange = "7d" | "30d" | "90d" | "12m";

export const analyticsData: Record<AnalyticsRange, AnalyticsPeriod> = {
  "7d": {
    kpis: {
      totalViews: 12_847,
      uniqueVisitors: 4_312,
      avgSessionDuration: "2m 34s",
      bounceRate: 42.1,
      viewsChange: 8.3,
      visitorsChange: 5.7,
      durationChange: -2.1,
      bounceChange: -3.4,
    },
    timeSeries: [
      { date: "Apr 3", value: 1_640 },
      { date: "Apr 4", value: 1_920 },
      { date: "Apr 5", value: 1_780 },
      { date: "Apr 6", value: 1_290 },
      { date: "Apr 7", value: 1_450 },
      { date: "Apr 8", value: 2_310 },
      { date: "Apr 9", value: 2_457 },
    ],
    dailyBreakdown: [
      { label: "Mon", value: 2_120 },
      { label: "Tue", value: 1_940 },
      { label: "Wed", value: 2_310 },
      { label: "Thu", value: 1_780 },
      { label: "Fri", value: 1_640 },
      { label: "Sat", value: 1_290 },
      { label: "Sun", value: 1_450 },
    ],
    topPages: [
      { path: "/", views: 3_842, trend: [30, 42, 38, 45, 50, 48, 55] },
      {
        path: "/pricing",
        views: 2_156,
        trend: [20, 25, 22, 28, 30, 27, 32],
      },
      {
        path: "/docs/getting-started",
        views: 1_843,
        trend: [18, 20, 22, 19, 24, 26, 28],
      },
      { path: "/blog", views: 1_421, trend: [15, 14, 16, 18, 17, 20, 22] },
      { path: "/changelog", views: 987, trend: [10, 12, 11, 14, 13, 15, 16] },
    ],
    trafficSources: [
      { name: "Organic Search", value: 4_820, color: "text-blue" },
      { name: "Direct", value: 3_210, color: "text-green" },
      { name: "Social", value: 2_640, color: "text-purple" },
      { name: "Referral", value: 1_380, color: "text-yellow" },
      { name: "Email", value: 797, color: "text-red" },
    ],
    referrers: [
      {
        domain: "google.com",
        visits: 3_412,
        trend: [30, 35, 32, 38, 40, 42, 45],
        bounceRate: 38.2,
      },
      {
        domain: "twitter.com",
        visits: 1_845,
        trend: [18, 22, 20, 25, 24, 28, 30],
        bounceRate: 52.1,
      },
      {
        domain: "github.com",
        visits: 1_320,
        trend: [12, 14, 13, 16, 18, 17, 20],
        bounceRate: 31.5,
      },
      {
        domain: "reddit.com",
        visits: 980,
        trend: [8, 12, 10, 14, 11, 15, 13],
        bounceRate: 58.3,
      },
      {
        domain: "hn.algolia.com",
        visits: 742,
        trend: [6, 8, 7, 10, 12, 9, 11],
        bounceRate: 44.7,
      },
    ],
  },
  "30d": {
    kpis: {
      totalViews: 48_392,
      uniqueVisitors: 16_841,
      avgSessionDuration: "2m 48s",
      bounceRate: 39.8,
      viewsChange: 12.4,
      visitorsChange: 9.2,
      durationChange: 3.6,
      bounceChange: -5.1,
    },
    timeSeries: [
      { date: "Mar 11", value: 1_420 },
      { date: "Mar 14", value: 1_580 },
      { date: "Mar 17", value: 1_350 },
      { date: "Mar 20", value: 1_720 },
      { date: "Mar 23", value: 1_890 },
      { date: "Mar 26", value: 1_640 },
      { date: "Mar 29", value: 2_010 },
      { date: "Apr 1", value: 1_950 },
      { date: "Apr 4", value: 2_180 },
      { date: "Apr 7", value: 2_340 },
      { date: "Apr 9", value: 2_457 },
    ],
    dailyBreakdown: [
      { label: "Week 1", value: 8_420 },
      { label: "Week 2", value: 9_810 },
      { label: "Week 3", value: 11_240 },
      { label: "Week 4", value: 18_922 },
    ],
    topPages: [
      { path: "/", views: 14_231, trend: [120, 135, 128, 142, 150, 148, 160] },
      { path: "/pricing", views: 8_742, trend: [80, 85, 78, 92, 88, 95, 100] },
      {
        path: "/docs/getting-started",
        views: 7_321,
        trend: [60, 65, 70, 68, 75, 72, 80],
      },
      { path: "/blog", views: 5_843, trend: [50, 48, 52, 55, 58, 60, 65] },
      { path: "/changelog", views: 3_921, trend: [30, 35, 33, 38, 40, 42, 45] },
    ],
    trafficSources: [
      { name: "Organic Search", value: 18_420, color: "text-blue" },
      { name: "Direct", value: 12_340, color: "text-green" },
      { name: "Social", value: 9_180, color: "text-purple" },
      { name: "Referral", value: 5_620, color: "text-yellow" },
      { name: "Email", value: 2_832, color: "text-red" },
    ],
    referrers: [
      {
        domain: "google.com",
        visits: 12_840,
        trend: [100, 110, 105, 120, 125, 130, 140],
        bounceRate: 36.4,
      },
      {
        domain: "twitter.com",
        visits: 6_210,
        trend: [50, 55, 52, 60, 58, 65, 70],
        bounceRate: 50.8,
      },
      {
        domain: "github.com",
        visits: 4_870,
        trend: [40, 42, 45, 48, 50, 52, 55],
        bounceRate: 29.3,
      },
      {
        domain: "reddit.com",
        visits: 3_420,
        trend: [25, 30, 28, 35, 32, 38, 40],
        bounceRate: 56.7,
      },
      {
        domain: "hn.algolia.com",
        visits: 2_810,
        trend: [20, 22, 25, 28, 30, 32, 35],
        bounceRate: 42.1,
      },
    ],
  },
  "90d": {
    kpis: {
      totalViews: 142_580,
      uniqueVisitors: 52_340,
      avgSessionDuration: "2m 52s",
      bounceRate: 37.2,
      viewsChange: 18.7,
      visitorsChange: 14.3,
      durationChange: 6.2,
      bounceChange: -8.5,
    },
    timeSeries: [
      { date: "Jan 9", value: 1_180 },
      { date: "Jan 20", value: 1_340 },
      { date: "Feb 1", value: 1_520 },
      { date: "Feb 12", value: 1_410 },
      { date: "Feb 23", value: 1_680 },
      { date: "Mar 6", value: 1_850 },
      { date: "Mar 17", value: 1_740 },
      { date: "Mar 28", value: 2_100 },
      { date: "Apr 4", value: 2_280 },
      { date: "Apr 9", value: 2_457 },
    ],
    dailyBreakdown: [
      { label: "Jan", value: 32_410 },
      { label: "Feb", value: 38_920 },
      { label: "Mar", value: 71_250 },
    ],
    topPages: [
      { path: "/", views: 42_180, trend: [350, 380, 400, 420, 450, 470, 500] },
      {
        path: "/pricing",
        views: 26_340,
        trend: [200, 220, 230, 250, 260, 280, 300],
      },
      {
        path: "/docs/getting-started",
        views: 21_420,
        trend: [160, 175, 185, 200, 210, 225, 240],
      },
      {
        path: "/blog",
        views: 18_240,
        trend: [140, 150, 155, 165, 175, 185, 200],
      },
      {
        path: "/changelog",
        views: 11_890,
        trend: [80, 90, 95, 105, 110, 120, 130],
      },
    ],
    trafficSources: [
      { name: "Organic Search", value: 54_180, color: "text-blue" },
      { name: "Direct", value: 36_240, color: "text-green" },
      { name: "Social", value: 27_420, color: "text-purple" },
      { name: "Referral", value: 16_340, color: "text-yellow" },
      { name: "Email", value: 8_400, color: "text-red" },
    ],
    referrers: [
      {
        domain: "google.com",
        visits: 38_420,
        trend: [280, 310, 330, 360, 380, 400, 420],
        bounceRate: 34.8,
      },
      {
        domain: "twitter.com",
        visits: 18_540,
        trend: [130, 145, 155, 170, 180, 195, 210],
        bounceRate: 49.2,
      },
      {
        domain: "github.com",
        visits: 14_230,
        trend: [100, 110, 120, 130, 135, 145, 155],
        bounceRate: 27.6,
      },
      {
        domain: "reddit.com",
        visits: 9_840,
        trend: [65, 75, 80, 90, 95, 105, 115],
        bounceRate: 55.1,
      },
      {
        domain: "hn.algolia.com",
        visits: 8_210,
        trend: [55, 60, 65, 75, 80, 88, 95],
        bounceRate: 40.3,
      },
    ],
  },
  "12m": {
    kpis: {
      totalViews: 584_210,
      uniqueVisitors: 218_430,
      avgSessionDuration: "2m 41s",
      bounceRate: 40.5,
      viewsChange: 34.2,
      visitorsChange: 28.6,
      durationChange: 8.9,
      bounceChange: -12.3,
    },
    timeSeries: [
      { date: "May '25", value: 32_400 },
      { date: "Jun", value: 38_200 },
      { date: "Jul", value: 42_100 },
      { date: "Aug", value: 39_800 },
      { date: "Sep", value: 45_600 },
      { date: "Oct", value: 48_900 },
      { date: "Nov", value: 52_300 },
      { date: "Dec", value: 44_200 },
      { date: "Jan '26", value: 51_800 },
      { date: "Feb", value: 56_400 },
      { date: "Mar", value: 62_100 },
      { date: "Apr", value: 70_410 },
    ],
    dailyBreakdown: [
      { label: "Q2 '25", value: 112_700 },
      { label: "Q3 '25", value: 136_800 },
      { label: "Q4 '25", value: 145_400 },
      { label: "Q1 '26", value: 189_310 },
    ],
    topPages: [
      {
        path: "/",
        views: 172_340,
        trend: [1200, 1350, 1400, 1500, 1600, 1700, 1850],
      },
      {
        path: "/pricing",
        views: 108_420,
        trend: [800, 880, 920, 980, 1050, 1100, 1200],
      },
      {
        path: "/docs/getting-started",
        views: 87_640,
        trend: [600, 650, 700, 750, 800, 860, 920],
      },
      {
        path: "/blog",
        views: 74_210,
        trend: [500, 540, 580, 620, 660, 710, 760],
      },
      {
        path: "/changelog",
        views: 48_320,
        trend: [320, 350, 380, 410, 440, 470, 510],
      },
    ],
    trafficSources: [
      { name: "Organic Search", value: 221_800, color: "text-blue" },
      { name: "Direct", value: 148_200, color: "text-green" },
      { name: "Social", value: 112_400, color: "text-purple" },
      { name: "Referral", value: 67_210, color: "text-yellow" },
      { name: "Email", value: 34_600, color: "text-red" },
    ],
    referrers: [
      {
        domain: "google.com",
        visits: 156_240,
        trend: [1000, 1100, 1200, 1300, 1400, 1500, 1650],
        bounceRate: 35.4,
      },
      {
        domain: "twitter.com",
        visits: 74_810,
        trend: [500, 550, 600, 650, 700, 750, 820],
        bounceRate: 48.6,
      },
      {
        domain: "github.com",
        visits: 58_420,
        trend: [380, 420, 450, 490, 530, 570, 620],
        bounceRate: 28.1,
      },
      {
        domain: "reddit.com",
        visits: 40_130,
        trend: [260, 290, 310, 340, 370, 400, 440],
        bounceRate: 54.3,
      },
      {
        domain: "hn.algolia.com",
        visits: 33_620,
        trend: [220, 240, 260, 280, 310, 340, 370],
        bounceRate: 41.7,
      },
    ],
  },
};

export const radarData: RadarDataPoint[] = [
  { label: "Speed", value: 86 },
  { label: "SEO", value: 72 },
  { label: "A11y", value: 91 },
  { label: "UX", value: 78 },
  { label: "Perf", value: 84 },
  { label: "Security", value: 95 },
];

export const radialData: RadialSegment[] = [
  { label: "Engagement", value: 78, max: 100, color: "text-blue" },
  { label: "Retention", value: 64, max: 100, color: "text-green" },
  { label: "Conversion", value: 42, max: 100, color: "text-purple" },
  { label: "Satisfaction", value: 89, max: 100, color: "text-yellow" },
];
