import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconLineChart(props: FigmaIconProps) {
  return (
    <svg viewBox="966.5 296.5 23.000 23.000" {...baseProps(props)}>
      <path
        d="M968 298L988 318M974.5 312.5C975.435 311.584 976.691 311.071 978 311.071C979.309 311.071 980.565 311.584 981.5 312.5M968 304.82C969.234 303.712 970.643 302.817 972.17 302.17M976.66 301C980.67 300.64 984.8 301.9 988 304.76M982.85 307.25C983.665 307.704 984.412 308.269 985.07 308.93M971 309C972.428 307.572 974.255 306.61 976.24 306.24M978 316H978.01"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
