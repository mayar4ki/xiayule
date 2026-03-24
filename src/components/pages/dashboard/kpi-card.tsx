"use client"

import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import type { DashboardKPI } from "~/types/dashboard"
import { SparklineChart } from "./sparkline-chart"

interface KPICardProps {
  kpi: DashboardKPI
}

export function KPICard({ kpi }: KPICardProps) {
  const isUp = kpi.trendDirection === "up"

  return (
    <div className="relative flex min-h-[58px] items-center justify-between rounded-[12px] bg-white px-4 py-2 dark:bg-stone-800">
      <div className="flex flex-col gap-0">
        <p className="text-xs font-medium leading-5 text-[#5f5f5f] dark:text-stone-400">
          {kpi.label}
        </p>
        <p className="text-base font-semibold leading-5 text-black dark:text-stone-50">
          {kpi.value}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <SparklineChart data={kpi.sparklineData} color={isUp ? "#3567FF" : "#DD524C"} />
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-[3px] py-0.5 text-[10px] font-semibold leading-[8px] ${isUp
            ? "bg-[#f0fdf4] text-[#188540] dark:bg-green-900/30 dark:text-green-300"
            : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
            }`}
        >
          {isUp ? (
            <TrendingUpIcon className="size-2.5" />
          ) : (
            <TrendingDownIcon className="size-2.5" />
          )}
          {isUp ? "+" : ""}
          {kpi.trend}%
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_1px_0_0_rgba(0,0,0,0.03),inset_-1px_0_0_rgba(0,0,0,0.03),inset_0_-1px_0_rgba(0,0,0,0.07),inset_0_1px_0_rgba(204,204,204,0.4)] dark:shadow-[inset_1px_0_0_rgba(255,255,255,0.04),inset_-1px_0_0_rgba(255,255,255,0.04),inset_0_-1px_0_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.08)]" />
    </div>
  )
}
