'use client'

import { useRef } from 'react'

type ProjectVideoProps = {
  src: string
  poster: string
  label: string
  onError: () => void
}

export function ProjectVideo({ src, poster, label, onError }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <video
      ref={videoRef}
      key={src}
      poster={poster}
      controls={true}        // 👈 Force player controls (Play, Pause, Volume) to show up
      preload="auto"
      playsInline
      aria-label={label}
      onError={onError}
      className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
