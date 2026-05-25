export function About() {

  return (

    <section className="relative py-32 bg-white border-b border-slate-200 overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full border border-slate-300" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="max-w-5xl mx-auto">

          {/* Section Label */}
          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-10">

            Governance Observability

          </div>

          {/* Main Statement */}
          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-[-0.05em] text-slate-950 mb-12 max-w-5xl">

            Most governance systems
            fail quietly long before
            collapse becomes visible.

          </h2>

          {/* Supporting Narrative */}
          <div className="grid lg:grid-cols-2 gap-14">

            <div>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">

                Operational instability rarely begins
                as catastrophic failure.
                It begins as recurring divergence between
                documented process,
                operational behavior,
                and institutional reality.

              </p>

              <p className="text-lg text-slate-500 leading-relaxed">

                Fragmented execution,
                unresolved pressure,
                invisible leakage,
                and governance drift compound silently
                until operational continuity weakens.

              </p>

            </div>

            <div>

              <p className="text-xl text-slate-600 leading-relaxed mb-8">

                Anchorpoint exists to transform
                operational instability into
                observable governance intelligence —
                enabling institutions to continuously
                detect,
                interpret,
                and stabilize structural pressure
                before escalation compounds.

              </p>

              <p className="text-lg text-slate-500 leading-relaxed">

                The system functions as a live operational
                observability layer —
                translating execution reality into measurable
                governance visibility.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}