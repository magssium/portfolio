import { experience } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="experience-title"
          index="02 — Experience"
          title="Where I’ve been"
          description="Roles, teams, and milestones that shaped how I think about craft."
        />

        <ol className="relative flex flex-col">
          {experience.map((item, i) => (
            <li
              key={`${item.company}-${item.role}`}
              className="group relative grid grid-cols-[auto_1fr] gap-x-5 md:grid-cols-[160px_auto_1fr] md:gap-x-10"
            >
              <p className="col-start-2 pt-0.5 font-mono text-xs text-muted-foreground md:col-start-1 md:row-start-1 md:text-right">
                {item.period}
              </p>

              <div
                className="relative col-start-1 row-span-2 row-start-1 flex justify-center md:col-start-2"
                aria-hidden="true"
              >
                <span className="relative z-10 mt-1.5 size-2.5 rounded-full border border-foreground/40 bg-background transition-all duration-300 group-hover:scale-125 group-hover:border-foreground group-hover:bg-foreground" />
                {i < experience.length - 1 ? (
                  <span className="absolute top-4 bottom-0 w-px bg-border" />
                ) : null}
              </div>

              <div className="col-start-2 row-start-2 pt-2 pb-10 md:col-start-3 md:row-start-1 md:pt-0 md:pb-12">
                <div className="-mx-4 -mt-3 rounded-xl px-4 py-3 transition-colors duration-300 group-hover:bg-card">
                  <h3 className="text-base font-semibold tracking-tight md:text-lg">
                    {item.role}
                    <span className="text-muted-foreground font-normal">{' · '}{item.company}</span>
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
                    {item.summary}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
