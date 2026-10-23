import { projects } from '@/lib/portfolio-data'
import { ProjectCard } from './project-card'
import { SectionHeading } from './section-heading'

const bentoLayout = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4']

export function Projects() {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          id="work-title"
          index="01 — Selected Work"
          title="Projects I’m proud of"
          description="A curated selection of products, systems, and experiments from the last few years."
        />
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {projects.map((project, i) => (
            <li key={project.title} className={bentoLayout[i % bentoLayout.length]}>
              <ProjectCard project={project} featured={i === 0 || i === 3} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
