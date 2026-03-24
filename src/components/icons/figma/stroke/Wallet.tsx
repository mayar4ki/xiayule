import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconWallet(props: FigmaIconProps) {
  return (
    <svg viewBox="295.5 297.5 21.000 21.000" {...baseProps(props)}>
      <path
        d="M297 305C297 304.47 297.211 303.961 297.586 303.586C297.961 303.211 298.47 303 299 303H313C313.53 303 314.039 303.211 314.414 303.586C314.789 303.961 315 304.47 315 305M297 307H300C300.8 307 301.6 307.3 302.1 307.9L303.2 308.8C304.8 310.4 307.3 310.4 308.9 308.8L310 307.9C310.5 307.4 311.3 307 312.1 307H315M299 299H313C314.105 299 315 299.895 315 301V315C315 316.105 314.105 317 313 317H299C297.895 317 297 316.105 297 315V301C297 299.895 297.895 299 299 299Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
