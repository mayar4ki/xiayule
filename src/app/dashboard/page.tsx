"use client";

import { Suspense } from "react";
import { LoaderIcon, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import {
  ActivityFeed,
  DashboardHeader,
  DashboardSkeleton,
  KPICards,
  PipelineSummary,
  RevenueForecast,
  TasksPanel,
} from "~/components/pages/dashboard";
import { useDashboard } from "~/hooks/use-dashboard";
import type { Period } from "~/types/dashboard";

const periodLabels: Record<Period, string> = {
  today: "Today",
  this_week: "This Week",
  this_month: "This Month",
  this_quarter: "This Quarter",
  this_year: "This Year",
  custom: "Custom",
};

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardContent() {
  const {
    period,
    changePeriod,
    data,
    tasks,
    isLoading,
    isRefreshing,
    isError,
    refetch,
    toggleTask,
    undoToggleTask,
  } = useDashboard();

  const handlePeriodChange = (newPeriod: Period) => {
    changePeriod(newPeriod);
    toast.info(`Dashboard updated to ${periodLabels[newPeriod]}`);
  };

  const handleToggleTask = (taskId: string) => {
    const task = tasks?.items.find((t) => t.id === taskId);
    if (!task) return;

    toggleTask(taskId);

    if (!task.completed) {
      toast.success("Task completed", {
        action: {
          label: (
            <>
              <RotateCcw
                className="size-4 shrink-0"
                aria-hidden
                strokeWidth={2}
              />
              Undo
            </>
          ),
          onClick: () => undoToggleTask(taskId),
        },
      });
    }
  };

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError && !data) {
    return (
      <div className="mx-auto flex w-full max-w-[1204px] flex-1 flex-col items-center justify-center gap-4 px-[30px] py-10">
        <p className="text-sm text-gray-500">Failed to load dashboard data.</p>
        <button
          type="button"
          onClick={() => {
            toast.error("Failed to load data", {
              action: {
                label: "Retry",
                onClick: () => refetch(),
              },
            });
            refetch();
          }}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="relative border rounded-xl flex w-full max-w-[1204px] flex-1 flex-col gap-5 overflow-auto px-4 pb-10 pt-5 bg-background sm:gap-[26px] sm:px-[30px] sm:pt-[25px]">
      {isRefreshing && (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-center rounded-xl bg-(--bg-default)/60 pt-40 backdrop-blur-[1px] dark:bg-(--bg-default)/40">
          <LoaderIcon className="size-5 animate-spin text-(--brand-bg-default)" />
        </div>
      )}

      <DashboardHeader period={period} onPeriodChange={handlePeriodChange} />

      <KPICards kpis={data.kpis} />

      <div className="flex flex-col gap-5 sm:gap-[26px] lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-5 sm:gap-[26px] lg:max-w-[718px]">
          <RevenueForecast
            total={data.revenue.total}
            trend={data.revenue.trend}
            data={data.revenue.data}
          />
          <PipelineSummary
            totalDeals={data.pipeline.totalDeals}
            totalStages={data.pipeline.totalStages}
            totalValue={data.pipeline.totalValue}
            stages={data.pipeline.stages}
          />
        </div>

        <div className="flex w-full flex-col gap-5 sm:gap-[26px] md:flex-row md:gap-[26px] lg:w-[400px] lg:flex-col lg:shrink-0">
          <ActivityFeed groups={data.activities.groups} />
          {tasks && (
            <TasksPanel
              completed={tasks.completed}
              total={tasks.total}
              items={tasks.items}
              onToggleTask={handleToggleTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}
