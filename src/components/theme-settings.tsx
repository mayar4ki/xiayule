"use client"

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import * as React from "react"
import { useTheme } from "next-themes"

type Theme = "light" | "dark" | "system"

const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: "light", label: "Light", icon: <SunIcon className="size-4" /> },
  { value: "dark", label: "Dark", icon: <MoonIcon className="size-4" /> },
  { value: "system", label: "System", icon: <MonitorIcon className="size-4" /> },
]

export function ThemeSettings() {
  const { theme, setTheme } = useTheme()
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) {
    return (
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <div
            key={o.value}
            className="h-9 w-24 animate-pulse rounded-lg bg-gray-100 dark:bg-stone-700"
            aria-hidden
          />
        ))}
      </div>
    )
  }

  return (
    <fieldset className="m-0 flex min-w-0 flex-wrap gap-2 border-0 p-0">
      <legend className="sr-only">Color theme</legend>
      {options.map((o) => {
        const isActive = theme === o.value
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => setTheme(o.value)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-brand-500 bg-brand-50 text-brand-600 dark:border-brand-400 dark:bg-brand-900/20 dark:text-brand-300"
                : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
            }`}
          >
            {o.icon}
            {o.label}
          </button>
        )
      })}
    </fieldset>
  )
}
