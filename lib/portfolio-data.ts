export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  video?: string
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
  email: 'cornelious.dev@proton.me',
}

export const projects: Project[] = [
  {
    title: 'Advanced Directional Movement',
    description: 'A custom shift-lock controller and 4-way evasive roll engine featuring vector projection alignment, dynamic camera tweens, and Rojo source control integration.',
    tags: ['Luau', 'Vector Math', 'Rojo', 'Gameplay Scripting'],
    image: '/projects/project-1.png', 
    video: '/projects/videos/advanced_directional_movement.mp4', // 🛠️ Fixed key name & file mapping
    gallery: [], 
    href: '#', 
    year: '2025',
  },
  {
    title: 'RemoteEvent Spy Detection',
    description: 'A runtime memory obfuscation and client-to-server argument validation layer designed to detect unauthorized environment hooks, intercept malicious remote sniffing, and flag automated script execution.',
    tags: ['Cybersecurity', 'Luau Scripting', 'Metatable Manipulation', 'Memory Protection'],
    image: '/projects/project-2.png',
    video: '/projects/videos/remotespy_detection.mp4',
    gallery: [],
    href: '#',
    year: '2024',
  },
  {
    title: 'Noclip Anticheat',
    description: 'A fast, modular server-side anti-cheat built to stop noclip, wall-phasing, and speed exploits on Roblox operating on a strict zero-trust validation model.',
    tags: ['Anti-Exploit', 'Luau Scripting', 'Server Authority', 'Rojo'],
    image: '/projects/project-3.png',
    video: '/projects/videos/noclip_showcase.mp4', // 🛠️ Fixed key name & double slash folder layout
    gallery: [],
    href: 'https://github.com/magssium/anti_noclip',
    year: '2024',
  },
  {
    title: 'Anti-Teleport System',
    description: 'A server-authoritative position validation system tracking delta movements, threshold limits, and workspace state synchronization to instantly flag and rollback character physics anomalies.',
    tags: ['Anti-Exploit', 'Luau Scripting', 'Server Authority', 'Network Optimization'],
    image: '/projects/project-4.png',
    video: '/projects/videos/teleport_showcase.mp4', // 🛠️ Fixed key name & double slash folder layout
    gallery: [],
    href: 'https://github.com/magssium/anti_tp',
    year: '2022',
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
  { label: 'Discord', href: 'https://discord.com', handle: 'Cornelious' }, 
  { label: 'GitHub', href: 'https://github.com/magssium', handle: '@magssium' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
]
