import type { FigmaIconProps } from "../types";
import { baseProps } from "../util";

export function FigmaIconPackage(props: FigmaIconProps) {
  return (
    <svg viewBox="534.5 297.8 23.000 21.700" {...baseProps(props)}>
      <path
        d="M540 314H552M540 310H552M556 304.35V316C556 316.531 555.789 317.039 555.414 317.414C555.039 317.789 554.53 318 554 318H538C537.47 318 536.961 317.789 536.586 317.414C536.211 317.039 536 316.531 536 316V304.35C536.002 303.951 536.122 303.562 536.347 303.232C536.571 302.903 536.889 302.648 537.26 302.5L545.26 299.3C545.735 299.111 546.265 299.111 546.74 299.3L554.74 302.5C555.111 302.648 555.429 302.903 555.653 303.232C555.878 303.562 555.998 303.951 556 304.35ZM540 306H552V318H540V306Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
