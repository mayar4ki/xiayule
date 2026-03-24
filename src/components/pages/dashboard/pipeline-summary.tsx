"use client"

import { motion } from "framer-motion"
import { ArrowUpRightIcon } from "lucide-react"
import type { PipelineStage } from "~/types/dashboard"
import { formatValue } from "~/utils/format-value"

interface PipelineSummaryProps {
  totalDeals: number
  totalStages: number
  totalValue: string
  stages: PipelineStage[]
}

export function PipelineSummary({ totalDeals, totalStages, totalValue, stages }: PipelineSummaryProps) {
  const maxCount = Math.max(...stages.map((s) => s.count))

  return (
    <div
      className="border bg-(--bg-default) dark:bg-card"
      style={{
        borderRadius: "var(--dashboard-pipeline-radius)",
        borderColor: "var(--dashboard-pipeline-border)",
      }}
    >
      <div className="flex flex-col gap-1 px-5 pt-5 pb-4">
        <div className="flex items-center justify-between">
          <h3
            className="font-heading font-medium"
            style={{
              color: "var(--dashboard-pipeline-title-color)",
              fontSize: "var(--dashboard-pipeline-title-size)",
              lineHeight: "var(--dashboard-pipeline-title-leading)",
            }}
          >
            Pipeline Summary
          </h3>
          <button
            type="button"
            className="font-heading flex items-center gap-0.5 font-semibold hover:opacity-90"
            style={{
              color: "var(--dashboard-pipeline-link-color)",
              fontSize: "var(--dashboard-pipeline-link-size)",
              lineHeight: "var(--dashboard-pipeline-link-leading)",
            }}
          >
            Details
            <ArrowUpRightIcon className="size-3" strokeWidth={2} />
          </button>
        </div>
        <p
          className="font-normal"
          style={{
            color: "var(--dashboard-pipeline-caption-color)",
            fontSize: "var(--dashboard-pipeline-caption-size)",
            lineHeight: "var(--dashboard-pipeline-caption-leading)",
          }}
        >
          {totalDeals} deals across {totalStages} stages · {totalValue} total value
        </p>
      </div>

      <div
        className="flex flex-col px-5 pb-5"
        style={{ gap: "var(--dashboard-pipeline-row-gap)" }}
      >
        {stages.map((stage, i) => {
          const pct = maxCount > 0 ? (stage.count / maxCount) * 100 : 0
          const isDarkBar = i < 4
          return (
            <div
              key={stage.stage}
              className="flex items-center gap-0"
              style={{ height: "var(--dashboard-pipeline-bar-height)" }}
            >
              <div
                className="shrink-0 pr-3 text-right"
                style={{ width: "var(--dashboard-pipeline-label-width)" }}
              >
                <span
                  className="inline-block font-medium"
                  style={{
                    color: "var(--dashboard-pipeline-stage-color)",
                    fontSize: "var(--dashboard-pipeline-stage-size)",
                    lineHeight: "var(--dashboard-pipeline-stage-leading)",
                  }}
                >
                  {stage.stage}
                </span>
              </div>
              <div
                className="relative flex-1 overflow-hidden"
                style={{
                  height: "var(--dashboard-pipeline-bar-height)",
                  borderRadius: "var(--dashboard-pipeline-bar-radius)",
                  backgroundColor: "var(--dashboard-pipeline-track-bg)",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(pct, stage.count > 0 ? 12 : 0)}%` }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                  className="flex h-full items-center pl-0.5"
                  style={{
                    borderRadius: "var(--dashboard-pipeline-bar-radius)",
                    ...(isDarkBar
                      ? { backgroundColor: "var(--dashboard-pipeline-bar-fill)" }
                      : {
                        backgroundImage:
                          "linear-gradient(to right, var(--dashboard-pipeline-light-bar-start), var(--dashboard-pipeline-light-bar-end))",
                      }),
                  }}
                >
                  {stage.count > 0 && (
                    <div
                      className="flex items-center gap-2 px-1.5"
                      style={{
                        height: "var(--dashboard-pipeline-chip-height)",
                        borderRadius: "var(--dashboard-pipeline-chip-radius)",
                        backgroundColor: isDarkBar
                          ? "var(--dashboard-pipeline-chip-overlay-on-dark)"
                          : "var(--dashboard-pipeline-chip-overlay-on-light)",
                      }}
                    >
                      <span
                        className="font-bold leading-none"
                        style={{
                          color: isDarkBar
                            ? "var(--dashboard-pipeline-chip-count-on-dark)"
                            : "var(--dashboard-pipeline-chip-count-on-light)",
                          fontSize: "var(--dashboard-pipeline-chip-count-size)",
                        }}
                      >
                        {stage.count}
                      </span>
                      {stage.value > 0 && (
                        <span
                          className="font-medium leading-none"
                          style={{
                            color: isDarkBar
                              ? "var(--dashboard-pipeline-chip-value-on-dark)"
                              : "var(--dashboard-pipeline-chip-value-on-light)",
                            fontSize: "var(--dashboard-pipeline-chip-value-size)",
                          }}
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
