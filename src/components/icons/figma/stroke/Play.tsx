import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconPlay(props: FigmaIconProps) {
  return (
    <svg viewBox="150.5 299.5 12.000 17.000" {...baseProps(props)}>
      <path
        d="M161 301L156 305H152V311H156L161 315V301Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
