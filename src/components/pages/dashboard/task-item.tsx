"use client"

import { ClockIcon, AlertTriangleIcon } from "lucide-react"
import type { Task } from "~/types/dashboard"

const priorityStyles: Record<Task["priority"], { bg: string; text: string }> = {
  low: { bg: "bg-gray-100 dark:bg-stone-700", text: "text-gray-600 dark:text-stone-300" },
  med: { bg: "bg-orange-50 dark:bg-orange-900/30", text: "text-orange-700 dark:text-orange-300" },
  high: { bg: "bg-red-50 dark:bg-red-900/30", text: "text-red-600 dark:text-red-300" },
}

const typeLabels: Record<Task["type"], string> = {
  task: "Task",
  email: "Email",
  meeting: "Meeting",
  call: "Call",
}

interface TaskItemProps {
  task: Task
  onToggle: (taskId: string) => void
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  const priority = priorityStyles[task.priority]

  return (
    <div className="flex items-start gap-3 border-b border-gray-100 px-5 py-3 dark:border-stone-700 last:border-b-0">
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        className={`mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
          task.completed
            ? "border-brand-500 bg-brand-500"
            : "border-gray-300 bg-transparent hover:border-brand-400 dark:border-stone-500"
        }`}
        aria-label={task.completed ? "Mark incomplete" : "Mark complete"}
      >
        {task.completed && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p
          className={`text-[13px] font-medium leading-[18px] ${
            task.completed
              ? "text-gray-400 line-through dark:text-stone-500"
              : task.isOverdue
                ? "text-red-600 dark:text-red-400"
                : "text-gray-900 dark:text-stone-100"
          }`}
        >
          {task.title}
        </p>
        <div className="flex items-center gap-1">
          {task.isOverdue ? (
            <AlertTriangleIcon className="size-3 text-red-500" />
          ) : (
            <ClockIcon className="size-3 text-gray-400 dark:text-stone-500" />
          )}
          <span
            className={`text-[11px] ${
              task.isOverdue
                ? "text-red-500 dark:text-red-400"
                : "text-gray-500 dark:text-stone-400"
            }`}
          >
            {task.dueLabel}
          </span>
          <span className="text-[11px] text-gray-400 dark:text-stone-500">&middot;</span>
          <span className="text-[11px] text-gray-500 dark:text-stone-400">
            {typeLabels[task.type]}
          </span>
        </div>
      </div>

      <span
        className={`mt-0.5 inline-flex shrink-0 items-center rounded px-1.5 py-0.5 text-[11px] font-medium capitalize ${priority.bg} ${priority.text}`}
      >
        {task.priority === "med" ? "Med" : task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
      </span>
    </div>
  )
}
