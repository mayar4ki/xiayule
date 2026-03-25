"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import type { DashboardKPI } from "~/types/dashboard";
import { SparklineChart } from "./sparkline-chart";

interface KPICardProps {
  kpi: DashboardKPI;
}

export function KPICard({ kpi }: KPICardProps) {
  const isUp = kpi.trendDirection === "up";
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-[58px] items-center justify-between rounded-[12px] bg-(--bg-default) px-4 py-2 dark:bg-(--bg-subtle)">
      <div className="flex flex-col gap-0">
        <p className="text-xs font-medium leading-5 text-(--content-subtle)">
          {kpi.label}
        </p>
        <p className="text-base font-semibold leading-5 text-(--content-emphasis)">
          <motion.span
            key={kpi.value}
            className="inline-block"
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {kpi.value}
          </motion.span>
        </p>
      </div>
      <div className="flex flex-col items-end gap-1.5">
        <SparklineChart
          data={kpi.sparklineData}
          color={isUp ? "var(--color-green-700)" : "var(--content-error)"}
        />
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-[3px] py-0.5 text-[10px] font-semibold leading-[8px] ${
            isUp
              ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
          }`}
        >
          {isUp ? (
            <TrendingUpIcon className="size-2.5" />
          ) : (
            <TrendingDownIcon className="size-2.5" />
          )}
          {isUp ? "+" : ""}
          {kpi.trend}%
        </span>
      </div>
      <div
        className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_0_1px_var(--border-muted)] dark:shadow-[inset_0_0_0_1px_var(--border-subtle)]"
      />
    </div>
  );
}
