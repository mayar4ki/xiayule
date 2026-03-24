import {
  UsersIcon,
  HandshakeIcon,
  PhoneIcon,
  MailIcon,
  StickyNoteIcon,
  ListChecksIcon,
  BadgeDollarSignIcon,
} from "lucide-react"
import type { ActivityEntry as ActivityEntryType } from "~/types/dashboard"

const iconConfig: Record<
  ActivityEntryType["icon"],
  { icon: React.ElementType; bg: string; color: string }
> = {
  lead: { icon: UsersIcon, bg: "bg-blue-50 dark:bg-blue-900/30", color: "text-brand-500" },
  deal: { icon: HandshakeIcon, bg: "bg-purple-50 dark:bg-purple-900/30", color: "text-purple-500" },
  call: { icon: PhoneIcon, bg: "bg-green-50 dark:bg-green-900/30", color: "text-green-600" },
  email: { icon: MailIcon, bg: "bg-blue-50 dark:bg-blue-900/30", color: "text-brand-500" },
  note: { icon: StickyNoteIcon, bg: "bg-orange-50 dark:bg-orange-900/30", color: "text-orange-500" },
  task: { icon: ListChecksIcon, bg: "bg-gray-100 dark:bg-stone-700", color: "text-gray-600 dark:text-stone-300" },
  commission: { icon: BadgeDollarSignIcon, bg: "bg-orange-50 dark:bg-orange-900/30", color: "text-orange-600" },
}

interface ActivityEntryProps {
  entry: ActivityEntryType
}

export function ActivityEntry({ entry }: ActivityEntryProps) {
  const config = iconConfig[entry.icon] ?? iconConfig.task
  const Icon = config.icon

  const renderedMessage = renderHighlighted(entry.message, entry.highlights)

  return (
    <div className="flex gap-3 py-3">
      <div className={`flex size-7 shrink-0 items-center justify-center rounded-full ${config.bg}`}>
        <Icon className={`size-3.5 ${config.color}`} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-xs leading-[18px] text-gray-900 dark:text-stone-100">
          {renderedMessage}
        </p>
        <p className="text-[11px] text-gray-400 dark:text-stone-500">
          {entry.relativeTime}
        </p>
      </div>
    </div>
  )
}

function renderHighlighted(
  message: string,
  highlights: ActivityEntryType["highlights"]
) {
  if (!highlights.length) return message

  const parts: React.ReactNode[] = []
  let remaining = message
  let key = 0

  for (const hl of highlights) {
    const idx = remaining.indexOf(hl.text)
    if (idx === -1) continue

    if (idx > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, idx)}</span>)
    }
    parts.push(
      <span key={key++} className="font-semibold text-brand-500">
        {hl.text}
      </span>
    )
    remaining = remaining.slice(idx + hl.text.length)
  }

  if (remaining) {
    parts.push(<span key={key++}>{remaining}</span>)
  }

  return <>{parts}</>
}
