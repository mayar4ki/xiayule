"use client"

import * as React from "react"

import { ExpandedNav } from "~/components/layout/expanded-nav"
import { BasicNav } from "~/components/layout/basic-nav"
import { NavUser } from "~/components/layout/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar"
import {
  LayoutDashboardIcon,
  InboxIcon,
  UsersIcon,
  HandshakeIcon,
  ContactIcon,
  ListChecksIcon,
  CalendarIcon,
  BuildingIcon,
  MegaphoneIcon,
  BarChart3Icon,
  Settings2Icon,
  UsersRoundIcon,
} from "lucide-react"
import { SearchForm } from "~/components/layout/search-form"

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
        icon: <LayoutDashboardIcon className="size-4" />,
      },
    ],
  },
  crm: {
    label: "CRM",
    items: [
      {
        name: "Inbox",
        url: "/dashboard/inbox",
        icon: <InboxIcon className="size-4" />,
      },
      {
        name: "Leads",
        url: "/dashboard/leads",
        icon: <UsersIcon className="size-4" />,
      },
      {
        name: "Deals",
        url: "/dashboard/deals",
        icon: <HandshakeIcon className="size-4" />,
      },
      {
        name: "Contacts",
        url: "/dashboard/contacts",
        icon: <ContactIcon className="size-4" />,
      },
      {
        name: "Tasks",
        url: "/dashboard/tasks",
        icon: <ListChecksIcon className="size-4" />,
      },
      {
        name: "Calendar",
        url: "/dashboard/calendar",
        icon: <CalendarIcon className="size-4" />,
      },
    ],
  },
  workspace: {
    label: "Workspace",
    items: [
      {
        title: "Properties",
        url: "#",
        icon: <BuildingIcon className="size-4" />,
        isActive: false,
        items: [
          { title: "All Properties", url: "#" },
          { title: "Listings", url: "#" },
        ],
      },
      {
        title: "Marketing",
        url: "#",
        icon: <MegaphoneIcon className="size-4" />,
        isActive: false,
        items: [
          { title: "Campaigns", url: "#" },
          { title: "Analytics", url: "#" },
        ],
      },
      {
        title: "Reports",
        url: "#",
        icon: <BarChart3Icon className="size-4" />,
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
        icon: <UsersRoundIcon className="size-4" />,
      },
      {
        name: "Settings",
        url: "/dashboard/settings",
        icon: <Settings2Icon className="size-4" />,
      },
    ],
  },
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SearchForm />
      <SidebarContent>
        <BasicNav items={data.dashboard.items} />
        <BasicNav items={data.crm.items} label={data.crm.label} />
        <ExpandedNav items={data.workspace.items} label={data.workspace.label} />
      </SidebarContent>
      <SidebarFooter>
        <BasicNav items={data.footer.items} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
