import type { FigmaIconProps } from "./types";
import { baseProps } from "./util";

/** Filled speech bubble (matches CRM Inbox in design). Path derived from Bootstrap Icons (MIT). */
export function FigmaIconInboxSpeech(props: FigmaIconProps) {
  return (
    <svg viewBox="0 0 16 16" {...baseProps(props)}>
      <path
        d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z"
        fill="currentColor"
      />
    </svg>
  );
}
