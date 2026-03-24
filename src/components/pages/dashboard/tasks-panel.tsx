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
    <div className="flex flex-col rounded-[14px] border border-gray-200 bg-white dark:border-stone-700 dark:bg-stone-800">
      <div className="border-b border-gray-100 px-5 pt-4 pb-3 dark:border-stone-700">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-base font-bold text-gray-900 dark:text-stone-50">
              Tasks &amp; Reminders
            </h3>
            <button type="button" className="flex items-center gap-0.5 text-xs font-semibold text-brand-500 hover:text-brand-600">
              <PlusIcon className="size-3.5" />
              Quick add
            </button>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-stone-700">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-green-700 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] font-semibold text-gray-400 dark:text-stone-500">
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
