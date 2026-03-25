import { Skeleton } from "~/components/ui/skeleton"

export function HeaderSkeleton() {
  return (
    <div className="flex flex-col gap-[18px]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-28 rounded-md" />
          <Skeleton className="h-4 w-full max-w-md rounded-md" />
        </div>
        <Skeleton className="h-8 w-[89px] shrink-0 rounded-lg" />
      </div>
      <Skeleton className="h-9 w-full max-w-[558px] rounded-[10px]" />
    </div>
  )
}

export function KPICardsSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-[58px] rounded-xl" />
      ))}
    </div>
  )
}

export function RevenueSkeleton() {
  return <Skeleton className="h-[348px] rounded-[14px]" />
}

export function PipelineSkeleton() {
  return <Skeleton className="h-[280px] rounded-[14px]" />
}

export function ActivityFeedSkeleton() {
  return <Skeleton className="min-h-[340px] rounded-[14px]" />
}

export function TasksPanelSkeleton() {
  return <Skeleton className="min-h-[400px] rounded-[14px]" />
}

export function DashboardSkeleton() {
  return (
    <div className="flex w-full max-w-[1204px] flex-1 flex-col gap-5 overflow-auto px-4 pb-10 pt-5 sm:gap-[26px] sm:px-[30px] sm:pt-[25px]">
      <HeaderSkeleton />
      <KPICardsSkeleton />
      <div className="flex flex-col gap-5 sm:gap-[26px] lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-5 sm:gap-[26px] lg:max-w-[718px]">
          <RevenueSkeleton />
          <PipelineSkeleton />
        </div>
        <div className="flex w-full flex-col gap-5 sm:gap-[26px] md:flex-row md:gap-[26px] lg:w-[400px] lg:flex-col lg:shrink-0">
          <ActivityFeedSkeleton />
          <TasksPanelSkeleton />
        </div>
      </div>
    </div>
  )
}
