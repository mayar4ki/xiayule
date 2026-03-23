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
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, UserIcon, ChartAreaIcon } from "lucide-react"
import { SearchForm } from "~/components/layout/search-form"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },


  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: (
        <TerminalSquareIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Item 1",
          url: "#",
        }
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: (
        <BotIcon
        />
      ),
      items: [
        {
          title: "Item 1",
          url: "#",
        }
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: (
        <BookOpenIcon
        />
      ),
      items: [
        {
          title: "Item 1",
          url: "#",
        }
      ],
    }
  ],
  dashboard: {

    items: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: (
          <ChartAreaIcon
          />
        ),
      },

    ]
  },
  crm: {
    label: "CRM",
    items: [
      {
        name: "Inbox",
        url: "#",
        icon: (
          <FrameIcon
          />
        ),
      },
      {
        name: "Leads",
        url: "#",
        icon: (
          <UserIcon
          />
        ),
      },

    ]
  },
  footer: {
    items: [
      {
        name: "Team",
        url: "#",
        icon: (
          <Settings2Icon
          />
        ),
      },
      {
        name: "Settings",
        url: "/dashboard/settings",
        icon: (
          <Settings2Icon
          />
        ),
      },
    ]
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SearchForm />
      <SidebarContent>
        <BasicNav items={data.dashboard.items}
        />
        <BasicNav items={data.crm.items} label={data.crm.label} />

        <ExpandedNav items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <BasicNav items={data.footer.items} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
