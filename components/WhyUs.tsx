const points = [
  {
    icon: "💬",
    title: "Talk Directly to Us",
    description:
      "No middlemen. No runaround. You talk straight to the people doing the actual work — from day one.",
  },
  {
    icon: "🔓",
    title: "No Long Contracts",
    description:
      "Start with a simple 2-week trial. No big commitments, no fine print. You stay because you're happy, not because you're locked in.",
  },
  {
    icon: "✅",
    title: "We Tell You the Truth",
    description:
      "If you don't really need a website or app right now, we'll say so. We'd rather help you make the right call than take your money.",
  },
  {
    icon: "🚀",
    title: "We Get Things Done",
    description:
      "We don't drag projects out. We move quickly, keep you in the loop, and actually deliver what we promised.",
  },
  {
    icon: "🤝",
    title: "You're Always in the Loop",
    description:
      "Your input matters at every step. We check in with you regularly so there are no surprises at the end.",
  },
  {
    icon: "💡",
    title: "No Empty Promises",
    description:
      "We only promise what we can deliver. You'll know exactly what to expect — and we'll meet that expectation every time.",
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
            Simple, Honest, and Here to Help You Grow
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            We're not a big faceless company. We're a small team that genuinely cares — and our clients feel that from the very first call.
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
