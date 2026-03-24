import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconPanelRight(props: FigmaIconProps) {
  return (
    <svg viewBox="247.5 297.5 21.000 21.000" {...baseProps(props)}>
      <path
        d="M263 310H263.01M253 303H265C265.53 303 266.039 303.211 266.414 303.586C266.789 303.961 267 304.47 267 305V315C267 315.53 266.789 316.039 266.414 316.414C266.039 316.789 265.53 317 265 317H251C250.47 317 249.961 316.789 249.586 316.414C249.211 316.039 249 315.53 249 315V301C249 300.47 249.211 299.961 249.586 299.586C249.961 299.211 250.47 299 251 299H265"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
