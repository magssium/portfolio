import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { StatusBadge } from './section-heading'

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-[480px] max-w-4xl rounded-full bg-foreground/[0.04] blur-3xl"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 pt-20 pb-24 md:px-8 md:pt-32 md:pb-36">
        <div className="flex flex-wrap items-center gap-3 animate-fade-up">
          {profile.available ? <StatusBadge label={profile.availabilityLabel} /> : null}
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <p
            className="font-mono text-xs uppercase tracking-widest text-muted-foreground animate-fade-up"
            style={{ animationDelay: '80ms' }}
          >
            {profile.role}
          </p>
          <h1
            id="hero-title"
            className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: '140ms' }}
          >
            {profile.headline}
          </h1>
          <p
            className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg animate-fade-up"
            style={{ animationDelay: '220ms' }}
          >
            {profile.bio}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: '300ms' }}>
          <a
            href="#work"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:bg-foreground/90 active:scale-[0.98]"
          >
            View my work
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium transition-all hover:border-foreground/25 hover:bg-secondary active:scale-[0.98]"
          >
            Get in touch
            <ArrowUpRight
              className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
