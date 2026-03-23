import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";
import { fetchDashboardData } from "~/lib/mock-api";
import type { Period, Task } from "~/types/dashboard";

export const periodAtom = atom<Period>("today");

export const dashboardQueryAtom = atomWithQuery((get) => ({
  queryKey: ["dashboard", get(periodAtom)] as const,
  queryFn: ({ signal }) =>
    fetchDashboardData({ period: get(periodAtom) }, { signal }),
}));

export const taskOverridesAtom = atom<Record<string, boolean>>({});

export const tasksAtom = atom((get) => {
  const query = get(dashboardQueryAtom);
  const overrides = get(taskOverridesAtom);

  if (!query.data) return null;

  const items = query.data.tasks.items.map((task: Task) => ({
    ...task,
    completed: overrides[task.id] ?? task.completed,
  }));

  const completed = items.filter((t: Task) => t.completed).length;

  return {
    ...query.data.tasks,
    completed,
    items,
  };
});
