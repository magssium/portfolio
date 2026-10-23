import { profile } from '@/lib/portfolio-data'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-medium transition-opacity hover:opacity-70"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="flex size-7 items-center justify-center rounded-lg bg-foreground font-mono text-[11px] font-semibold text-background">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-all hover:scale-[1.03] hover:bg-foreground/90 active:scale-[0.98]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
