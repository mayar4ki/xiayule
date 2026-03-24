import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconGlasses(props: FigmaIconProps) {
  return (
    <svg viewBox="918.5 301.5 23.000 15.000" {...baseProps(props)}>
      <path
        d="M928 305V311M932 303V311M940 313V314C940 314.5 939.5 315 939 315H921C920.5 315 920 314.5 920 314V313M928 308C928 309.657 926.657 311 925 311C923.343 311 922 309.657 922 308C922 306.343 923.343 305 925 305C926.657 305 928 306.343 928 308ZM938 308C938 309.657 936.657 311 935 311C933.343 311 932 309.657 932 308C932 306.343 933.343 305 935 305C936.657 305 938 306.343 938 308Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
