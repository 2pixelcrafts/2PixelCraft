const cards = [
  {
    problem: (
      <>
        You like working through layers of{" "}
        <strong className="text-white font-bold">project managers</strong>
      </>
    ),
    solution: (
      <>
        Unlike most agencies, our team{" "}
        <span className="text-orange-500">talks directly with you</span> — no middlemen,
        no message chains, no delays.
      </>
    ),
  },
  {
    problem: (
      <>
        You prefer talking to a{" "}
        <strong className="text-white font-bold">dedicated sales person</strong>
      </>
    ),
    solution: (
      <>
        We don&apos;t have a sales team. You&apos;ll{" "}
        <span className="text-orange-500">talk directly with the people</span> who will
        build your product — from the very first call.
      </>
    ),
  },
  {
    problem: (
      <>
        You believe a good product only{" "}
        <strong className="text-white font-bold">needs money</strong>
      </>
    ),
    solution: (
      <>
        Money matters. But so does{" "}
        <span className="text-orange-500">your involvement and feedback</span> at the
        right moments. We work best with engaged clients.
      </>
    ),
  },
  {
    problem: (
      <>
        You&apos;re comfortable committing{" "}
        <strong className="text-white font-bold">without a trial</strong>
      </>
    ),
    solution: (
      <>
        Trust takes time. That&apos;s why we offer a{" "}
        <span className="text-orange-500">no-brainer 2-week paid trial</span>. No
        lock-ins. No minimums.
      </>
    ),
  },
];

export default function WhyNotUs() {
  return (
    <section className="bg-[#0f0f0f] py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center font-unbounded font-bold text-4xl sm:text-5xl lg:text-6xl mb-20 leading-tight">
          <span className="text-gray-500">We might not be</span>{" "}
          <span className="text-orange-500">the right fit</span>{" "}
          <span className="text-gray-500">if....</span>
        </h2>

        {/* 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#161616] border border-white/10 rounded-2xl p-6 flex flex-col gap-6"
            >
              {/* Problem */}
              <p className="font-poppins text-gray-400 text-base leading-relaxed">
                {card.problem}
              </p>

              {/* Divider */}
              <div className="border-t border-white/10" />

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
