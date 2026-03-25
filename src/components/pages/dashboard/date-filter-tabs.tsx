"use client"

import { motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
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
  const listRef = useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const measure = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const active = list.querySelector<HTMLElement>("[data-state=active]")
    if (!active) return
    const lRect = list.getBoundingClientRect()
    const aRect = active.getBoundingClientRect()
    setIndicator({ left: aRect.left - lRect.left, width: aRect.width })
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure, period])

  return (
    <Tabs
      value={period}
      onValueChange={(v) => onPeriodChange(v as Period)}
      className="w-full max-w-[558px] gap-0"
    >
      <TabsList
        ref={listRef}
        className="relative h-8.5! w-full justify-stretch gap-0 overflow-x-auto rounded-lg bg-(--bg-subtle) p-1 shadow-none"
      >
        <motion.div
          className="absolute top-1 bottom-1 rounded-md bg-background shadow-sm dark:bg-(--bg-subtle)"
          animate={{ left: indicator.left, width: indicator.width }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="relative z-1 shrink-0  py-2 font-normal shadow-none! data-active:bg-transparent! data-active:text-(--content-emphasis) "
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="hidden" />
      ))}
    </Tabs>
  )
}
