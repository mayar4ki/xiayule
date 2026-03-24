"use client";

import { MenuIcon } from "lucide-react";
import { AppSidebar } from "~/components/layout/app-sidebar";
import { Button } from "~/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { useIsMobile } from "~/hooks/use-mobile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-sidebar">
        <header className="flex h-19 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            {isMobile && (
              <Button variant="ghost" size="icon" className="ml-2 mt-2">
                <SidebarTrigger>
                  <MenuIcon />
                </SidebarTrigger>
              </Button>
            )}
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
