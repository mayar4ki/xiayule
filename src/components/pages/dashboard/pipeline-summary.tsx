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
    <div className="rounded-[14px] border border-[#e1e4ed] bg-(--bg-default) dark:border-[#575757] dark:bg-card">
      <div className="flex flex-col gap-1 px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-base leading-[1.3rem] font-medium text-[#091026] dark:text-[#fcfcfd]">
            Pipeline Summary
          </h3>
          <button
            type="button"
            className="font-heading flex items-center gap-0.5 text-xs leading-[1.125rem] font-semibold text-[#3567ff] hover:opacity-90 dark:text-[#5d85ff]"
          >
            Details
            <ArrowUpRightIcon className="size-3" strokeWidth={2} />
          </button>
        </div>
        <p className="text-xs leading-[1.125rem] font-normal text-[#6e7991] dark:text-[#a5a5a5]">
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
                <span className="inline-block text-xs leading-[1.125rem] font-medium text-[#3d4a65] dark:text-[#d6d6d6]">
                  {stage.stage}
                </span>
              </div>
              <div className="relative h-[30px] flex-1 overflow-hidden rounded-[8px] bg-[#f1f3f7] dark:bg-[#1f1f1f]">
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
                    "flex h-full items-center rounded-[8px] pl-0.5",
                    isDarkBar && "bg-[#314174] dark:bg-[#203f9e]",
                    !isDarkBar &&
                    "bg-[linear-gradient(to_right,rgb(209_250_229/0.9),rgb(224_242_254/0.8))] dark:bg-[linear-gradient(to_right,rgb(16_185_129/0.35),rgb(14_165_233/0.28))]",
                  )}
                >
                  {stage.count > 0 && (
                    <div
                      className={cn(
                        "flex h-6 items-center gap-2 rounded-[6px] px-1.5",
                        isDarkBar
                          ? "bg-[rgb(255_255_255/0.15)]"
                          : "bg-[rgb(255_255_255/0.6)] dark:bg-[rgb(30_41_55/0.4)]",
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs leading-none font-bold",
                          isDarkBar
                            ? "text-white"
                            : "text-[#1f2937] dark:text-[#e8e8e8]",
                        )}
                      >
                        {stage.count}
                      </span>
                      {stage.value > 0 && (
                        <span
                          className={cn(
                            "text-[0.6875rem] leading-none font-medium",
                            isDarkBar
                              ? "text-[rgb(255_255_255/0.7)]"
                              : "text-[#4b5563] dark:text-[#a5a5a5]",
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
