import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconVolumeX(props: FigmaIconProps) {
  return (
    <svg viewBox="102.5 299.5 23.000 17.000" {...baseProps(props)}>
      <path
        d="M124 305L118 311M118 305L124 311M113 301L108 305H104V311H108L113 315V301Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
