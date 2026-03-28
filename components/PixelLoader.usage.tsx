// ─── Usage Examples ───────────────────────────────────────────────────────────
// Documents how to use <PixelLoader /> across different contexts.
// Each function is a standalone example — copy what you need.

"use client"

import React, { Suspense, useState, useEffect } from "react"
import PixelLoader from "@/components/PixelLoader"

// ─────────────────────────────────────────────────────────────────────────────
// 1. FULL-SCREEN PAGE LOADER
//    Drop this in your app/layout.tsx or any page while data is fetching

// Basic page loader
export function LoadingPageBasic() {
  return <PixelLoader />
}

// With custom text
export function LoadingPageText() {
  return <PixelLoader text="Building your workspace..." />
}

// Smaller version
export function LoadingPageSmall() {
  return <PixelLoader size="sm" />
}


// 2. NEXT.JS LOADING.TSX  (App Router)
//    Create app/loading.tsx — Next.js renders this automatically

export function Loading() {
  return <PixelLoader text="crafting your experience..." />
}


// 3. CONDITIONAL PAGE LOADER
//    Show loader while fetching, then render content

export function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // simulate fetch
    setTimeout(() => setLoading(false), 2400)
  }, [])

  if (loading) return <PixelLoader text="loading projects..." />

  return <main>Your content here</main>
}


// 4. BUTTON WITH INLINE LOADER
//    Use variant="button" inside your submit / action buttons

async function someAsyncAction() {}

export function SubmitButton() {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    await someAsyncAction()
    setLoading(false)
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center gap-2 bg-[#4F8EF7] text-white px-5 py-2.5 rounded-xl font-semibold disabled:opacity-70"
    >
      {loading
        ? <PixelLoader variant="button" text="Crafting..." />
        : "Submit Project"
      }
    </button>
  )
}


// 5. INLINE LOADER
//    Small loader that sits next to text or inside a card

export function Card() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0f0f0f]">
      <PixelLoader variant="inline" text="Rendering pixels..." />
    </div>
  )
}


// 6. SUSPENSE BOUNDARY  (App Router)
//    Wrap any async Server Component

export function SuspenseLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<PixelLoader text="loading..." size="sm" />}>
      {children}
    </Suspense>
  )
}
