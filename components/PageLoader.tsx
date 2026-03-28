"use client"

import { useState, useEffect } from "react"
import PixelLoader from "@/components/PixelLoader"

interface PageLoaderProps {
  text?: string
}

export default function PageLoader({ text }: PageLoaderProps) {
  const [fading, setFading] = useState(false)
  const [gone,   setGone]   = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 1500)
    const t2 = setTimeout(() => setGone(true),   1800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (gone) return null

  return (
    <div
      style={{
        opacity:       fading ? 0 : 1,
        transition:    "opacity 0.3s ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <PixelLoader text={text} />
    </div>
  )
}
