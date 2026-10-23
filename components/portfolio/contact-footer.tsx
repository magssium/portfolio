import { ArrowUpRight } from 'lucide-react'
import { profile, socials } from '@/lib/portfolio-data'

export function ContactFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-10 md:px-8 md:pt-32">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">03 — Contact</span>

        <a href={`mailto:${profile.email}`} className="group mt-6 block">
          <h2
            id="contact-title"
            className="text-[13vw] font-semibold leading-[0.92] tracking-tighter text-balance transition-colors duration-500 md:text-[9vw] xl:text-[8.5rem]"
          >
            <span className="block">{'Let’s work'}</span>
            <span className="flex items-center gap-[0.15em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
              together
              <ArrowUpRight
                className="size-[0.7em] shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </h2>
          <span className="sr-only">Email {profile.email}</span>
        </a>

        <ul className="mt-16 grid grid-cols-1 border-t border-border sm:grid-cols-3 md:mt-24">
          {socials.map((social) => (
            <li key={social.label} className="border-b border-border sm:border-b-0 sm:not-last:border-r">
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 py-6 transition-colors sm:px-6 sm:first:pl-0"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-medium">{social.label}</span>
                  <span className="truncate font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground/80">
                    {social.handle}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {'© '}
            {year} {profile.name}. All rights reserved.
          </p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
