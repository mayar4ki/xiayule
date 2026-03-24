import { Skeleton } from "~/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-4 w-80" />
        </div>
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>

      {/* Tabs skeleton */}
      <Skeleton className="h-9 w-full max-w-[558px] rounded-[10px]" />

      {/* KPI cards skeleton */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-[58px] rounded-xl" />
        ))}
      </div>

      {/* Main content skeleton */}
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <Skeleton className="h-[348px] rounded-[14px]" />
          <Skeleton className="h-[280px] rounded-[14px]" />
        </div>
        <div className="flex w-full flex-col gap-6 lg:w-[400px] lg:shrink-0">
          <Skeleton className="h-[340px] rounded-[14px]" />
          <Skeleton className="h-[400px] rounded-[14px]" />
        </div>
      </div>
    </div>
  )
}
