import { AppSidebar } from "~/components/layout/app-sidebar";
import { ThemeSettings } from "~/components/theme-settings";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { TooltipProvider } from "~/components/ui/tooltip";

export default function SettingsPage() {
  return (

    <div className="flex flex-1 flex-col gap-6 p-4 pt-0">
      <section className="rounded-xl border border-border bg-card p-6 shadow-xs">
        <h2 className="font-heading mb-1 text-lg font-semibold">
          Appearance
        </h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Adjust how the app looks on this device.
        </p>
        <ThemeSettings />
      </section>
    </div>
  );
}
