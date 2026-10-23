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
  name: 'Cornelious',
  initials: 'C',
  role: 'Luau Scripting Specialist & Game Programmer',
  headline: 'Writing clean, optimized Luau scripts for immersive digital worlds.',
  bio: 'I am a programmer specializing in Luau and game systems development. I focus on scripting smooth gameplay mechanics, optimizing backend logic, and engineering systems that bring complex virtual worlds to life.',
  location: 'Remote / Metaverse',
  available: true,
  availabilityLabel: 'Open to commissions & contracts',
  email: 'your-email@carrier.com', // 💡 Replace with your new email address!
}

export const projects: Project[] = [
  {
    title: 'Advanced Directional Movement',
    description: 'A custom shift-lock controller and 4-way evasive roll engine featuring vector projection alignment, dynamic camera tweens, and Rojo source control integration.',
    tags: ['Luau', 'Vector Math', 'Rojo', 'Gameplay Scripting'],
    image: '/projects/project-1.png', // Fallback thumbnail image
    video: '/projects/videos/movement.mp4', // 💡 Upload your video to /public/projects/videos and name it movement.mp4
    gallery: [], // Leave empty or add static screenshots later
    href: 'YOUR_SHOWCASE_LINK_HERE', // 💡 Paste your Talent Hub or direct showcase link here
    year: '2026',
  },
  {
    title: 'State-Driven Combat & Hitbox Engine',
    description: 'A low-latency combat system utilizing spatial queries and server-side validation to prevent exploits.',
    tags: ['Gameplay Scripting', 'Raycasting', 'Security'],
    image: '/projects/project-2.png',
    gallery: [],
    href: '#',
    year: '2025',
  },
  {
    title: 'Custom UI & Menu Architecture',
    description: 'A dynamic, state-managed interface system utilizing sleek animations and cross-platform controller support.',
    tags: ['UI Scripting', 'Roact / Fusion', 'UX Design'],
    image: '/projects/project-3.png',
    gallery: [],
    href: '#',
    year: '2025',
  },
  {
    title: 'Data Memory & ProfileService Integration',
    description: 'A bulletproof player data pipeline handling automatic session locking and massive state saves safely.',
    tags: ['Backend Engineering', 'ProfileService', 'Databases'],
    image: '/projects/project-4.png',
    gallery: [],
    href: '#',
    year: '2024',
  },
]

export const experience: Experience[] = [
  {
    role: 'Lead Gameplay Programmer',
    company: 'Independent Commissions',
    period: '2024 — Present',
    summary: 'Engineering core backend game frameworks, optimizing network replication, and writing modular game code.',
  },
  {
    role: 'Luau Scripting Contributor',
    company: 'Talent Hub Projects',
    period: '2022 — 2024',
    summary: 'Designed custom physics systems, raycasted weapon assemblies, and responsive data pipelines for various game teams.',
  }
]

export const socials: SocialLink[] = [
  { label: 'Discord', href: 'https://discord.com', handle: 'Cornelious' }, // 💡 You can swap href with a server invite link if you have one
  { label: 'GitHub', href: 'https://github.com/your-handle', handle: '@your-handle' }, // 💡 Update with your actual github link/handle
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
]
