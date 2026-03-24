"use client"

import { toast } from "sonner"
import { useDashboard } from "~/hooks/use-dashboard"
import {
  DashboardHeader,
  KPICards,
  RevenueForecast,
  PipelineSummary,
  ActivityFeed,
  TasksPanel,
  DashboardSkeleton,
} from "~/components/pages/dashboard"
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
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6">
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
    <div className="flex flex-1 flex-col gap-6 p-6 pt-6 overflow-auto">
      <DashboardHeader period={period} onPeriodChange={handlePeriodChange} />

      <KPICards kpis={data.kpis} />

      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Left column: Revenue + Pipeline */}
        <div className="flex min-w-0 flex-1 flex-col gap-6">
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

        {/* Right column: Activity Feed + Tasks */}
        <div className="flex w-full flex-col gap-6 lg:w-[400px] lg:shrink-0">
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
