"use client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"
import { cn } from "~/lib/utils"
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
    <Tabs
      value={period}
      onValueChange={(v) => onPeriodChange(v as Period)}
      orientation="horizontal"
      className="w-full max-w-[558px] gap-0"
    >
      <TabsList

        className={cn(
          "w-full justify-stretch gap-0 rounded-lg bg-(--bg-subtle)  p-1 shadow-none ",
        )}
        data-name="Segment/Text"
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className=" py-3"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          aria-hidden
          tabIndex={-1}
          className="hidden"
        />
      ))}
    </Tabs>
  )
}
