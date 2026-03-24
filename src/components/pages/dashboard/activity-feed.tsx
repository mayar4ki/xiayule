"use client"

import { ArrowUpRightIcon } from "lucide-react"
import type { ActivityEntry as ActivityEntryType } from "~/types/dashboard"
import { ActivityEntry } from "./activity-entry"

interface ActivityFeedProps {
  groups: { label: string; entries: ActivityEntryType[] }[]
}

export function ActivityFeed({ groups }: ActivityFeedProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[14px] border border-[#e1e4ed] bg-white dark:border-stone-600 dark:bg-stone-800">
      <div className="flex h-[51px] shrink-0 items-center border-b border-[#f1f3f7] px-5 dark:border-stone-700">
        <h3 className="font-heading text-base font-medium leading-[20.8px] text-[#091026] dark:text-stone-50">
          Activity Feed
        </h3>
      </div>

      <div className="max-h-[250px] overflow-y-auto">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="flex h-[37px] items-center border-b border-[#f1f3f7] bg-[#fafbff] px-5 dark:border-stone-700 dark:bg-stone-900/40">
              <p className="font-heading text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-[#a0a9bd]">
                {group.label}
              </p>
            </div>
            <div className="px-0.5 pb-0 pt-0">
              <div className="relative">
                <div
                  className="absolute bottom-0 left-[33px] top-0 z-0 w-px bg-[#e1e4ed] dark:bg-stone-600"
                  aria-hidden
                />
                {group.entries.map((entry) => (
                  <ActivityEntry key={entry.id} entry={entry} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex h-[43px] shrink-0 items-start justify-center border-t border-[#f1f3f7] bg-white px-5 pt-[13px] dark:border-stone-700 dark:bg-stone-800">
        <button
          type="button"
          className="font-heading inline-flex items-center gap-1 text-xs font-semibold leading-[18px] text-[#476cdc] hover:text-[#3567ff]"
        >
          View full activity log
          <ArrowUpRightIcon className="size-3" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  )
}
