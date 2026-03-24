"use client"

import { SearchIcon } from "lucide-react"
import { Label } from "~/components/ui/label"
import { SidebarGroup, SidebarGroupContent } from "~/components/ui/sidebar"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="mb-3 p-0 px-3 py-0">
        <SidebarGroupContent>
          <Label htmlFor="sidebar-search" className="sr-only">
            Search
          </Label>
          <div className="flex h-[35px] w-full items-center gap-2 rounded-lg border border-[#e8ebf2] bg-white px-[7px] py-px dark:border-stone-600 dark:bg-stone-900">
            <SearchIcon
              className="size-[14px] shrink-0 text-[#a0a0a0] dark:text-stone-500"
              strokeWidth={2}
              aria-hidden
            />
            <input
              id="sidebar-search"
              type="search"
              placeholder="Search"
              className="min-w-0 flex-1 border-0 bg-transparent py-1 text-[13px] text-gray-700 outline-none placeholder:text-[#a0a0a0] dark:text-stone-200 dark:placeholder:text-stone-500"
              autoComplete="off"
            />
            <div className="flex shrink-0 items-center gap-[3px] pr-0.5">
              <kbd className="flex h-[17.5px] min-w-[17.5px] items-center justify-center rounded border border-[#e1e4ed] bg-white px-1 font-mono text-[10px] font-bold text-[#b4b9c9] dark:border-stone-600 dark:bg-stone-800 dark:text-stone-500">
                ⌘
              </kbd>
              <kbd className="flex h-[17.5px] min-w-[17.5px] items-center justify-center rounded border border-[#e1e4ed] bg-white px-1 font-mono text-[10px] font-bold text-[#b4b9c9] dark:border-stone-600 dark:bg-stone-800 dark:text-stone-500">
                K
              </kbd>
            </div>
          </div>
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
