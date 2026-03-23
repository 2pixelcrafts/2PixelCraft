"use client";
import { useEffect, useRef } from "react";

const cards = [
  {
    problem: (
      <>
        You like going through{" "}
        <strong className="text-white font-bold">layers of people</strong> just to get an answer
      </>
    ),
    solution: (
      <>
        We keep it simple.{" "}
        <span className="text-blue-400">You talk directly to us</span> — the actual people doing the work. No middlemen, no waiting.
      </>
    ),
  },
  {
    problem: (
      <>
        You want a{" "}
        <strong className="text-white font-bold">pushy salesperson</strong> to close a deal
      </>
    ),
    solution: (
      <>
        We don&apos;t have a sales team. From the first call,{" "}
        <span className="text-blue-400">you&apos;re talking to the builders</span> — the people who will actually make your project happen.
      </>
    ),
  },
  {
    problem: (
      <>
        You think just paying money{" "}
        <strong className="text-white font-bold">is enough</strong>
      </>
    ),
    solution: (
      <>
        Budget matters, yes. But a little{" "}
        <span className="text-blue-400">involvement from your side</span> goes a long way. The best results come when we work together.
      </>
    ),
  },
  {
    problem: (
      <>
        You want to sign a big contract{" "}
        <strong className="text-white font-bold">before seeing any results</strong>
      </>
    ),
    solution: (
      <>
        Trust is earned, not assumed. That&apos;s why we start with a{" "}
        <span className="text-blue-400">simple 2-week paid trial</span>. See our work first. Then decide.
      </>
    ),
  },
];

const nums = ["01", "02", "03", "04"];

export default function WhyNotUs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll<HTMLElement>(".reveal, .reveal-scale");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0f0f0f] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="reveal text-center font-unbounded font-bold text-4xl sm:text-5xl lg:text-6xl mb-20 leading-tight">
          <span className="text-gray-500">We might not be</span>{" "}
          <span className="text-blue-400">the right match</span>{" "}
          <span className="text-gray-500">if....</span>
        </h2>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`reveal-scale stagger-${i + 1} group bg-[#161616] border border-white/10 rounded-2xl p-6 flex flex-col gap-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-[#1a1a1a] hover:-translate-y-1`}
            >
              {/* Number badge */}
              <span className="font-unbounded font-bold text-4xl text-white/6 group-hover:text-blue-400/20 transition-colors duration-300 leading-none select-none">
                {nums[i]}
              </span>

              {/* Problem */}
              <p className="font-poppins text-gray-400 text-base leading-relaxed">
                {card.problem}
              </p>

              {/* Divider */}
              <div className="border-t border-white/10 group-hover:border-blue-500/20 transition-colors duration-300" />

              {/* Solution */}
              <p className="font-poppins text-gray-500 text-sm leading-relaxed">
                {card.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
