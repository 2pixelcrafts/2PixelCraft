export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0f0f0f] flex flex-col items-center justify-center overflow-hidden">
      {/* Diagonal lines background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(255,255,255,1) 40px, rgba(255,255,255,1) 41px)",
        }}
      />

      {/* Orange radial glow — breathing */}
      <div className="glow-breathe absolute bottom-0 left-1/2 w-175 h-105 rounded-full bg-blue-600/20 blur-[110px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Status badge */}
        {/* <div className="hero-rise hero-delay-1 inline-flex items-center gap-2.5 bg-white/6 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="dot-blink w-2 h-2 rounded-full bg-green-400 shrink-0" />
          <span className="font-poppins text-gray-300 text-sm">
            Now taking on new clients
          </span>
        </div> */}

        {/* Headline */}
        <h1 className="hero-rise hero-delay-2 font-unbounded font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] tracking-tight">
          We build websites &amp; apps for local businesses — done right, on time, and within budget
        </h1>

        {/* Orange hand-drawn underline — draws in */}
        <div className="hero-rise hero-delay-3 flex justify-center mt-5">
          <svg
            width="340"
            height="18"
            viewBox="0 0 340 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="draw-line"
              d="M4 13 C 40 5, 100 3, 170 9 C 240 15, 300 6, 336 5"
              stroke="#3b82f6"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              className="draw-line-2"
              d="M10 16 C 50 10, 110 8, 170 13 C 230 18, 290 10, 332 9"
              stroke="#3b82f6"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* CTA buttons */}
        <div className="hero-rise hero-delay-4 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book-call"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold font-poppins px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
          >
            Book a Free Call
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white font-poppins text-sm border border-white/20 hover:border-white/50 px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/4"
          >
            See Our Work →
          </a>
        </div>
      </div>

      {/* Curved blue bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <ellipse cx="720" cy="200" rx="900" ry="200" fill="#1d4ed8" />
        </svg>
      </div>
    </section>
  );
}
