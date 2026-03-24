import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconHexagon(props: FigmaIconProps) {
  return (
    <svg viewBox="1398.5 296.5 23.000 23.000" {...baseProps(props)}>
      <path
        d="M1413 305L1407 311M1407 305L1413 311M1405.86 298H1414.14L1420 303.86V312.14L1414.14 318H1405.86L1400 312.14V303.86L1405.86 298Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
