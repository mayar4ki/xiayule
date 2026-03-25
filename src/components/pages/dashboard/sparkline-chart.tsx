"use client"

import { useId } from "react"
import { Area, AreaChart } from "recharts"

interface SparklineChartProps {
  data: number[]
  color?: string
}

export function SparklineChart({ data, color = "var(--brand-bg-default)" }: SparklineChartProps) {
  const chartData = data.map((value, index) => ({ index, value }))
  const gradId = useId().replace(/[^a-zA-Z0-9_-]/g, "")

  return (
    <div className="h-[17px] w-[55px] opacity-80">
      <AreaChart width={55} height={17} data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.3} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1}
          fill={`url(#${gradId})`}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </div>
  )
}
