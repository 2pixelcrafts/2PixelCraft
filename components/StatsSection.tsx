"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Founded in", value: 2021, display: "2021" },
  { label: "Offices", value: 2, display: "2", sub: "(Rajkot, Ahmedabad)" },
  { label: "Projects Delivered", value: 18, display: "18" },
];

function AnimatedNumber({
  target,
  startFrom,
  duration = 1400,
}: {
  target: number;
  startFrom: number;
  duration?: number;
}) {
  const [count, setCount] = useState(startFrom);
  const started = useRef(false);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          const startTime = performance.now();
          const range = target - startFrom;

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(startFrom + eased * range));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, startFrom, duration]);

  return <span ref={elRef}>{count}</span>;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#c96400] overflow-hidden">
      {/* Top curved divider from white */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <ellipse cx="720" cy="-60" rx="900" ry="160" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        {/* Big text */}
        <h2 className="reveal font-unbounded font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-16">
          We are a passionate team,{" "}
          <span className="text-[#0f0f0f]">growing fast</span>
        </h2>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 border-t border-white/20 pt-8">
          {stats.map((s, i) => (
            <div key={i} className={`reveal stagger-${i + 1} relative`}>
              {i > 0 && (
                <div className="absolute -left-4 top-0 bottom-0 w-px bg-white/20" />
              )}
              <p className="font-poppins text-white/70 text-sm mb-1">{s.label}</p>
              <p className="font-unbounded font-bold text-white text-4xl sm:text-5xl">
                <AnimatedNumber
                  target={s.value}
                  startFrom={s.value === 2021 ? 2010 : 0}
                />
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
      <div className="h-16 bg-linear-to-b from-[#c96400] to-[#0f0f0f]" />
    </section>
  );
}
