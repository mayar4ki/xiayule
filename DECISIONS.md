# Product decisions

Notes on implementation choices for this dashboard.

---

## Stack versions

| Layer | Version |
| --- | --- |
| Framework | Next.js 16 |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Charts | Recharts 3 |

### Why these versions

- **Framework** — Current App Router behavior and maintenance path.
- **React / Next** — Latest patterns and APIs without lagging a major behind.
- **Tailwind** — Modern tooling and a simpler styling workflow.
- **Recharts** — Up-to-date chart APIs and ongoing fixes.

### Assessment alignment

The build still matches the intended stack:

| Area | Choice |
| --- | --- |
| Routing | Next.js App Router |
| Types | TypeScript |
| Styling | Tailwind CSS |
| Components | shadcn/ui primitives |
| Charts | Recharts |
| State | Jotai |

---

## Routes

| Page | Path | Behavior |
| --- | --- | --- |
| Home | `/` | Redirects to the dashboard entry. |
| Dashboard | `/dashboard` | Main PropWise CRM: KPIs, charts, activity, tasks. |
| Settings | `/dashboard/settings` | Application settings. |

---

## Pipeline chart

The Pipeline Summary uses styled `motion.div` bars instead of a Recharts `BarChart`.  
Recharts' horizontal bar chart doesn't natively support the in-bar value/count labels, stage-name left-axis layout, or the two-tone gradient fill the Figma spec requires. A custom implementation matches the design 1:1 while keeping framer-motion entrance animations consistent with the rest of the dashboard.

---

## Theme

Light and dark mode are toggled from **Settings** (`/dashboard/settings`).
