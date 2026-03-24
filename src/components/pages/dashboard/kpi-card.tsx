"use client"

import { TrendingUpIcon, TrendingDownIcon } from "lucide-react"
import type { DashboardKPI } from "~/types/dashboard"
import { SparklineChart } from "./sparkline-chart"

interface KPICardProps {
  kpi: DashboardKPI
}

export function KPICard({ kpi }: KPICardProps) {
  const isUp = kpi.trendDirection === "up"

  return (
    <div className="relative flex items-center justify-between rounded-xl bg-white px-4 py-3 dark:bg-stone-800">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-gray-500 dark:text-stone-400 leading-5">
          {kpi.label}
        </p>
        <p className="text-base font-semibold text-gray-900 dark:text-stone-50 leading-5">
          {kpi.value}
        </p>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <SparklineChart data={kpi.sparklineData} color={isUp ? "#3567FF" : "#DD524C"} />
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-1 py-0.5 text-[10px] font-semibold leading-none ${
            isUp
              ? "bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300"
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
