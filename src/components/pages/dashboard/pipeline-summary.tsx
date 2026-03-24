"use client"

import { motion } from "framer-motion"
import { ArrowUpRightIcon } from "lucide-react"
import type { PipelineStage } from "~/types/dashboard"

interface PipelineSummaryProps {
  totalDeals: number
  totalStages: number
  totalValue: string
  stages: PipelineStage[]
}

function formatValue(value: number, currency: string): string {
  if (value >= 1_000_000) return `${currency} ${(value / 1_000_000).toFixed(2)}M`
  if (value >= 1_000) return `${currency} ${(value / 1_000).toFixed(0)}K`
  return `${currency} ${value}`
}

export function PipelineSummary({ totalDeals, totalStages, totalValue, stages }: PipelineSummaryProps) {
  const maxCount = Math.max(...stages.map((s) => s.count))

  return (
    <div className="rounded-[14px] border border-[#e1e4ed] bg-white dark:border-stone-600 dark:bg-stone-800">
      <div className="flex flex-col gap-1 px-5 pt-5 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-sm font-normal leading-5 text-[#686868] dark:text-stone-300">
            Pipeline Summary
          </h3>
          <button
            type="button"
            className="font-heading flex items-center gap-0.5 text-xs font-semibold text-[#3567ff] hover:text-brand-600"
          >
            Details
            <ArrowUpRightIcon className="size-3" strokeWidth={2} />
          </button>
        </div>
        <p className="text-xs leading-[18px] text-[#6b7280] dark:text-stone-400">
          {totalDeals} deals across {totalStages} stages · {totalValue} total value
        </p>
      </div>

      <div className="flex flex-col gap-4 px-5 pb-5">
        {stages.map((stage, i) => {
          const pct = maxCount > 0 ? (stage.count / maxCount) * 100 : 0
          const isDarkBar = i < 4
          return (
            <div key={stage.stage} className="flex h-[30px] items-center gap-0">
              <div className="w-[88px] shrink-0 pr-3 text-right">
                <span className="text-xs font-medium leading-[18px] text-[#4b5563] dark:text-stone-300">
                  {stage.stage}
                </span>
              </div>
              <div className="relative h-[30px] flex-1 overflow-hidden rounded-lg bg-[#f1f3f7] dark:bg-stone-900">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(pct, stage.count > 0 ? 12 : 0)}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  className={`flex h-full items-center rounded-lg pl-0.5 ${isDarkBar
                    ? "bg-[#314174]"
                    : "bg-linear-to-r from-emerald-100/90 to-sky-100/80 dark:from-emerald-900/40 dark:to-sky-900/30"
                    }`}
                >
                  {stage.count > 0 && (
                    <div
                      className={`flex items-center gap-2 rounded-md px-1.5 h-10/12 ${isDarkBar ? "bg-white/15" : "bg-white/60 dark:bg-stone-800/40"
                        }`}
                    >
                      <span
                        className={`text-[11px] font-bold leading-none ${isDarkBar ? "text-white" : "text-gray-800 dark:text-stone-200"
                          }`}
                      >
                        {stage.count}
                      </span>
                      {stage.value > 0 && (
                        <span
                          className={`text-[11px] font-medium leading-none 
                            ${isDarkBar ? "text-white/80" : "text-gray-600 dark:text-stone-400"}`}
                        >
                          {formatValue(stage.value, stage.currency)}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
