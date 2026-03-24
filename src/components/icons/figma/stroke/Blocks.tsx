import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconBlocks(props: FigmaIconProps) {
  return (
    <svg viewBox="1207.5 297.5 21.000 21.000" {...baseProps(props)}>
      <path
        d="M1213 307V311C1213 311.53 1213.21 312.039 1213.59 312.414C1213.96 312.789 1214.47 313 1215 313H1219M1211 299H1215C1216.1 299 1217 299.895 1217 301V305C1217 306.105 1216.1 307 1215 307H1211C1209.9 307 1209 306.105 1209 305V301C1209 299.895 1209.9 299 1211 299ZM1221 309H1225C1226.1 309 1227 309.895 1227 311V315C1227 316.105 1226.1 317 1225 317H1221C1219.9 317 1219 316.105 1219 315V311C1219 309.895 1219.9 309 1221 309Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
