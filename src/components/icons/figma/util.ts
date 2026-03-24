import type { FigmaIconProps } from "./types";

export function baseProps(props: FigmaIconProps) {
  const {
    size = 24,
    width,
    height,
    "aria-hidden": ariaHidden,
    ...rest
  } = props;
  return {
    ...rest,
    width: width ?? size,
    height: height ?? size,
    fill: "none" as const,
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false as const,
    "aria-hidden": ariaHidden ?? true,
  };
}
