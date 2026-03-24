"use client";

import { Provider as JotaiStoreProvider } from "jotai";
import type { ReactNode } from "react";

export function JotaiProvider({ children }: { children: ReactNode }) {
  return <JotaiStoreProvider>{children}</JotaiStoreProvider>;
}
