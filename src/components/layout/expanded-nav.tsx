"use client"

import { ChevronRightIcon } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar"
import { cn } from "~/lib/utils"

const triggerClass =
  "h-auto min-h-0 rounded-md py-2 pr-2 pl-2 text-sm font-medium leading-4 gap-2 text-(--content-subtle) hover:bg-(--content-emphasis)/4 hover:text-(--content-default) dark:text-stone-200 dark:hover:bg-white/[0.06] dark:hover:text-stone-200"

export function ExpandedNav({
  items,
  label,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  label?: string
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden flex flex-col gap-3 p-0">
      {label && (
        <SidebarGroupLabel className="h-auto px-2 py-0 text-xs leading-3 font-normal text-gray-500 dark:text-stone-400">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarMenu className="gap-0.5">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={cn(triggerClass, "pr-1")}
                >
                  {item.icon}
                  <span className="flex-1 truncate text-left">{item.title}</span>
                  <ChevronRightIcon
                    className="size-[13px] shrink-0 text-gray-500 opacity-70 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 dark:text-stone-400"
                    strokeWidth={2}
                  />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="mx-0 border-0 px-2 py-0.5">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        className="text-[13px] text-(--content-default) dark:text-stone-300"
                      >
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
