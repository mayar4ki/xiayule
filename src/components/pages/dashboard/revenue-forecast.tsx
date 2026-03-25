"use client"

import { ArrowUpRightIcon, TrendingUpIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import type { RevenueDataPoint } from "~/types/dashboard"

function useContainerSize() {
  const ref = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry!.contentRect
      if (width > 0 && height > 0) setSize({ width, height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return { ref, ...size }
}

interface RevenueForecastProps {
  total: string
  trend: number
  data: RevenueDataPoint[]
}

function formatYAxis(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${value / 1_000}K`
  return `${value}`
}

export function RevenueForecast({ total, trend, data }: RevenueForecastProps) {
  const { ref: chartRef, width, height } = useContainerSize()

  return (
    <div className="relative rounded-[14px] border border-(--border-subtle) bg-(--bg-default) dark:border-(--border-default)">
      <div className="flex flex-col gap-1.5 px-5 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-5 text-(--content-subtle)">
            Revenue Forecast
          </p>
          <button
            type="button"
            className="font-heading flex items-center gap-0.5 text-xs font-semibold text-(--brand-bg-default) hover:text-brand-600"
          >
            Report
            <ArrowUpRightIcon className="size-3" strokeWidth={2} />
          </button>
        </div>
        <div className="flex flex-wrap items-end gap-2.5">
          <p className="font-heading text-[28px] font-bold leading-7 tracking-[-0.7px] text-(--content-emphasis)">
            {total}
          </p>
          <div className="flex items-end gap-1 pb-0.5">
            <span className="inline-flex items-center gap-0.5 rounded-full bg-green-50 px-[3px] py-1 text-[10px] font-semibold leading-[8px] text-green-700 dark:bg-green-900/30 dark:text-green-300">
              <TrendingUpIcon className="size-2.5" strokeWidth={2.5} />
              +{trend}%
            </span>
            <span className="text-xs leading-[18px] text-(--content-muted)">vs last year</span>
          </div>
        </div>
        <div className="flex items-center gap-5 pt-2">
          <div className="flex items-center gap-1.5">
            <div className="h-[3px] w-3 shrink-0 rounded-full bg-(--brand-bg-default)" />
            <span className="font-heading text-[11px] font-medium leading-[16.5px] text-(--content-subtle)">
              This year
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-[3px] w-3 shrink-0 rounded-full bg-(--border-subtle) dark:bg-(--border-default)" />
            <span className="font-heading text-[11px] font-medium leading-[16.5px] text-(--content-subtle)">
              Last year
            </span>
          </div>
        </div>
      </div>


      <div
        ref={chartRef}
        className="h-[180px] w-full px-3 pb-4 pt-2 sm:h-[241px] sm:px-5 sm:pb-5 md:pr-5.5 md:pl-9 md:pb-6.5"
      >
        {width > 0 && height > 0 && (
          <AreaChart width={width} height={height} data={data} margin={{ top: 10, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="thisYearGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brand-bg-default)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="var(--brand-bg-default)" stopOpacity={0.01} />
              </linearGradient>
              <linearGradient id="lastYearGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--border-subtle)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="var(--border-subtle)" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-muted)" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "var(--content-muted)" }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "var(--content-muted)" }}
              tickFormatter={formatYAxis}
              width={50}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-default)",
                color: "var(--content-default)",
                fontSize: 12,
                boxShadow: "var(--shadow-md)",
              }}
              formatter={(value) => [`AED ${(Number(value) / 1000).toFixed(0)}K`, ""]}
            />
            <Area
              type="monotone"
              dataKey="lastYear"
              stroke="var(--border-subtle)"
              strokeWidth={2}
              fill="url(#lastYearGrad)"
              dot={false}
              name="Last year"
            />
            <Area
              type="monotone"
              dataKey="thisYear"
              stroke="var(--brand-bg-default)"
              strokeWidth={2}
              fill="url(#thisYearGrad)"
              dot={false}
              name="This year"
            />
          </AreaChart>
        )}
      </div>
    </div>
  )
}
