"use client"

import { ArrowUpRightIcon } from "lucide-react"
import type { ActivityEntry as ActivityEntryType } from "~/types/dashboard"
import { ActivityEntry } from "./activity-entry"

interface ActivityFeedProps {
  groups: { label: string; entries: ActivityEntryType[] }[]
}

export function ActivityFeed({ groups }: ActivityFeedProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[14px] border border-(--border-subtle) bg-(--bg-default) dark:border-(--border-default) ">
      <div className="flex h-[51px] shrink-0 items-center border-b border-(--border-muted) px-5 dark:border-(--border-subtle)">
        <h3 className="font-heading text-base font-medium leading-[20.8px] text-(--content-emphasis)">
          Activity Feed
        </h3>
      </div>

      <div className="max-h-[300px] overflow-y-auto sm:max-h-[250px]">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="flex h-[37px] items-center border-b border-(--border-muted) bg-(--bg-muted) px-5 dark:border-(--border-subtle) dark:bg-(--bg-muted)/40">
              <p className="font-heading text-[10px] font-bold uppercase leading-[15px] tracking-[0.5px] text-(--content-muted) dark:text-(--content-subtle)">
                {group.label}
              </p>
            </div>
            <div className="px-0.5 pb-0 pt-0">
              <div className="relative">
                <div
                  className="absolute bottom-0 left-[33px] top-0 z-0 w-px bg-(--border-default)"
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

      <div className="flex h-[43px] shrink-0 items-start justify-center border-t border-(--border-muted) bg-(--bg-default) px-5 pt-[13px] dark:border-(--border-subtle) ">
        <button
          type="button"
          className="font-heading inline-flex items-center gap-1 text-xs font-semibold leading-[18px] text-brand-400 hover:text-(--brand-bg-default)"
        >
          View full activity log
          <ArrowUpRightIcon className="size-3" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  )
}
