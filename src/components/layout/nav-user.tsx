"use client"

import Image from "next/image"
import { BellIcon, ChevronsUpDownIcon, CircleHelpIcon, LogOutIcon, UserIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "~/components/ui/sidebar"

export function NavUser({
  user,
}: {
  user: {
    name: string
    org: string
    avatar: string
    orgLogo: string
    badge?: string
  }
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-9 rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-full bg-brand-500 text-white text-xs font-semibold">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-gray-900 dark:text-stone-50">{user.name}</span>
                <div className="flex items-center gap-1.5">
                  <span className="truncate text-xs text-gray-500 dark:text-stone-400">{user.org}</span>
                  {user.badge && (
                    <span className="inline-flex items-center rounded-full bg-brand-500 px-1.5 py-px text-[10px] font-bold text-white leading-none">
                      {user.badge}
                    </span>
                  )}
                </div>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4 text-gray-400 dark:text-stone-500" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-xl p-0"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2.5 px-3 py-3 text-left text-sm">
                <Image
                  src={user.orgLogo}
                  alt={user.org}
                  width={36}
                  height={36}
                  className="shrink-0 rounded-lg"
                />
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-sm font-semibold text-gray-900 dark:text-stone-50">{user.org}</span>
                  <span className="truncate text-xs text-gray-500 dark:text-stone-400">Business · 12 members</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="my-0" />
            <div className="p-1">
              <DropdownMenuItem className="gap-2.5 rounded-lg px-2.5 py-2">
                <span className="size-2.5 rounded-full bg-green-500" />
                <span className="flex-1">Online</span>
                <span className="rounded border border-green-200 bg-green-50 px-2 py-0.5 text-[11px] font-semibold text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300">
                  ACTIVE
                </span>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator className="my-0" />
            <DropdownMenuGroup className="p-1">
              <DropdownMenuItem className="gap-2.5 rounded-lg px-2.5 py-2">
                <UserIcon className="size-4 text-gray-400 dark:text-stone-500" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2.5 rounded-lg px-2.5 py-2">
                <BellIcon className="size-4 text-gray-400 dark:text-stone-500" />
                <span className="flex-1">Notifications</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-red-100 text-[11px] font-semibold text-red-600 leading-none dark:bg-red-900/30 dark:text-red-300">
                  2
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2.5 rounded-lg px-2.5 py-2">
                <CircleHelpIcon className="size-4 text-gray-400 dark:text-stone-500" />
                Help &amp; Support
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator className="my-0" />
            <div className="p-1">
              <DropdownMenuItem className="gap-2.5 rounded-lg px-2.5 py-2">
                <LogOutIcon className="size-4 text-gray-400 dark:text-stone-500" />
                Sign out
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
