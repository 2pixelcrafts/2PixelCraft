// components/PixelLoader.tsx
// 2PixelCraft — Pixel Wave Loader
// Usage:
//   import PixelLoader from "@/components/PixelLoader"
//   <PixelLoader />                          full-screen page loader
//   <PixelLoader variant="inline" />         small inline spinner
//   <PixelLoader variant="button" />         inside a button
//   <PixelLoader variant="page" size="sm" /> smaller page loader

import React from "react"

// ─── Types ───────────────────────────────────────────────────────────────────

type Variant = "page" | "inline" | "button"
type Size    = "sm" | "md" | "lg"
type Cell    = "B" | "M" | "W" | "O"   // Blue | Mid-blue | White | Off

interface PixelLoaderProps {
  variant?: Variant
  size?:    Size
  text?:    string
  className?: string
}

// ─── Brand pixel grid (6 × 6) ────────────────────────────────────────────────

const GRID: Cell[][] = [
  ["B","B","B","B","O","O"],
  ["O","O","O","B","W","O"],
  ["M","M","B","B","W","O"],
  ["B","B","O","O","W","W"],
  ["O","B","O","O","W","O"],
  ["B","B","B","W","W","O"],
]

// Tailwind colour map per cell type
const CELL_COLOR: Record<Cell, string> = {
  B: "bg-[#4F8EF7]",
  M: "bg-[#2a5abf]",
  W: "bg-white",
  O: "bg-[#1a1a1a]",
}

// ─── Animation delay helper ───────────────────────────────────────────────────
// Each cell gets a diagonal-wave delay: (row + col) * step

function delayStyle(row: number, col: number, stepMs = 80): React.CSSProperties {
  return { animationDelay: `${(row + col) * stepMs}ms` }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface GridProps {
  cellPx: number   // cell size in px
  gapPx:  number   // gap in px
  rounded: string  // tailwind rounded class
}

function PixelGrid({ cellPx, gapPx, rounded }: GridProps) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(6, ${cellPx}px)`,
        gap: gapPx,
        width:  6 * cellPx + 5 * gapPx,
        height: 6 * cellPx + 5 * gapPx,
      }}
    >
      {GRID.map((row, r) =>
        row.map((cell, c) => (
          <div
            key={`${r}-${c}`}
            className={[
              CELL_COLOR[cell],
              rounded,
              "animate-[pixelwave_1.4s_ease-in-out_infinite]",
            ].join(" ")}
            style={{
              width:  cellPx,
              height: cellPx,
              ...delayStyle(r, c),
            }}
          />
        ))
      )}
    </div>
  )
}

// 3 × 3 mini grid for button / inline use
const MINI_GRID: Cell[][] = [
  ["B","O","B"],
  ["O","B","O"],
  ["B","B","O"],
]

interface MiniGridProps { onDark?: boolean }

function MiniPixelGrid({ onDark = true }: MiniGridProps) {
  const blue = onDark ? "bg-white"      : "bg-[#4F8EF7]"
  const off  = onDark ? "bg-white/20"   : "bg-[#4F8EF7]/20"

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 2, width: 16, height: 16 }}
    >
      {MINI_GRID.map((row, r) =>
        row.map((cell, c) => (
          <div
            key={`${r}-${c}`}
            className={[
              cell === "B" ? blue : off,
              "rounded-[1px]",
              "animate-[pixelwave_1.2s_ease-in-out_infinite]",
            ].join(" ")}
            style={{ width: 4, height: 4, ...delayStyle(r, c, 100) }}
          />
        ))
      )}
    </div>
  )
}

// ─── Size configs ─────────────────────────────────────────────────────────────

const PAGE_SIZES: Record<Size, GridProps> = {
  sm: { cellPx: 10, gapPx: 3,  rounded: "rounded-[3px]"  },
  md: { cellPx: 16, gapPx: 5,  rounded: "rounded-[4px]"  },
  lg: { cellPx: 22, gapPx: 6,  rounded: "rounded-[6px]"  },
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PixelLoader({
  variant   = "page",
  size      = "md",
  text,
  className = "",
}: PixelLoaderProps) {

  // ── Button variant ────────────────────────────────────────────────────────
  if (variant === "button") {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <MiniPixelGrid onDark />
        <span>{text ?? "Loading..."}</span>
      </span>
    )
  }

  // ── Inline variant ────────────────────────────────────────────────────────
  if (variant === "inline") {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <PixelGrid {...PAGE_SIZES.sm} />
        {text && (
          <span className="text-[11px] font-mono tracking-widest text-[#4F8EF7]/60 uppercase">
            {text}
          </span>
        )}
      </span>
    )
  }

  // ── Page / fullscreen variant ─────────────────────────────────────────────
  const grid = PAGE_SIZES[size]

  return (
    <div
      className={[
        "fixed inset-0 z-50",
        "bg-[#0a0a0a]",
        "flex flex-col items-center justify-center gap-8",
        className,
      ].join(" ")}
      role="status"
      aria-label="Loading"
    >
      {/* Pixel grid mark */}
      <PixelGrid {...grid} />

      {/* Wordmark */}
      <div className="flex flex-col items-center gap-1">
        <span
          className="font-black tracking-tight leading-none select-none"
          style={{ fontFamily: "'Outfit', sans-serif", fontSize: size === "sm" ? 20 : 28 }}
        >
          <span className="text-[#4F8EF7]">2</span>
          <span className="text-white">Pixel</span>
          <span className="text-white/20 font-light">Craft</span>
        </span>

        <span
          className="font-mono uppercase tracking-[0.22em] text-[#4F8EF7]/40 select-none"
          style={{ fontSize: 9 }}
        >
          {text ?? "loading..."}
        </span>
      </div>
    </div>
  )
}
