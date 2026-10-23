'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { MediaStrip, type MediaItem } from './media-strip'

export function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  const [videoFailed, setVideoFailed] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const hasVideo = Boolean(project.video) && !videoFailed
  const items: MediaItem[] = [
    hasVideo
      ? { type: 'video', src: project.video as string, thumb: project.image }
      : { type: 'image', src: project.image, thumb: project.image },
    ...project.gallery.map((src) => ({ type: 'image' as const, src, thumb: src })),
  ]
  const active = items[Math.min(activeIndex, items.length - 1)]

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 ease-out hover:-translate-y-1 hover:border-foreground/15 hover:shadow-2xl hover:shadow-black/40">
      <div className="flex flex-col gap-2 p-2">
        <div
          className={cn(
            'relative overflow-hidden rounded-xl bg-secondary',
            featured ? 'aspect-[16/10] md:aspect-[16/9]' : 'aspect-[16/10]',
          )}
        >
          {active.type === 'video' ? (
            <video
              key={active.src}
              src={active.src}
              poster={project.image}
              aria-label={`${project.title} demo video`}
              onError={() => setVideoFailed(true)}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 size-full object-cover"
            />
          ) : (
            <Image
              key={active.src}
              src={active.src || '/placeholder.svg'}
              alt={`${project.title} screenshot`}
              fill
              sizes={featured ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'}
              className="animate-in fade-in object-cover duration-500 transition-transform ease-out group-hover:scale-[1.03]"
            />
          )}
          {active.type === 'video' && (
            <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 font-mono text-[10px] tracking-wider text-white uppercase backdrop-blur">
              <span className="size-1.5 animate-pulse rounded-full bg-red-500" aria-hidden="true" />
              Video
            </span>
          )}
        </div>

        {items.length > 1 && (
          <MediaStrip
            items={items}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            projectTitle={project.title}
            featured={featured}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 pt-3 pb-5 md:px-6 md:pb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight">
                <a
                  href={project.href}
                  className="rounded-sm transition-colors hover:text-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  {project.title}
                </a>
              </h3>
              <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{project.description}</p>
          </div>
          <a
            href={project.href}
            aria-label={`Open ${project.title}`}
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
          </a>
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
    </article>
  )
}
