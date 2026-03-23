const trialItems = [
  "Build your new website or app from scratch",
  "Fix a specific problem you're stuck on",
  "Add a new feature to what you already have",
  "Review and improve what&apos;s already built",
];

export default function Offer() {
  return (
    <section id="offer" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full mb-6 border border-white/20">
                Our No-Brainer Offer
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Try Us Free for 2 Weeks — No Risk at All
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Not sure if we&apos;re the right people for the job? That&apos;s completely fine.
                See our work first for two weeks — then decide if you want to continue.
                No pressure, no commitment.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Book a Free Chat
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Right */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <p className="text-white font-semibold text-lg mb-5">
                In 2 weeks, we can:
              </p>
              <ul className="space-y-4">
                {trialItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-blue-200 text-sm">
                  No guesswork. No long proposals. Just real work — and you decide if we&apos;re a good fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
