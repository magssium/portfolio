'use client'

import { useEffect, useRef } from 'react'

type ProjectVideoProps = {
  src: string
  poster: string
  label: string
  onError: () => void
}

export function ProjectVideo({ src, poster, label, onError }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Only play while on screen, and never autoplay for users who prefer reduced motion.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.35 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return (
    <video
      ref={videoRef}
      key={src}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      onError={onError}
      className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  )
}
