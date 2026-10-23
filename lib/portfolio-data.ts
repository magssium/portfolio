export type Project = {
  title: string
  description: string
  tags: string[]
  /** Cover image. Also used as the video poster and as a fallback if the video can't load. */
  image: string
  /** Optional video (mp4/webm) shown in the main slot. Drop files in /public/projects/videos. */
  video?: string
  /** Extra screenshots shown in the horizontal scroll strip. */
  gallery: string[]
  href: string
  year: string
}

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
}

export type SocialLink = {
  label: string
  href: string
  handle: string
}

export const profile = {
  name: 'Alex Morgan',
  initials: 'AM',
  role: 'Product Designer & Front-End Engineer',
  headline: 'I design and build calm, precise digital products.',
  bio: 'I’m a designer-engineer focused on crafting interfaces that feel effortless and perform flawlessly. For the past eight years I’ve partnered with startups and global teams to ship products people love to use.',
  location: 'San Francisco, CA',
  available: true,
  availabilityLabel: 'Available for work',
  email: 'hello@alexmorgan.dev',
}

export const projects: Project[] = [
  {
    title: 'Pulse Analytics',
    description: 'A real-time analytics platform that turns complex product data into clear, actionable insight.',
    tags: ['Product Design', 'Next.js', 'Data Viz'],
    image: '/projects/project-1.png',
    video: '/projects/videos/pulse-analytics.mp4',
    gallery: ['/projects/project-1-b.png', '/projects/project-3.png', '/projects/project-4-b.png'],
    href: '#',
    year: '2026',
  },
  {
    title: 'Ledger Mobile',
    description: 'A minimalist personal finance app built for clarity and daily habit-forming.',
    tags: ['UI/UX', 'React Native'],
    image: '/projects/project-2.png',
    gallery: ['/projects/project-2-b.png', '/projects/project-1-b.png'],
    href: '#',
    year: '2025',
  },
  {
    title: 'Mono Design System',
    description: 'A scalable component library powering consistent experiences across 12 products.',
    tags: ['Design Systems', 'TypeScript'],
    image: '/projects/project-3.png',
    gallery: ['/projects/project-3-b.png', '/projects/project-2-b.png'],
    href: '#',
    year: '2025',
  },
  {
    title: 'Atlas AI Assistant',
    description: 'A conversational workspace that helps teams find answers across their tools in seconds.',
    tags: ['AI', 'Next.js', 'Interaction Design'],
    image: '/projects/project-4.png',
    video: '/projects/videos/atlas-ai.mp4',
    gallery: ['/projects/project-4-b.png', '/projects/project-1.png', '/projects/project-3-b.png'],
    href: '#',
    year: '2024',
  },
]

export const experience: Experience[] = [
  {
    role: 'Senior Product Engineer',
    company: 'Northwind Labs',
    period: '2023 — Present',
    summary: 'Leading design engineering for the core platform, shipping a new interface used by 200k+ teams.',
  },
  {
    role: 'Product Designer',
    company: 'Linearity Studio',
    period: '2020 — 2023',
    summary: 'Designed end-to-end experiences for fintech and SaaS clients, increasing activation by 34% on average.',
  },
  {
    role: 'Front-End Developer',
    company: 'Brightwave Agency',
    period: '2018 — 2020',
    summary: 'Built performant marketing sites and web apps for brands across retail, media, and healthcare.',
  },
  {
    role: 'Design Award — Site of the Day',
    company: 'Awwwards',
    period: '2022',
    summary: 'Recognized for craft and interaction design on the Pulse Analytics launch site.',
  },
]

export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/your-handle', handle: '/in/your-handle' },
  { label: 'GitHub', href: 'https://github.com/your-handle', handle: '@your-handle' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
]
