"use client";

import type { ReactNode } from "react";
import { TooltipProvider as RadixTooltipProvider } from "~/components/ui/tooltip";

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <RadixTooltipProvider>{children}</RadixTooltipProvider>;
}
