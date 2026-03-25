"use client";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useCallback } from "react";
import {
  periodAtom,
  dashboardQueryAtom,
  taskOverridesAtom,
  tasksAtom,
} from "~/store";
import type { Period } from "~/types/dashboard";

const VALID_PERIODS: Period[] = [
  "today",
  "this_week",
  "this_month",
  "this_quarter",
  "this_year",
  "custom",
];

function isValidPeriod(value: string | null): value is Period {
  return !!value && VALID_PERIODS.includes(value as Period);
}

export function useDashboard() {
  const [period, setPeriod] = useAtom(periodAtom);
  const { data, isLoading, isFetching, isPlaceholderData, isError, refetch } =
    useAtomValue(dashboardQueryAtom);
  const tasks = useAtomValue(tasksAtom);
  const setTaskOverrides = useSetAtom(taskOverridesAtom);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;
    const urlPeriod = searchParams.get("period");
    if (isValidPeriod(urlPeriod) && urlPeriod !== period) {
      setPeriod(urlPeriod);
    }
  }, [searchParams, period, setPeriod]);

  const changePeriod = useCallback(
    (newPeriod: Period) => {
      setPeriod(newPeriod);
      const params = new URLSearchParams(searchParams.toString());
      if (newPeriod === "today") {
        params.delete("period");
      } else {
        params.set("period", newPeriod);
      }
      const qs = params.toString();
      router.replace(`${pathname}${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [setPeriod, searchParams, router, pathname],
  );

  const toggleTask = (taskId: string) => {
    setTaskOverrides((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const undoToggleTask = (taskId: string) => {
    setTaskOverrides((prev) => {
      const next = { ...prev };
      delete next[taskId];
      return next;
    });
  };

  return {
    period,
    changePeriod,
    data,
    tasks,
    isLoading,
    isFetching,
    isRefreshing: isFetching && !isLoading,
    isError,
    refetch,
    toggleTask,
    undoToggleTask,
  };
}
