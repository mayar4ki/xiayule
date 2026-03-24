import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconMicroscope(props: FigmaIconProps) {
  return (
    <svg viewBox="1163.5 296.5 13.000 23.000" {...baseProps(props)}>
      <path
        d="M1166 318H1174M1165 306H1175M1165 306C1165 304 1165.5 302 1167 298H1173C1174.5 302 1175 304 1175 306M1165 306C1165 307.326 1165.53 308.598 1166.46 309.536C1167.4 310.473 1168.67 311 1170 311M1175 306C1175 307.326 1174.47 308.598 1173.54 309.536C1172.6 310.473 1171.33 311 1170 311M1170 311V318"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
