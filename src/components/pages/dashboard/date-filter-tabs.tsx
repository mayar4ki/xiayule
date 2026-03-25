"use client"

import { motion } from "framer-motion"
import { useCallback, useEffect, useRef, useState } from "react"
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
  const containerRef = useRef<HTMLDivElement>(null)
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map())
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  const measure = useCallback(() => {
    const container = containerRef.current
    const el = tabRefs.current.get(period)
    if (!container || !el) return
    const cRect = container.getBoundingClientRect()
    const tRect = el.getBoundingClientRect()
    setIndicator({ left: tRect.left - cRect.left, width: tRect.width })
  }, [period])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const idx = tabs.findIndex((t) => t.value === period)
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault()
      const next = tabs[(idx + 1) % tabs.length]
      onPeriodChange(next.value)
      tabRefs.current.get(next.value)?.focus()
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault()
      const prev = tabs[(idx - 1 + tabs.length) % tabs.length]
      onPeriodChange(prev.value)
      tabRefs.current.get(prev.value)?.focus()
    }
  }

  return (
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Date filter"
      onKeyDown={handleKeyDown}
      className="relative flex w-full max-w-[558px] items-center overflow-x-auto rounded-lg bg-(--bg-subtle) p-1"
    >
      <motion.div
        className="absolute top-1 bottom-1 rounded-md bg-(--bg-default) shadow-sm dark:bg-(--bg-subtle)"
        animate={{ left: indicator.left, width: indicator.width }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {tabs.map((tab) => {
        const isActive = tab.value === period
        return (
          <button
            key={tab.value}
            ref={(el) => { if (el) tabRefs.current.set(tab.value, el) }}
            role="tab"
            type="button"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onPeriodChange(tab.value)}
            className={`relative z-1 flex-1 shrink-0 rounded-md px-2 py-0.75 text-center text-segment font-normal whitespace-nowrap transition-colors ${isActive
              ? "text-(--content-emphasis)"
              : "text-(--content-muted) hover:text-(--content-subtle)"
              }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
