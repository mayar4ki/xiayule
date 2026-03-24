"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider as JotaiProvider } from "jotai"
import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Toaster } from "sonner"
import { AppSidebar } from "~/components/layout/app-sidebar"
import { Button } from "~/components/ui/button"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar"
import { TooltipProvider } from "~/components/ui/tooltip"
import { useIsMobile } from "~/hooks/use-mobile"

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              {isMobile && (
                <Button variant="ghost" size="icon" className="ml-2 mt-2">
                  <SidebarTrigger>
                    <MenuIcon />
                  </SidebarTrigger>
                </Button>
              )}
              {children}
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "font-sans",
            style: {
              borderRadius: "10px",
              fontSize: "13px",
            },
          }}
        />
      </JotaiProvider>
    </QueryClientProvider>
  )
}
