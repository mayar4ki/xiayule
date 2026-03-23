import axios, { type AxiosRequestConfig } from "axios";
import type { DashboardData, Period } from "~/types/dashboard";

export async function fetchDashboardData(
  params: { period: Period },
  config?: AxiosRequestConfig,
): Promise<DashboardData> {
  const { data } = await axios.get<DashboardData>("/api/dashboard", {
    params,
    ...config,
  });
  return data;
}
