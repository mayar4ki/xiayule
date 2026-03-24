"use client"

import { PlusIcon } from "lucide-react"
import { toast } from "sonner"
import { DateFilterTabs } from "./date-filter-tabs"
import type { Period } from "~/types/dashboard"

interface DashboardHeaderProps {
  period: Period
  onPeriodChange: (period: Period) => void
}

export function DashboardHeader({ period, onPeriodChange }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-heading text-xl font-bold tracking-[0.2px] text-gray-900 dark:text-stone-50">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 dark:text-stone-400">
            Here&apos;s your pipeline health and sales activity at a glance.
          </p>
        </div>
        <button
          type="button"
          onClick={() => toast("Feature coming soon")}
          className="flex h-8 items-center gap-1 rounded-lg bg-brand-600 px-3 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          <PlusIcon className="size-4" />
          Create
        </button>
      </div>
      <DateFilterTabs period={period} onPeriodChange={onPeriodChange} />
    </div>
  )
}
