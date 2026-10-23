'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export type MediaItem = { type: 'video' | 'image'; src: string; thumb: string }

type MediaStripProps = {
  items: MediaItem[]
  activeIndex: number
  onSelect: (index: number) => void
  projectTitle: string
  featured?: boolean
}

export function MediaStrip({ items, activeIndex, onSelect, projectTitle, featured }: MediaStripProps) {
  const scrollerRef = useRef<HTMLUListElement>(null)

  const scrollBy = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="group/strip relative">
      <ul
        ref={scrollerRef}
        aria-label={`${projectTitle} media`}
        className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth overscroll-x-contain"
      >
        {items.map((item, i) => {
          const isActive = i === activeIndex
          return (
            <li
              key={`${item.src}-${i}`}
              className={cn('shrink-0 snap-start', featured ? 'w-[38%] sm:w-[28%] md:w-[22%]' : 'w-[38%] md:w-[44%]')}
            >
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-pressed={isActive}
                aria-label={item.type === 'video' ? `Play ${projectTitle} video` : `Show screenshot ${i + 1}`}
                className={cn(
                  'relative block aspect-[16/10] w-full overflow-hidden rounded-lg border bg-secondary transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                  isActive
                    ? 'border-foreground/60 opacity-100'
                    : 'border-border opacity-60 hover:border-foreground/25 hover:opacity-100',
                )}
              >
                <Image src={item.thumb || '/placeholder.svg'} alt="" fill sizes="200px" className="object-cover" />
                {item.type === 'video' && (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="flex size-6 items-center justify-center rounded-full bg-foreground/90 text-background">
                      <Play className="size-3 translate-x-px fill-current" aria-hidden="true" />
                    </span>
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent"
      />

      <div className="pointer-events-none absolute inset-y-0 -left-1 -right-1 hidden items-center justify-between opacity-0 transition-opacity duration-300 group-hover/strip:opacity-100 md:flex">
        {([-1, 1] as const).map((dir) => (
          <button
            key={dir}
            type="button"
            onClick={() => scrollBy(dir)}
            aria-label={dir === -1 ? 'Scroll media left' : 'Scroll media right'}
            className="pointer-events-auto flex size-7 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-foreground hover:text-background"
          >
            {dir === -1 ? <ChevronLeft className="size-3.5" /> : <ChevronRight className="size-3.5" />}
          </button>
        ))}
      </div>
    </div>
  )
}
