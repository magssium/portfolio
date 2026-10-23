import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { ExperienceSection } from '@/components/portfolio/experience'
import { ContactFooter } from '@/components/portfolio/contact-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <ExperienceSection />
      </main>
      <ContactFooter />
    </>
  )
}
