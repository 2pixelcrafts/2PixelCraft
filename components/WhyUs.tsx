const points = [
  {
    icon: "💬",
    title: "Talk Directly to Our Team",
    description:
      "No project managers in between. You speak directly with the people building your product — from the very first call.",
  },
  {
    icon: "🔓",
    title: "No Long-Term Lock-Ins",
    description:
      "Start with a simple 2-week paid trial. No contracts, no minimums. Stay because you love the work, not because you're stuck.",
  },
  {
    icon: "✅",
    title: "Honest, Upfront Advice",
    description:
      "If we think custom software isn't what you need right now, we'll tell you. Your success matters more than a sale.",
  },
  {
    icon: "🚀",
    title: "Focused on Delivery",
    description:
      "Our team is incentivized to complete your project — not drag it out. We move fast and ship real things.",
  },
  {
    icon: "🤝",
    title: "Your Involvement Matters",
    description:
      "We believe great products are built together. Your feedback and decisions are always part of the process.",
  },
  {
    icon: "💡",
    title: "No Dreamy Promises",
    description:
      "We set realistic expectations and deliver on them. What you see in the trial is what you get throughout.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Honest, and Built for Your Success
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We work differently from most agencies — and our clients notice it right away.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
