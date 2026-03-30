"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PixelLoader from "@/components/PixelLoader";

const WEB3FORMS_KEY = "c8bfd952-44de-48e2-879a-804748d423c6"; // 🔑 Replace with your key from web3forms.com

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email us at",
    value: "dixitambaliya942@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response time",
    value: "Within 1 business day",
  },
  // {
  //   icon: (
  //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 3H3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2z" />
  //     </svg>
  //   ),
  //   label: "Live chat",
  //   value: "Available on our website",
  // },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus]     = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...data }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message ?? "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0f0f0f] text-white">
        {/* ── Hero strip ───────────────────────────────────────────── */}
        <div className="relative overflow-hidden pt-32 pb-20 px-6">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#4F8EF7]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            {/* <span className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 text-[#4F8EF7] text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8EF7] animate-pulse" />
              Now taking on new clients
            </span> */}
            <h1 className="font-unbounded font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
              Let&apos;s build{" "}
              <span className="text-[#4F8EF7]">something</span>{" "}
              great
            </h1>
            <p className="text-white/50 text-lg leading-relaxed font-poppins">
              Not sure where to start? Drop us a message and we&apos;ll get back within one business day — no pressure, no jargon.
            </p>
          </div>
        </div>

        {/* ── Main grid ─────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-6 pb-28 grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* Left — info ─────────────────────────────────────────── */}
          <div className="space-y-8">
            {/* Contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-4 hover:border-[#4F8EF7]/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-[#4F8EF7]/10 text-[#4F8EF7] rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.07]" />

            {/* Promise block */}
            <div className="space-y-4">
              {[
                "No spam. Ever.",
                "We read every message personally.",
                "Honest feedback, even if it hurts.",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4F8EF7]/15 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-[#4F8EF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/60 text-sm font-poppins">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form ────────────────────────────────────────── */}
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl p-7 sm:p-9 backdrop-blur-sm">

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                <div className="w-16 h-16 rounded-full bg-[#4F8EF7]/15 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#4F8EF7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-unbounded font-bold text-xl text-white">Message sent!</h3>
                <p className="text-white/50 text-sm font-poppins max-w-xs">
                  We&apos;ve received your message and will get back to you within one business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-[#4F8EF7] text-sm font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <input type="checkbox" name="botcheck" className="hidden" />
                <input type="hidden" name="subject" value="New Project Inquiry - 2PixelCraft" />

                <Field label="Name">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className={inputCls}
                  />
                </Field>

                <Field label="Email Address">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className={inputCls}
                  />
                </Field>

                <Field label="Phone">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className={inputCls}
                  />
                </Field>

                <Field label="Subject">
                  <input
                    name="subject_line"
                    type="text"
                    required
                    placeholder="What's this about?"
                    className={inputCls}
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your idea or what you need help with..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {status === "error" && (
                  <p className="text-red-400 text-sm font-poppins bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#4F8EF7] hover:bg-[#3a7de8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <PixelLoader variant="button" text="Sending..." />
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-white/25 text-xs font-poppins">
                  By sending, you agree to our{" "}
                  <a href="/privacy-policy" className="underline hover:text-white/50 transition-colors">Privacy Policy</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────────

const inputCls =
  "w-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.15] focus:border-[#4F8EF7]/60 focus:bg-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-all duration-200 font-poppins";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-mono uppercase tracking-wider text-white/40">
        {label}
      </label>
      {children}
    </div>
  );
}
