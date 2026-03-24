import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconPanelBottom(props: FigmaIconProps) {
  return (
    <svg viewBox="343.5 297.5 22.000 21.000" {...baseProps(props)}>
      <path
        d="M363 308V303H347C346.47 303 345.961 302.789 345.586 302.414C345.211 302.039 345 301.53 345 301M345 301C345 300.47 345.211 299.961 345.586 299.586C345.961 299.211 346.47 299 347 299H361V303M345 301V315C345 315.53 345.211 316.039 345.586 316.414C345.961 316.789 346.47 317 347 317H363V312M360 308C359.47 308 358.961 308.211 358.586 308.586C358.211 308.961 358 309.47 358 310C358 310.53 358.211 311.039 358.586 311.414C358.961 311.789 359.47 312 360 312H364V308H360Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
