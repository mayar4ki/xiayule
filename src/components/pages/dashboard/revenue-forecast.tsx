"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { TrendingUpIcon, ArrowUpRightIcon } from "lucide-react"
import type { RevenueDataPoint } from "~/types/dashboard"

interface RevenueForecastProps {
  total: string
  trend: number
  data: RevenueDataPoint[]
}

function formatYAxis(value: number): string {
  if (value >= 1000) return `$${value / 1000}K`
  return `$${value}`
}

export function RevenueForecast({ total, trend, data }: RevenueForecastProps) {
  return (
    <div className="relative rounded-[14px] border border-[#e1e4ed] bg-white dark:border-stone-600 dark:bg-stone-800">
      <div className="flex flex-col gap-1 px-5 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-5 text-[#686868] dark:text-stone-400">
            Revenue Forecast
          </p>
          <button
            type="button"
            className="font-heading flex items-center gap-0.5 text-xs font-semibold text-[#3567ff] hover:text-brand-600"
          >
            Report
            <ArrowUpRightIcon className="size-3" strokeWidth={2} />
          </button>
        </div>
        <div className="flex flex-wrap items-end gap-2.5">
          <p className="font-heading text-[28px] font-bold leading-7 tracking-[-0.7px] text-[#091026] dark:text-stone-50">
            {total}
          </p>
          <div className="flex items-end gap-1 pb-0.5">
            <span className="inline-flex items-center gap-0.5 rounded-full bg-[#f0fdf4] px-[3px] py-0.5 text-[10px] font-semibold leading-[8px] text-[#188540] dark:bg-green-900/30 dark:text-green-300">
              <TrendingUpIcon className="size-2.5" strokeWidth={2.5} />
              +{trend}%
            </span>
            <span className="text-xs leading-[18px] text-[#a0a9bd] dark:text-stone-500">vs last year</span>
          </div>
        </div>
        <div className="flex items-center gap-5 pt-1">
          <div className="flex items-center gap-1.5">
            <div className="h-[3px] w-3 shrink-0 rounded-full bg-[#3567ff]" />
            <span className="font-heading text-[11px] font-medium leading-[16.5px] text-[#6e7991] dark:text-stone-400">
              This year
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-[3px] w-3 shrink-0 rounded-full bg-[#e1e4ed] dark:bg-stone-600" />
            <span className="font-heading text-[11px] font-medium leading-[16.5px] text-[#6e7991] dark:text-stone-400">
              Last year
            </span>
          </div>
        </div>
      </div>

      <div className="h-[207px] w-full px-5 pb-5 pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="thisYearGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3567FF" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#3567FF" stopOpacity={0.01} />
              </linearGradient>
              <linearGradient id="lastYearGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E1E4ED" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#E1E4ED" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f3f7" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#a0a9bd" }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#a0a9bd" }}
              tickFormatter={formatYAxis}
              width={50}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid #E5E7EB",
                fontSize: 12,
                boxShadow: "0 4px 12px -2px rgba(0,0,0,0.1)",
              }}
              formatter={(value) => [`$${(Number(value) / 1000).toFixed(0)}K`, ""]}
            />
            <Area
              type="monotone"
              dataKey="lastYear"
              stroke="#E1E4ED"
              strokeWidth={2}
              fill="url(#lastYearGrad)"
              dot={false}
              name="Last year"
            />
            <Area
              type="monotone"
              dataKey="thisYear"
              stroke="#3567FF"
              strokeWidth={2}
              fill="url(#thisYearGrad)"
              dot={false}
              name="This year"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
