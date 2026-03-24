"use client"

import { motion } from "framer-motion"
import type { Period } from "~/types/dashboard"

const tabs: { label: string; value: Period }[] = [
  { label: "Today", value: "today" },
  { label: "This Week", value: "this_week" },
  { label: "This Month", value: "this_month" },
  { label: "This Quarter", value: "this_quarter" },
  { label: "This Year", value: "this_year" },
  { label: "Custom", value: "custom" },
]

interface DateFilterTabsProps {
  period: Period
  onPeriodChange: (period: Period) => void
}

export function DateFilterTabs({ period, onPeriodChange }: DateFilterTabsProps) {
  return (
    <div className="inline-flex items-center overflow-x-auto rounded-[10px] bg-gray-100 p-1 dark:bg-stone-800 max-w-full">
      {tabs.map((tab) => {
        const isActive = period === tab.value
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onPeriodChange(tab.value)}
            className="relative z-10 flex flex-1 items-center justify-center rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors whitespace-nowrap"
            style={{ color: isActive ? "#303030" : "#9CA3AF" }}
          >
            {isActive && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-md bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.1)] dark:bg-stone-700"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
