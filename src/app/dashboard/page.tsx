"use client"

import { toast } from "sonner"
import {
  ActivityFeed,
  DashboardHeader,
  DashboardSkeleton,
  KPICards,
  PipelineSummary,
  RevenueForecast,
  TasksPanel,
} from "~/components/pages/dashboard"
import { useDashboard } from "~/hooks/use-dashboard"
import type { Period } from "~/types/dashboard"

const periodLabels: Record<Period, string> = {
  today: "Today",
  this_week: "This Week",
  this_month: "This Month",
  this_quarter: "This Quarter",
  this_year: "This Year",
  custom: "Custom",
}

export default function DashboardPage() {
  const {
    period,
    changePeriod,
    data,
    tasks,
    isLoading,
    isError,
    refetch,
    toggleTask,
    undoToggleTask,
  } = useDashboard()

  const handlePeriodChange = (newPeriod: Period) => {
    changePeriod(newPeriod)
    toast(`Dashboard updated to ${periodLabels[newPeriod]}`)
  }

  const handleToggleTask = (taskId: string) => {
    const task = tasks?.items.find((t) => t.id === taskId)
    if (!task) return

    toggleTask(taskId)

    if (!task.completed) {
      toast.success("Task completed", {
        action: {
          label: "Undo",
          onClick: () => undoToggleTask(taskId),
        },
      })
    }
  }

  if (isLoading) {
    return <DashboardSkeleton />
  }

  if (isError) {
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
            })
            refetch()
          }}
          className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="border rounded-xl flex w-full max-w-[1204px] flex-1 flex-col gap-[26px] overflow-auto px-[30px] pb-10 pt-[25px]">
      <DashboardHeader period={period} onPeriodChange={handlePeriodChange} />

      <KPICards kpis={data.kpis} />

      <div className="flex flex-col gap-[26px] lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-[26px] lg:max-w-[718px]">
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

        <div className="flex w-full flex-col gap-[26px] lg:w-[400px] lg:shrink-0">
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
  )
}
