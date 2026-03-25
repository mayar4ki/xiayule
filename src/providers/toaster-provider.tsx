"use client";

import { AlertTriangle, Check, Info, X } from "lucide-react";
import { Toaster } from "sonner";

/** Figma Toast (node 1:12972) — default bar + error variant */
const toastChrome =
  "group flex h-10! w-[var(--width)] max-w-[min(100vw-2rem,360px)] items-center gap-2 rounded-md pl-4 pr-3 font-sans text-compact-sm leading-4 font-semibold " +
  "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.07),0px_1px_2px_0px_rgba(0,0,0,0.08),0px_2px_2px_0px_rgba(0,0,0,0.1),0px_0px_8px_0px_rgba(0,0,0,0.05)] " +
  "[&_[data-icon]]:order-1 [&_[data-content]]:order-2 [&_[data-content]]:min-w-0 [&_[data-content]]:flex-1 [&_[data-cancel]]:order-3 " +
  "[&_[data-action]]:order-4 [&_[data-close-button]]:order-5";

const toastDefault =
  `${toastChrome} bg-[var(--bg-inverted)] text-[var(--color-gray-50)] ` +
  "dark:text-[var(--color-gray-900)] " +
  "[&_[data-title]]:font-semibold [&_[data-title]]:leading-4 [&_[data-title]]:text-[var(--color-gray-50)] dark:[&_[data-title]]:text-[var(--color-gray-900)] " +
  "[&_[data-description]]:text-[var(--color-gray-50)]/90 dark:[&_[data-description]]:text-[var(--color-gray-900)]/90 [&_[data-icon]]:text-[var(--color-gray-50)] dark:[&_[data-icon]]:text-[var(--color-gray-900)] " +
  "[&_[data-close-button]]:text-[var(--color-gray-50)] dark:[&_[data-close-button]]:text-[var(--color-gray-900)] [&_[data-action]]:font-medium [&_[data-action]]:text-[var(--color-gray-50)] dark:[&_[data-action]]:text-[var(--color-gray-900)] " +
  "[&_[data-cancel]]:font-medium [&_[data-cancel]]:text-[var(--color-gray-50)] dark:[&_[data-cancel]]:text-[var(--color-gray-900)]";

const toastError =
  `${toastChrome} bg-red-50 text-red-900 dark:bg-red-950/60 dark:text-red-200 ` +
  "[&_[data-title]]:font-semibold [&_[data-title]]:leading-4 [&_[data-title]]:text-red-900 dark:[&_[data-title]]:text-red-200 " +
  "[&_[data-description]]:text-red-900/90 dark:[&_[data-description]]:text-red-200/90 [&_[data-icon]]:text-red-900 dark:[&_[data-icon]]:text-red-200 " +
  "[&_[data-close-button]]:text-red-900 dark:[&_[data-close-button]]:text-red-200 [&_[data-action]]:font-medium [&_[data-action]]:text-red-900 dark:[&_[data-action]]:text-red-200 " +
  "[&_[data-cancel]]:font-medium [&_[data-cancel]]:text-red-900 dark:[&_[data-cancel]]:text-red-200";

const iconLg = "size-4 shrink-0 [&_svg]:size-4";

const closeBtn =
  "relative top-auto left-auto right-auto m-0 flex size-4 shrink-0 translate-x-0 translate-y-0 items-center justify-center " +
  "rounded-none border-0 bg-transparent p-0 text-inherit shadow-none hover:bg-transparent hover:opacity-80";

const actionBtn =
  "ml-0 inline-flex h-auto shrink-0 items-center gap-2 rounded-none border-0 bg-transparent px-1 py-1 text-compact-sm font-medium leading-4 " +
  "text-inherit shadow-none hover:bg-transparent hover:opacity-90";

export function AppToaster() {
  return (
    <Toaster
      position="bottom-right"
      expand
      richColors={false}
      closeButton
      gap={8}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: toastDefault,
          default: toastDefault,
          info: toastDefault,
          success: toastDefault,
          warning: toastDefault,
          loading: toastDefault,
          error: toastError,
          icon: iconLg,
          content: "gap-0",
          title: "p-0",
          description: "mt-0 text-compact-sm leading-4",
          closeButton: closeBtn,
          actionButton: `${actionBtn} [&_svg]:size-4`,
          cancelButton: `${actionBtn} [&_svg]:size-4`,
        },
      }}
      icons={{
        info: <Info className="size-4" aria-hidden strokeWidth={2} />,
        success: <Check className="size-4" aria-hidden strokeWidth={2.5} />,
        warning: (
          <AlertTriangle className="size-4" aria-hidden strokeWidth={2} />
        ),
        error: <Info className="size-4" aria-hidden strokeWidth={2} />,
        close: <X className="size-4" aria-hidden strokeWidth={2} />,
      }}
    />
  );
}
