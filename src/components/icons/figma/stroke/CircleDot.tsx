import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconCircleDot(props: FigmaIconProps) {
  return (
    <svg viewBox="1687.5 297.5 21.000 21.000" {...baseProps(props)}>
      <path
        d="M1707 317L1702.65 312.65M1697 304V310M1694 307H1700M1705 307C1705 311.418 1701.42 315 1697 315C1692.58 315 1689 311.418 1689 307C1689 302.582 1692.58 299 1697 299C1701.42 299 1705 302.582 1705 307Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
