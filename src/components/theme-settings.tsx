"use client";

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import * as React from "react";

import { useTheme } from "next-themes";

type Theme = "light" | "dark" | "system";
import { Button } from "~/components/ui/button";

const options: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: "light", label: "Light", icon: <SunIcon /> },
  { value: "dark", label: "Dark", icon: <MoonIcon /> },
  { value: "system", label: "System", icon: <MonitorIcon /> },
];

export function ThemeSettings() {
  const { theme, setTheme } = useTheme();
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <div
            key={o.value}
            className="h-8 w-22 animate-pulse rounded-lg bg-muted"
            aria-hidden
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-muted-foreground text-sm">
        Use a fixed appearance or follow your device setting.
      </p>
      <fieldset className="m-0 flex min-w-0 flex-wrap gap-2 border-0 p-0">
        <legend className="sr-only">Color theme</legend>
        {options.map((o) => (
          <Button
            key={o.value}
            type="button"
            variant={theme === o.value ? "default" : "outline"}
            size="sm"
            className="gap-1.5"
            onClick={() => setTheme(o.value)}
            aria-pressed={theme === o.value}
          >
            {o.icon}
            {o.label}
          </Button>
        ))}
      </fieldset>
    </div>
  );
}
