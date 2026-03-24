import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconActivity(props: FigmaIconProps) {
  return (
    <svg viewBox="680.5 296.5 19.000 23.000" {...baseProps(props)}>
      <path
        d="M690 314C694.418 314 698 310.418 698 306C698 301.582 694.418 298 690 298C685.582 298 682 301.582 682 306C682 310.418 685.582 314 690 314ZM690 314V318M685 318H695M693 306C693 307.657 691.657 309 690 309C688.343 309 687 307.657 687 306C687 304.343 688.343 303 690 303C691.657 303 693 304.343 693 306Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
