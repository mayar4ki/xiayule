"use client"

import type { DashboardKPI } from "~/types/dashboard"
import { KPICard } from "./kpi-card"

interface KPICardsProps {
  kpis: DashboardKPI[]
}

export function KPICards({ kpis }: KPICardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 -mt-1">
      {kpis.map((kpi) => (
        <KPICard key={kpi.label} kpi={kpi} />
      ))}
    </div>
  )
}
