"use client";
import { useState, useEffect, useRef } from "react";

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const DAYS = ["MON","TUE","WED","THU","FRI","SAT","SUN"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function CalendarWidget() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selected, setSelected] = useState<number | null>(null);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  const prev = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelected(null);
  };
  const next = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelected(null);
  };

  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-black/10 p-6 text-black">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={prev}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="text-sm font-semibold text-gray-800 font-poppins">
          {months[month]} {year}
        </p>
        <button
          onClick={next}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <p className="text-xs font-semibold text-gray-400 font-poppins mb-3 tracking-wider uppercase">
        Select a Day
      </p>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-[10px] font-bold text-gray-400 font-poppins py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => (
          <div key={i} className="flex items-center justify-center">
            {day ? (
              <button
                onClick={() => setSelected(day)}
                className={`w-8 h-8 rounded-full text-xs font-poppins font-medium transition-all duration-150
                  ${selected === day
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/30 scale-110"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
              >
                {day}
              </button>
            ) : null}
          </div>
        ))}
      </div>

      {/* Book button */}
      <button
        disabled={!selected}
        className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold font-poppins transition-all duration-200
          ${selected
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
      >
        {selected ? `Book for ${months[month]} ${selected}` : "Select a date to book"}
      </button>
    </div>
  );
}

export default function NobrainerOffer() {
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer" ref={ref} className="bg-white py-20 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="reveal flex items-center gap-3 mb-8">
              <span className="bg-orange-500 text-white font-unbounded font-bold text-lg px-3 py-1 rounded">
                Simple offer
              </span>
              <span className="text-black font-unbounded font-bold text-2xl">
                — no tricks
              </span>
            </div>

            <p className="reveal stagger-1 font-poppins text-gray-800 text-lg leading-relaxed mb-4">
              Start with a 2-week paid trial where we:
            </p>

            <ul className="reveal stagger-2 space-y-3 mb-8 font-poppins text-gray-700 text-base">
              {["Build your MVP", "Solve a specific problem", "Tackle a module of your existing project"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="reveal stagger-3 font-poppins text-black text-base">
              <strong>No guesswork.</strong> See for yourself if we&apos;re the right fit.
            </p>

            <div className="reveal stagger-4 mt-8 border-t border-gray-200 pt-6 space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-500 font-poppins">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
                </svg>
                30 min
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 font-poppins">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth={1.5} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8M12 17v4" />
                </svg>
                Video call link provided after booking
              </div>
              <p className="text-sm text-gray-500 font-poppins">
                <a href="#" className="underline underline-offset-2 hover:text-gray-800 transition-colors">
                  7 out of 10 clients
                </a>{" "}
                who start with us stay for more than a year.
              </p>
            </div>
          </div>

          {/* Right — Calendar */}
          <div className="reveal stagger-2">
            <CalendarWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
