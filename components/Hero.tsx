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

      {/* Orange radial glow at bottom center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-orange-600/20 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-unbounded font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] tracking-tight">
          We partner with founders &amp; businesses to build great software, on
          time and on budget
        </h1>

        {/* Orange hand-drawn underline */}
        <div className="flex justify-center mt-5">
          <svg width="340" height="18" viewBox="0 0 340 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 13 C 40 5, 100 3, 170 9 C 240 15, 300 6, 336 5"
              stroke="#f97316"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M10 16 C 50 10, 110 8, 170 13 C 230 18, 290 10, 332 9"
              stroke="#f97316"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Curved orange bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <ellipse cx="720" cy="200" rx="900" ry="200" fill="#c96400" />
        </svg>
      </div>
    </section>
  );
}
