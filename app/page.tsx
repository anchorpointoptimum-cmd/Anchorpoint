export default function Home() {
  return (
    <main className="min-h-screen bg-[#153D45] text-white flex flex-col items-center px-6 py-20 text-center">

      {/* SECTION 1 — HERO */}
           <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900 opacity-30 pointer-events-none"></div>
            <img
  src="/logo.png"
  alt="Anchorpoint - Optimum Global Ltd"
  className="w-full max-w-lg mx-auto opacity-95 mix-blend-screen drop-shadow-2xl"
/>
          </div>

          {/* Trust Element */}
          <div className="mb-8 text-xs text-slate-400 tracking-wide uppercase">
            Controlled Operational Environment
          </div>

          <h1 className="text-3xl md:text-5xl max-w-4xl mb-8 leading-tight">
            Most operations don't fail on paper.<br />
            They fail in execution.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-6">
            Anchorpoint reveals how operations actually run—restoring visibility, control, and stability where execution breaks.
          </p>

          <p className="text-base text-teal-400 mb-12">
            Clarity. Stability. Forward Motion.
          </p>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg transition-colors">
            Request Operational Assessment
          </button>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent"></div>
       <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-slate-700 leading-relaxed mb-6">
            Anchorpoint is an operational intelligence and governance consultancy focused on execution—not documentation.
          </p>
          <p className="text-xl text-slate-700 leading-relaxed">
            We work within real environments to identify where processes break, where visibility is lost, and where control is absent.
          </p>
        </div>
      </div>
    </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="mt-32 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold">
          Execution doesn’t fail loudly.
        </h2>

        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
          It slips through unnoticed—inside missed handoffs, invisible delays,
          broken accountability, and undocumented workarounds.
        </p>

        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
          By the time the symptoms appear, the damage is already operational:
          wasted capacity, slower delivery, unstable outcomes.
        </p>
      </section>

      {/* SECTION 3 — INTELLIGENCE LAYER */}
      <section className="mt-32 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold">
          Anchorpoint reveals the hidden operational layer.
        </h2>

        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
          Beneath every workflow lies an unseen execution layer—handoffs,
          dependencies, delays, decisions, and control gaps.
        </p>

        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed">
          Anchorpoint maps this operational reality, exposing where execution
          diverges from design so leaders can restore alignment, stability,
          and performance.
        </p>
      </section>

      {/* SECTION 4 — METHOD */}
      <section className="mt-32 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold">
          A structured method to restore execution control.
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-8 text-left">
          <div className="bg-[#1B4A53] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">Diagnose</h3>
            <p className="mt-4 text-gray-200">
              Identify where execution diverges from intended workflows.
            </p>
          </div>

          <div className="bg-[#1B4A53] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">Map</h3>
            <p className="mt-4 text-gray-200">
              Visualize dependencies, handoffs, and operational pathways.
            </p>
          </div>

          <div className="bg-[#1B4A53] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">Analyze</h3>
            <p className="mt-4 text-gray-200">
              Reveal hidden risks, delays, and leakage points.
            </p>
          </div>

          <div className="bg-[#1B4A53] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">Govern</h3>
            <p className="mt-4 text-gray-200">
              Establish operational control systems for stable performance.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — POSITIONING */}
      <section className="mt-32 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold">
          More than visibility. Built for operational control.
        </h2>

        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Traditional audits review what was documented. Dashboards report what already happened.
          Consultants recommend what should improve.
        </p>

        <p className="mt-6 text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Anchorpoint operates deeper—revealing how execution actually behaves,
          where systems break under pressure, and where control must be restored.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#1B4A53] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">Not an Audit</h3>
            <p className="mt-4 text-gray-200">
              We don’t inspect process documents—we expose execution reality.
            </p>
          </div>

          <div className="bg-[#1B4A53] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">Not a Dashboard</h3>
            <p className="mt-4 text-gray-200">
              We don’t display metrics—we uncover the causes behind them.
            </p>
          </div>

          <div className="bg-[#1B4A53] p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">Not Consulting</h3>
            <p className="mt-4 text-gray-200">
              We don’t offer advice—we build operational control systems.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="mt-32 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold">
          Restore visibility where execution breaks.
        </h2>

        <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          Understand how your operations actually run—and where control needs to be restored.
        </p>

        <button className="mt-10 px-10 py-5 bg-teal-500 hover:bg-teal-400 rounded-xl text-xl font-semibold transition">
          Request Operational Assessment
        </button>
      </section>

    </main>
  );
}