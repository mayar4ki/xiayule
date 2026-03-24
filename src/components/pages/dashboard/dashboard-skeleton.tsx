import { Skeleton } from "~/components/ui/skeleton"

export function DashboardSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-[1204px] flex-1 flex-col gap-[26px] overflow-auto px-[30px] pb-10 pt-[25px]">
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

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-[58px] rounded-xl" />
        ))}
      </div>

      <div className="flex flex-col gap-[26px] lg:flex-row lg:items-start">
        <div className="flex min-w-0 flex-1 flex-col gap-[26px] lg:max-w-[718px]">
          <Skeleton className="h-[348px] rounded-[14px]" />
          <Skeleton className="h-[280px] rounded-[14px]" />
        </div>
        <div className="flex w-full flex-col gap-[26px] lg:w-[400px] lg:shrink-0">
          <Skeleton className="min-h-[340px] rounded-[14px]" />
          <Skeleton className="min-h-[400px] rounded-[14px]" />
        </div>
      </div>
    </div>
  )
}
