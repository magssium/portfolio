'use client'

import { useEffect, useRef, useState } from 'react'

type ProjectVideoProps = {
  src: string
  poster: string
  label: string
  onError: () => void
}

export function ProjectVideo({ src, poster, label, onError }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showControls, setShowControls] = useState(false) // 👈 Track if we need manual controls

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // If they prefer reduced motion, don't autoplay, but show play controls instead!
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShowControls(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => {
            console.warn("Autoplay blocked, showing fallback controls:", err)
            setShowControls(true) // 👈 Show controls if browser blocks autoplay
          })
        } else {
          video.pause()
        }
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
      controls={showControls} // 👈 Dynamically turn on controls if autoplay is disabled/blocked
      preload="metadata"
      aria-label={label}
      onError={onError}
      className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  )
}
