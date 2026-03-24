import type { FigmaIconProps } from "./types";
import { baseProps } from "./util";

/** Filled handset (matches CRM Contacts in design). Path derived from Bootstrap Icons (MIT). */
export function FigmaIconPhone(props: FigmaIconProps) {
  return (
    <svg viewBox="0 0 16 16" {...baseProps(props)}>
      <path
        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.65 11.5a.678.678 0 0 1-.58-.128L7.36 9.832a.678.678 0 0 1-.182-.683l.516-2.445a.678.678 0 0 0-.122-.58L5.378 3.321a.678.678 0 0 0-1.015-.063L3.321 5.378Z"
        fill="currentColor"
      />
    </svg>
  );
}
