export type Period =
  | "today"
  | "this_week"
  | "this_month"
  | "this_quarter"
  | "this_year"
  | "custom";

export interface DashboardKPI {
  label: string;
  value: string;
  trend: number;
  trendDirection: "up" | "down";
  sparklineData: number[];
}

export interface RevenueDataPoint {
  month: string;
  thisYear: number;
  lastYear: number;
}

export interface PipelineStage {
  stage: string;
  count: number;
  value: number;
  currency: string;
}

export interface ActivityHighlight {
  text: string;
  type: "person" | "stage" | "deal" | "task";
  /** Figma uses #3567ff for some links; default / person+stage uses #476cdc unless type is deal|task */
  tone?: "default" | "brand";
}

export interface ActivityEntry {
  id: string;
  /** Bold lead-in (e.g. You, System, Nadia K.) — stripped from message when rendering body */
  actor?: string;
  message: string;
  highlights: ActivityHighlight[];
  timestamp: string;
  relativeTime: string;
  icon: "lead" | "deal" | "call" | "email" | "note" | "task" | "commission";
}

export interface Task {
  id: string;
  title: string;
  dueLabel: string;
  isOverdue: boolean;
  type: "task" | "email" | "meeting" | "call";
  priority: "low" | "med" | "high";
  completed: boolean;
}

export interface DashboardData {
  kpis: DashboardKPI[];
  revenue: { total: string; trend: number; data: RevenueDataPoint[] };
  pipeline: {
    totalDeals: number;
    totalStages: number;
    totalValue: string;
    stages: PipelineStage[];
  };
  activities: { groups: { label: string; entries: ActivityEntry[] }[] };
  tasks: { completed: number; total: number; items: Task[] };
}
