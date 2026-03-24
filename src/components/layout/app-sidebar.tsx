"use client"

import * as React from "react"

import { BasicNav } from "~/components/layout/basic-nav"
import { ExpandedNav } from "~/components/layout/expanded-nav"
import { NavUser } from "~/components/layout/nav-user"
import { SearchForm } from "~/components/layout/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar"
import {
  FigmaIconBuilding,
  FigmaIconCalendar,
  FigmaIconCircleCheck,
  FigmaIconGear,
  FigmaIconInboxSpeech,
  FigmaIconKanban,
  FigmaIconLayoutColumns,
  FigmaIconLayoutGrid,
  FigmaIconPhone,
  FigmaIconSettingsKnobs,
  FigmaIconUserBadge,
  FigmaIconUsersGroup,
} from "../icons/figma"

const data = {
  user: {
    name: "Lina Rahman",
    org: "Atlas Estates",
    avatar: "/img/user.png",
    orgLogo: "/img/atlas-logo.png",
    badge: "Pro",
  },
  dashboard: {
    items: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: <FigmaIconLayoutGrid className="size-4 shrink-0" />,
      },
    ],
  },
  crm: {
    label: "CRM",
    items: [
      {
        name: "Inbox",
        url: "/dashboard/inbox",
        icon: <FigmaIconInboxSpeech className="size-4 shrink-0" />,
        disabled: true,
      },
      {
        name: "Leads",
        url: "/dashboard/leads",
        icon: <FigmaIconUserBadge className="size-4 shrink-0" />,
      },
      {
        name: "Deals",
        url: "/dashboard/deals",
        icon: <FigmaIconCircleCheck className="size-4 shrink-0" />,
        disabled: true,
      },
      {
        name: "Contacts",
        url: "/dashboard/contacts",
        icon: <FigmaIconPhone className="size-4 shrink-0" />,
        disabled: true,
      },
      {
        name: "Tasks",
        url: "/dashboard/tasks",
        icon: <FigmaIconKanban className="size-4 shrink-0" />,
        disabled: true,
      },
      {
        name: "Calendar",
        url: "/dashboard/calendar",
        icon: <FigmaIconCalendar className="size-4 shrink-0" />,
        disabled: true,
      },
    ],
  },
  workspace: {
    label: "Workspace",
    items: [
      {
        title: "Properties",
        url: "#",
        icon: <FigmaIconBuilding className="size-4 shrink-0" />,
        isActive: false,
        items: [
          { title: "All Properties", url: "#" },
          { title: "Listings", url: "#" },
        ],
      },
      {
        title: "Marketing",
        url: "#",
        icon: <FigmaIconSettingsKnobs className="size-4 shrink-0" />,
        isActive: false,
        items: [
          { title: "Campaigns", url: "#" },
          { title: "Analytics", url: "#" },
        ],
      },
      {
        title: "Reports",
        url: "#",
        icon: <FigmaIconLayoutColumns className="size-4 shrink-0" />,
        isActive: false,
        items: [
          { title: "Sales Report", url: "#" },
          { title: "Pipeline Report", url: "#" },
        ],
      },
    ],
  },
  footer: {
    items: [
      {
        name: "Team",
        url: "/dashboard/team",
        icon: <FigmaIconUsersGroup className="size-4 shrink-0" />,
        disabled: true,
      },
      {
        name: "Settings",
        url: "/dashboard/settings",
        icon: <FigmaIconGear className="size-4 shrink-0" />,
      },
    ],
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="border-none" {...props}>
      <SidebarHeader className="p-0 px-3 pt-3 pb-1.5">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SearchForm />
      <SidebarContent className="gap-3 px-3">
        <BasicNav items={data.dashboard.items} />
        <BasicNav items={data.crm.items} label={data.crm.label} />
        <ExpandedNav items={data.workspace.items} label={data.workspace.label} />
      </SidebarContent>
      <SidebarFooter className="p-0 px-3 pt-1 pb-3">
        <BasicNav items={data.footer.items} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
