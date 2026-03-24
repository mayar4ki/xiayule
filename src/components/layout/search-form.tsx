"use client"

import { SearchIcon } from "lucide-react"
import { Label } from "~/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "~/components/ui/sidebar"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search..."
            className="pl-8 pr-12"
          />
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground select-none" />
          <kbd className="pointer-events-none absolute top-1/2 right-8 -translate-y-1/2 flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground select-none">
            <span className="text-[10px]">⌘</span>
          </kbd>
          <kbd className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground select-none">
            <span className="text-[10px]">K</span>
          </kbd>
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
