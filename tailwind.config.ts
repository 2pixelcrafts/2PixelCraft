// tailwind.config.ts
// Add this to your existing Tailwind config to enable the pixelwave animation

import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Add this keyframe ──────────────────────────────────────────────────
      keyframes: {
        pixelwave: {
          "0%, 100%": {
            opacity: "0.15",
            transform: "scale(0.75)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        // Already referenced in component as:
        // animate-[pixelwave_1.4s_ease-in-out_infinite]
        // But you can also define a shorthand:
        pixelwave: "pixelwave 1.4s ease-in-out infinite",
      },
      // ── Brand colours (optional, handy to have) ───────────────────────────
      colors: {
        brand: {
          blue:    "#4F8EF7",
          "mid":   "#2a5abf",
          dark:    "#0a0a0a",
          cell:    "#1a1a1a",
        },
      },
    },
  },
  plugins: [],
}

export default config
