"use client"

import { ArrowUpRightIcon } from "lucide-react"
import type { ActivityEntry as ActivityEntryType } from "~/types/dashboard"
import { ActivityEntry } from "./activity-entry"

interface ActivityFeedProps {
  groups: { label: string; entries: ActivityEntryType[] }[]
}

export function ActivityFeed({ groups }: ActivityFeedProps) {
  return (
    <div className="flex flex-col rounded-[14px] border border-gray-200 bg-white dark:border-stone-700 dark:bg-stone-800">
      <div className="px-5 pt-4 pb-2">
        <h3 className="font-heading text-base font-bold text-gray-900 dark:text-stone-50">
          Activity Feed
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto px-5">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-brand-500">
              {group.label}
            </p>
            <div className="divide-y divide-gray-100 dark:divide-stone-700">
              {group.entries.map((entry) => (
                <ActivityEntry key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 px-5 py-3 dark:border-stone-700">
        <button type="button" className="flex w-full items-center justify-center gap-1 text-xs font-semibold text-brand-500 hover:text-brand-600">
          View full activity log
          <ArrowUpRightIcon className="size-3" />
        </button>
      </div>
    </div>
  )
}
