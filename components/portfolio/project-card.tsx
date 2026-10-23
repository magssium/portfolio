import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <a
      href={project.href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-foreground/15 hover:shadow-2xl hover:shadow-black/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="p-2">
        <div
          className={cn(
            'relative overflow-hidden rounded-xl bg-secondary',
            featured ? 'aspect-[16/10] md:aspect-[16/9]' : 'aspect-[16/10] md:aspect-[4/5] lg:aspect-[16/14]',
          )}
        >
          <Image
            src={project.image || '/placeholder.svg'}
            alt={`${project.title} preview`}
            fill
            sizes={featured ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 pt-3 pb-5 md:px-6 md:pb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
          </div>
          <span
            aria-hidden="true"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
          >
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>

        <ul className="mt-auto flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground/80"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  )
}
