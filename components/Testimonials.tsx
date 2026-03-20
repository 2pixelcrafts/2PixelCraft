const testimonials = [
  {
    quote: "The execution was fast, communication was very good and overall it's easy to work with you guys",
    name: "Tuomas Lehtovirta",
    role: "CEO at Nordic Gulf Partners",
    style: "top-[5%] left-[2%] rotate-[-4deg]",
  },
  {
    quote: "I read the approach about Athena to retrieve data from SES and it's amazingly explained.",
    name: "Bill Palter",
    role: "Senior Software Engineer",
    style: "top-[5%] right-[3%] rotate-[3deg]",
  },
  {
    quote: "As soon we had the call my mind was going crazy with ideas",
    name: "Harry Latos",
    role: "Founder of Acquired",
    style: "top-[38%] left-[1%] rotate-[2deg]",
  },
  {
    quote: "I was in urgent need and the module was delivered within 2 hours, exceptional quality of work.",
    name: "Michael Cole",
    role: "Client",
    style: "top-[35%] right-[1%] rotate-[-3deg]",
  },
  {
    quote: "Sometimes you need a reality check, and you gave it solidly — harsh but necessary",
    name: "Shachi Mall",
    role: "100k+ Subscribers",
    style: "bottom-[8%] left-[5%] rotate-[3deg]",
  },
  {
    quote: "Wow! you guys are moving so fast that we're behind testing/deploy. Crazy stuff",
    name: "Marc Ruskin",
    role: "Project Manager, NAHL",
    style: "bottom-[5%] right-[4%] rotate-[-2deg]",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#c96400] overflow-hidden" style={{ minHeight: "680px" }}>
      {/* Subtle dark overlay vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      {/* Center text */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center pt-24 pb-20">
        <p className="font-poppins text-white/70 text-base tracking-widest uppercase mb-2">
          low-key
        </p>
        <h2 className="font-unbounded font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight">
          our fav section
        </h2>
      </div>

      {/* Scattered cards — hidden on mobile, shown on lg */}
      <div className="hidden lg:block absolute inset-0">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute w-[260px] bg-[#1a1a1a]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-xl ${t.style}`}
          >
            <p className="text-white text-sm font-poppins leading-relaxed mb-3">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-white font-semibold text-xs">{t.name}</p>
              <p className="text-white/50 text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: horizontal scroll cards */}
      <div className="lg:hidden flex gap-4 overflow-x-auto px-6 pb-10 snap-x snap-mandatory">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[260px] snap-start bg-[#1a1a1a]/90 border border-white/10 rounded-2xl p-4 shadow-xl"
          >
            <p className="text-white text-sm font-poppins leading-relaxed mb-3">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="text-white font-semibold text-xs">{t.name}</p>
              <p className="text-white/50 text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
