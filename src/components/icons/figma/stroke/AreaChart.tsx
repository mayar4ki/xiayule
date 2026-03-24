import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconAreaChart(props: FigmaIconProps) {
  return (
    <svg viewBox="1014.5 299.5 23.000 18.000" {...baseProps(props)}>
      <path
        d="M1019 309C1020.87 307.168 1023.38 306.142 1026 306.142C1028.62 306.142 1031.13 307.168 1033 309M1022.5 312.5C1023.43 311.584 1024.69 311.071 1026 311.071C1027.31 311.071 1028.57 311.584 1029.5 312.5M1016 304.82C1018.75 302.36 1022.31 301 1026 301C1029.69 301 1033.25 302.36 1036 304.82M1026 316H1026.01"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
