import {
  BadgeDollarSignIcon,
  HandshakeIcon,
  ListChecksIcon,
  MailIcon,
  PhoneIcon,
  StickyNoteIcon,
  UsersIcon,
} from "lucide-react";
import type {
  ActivityEntry as ActivityEntryType,
  ActivityHighlight,
} from "~/types/dashboard";

const iconConfig: Record<
  ActivityEntryType["icon"],
  { icon: React.ElementType; bg: string }
> = {
  lead: { icon: UsersIcon, bg: "bg-(--bg-subtle)" },
  deal: { icon: HandshakeIcon, bg: "bg-(--bg-subtle)" },
  call: { icon: PhoneIcon, bg: "bg-(--bg-subtle)" },
  email: { icon: MailIcon, bg: "bg-(--bg-subtle)" },
  note: { icon: StickyNoteIcon, bg: "bg-(--bg-subtle)" },
  task: { icon: ListChecksIcon, bg: "bg-(--bg-subtle)" },
  commission: { icon: BadgeDollarSignIcon, bg: "bg-(--bg-subtle)" },
}

function highlightClass(h: ActivityHighlight) {
  if (h.tone === "brand" || h.type === "deal" || h.type === "task") {
    return "font-semibold text-(--brand-bg-default)"
  }
  return "font-semibold text-brand-400"
}

function stripActor(message: string, actor?: string) {
  if (!actor || !message.startsWith(actor)) {
    return { actor: undefined as string | undefined, body: message }
  }
  const rest = message.slice(actor.length)
  const body = rest.replace(/^[\s.]+/, "")
  return { actor, body }
}

function renderBody(body: string, highlights: ActivityHighlight[]) {
  if (!highlights.length) {
    return <span className="font-normal">{body}</span>
  }

  const parts: React.ReactNode[] = []
  let remaining = body
  let key = 0

  for (const hl of highlights) {
    const idx = remaining.indexOf(hl.text)
    if (idx === -1) continue

    if (idx > 0) {
      parts.push(
        <span key={key++} className="font-normal">
          {remaining.slice(0, idx)}
        </span>
      )
    }
    parts.push(
      <span key={key++} className={highlightClass(hl)}>
        {hl.text}
      </span>
    )
    remaining = remaining.slice(idx + hl.text.length)
  }

  if (remaining) {
    parts.push(
      <span key={key++} className="font-normal">
        {remaining}
      </span>
    )
  }

  return <>{parts}</>
}

interface ActivityEntryProps {
  entry: ActivityEntryType
}

export function ActivityEntry({ entry }: ActivityEntryProps) {
  const config = iconConfig[entry.icon] ?? iconConfig.task
  const Icon = config.icon
  const { actor, body } = stripActor(entry.message, entry.actor)
  const bodyContent = renderBody(body, entry.highlights)

  return (
    <div className="relative min-h-[62.5px] pt-3">
      <div
        className="absolute left-5 top-3 z-1 flex size-[28px] items-center justify-center rounded-full shadow-[0px_0px_0px_0px_var(--bg-default)] bg-(--bg-muted) dark:border-(--border-default) dark:ring-1 dark:ring-(--border-default)"
      >
        <Icon
          className="size-[13px] text-(--content-default)"
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <div className="relative z-1 pb-3 pl-[60px] pr-0">
        <p className="text-xs leading-[18px]">
          {actor ? (
            <>
              <span className="font-semibold text-(--content-emphasis)">{actor}</span>{" "}
              <span className="text-(--content-default)">{bodyContent}</span>
            </>
          ) : (
            <span className="text-(--content-default)">{bodyContent}</span>
          )}
        </p>
        <p className="mt-0.5 text-[11px] font-normal leading-[16.5px] text-(--content-subtle) dark:text-stone-500">
          {entry.relativeTime}
        </p>
      </div>
    </div>
  )
}
