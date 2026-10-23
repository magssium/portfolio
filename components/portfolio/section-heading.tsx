export function SectionHeading({
  id,
  index,
  title,
  description,
}: {
  id: string
  index: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{index}</span>
        <h2 id={id} className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
      ) : null}
    </div>
  )
}

export function StatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-status/25 bg-status/10 px-3 py-1 text-xs font-medium text-status">
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-status opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-status" />
      </span>
      {label}
    </span>
  )
}
