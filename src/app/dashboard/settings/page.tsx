"use client"

import { Settings2Icon } from "lucide-react"
import { ThemeSettings } from "~/components/pages/settings/theme-settings"

export default function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-6 overflow-auto p-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-xl font-bold tracking-[0.2px] text-gray-900 dark:text-stone-50">
          Settings
        </h1>
        <p className="text-sm text-gray-500 dark:text-stone-400">
          Manage your account preferences and app configuration.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <section className="rounded-[14px] border border-gray-200 bg-white p-6 dark:border-stone-700 dark:bg-stone-800">
          <div className="flex items-center gap-2.5 pb-4">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gray-100 dark:bg-stone-700">
              <Settings2Icon className="size-4 text-gray-500 dark:text-stone-400" />
            </div>
            <div>
              <h2 className="font-heading text-sm font-semibold text-gray-900 dark:text-stone-50">
                Appearance
              </h2>
              <p className="text-xs text-gray-500 dark:text-stone-400">
                Adjust how the app looks on this device.
              </p>
            </div>
          </div>
          <ThemeSettings />
        </section>
      </div>
    </div>
  )
}
