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
  headline: 'Writing clean, optimized Luau scripts for Roblox games.',
  bio: 'I am a programmer specializing in Luau and game systems development. I focus on scripting smooth gameplay mechanics, optimizing backend logic, and engineering systems that bring complex worlds to life.',
  location: 'Remote',
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
    video: '/projects/videos/advanced_directional_movement.mp4',
    gallery: [], 
    href: '#', 
    year: 'Early 2025',
  },
  {
    title: 'RemoteSpy Detection',
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
    video: '/projects/videos/noclip_showcase.mp4', 
    gallery: [],
    href: 'https://github.com/magssium/anti_noclip',
    year: '2024',
  },
  {
    title: 'Anti-Teleport System',
    description: 'A server-authoritative position validation system tracking delta movements, threshold limits, and workspace state synchronization to instantly flag and rollback character physics anomalies.',
    tags: ['Anti-Exploit', 'Luau Scripting', 'Server Authority', 'Network Optimization'],
    image: '/projects/project-4.png',
    video: '/projects/videos/teleport_showcase.mp4',
    gallery: [],
    href: 'https://github.com/magssium/anti_tp',
    year: '2022',
  },
]

export const experience: Experience[] = [
  {
    role: 'Anti-Cheat Developer & Reverse Engineer',
    company: 'Independent / Contract Projects',
    period: '2025 — Present',
    summary: 'Analyze and reverse engineer complex Roblox exploit scripts; tearing down script hubs, as a former exploiter myself; execution methods; and injector behaviors to see exactly how they bypass game security. I also track down broken RemoteEvents and unauthorized network traffic to patch up server side holes before exploiters can abuse them. I write server side code that instantly flags or bans players using teleports, kill-auras, walkspeed, or fly hacks. Finally, I test the games, by writing my own exploits, and by breaking them myself, making sure remotes are fully locked down and memory leaks are fixed.',
  },
  {
    role: 'Bloodlines Exploiter',
    company: 'Kookie Hub',
    period: '2024 — 2025',
    summary: 'Wrote core exploits for the top hub in Bloodlines, which was: Kookie Hub',
  },
  {
    role: 'Luau Script Developer & UI Designer',
    company: 'Freelance',
    period: '2021 — 2024',
    summary: 'Designed and programmed custom user interfaces and script hubs using Luau.',
  }

]

export const socials: SocialLink[] = [
  { label: 'Discord', href: 'https://discord.com', handle: 'tbe_octane' }, 
  { label: 'GitHub', href: 'https://github.com/magssium', handle: '@magssium' },
  { label: 'Email', href: `mailto:${profile.email}`, handle: profile.email },
]
