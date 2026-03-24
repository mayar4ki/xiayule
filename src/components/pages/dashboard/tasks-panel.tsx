"use client"

import { PlusIcon } from "lucide-react"
import type { Task } from "~/types/dashboard"
import { TaskItem } from "./task-item"

interface TasksPanelProps {
  completed: number
  total: number
  items: Task[]
  onToggleTask: (taskId: string) => void
}

export function TasksPanel({ completed, total, items, onToggleTask }: TasksPanelProps) {
  const progress = total > 0 ? (completed / total) * 100 : 0

  return (
    <div className="flex flex-col overflow-hidden rounded-[14px] border border-(--border-subtle) bg-(--bg-default) dark:border-(--border-default) ">
      <div className="border-b border-(--border-muted) px-5 pt-5.5 pb-3 dark:border-(--border-subtle)">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-heading text-compact-base font-extrabold leading-5 text-(--content-emphasis)">
              Tasks &amp; Reminders
            </h3>
            <button
              type="button"
              className="font-heading flex shrink-0 mx-2 items-center gap-0.5 text-xs font-semibold text-(--brand-bg-default) hover:text-brand-600"
            >
              <PlusIcon className="size-3.5" strokeWidth={2} />
              Quick add
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-(--border-muted) dark:bg-(--border-subtle)">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-green-700 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] font-semibold tabular-nums text-(--content-muted) dark:text-stone-500">
              {completed}/{total} done
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {items.map((task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
        ))}
      </div>
    </div>
  )
}
