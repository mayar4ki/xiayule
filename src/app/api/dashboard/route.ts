import { NextRequest, NextResponse } from "next/server";
import { getDashboardData } from "~/lib/mock-data";
import type { Period } from "~/types/dashboard";

const VALID_PERIODS: Period[] = [
  "today",
  "this_week",
  "this_month",
  "this_quarter",
  "this_year",
  "custom",
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const period = (searchParams.get("period") ?? "today") as Period;

  if (!VALID_PERIODS.includes(period)) {
    return NextResponse.json(
      { error: "Invalid period parameter" },
      { status: 400 },
    );
  }

  // Simulate network latency (300-800ms)
  const delay = 300 + Math.random() * 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Simulate ~10% failure rate
  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to load data" },
      { status: 500 },
    );
  }

  const data = getDashboardData(period);
  return NextResponse.json(data);
}
