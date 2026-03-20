export default function BusinessOutcomes() {
  return (
    <section className="bg-[#0f0f0f] px-6 lg:px-10 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="border border-white/10 rounded-3xl p-10 sm:p-14 text-center">
          {/* Title */}
          <h2 className="font-unbounded font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Business outcomes{" "}
            <span className="text-white font-black">&gt;</span> Code
          </h2>

          {/* Orange underline */}
          <div className="flex justify-center mb-8">
            <svg width="260" height="12" viewBox="0 0 260 12" fill="none">
              <path
                d="M4 8 C 50 3, 130 3, 256 7"
                stroke="#f97316"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Body */}
          <p className="font-poppins text-gray-400 text-lg sm:text-xl leading-relaxed mb-5 max-w-2xl mx-auto">
            We focus on what actually moves your business forward. If you don&apos;t
            need custom software, we&apos;ll tell you honestly —{" "}
            <span className="text-white font-medium">no hard sells.</span>
          </p>

          <p className="font-poppins text-gray-600 text-base">
            And yes, we&apos;ve actually told this to a few clients already.
          </p>
        </div>
      </div>
    </section>
  );
}
