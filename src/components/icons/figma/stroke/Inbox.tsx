import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconInbox(props: FigmaIconProps) {
  return (
    <svg viewBox="198.5 299.5 23.000 17.000" {...baseProps(props)}>
      <path
        d="M207 308L209 310L213 306M220 315H200M203 303C203 301.9 203.9 301 205 301H215C215.53 301 216.039 301.211 216.414 301.586C216.789 301.961 217 302.47 217 303V315H203V303Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
