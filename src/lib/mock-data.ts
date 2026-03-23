import type {
  DashboardData,
  DashboardKPI,
  RevenueDataPoint,
  PipelineStage,
  ActivityEntry,
  Task,
  Period,
} from "~/types/dashboard";

const todayKPIs: DashboardKPI[] = [
  {
    label: "Total Leads",
    value: "248",
    trend: 12.4,
    trendDirection: "up",
    sparklineData: [20, 25, 30, 28, 35, 40, 38, 45, 50, 48, 55, 60],
  },
  {
    label: "Revenue YTD",
    value: "AED 1.42M",
    trend: 24.6,
    trendDirection: "up",
    sparklineData: [100, 120, 115, 140, 160, 155, 180, 200, 195, 220, 240, 260],
  },
  {
    label: "Active Deals",
    value: "43",
    trend: 8.2,
    trendDirection: "up",
    sparklineData: [10, 12, 14, 13, 16, 18, 17, 20, 22, 21, 24, 26],
  },
  {
    label: "Completed Tasks",
    value: "156",
    trend: 24.6,
    trendDirection: "up",
    sparklineData: [30, 35, 40, 45, 50, 48, 55, 60, 65, 70, 75, 80],
  },
];

const todayRevenue: RevenueDataPoint[] = [
  { month: "Jan", thisYear: 45000, lastYear: 35000 },
  { month: "Feb", thisYear: 52000, lastYear: 42000 },
  { month: "Mar", thisYear: 61000, lastYear: 48000 },
  { month: "Apr", thisYear: 67000, lastYear: 55000 },
  { month: "May", thisYear: 75000, lastYear: 62000 },
  { month: "Jun", thisYear: 88000, lastYear: 70000 },
  { month: "Jul", thisYear: 110000, lastYear: 85000 },
  { month: "Aug", thisYear: 135000, lastYear: 100000 },
  { month: "Sep", thisYear: 160000, lastYear: 115000 },
  { month: "Oct", thisYear: 195000, lastYear: 130000 },
  { month: "Nov", thisYear: 240000, lastYear: 145000 },
  { month: "Dec", thisYear: 270000, lastYear: 155000 },
];

const todayPipeline: PipelineStage[] = [
  { stage: "New Lead", count: 42, value: 840000, currency: "AED" },
  { stage: "Contacted", count: 28, value: 560000, currency: "AED" },
  { stage: "Qualified", count: 18, value: 450000, currency: "AED" },
  { stage: "Proposal", count: 18, value: 450000, currency: "AED" },
  { stage: "Negotiation", count: 5, value: 350000, currency: "AED" },
  { stage: "Closed Won", count: 2, value: 110000, currency: "AED" },
];

const todayActivities: { label: string; entries: ActivityEntry[] }[] = [
  {
    label: "JUST NOW",
    entries: [
      {
        id: "a1",
        message: "You were assigned a new lead: Ahmed Al-Rashid",
        highlights: [{ text: "Ahmed Al-Rashid", type: "person" }],
        timestamp: "2026-03-23T12:10:00",
        relativeTime: "10 min ago",
        icon: "lead",
      },
      {
        id: "a2",
        message: "System transferred deal to Negotiation stage",
        highlights: [{ text: "Negotiation stage", type: "stage" }],
        timestamp: "2026-03-23T11:55:00",
        relativeTime: "25 min ago",
        icon: "deal",
      },
    ],
  },
  {
    label: "EARLIER TODAY",
    entries: [
      {
        id: "a3",
        message: "Nadia K. logged a call with James Chen",
        highlights: [{ text: "James Chen", type: "person" }],
        timestamp: "2026-03-23T11:20:00",
        relativeTime: "1h ago",
        icon: "call",
      },
    ],
  },
  {
    label: "YESTERDAY",
    entries: [
      {
        id: "a4",
        message: "Commission payment processed for deal #1018",
        highlights: [{ text: "deal #1018", type: "deal" }],
        timestamp: "2026-03-22T16:30:00",
        relativeTime: "Yesterday",
        icon: "commission",
      },
      {
        id: "a5",
        message: "New note added to Sarah Mitchell's profile",
        highlights: [{ text: "Sarah Mitchell's", type: "person" }],
        timestamp: "2026-03-22T14:00:00",
        relativeTime: "Yesterday",
        icon: "note",
      },
    ],
  },
];

const todayTasks: Task[] = [
  {
    id: "t1",
    title: "Update deal #1024 documents",
    dueLabel: "Due · 4:30 PM",
    isOverdue: false,
    type: "task",
    priority: "low",
    completed: false,
  },
  {
    id: "t2",
    title: "Send proposal to Sarah Mitchell",
    dueLabel: "Due · 11:00 AM",
    isOverdue: false,
    type: "email",
    priority: "high",
    completed: false,
  },
  {
    id: "t3",
    title: "Schedule viewing – Palm Jumeirah",
    dueLabel: "Due · 2:00 PM",
    isOverdue: false,
    type: "meeting",
    priority: "med",
    completed: false,
  },
  {
    id: "t4",
    title: "Weekly team sync",
    dueLabel: "Upcoming · 5:00 PM",
    isOverdue: false,
    type: "meeting",
    priority: "med",
    completed: false,
  },
  {
    id: "t5",
    title: "Follow up with Ahmed Al-Rashid",
    dueLabel: "Overdue · 2h ago",
    isOverdue: true,
    type: "call",
    priority: "high",
    completed: false,
  },
];

function getTodayData(): DashboardData {
  return {
    kpis: todayKPIs,
    revenue: {
      total: "AED 1,621,000",
      trend: 18.4,
      data: todayRevenue,
    },
    pipeline: {
      totalDeals: 113,
      totalStages: 6,
      totalValue: "AED 2.76M",
      stages: todayPipeline,
    },
    activities: { groups: todayActivities },
    tasks: { completed: 0, total: 5, items: todayTasks },
  };
}

function variantMultiplier(period: Period): number {
  switch (period) {
    case "today":
      return 1;
    case "this_week":
      return 1.15;
    case "this_month":
      return 1.35;
    case "this_quarter":
      return 1.8;
    case "this_year":
      return 2.4;
    case "custom":
      return 1.2;
  }
}

function parseKPIValue(raw: string): number {
  const num = parseFloat(raw.replace(/[^0-9.]/g, ""));
  if (raw.includes("M")) return num * 1_000_000;
  if (raw.includes("K")) return num * 1_000;
  return num;
}

function formatKPIValue(value: number, isAED: boolean): string {
  if (isAED) {
    if (value >= 1_000_000) return `AED ${(value / 1_000_000).toFixed(2)}M`;
    if (value >= 1_000) return `AED ${(value / 1_000).toFixed(0)}K`;
    return `AED ${value}`;
  }
  return String(Math.round(value));
}

function varyKPIs(base: DashboardKPI[], mult: number): DashboardKPI[] {
  return base.map((kpi) => {
    const numVal = parseKPIValue(kpi.value);
    const newVal = numVal * mult;
    const isAED = kpi.value.includes("AED");

    return {
      ...kpi,
      value: formatKPIValue(newVal, isAED),
      trend: +(kpi.trend * (0.8 + Math.random() * 0.4)).toFixed(1),
      sparklineData: kpi.sparklineData.map((v) =>
        Math.round(v * mult * (0.9 + Math.random() * 0.2)),
      ),
    };
  });
}

function varyRevenue(
  base: RevenueDataPoint[],
  mult: number,
): RevenueDataPoint[] {
  return base.map((dp) => ({
    ...dp,
    thisYear: Math.round(dp.thisYear * mult * (0.95 + Math.random() * 0.1)),
    lastYear: Math.round(dp.lastYear * mult * (0.95 + Math.random() * 0.1)),
  }));
}

export function getDashboardData(period: Period): DashboardData {
  const base = getTodayData();
  if (period === "today") return base;

  const mult = variantMultiplier(period);
  const totalRevenue = Math.round(1621000 * mult);

  return {
    kpis: varyKPIs(base.kpis, mult),
    revenue: {
      total: `AED ${totalRevenue.toLocaleString()}`,
      trend: +(base.revenue.trend * (0.8 + Math.random() * 0.4)).toFixed(1),
      data: varyRevenue(base.revenue.data, mult),
    },
    pipeline: {
      ...base.pipeline,
      totalDeals: Math.round(base.pipeline.totalDeals * mult),
      stages: base.pipeline.stages.map((s) => ({
        ...s,
        count: Math.round(s.count * mult),
        value: Math.round(s.value * mult),
      })),
    },
    activities: base.activities,
    tasks: base.tasks,
  };
}
