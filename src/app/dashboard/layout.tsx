"use client"
import { MenuIcon } from "lucide-react"
import { AppSidebar } from "~/components/layout/app-sidebar"
import { Button } from "~/components/ui/button"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from "~/components/ui/sidebar"
import { TooltipProvider } from "~/components/ui/tooltip"
import { useIsMobile } from "~/hooks/use-mobile"

export default function Layout({ children }: { children: React.ReactNode }) {
    const isMobile = useIsMobile()
    return (
        <TooltipProvider>
            <SidebarProvider >
                <AppSidebar />
                <SidebarInset>
                    {isMobile && <Button variant="ghost" size="icon" className="ml-2 mt-2">
                        <SidebarTrigger ><MenuIcon /></SidebarTrigger>
                    </Button>}
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    )
}
