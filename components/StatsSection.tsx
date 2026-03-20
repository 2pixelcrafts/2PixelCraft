const stats = [
  { label: "Founded in", value: "2021" },
  { label: "Offices", value: "2", sub: "(Rajkot, Ahmedabad)" },
  { label: "Projects Delivered", value: "18" },
];

export default function StatsSection() {
  return (
    <section className="relative bg-[#c96400] overflow-hidden">
      {/* Top curved divider from white */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <ellipse cx="720" cy="-60" rx="900" ry="160" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        {/* Big text */}
        <h2 className="font-unbounded font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-16">
          We are a passionate team,{" "}
          <span className="text-[#0f0f0f]">growing fast</span>
        </h2>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
          {stats.map((s, i) => (
            <div key={i} className="relative">
              {i > 0 && (
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/20" />
              )}
              <p className="font-poppins text-white/70 text-sm mb-1">{s.label}</p>
              <p className="font-unbounded font-bold text-white text-4xl sm:text-5xl">
                {s.value}
                {s.sub && (
                  <span className="text-base font-poppins font-normal text-white/60 ml-2">
                    {s.sub}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom transition to dark */}
      <div className="h-16 bg-gradient-to-b from-[#c96400] to-[#0f0f0f]" />
    </section>
  );
}
