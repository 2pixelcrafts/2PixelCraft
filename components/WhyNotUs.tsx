"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

const accents = [
  { glow: "59,130,246",  border: "#3b82f6" }, // blue
  { glow: "139,92,246",  border: "#8b5cf6" }, // violet
  { glow: "16,185,129",  border: "#10b981" }, // emerald
  { glow: "244,63,94",   border: "#f43f5e" }, // rose
];

// ── Per-card component so each has its own motion values ──
function CardItem({
  card,
  i,
  accent,
}: {
  card: (typeof cards)[number];
  i: number;
  accent: (typeof accents)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse-tracking spotlight
  const mouseX = useMotionValue(150);
  const mouseY = useMotionValue(150);
  const sx = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const sy = useSpring(mouseY, { stiffness: 500, damping: 50 });
  const bg = useTransform(
    [sx, sy],
    ([x, y]: number[]) =>
      `radial-gradient(circle 200px at ${x}px ${y}px, rgba(${accent.glow},0.13) 0%, transparent 80%), #161616`
  );

  const spring = { type: "spring" as const, stiffness: 280, damping: 22 };
  const ease   = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-6 cursor-default"
      style={{ background: bg, borderWidth: "1px", borderStyle: "solid" }}
      initial={{ borderColor: "rgba(255,255,255,0.08)" }}
      animate={{
        y:           isHovered ? -14 : 0,
        scale:       isHovered ? 1.02 : 1,
        borderColor: isHovered ? `${accent.border}55` : "rgba(255,255,255,0.08)",
        boxShadow:   isHovered
          ? `0 24px 64px rgba(${accent.glow},0.18), 0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)`
          : "0 2px 12px rgba(0,0,0,0.3)",
      }}
      transition={spring}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - r.left);
        mouseY.set(e.clientY - r.top);
      }}
    >
      {/* Top accent line — fades & scales in */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl origin-center"
        style={{ background: `linear-gradient(90deg, transparent, ${accent.border}, transparent)` }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: isHovered ? 1 : 0, scaleX: isHovered ? 1 : 0 }}
        transition={ease}
      />

      {/* Number badge — springs up and brightens */}
      <motion.span
        className="font-unbounded font-bold text-4xl leading-none select-none"
        style={{ color: accent.border }}
        animate={{ opacity: isHovered ? 0.25 : 0.07, scale: isHovered ? 1.12 : 1, y: isHovered ? -3 : 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 18 }}
      >
        {nums[i]}
      </motion.span>

      {/* Problem text — brightens on hover */}
      <motion.p
        className="font-poppins text-base leading-relaxed"
        animate={{ color: isHovered ? "#d1d5db" : "#9ca3af" }}
        transition={{ duration: 0.3 }}
      >
        {card.problem}
      </motion.p>

      {/* Divider — base line always visible, accent grows from center */}
      <div className="relative h-px w-full">
        <div className="absolute inset-0 bg-white/[0.08]" />
        <motion.div
          className="absolute inset-0 origin-center"
          style={{ background: `linear-gradient(90deg, transparent, ${accent.border}80, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={ease}
        />
      </div>

      {/* Solution */}
      <p className="font-poppins text-gray-500 text-sm leading-relaxed">
        {card.solution}
      </p>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────
export default function WhyNotUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title: slide up + fade
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 55,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      // Cards: staggered scale-up + fade + rise
      gsap.from(".why-card", {
        opacity: 0,
        y: 80,
        scale: 0.88,
        duration: 0.85,
        stagger: { amount: 0.4, ease: "power2.out" },
        ease: "power3.out",
        clearProps: "transform,opacity", // hand off cleanly to Framer Motion
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0f0f0f] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-center font-unbounded font-bold text-4xl sm:text-5xl lg:text-6xl mb-20 leading-tight"
        >
          <span className="text-gray-500">We might not be</span>{" "}
          <span className="text-blue-400">the right match</span>{" "}
          <span className="text-gray-500">if....</span>
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((card, i) => (
            <div key={i} className="why-card">
              <CardItem card={card} i={i} accent={accents[i]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
