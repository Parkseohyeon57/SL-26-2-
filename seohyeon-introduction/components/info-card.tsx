import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface InfoCardProps {
  icon: LucideIcon
  label: string
  title: string
  accent: string
  children: ReactNode
}

export function InfoCard({
  icon: Icon,
  label,
  title,
  accent,
  children,
}: InfoCardProps) {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-105"
          style={{ backgroundColor: accent }}
        >
          <Icon className="h-6 w-6 text-foreground/80" aria-hidden="true" />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
        </div>
      </div>
      <div className="text-pretty leading-relaxed text-muted-foreground">
        {children}
      </div>
    </article>
  )
}
