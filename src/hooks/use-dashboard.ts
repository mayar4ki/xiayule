"use client";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  periodAtom,
  dashboardQueryAtom,
  taskOverridesAtom,
  tasksAtom,
} from "~/store";
import type { Period } from "~/types/dashboard";

export function useDashboard() {
  const [period, setPeriod] = useAtom(periodAtom);
  const { data, isLoading, isError, refetch } =
    useAtomValue(dashboardQueryAtom);
  const tasks = useAtomValue(tasksAtom);
  const setTaskOverrides = useSetAtom(taskOverridesAtom);

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

  const changePeriod = (newPeriod: Period) => {
    setPeriod(newPeriod);
  };

  return {
    period,
    changePeriod,
    data,
    tasks,
    isLoading,
    isError,
    refetch,
    toggleTask,
    undoToggleTask,
  };
}
