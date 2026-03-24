"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar"
import { cn } from "~/lib/utils"

const navItemClass =
  "h-auto min-h-0 rounded-md py-2 pr-2 pl-2 text-sm font-medium leading-4 gap-2 text-[#374151] hover:bg-black/[0.04] hover:text-[#374151] dark:text-stone-200 dark:hover:bg-white/[0.06] dark:hover:text-stone-200"

const navItemActiveClass =
  "bg-brand-50 text-brand-700 hover:text-brand-700 [&_svg]:text-brand-700 dark:bg-brand-950/40 dark:text-[#93b4ff] dark:hover:bg-brand-950/40 dark:[&_svg]:text-[#93b4ff]"

export function BasicNav({
  items,
  label,
}: {
  items: {
    name: string
    url: string
    icon: React.ReactNode
  }[]
  label?: string
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden flex flex-col gap-3 p-0">
      {label && (
        <SidebarGroupLabel className="h-auto px-2 py-0 text-xs leading-3 font-normal text-gray-500 dark:text-stone-400">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarMenu className="gap-0.5">
        {items.map((item) => {
          const isActive = pathname === item.url
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                tooltip={item.name}
                className={cn(navItemClass, isActive && navItemActiveClass)}
              >
                <Link href={item.url}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
