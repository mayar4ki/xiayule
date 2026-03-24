"use client"

import { PlusIcon } from "lucide-react"
import { toast } from "sonner"
import { Button } from "~/components/ui/button"
import type { Period } from "~/types/dashboard"
import { DateFilterTabs } from "./date-filter-tabs"

interface DashboardHeaderProps {
  period: Period
  onPeriodChange: (period: Period) => void
}

export function DashboardHeader({ period, onPeriodChange }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-[18px]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-2">
          <h1 className="font-heading text-[20px] font-bold leading-5 tracking-[0.2px] text-[#101010] dark:text-stone-50">
            Dashboard
          </h1>
          <p className="max-w-[640px] text-sm leading-5 text-[#6b7280] dark:text-stone-400">
            Here&apos;s your pipeline health and sales activity at a glance.
          </p>
        </div>
        <Button
          onClick={() => toast("Feature coming soon")}

        >
          <PlusIcon className="size-4" strokeWidth={2} />
          Create
        </Button>
      </div>
      <DateFilterTabs period={period} onPeriodChange={onPeriodChange} />
    </div>
  )
}
