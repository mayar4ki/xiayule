import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconCircleSmall(props: FigmaIconProps) {
  return (
    <svg viewBox="781.5 296.5 9.000 9.000" {...baseProps(props)}>
      <path
        d="M786 304C787.657 304 789 302.657 789 301C789 299.343 787.657 298 786 298C784.343 298 783 299.343 783 301C783 302.657 784.343 304 786 304Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
