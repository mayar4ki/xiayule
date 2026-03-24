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
    <div className="rounded-[14px] border border-gray-200 bg-white dark:border-stone-700 dark:bg-stone-800">
      <div className="flex flex-col gap-1.5 px-5 pt-4 pb-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-base font-bold text-gray-900 dark:text-stone-50">
            Pipeline Summary
          </h3>
          <button type="button" className="flex items-center gap-0.5 text-xs font-semibold text-brand-500 hover:text-brand-600">
            Details
            <ArrowUpRightIcon className="size-3" />
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-stone-400">
          {totalDeals} deals across {totalStages} stages &middot; {totalValue} total value
        </p>
      </div>

      <div className="flex flex-col gap-0.5 px-5 pb-5">
        {stages.map((stage, i) => {
          const pct = maxCount > 0 ? (stage.count / maxCount) * 100 : 0
          const isDarkBar = i < 4
          return (
            <div key={stage.stage} className="flex items-center gap-0 h-[30px]">
              <div className="w-[88px] shrink-0 text-right pr-3">
                <span className="text-xs font-medium text-gray-600 dark:text-stone-300">
                  {stage.stage}
                </span>
              </div>
              <div className="relative flex-1 h-[30px] overflow-hidden rounded-lg">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(pct, 8)}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  className={`h-full rounded-lg flex items-center pl-1 ${
                    isDarkBar
                      ? "bg-linear-to-r from-brand-900 via-[#314174] to-[#3F5188]"
                      : "bg-linear-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 rounded-lg px-1.5 py-0.5 ${
                      isDarkBar ? "bg-white/20" : ""
                    }`}
                  >
                    <span
                      className={`text-xs font-bold ${
                        isDarkBar ? "text-white" : "text-gray-800 dark:text-stone-200"
                      }`}
                    >
                      {stage.count}
                    </span>
                    {stage.value > 0 && (
                      <span
                        className={`text-[11px] font-medium ${
                          isDarkBar ? "text-white/70" : "text-gray-600/70 dark:text-stone-400"
                        }`}
                      >
                        {formatValue(stage.value, stage.currency)}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
