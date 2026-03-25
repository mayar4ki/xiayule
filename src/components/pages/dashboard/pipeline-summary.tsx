"use client";

import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import type { PipelineStage } from "~/types/dashboard";
import { formatValue } from "~/utils/format-value";

interface PipelineSummaryProps {
  totalDeals: number;
  totalStages: number;
  totalValue: string;
  stages: PipelineStage[];
}

export function PipelineSummary({
  totalDeals,
  totalStages,
  totalValue,
  stages,
}: PipelineSummaryProps) {
  const maxCount = Math.max(...stages.map((s) => s.count));

  return (
    <div className="rounded-[14px] border border-(--border-subtle) bg-(--bg-default) dark:border-(--border-default)">
      <div className="flex flex-col gap-1 px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-compact-sm font-medium  dark:text-stone-50">
            Pipeline Summary
          </h3>
          <button
            type="button"
            className="font-heading flex items-center gap-0.5 text-xs leading-[1.125rem] font-semibold text-brand-500 hover:opacity-90 dark:text-brand-400"
          >
            Details
            <ArrowUpRightIcon className="size-3" strokeWidth={2} />
          </button>
        </div>
        <p className="text-xs leading-[1.125rem] font-normal text-gray-400 dark:text-stone-400">
          {totalDeals} deals across {totalStages} stages · {totalValue} total
          value
        </p>
      </div>

      <div className="flex flex-col gap-4 px-5 pb-5">
        {stages.map((stage, i) => {
          const pct = maxCount > 0 ? (stage.count / maxCount) * 100 : 0;
          const isDarkBar = i < 4;
          return (
            <div key={stage.stage} className="flex h-[30px] items-center gap-0">
              <div className="w-[100px] shrink-0 pr-3 text-right">
                <span className="inline-block text-xs leading-[1.125rem] font-medium text-(--content-default) dark:text-stone-300">
                  {stage.stage}
                </span>
              </div>
              <div className="relative h-[30px] flex-1 overflow-hidden rounded-lg bg-(--bg-subtle) dark:bg-stone-900">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.max(pct, stage.count > 0 ? 12 : 0)}%`,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "flex h-full items-center rounded-lg pl-0.5",
                    isDarkBar && "bg-brand-800 dark:bg-brand-700",
                    !isDarkBar &&
                    "bg-gradient-to-r from-emerald-200/90 to-sky-200/80 dark:from-emerald-500/35 dark:to-sky-500/28",
                  )}
                >
                  {stage.count > 0 && (
                    <div
                      className={cn(
                        "flex h-6 items-center gap-2 rounded-md px-1.5",
                        isDarkBar
                          ? "bg-white/15"
                          : "bg-white/60 dark:bg-slate-800/40",
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs leading-none font-bold",
                          isDarkBar
                            ? "text-white"
                            : "text-gray-800 dark:text-stone-200",
                        )}
                      >
                        {stage.count}
                      </span>
                      {stage.value > 0 && (
                        <span
                          className={cn(
                            "text-[0.6875rem] leading-none font-medium",
                            isDarkBar
                              ? "text-white/70"
                              : "text-gray-600 dark:text-stone-400",
                          )}
                        >
                          {formatValue(stage.value, stage.currency)}
                        </span>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
