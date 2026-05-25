import {
  Eye,
  ShieldCheck,
  Activity,
  Radar,
} from "lucide-react";

export function ProcessTimeline() {

  const phases = [

    {
      icon: Eye,

      phase: "Phase I",

      title:
        "Operational Observation",

      description:
        "Anchorpoint enters the operational environment to observe how execution actually behaves beyond documented process assumptions.",

      items: [

        "Execution flow mapping",

        "Governance visibility assessment",

        "Operational divergence identification",

        "Structural pressure detection",

      ],

    },

    {
      icon: ShieldCheck,

      phase: "Phase II",

      title:
        "Structural Stabilization",

      description:
        "Critical governance instability, operational fragmentation, and execution leakage are contained through controlled stabilization architecture.",

      items: [

        "Governance control establishment",

        "Recovery constraint reduction",

        "Operational containment systems",

        "Stabilization enforcement layers",

      ],

    },

    {
      icon: Activity,

      phase: "Phase III",

      title:
        "Recovery Architecture",

      description:
        "Operational systems are restructured into observable, governable, and continuously measurable execution environments.",

      items: [

        "Workflow normalization",

        "Recovery visibility systems",

        "Operational continuity reinforcement",

        "Scalable governance structures",

      ],

    },

    {
      icon: Radar,

      phase: "Phase IV",

      title:
        "Continuous Governance Intelligence",

      description:
        "Anchorpoint maintains continuous governance observability across evolving operational conditions and stabilization progression.",

      items: [

        "Continuous monitoring",

        "Structural pressure tracking",

        "Governance intelligence reporting",

        "Recovery progression interpretation",

      ],

    },

  ];

  return (

    <section className="relative py-32 bg-slate-950 overflow-hidden">

      {/* Atmospheric Grid */}
      <div className="absolute inset-0 opacity-[0.04]">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-4xl mb-24">

          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">

            Operational Stabilization Lifecycle

          </div>

          <h2 className="text-5xl md:text-6xl tracking-[-0.04em] leading-[1.05] text-white mb-8">

            Governance recovery begins when operational reality becomes continuously observable.

          </h2>

          <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">

            Anchorpoint operates through a structured governance intelligence sequence designed to detect instability,
            contain structural pressure,
            stabilize execution systems,
            and maintain operational continuity visibility.

          </p>

        </div>

        {/* Timeline */}
        <div className="space-y-10">

          {phases.map(
            (
              phase,
              index
            ) => (

              <div
                key={index}
                className="relative group"
              >

                <div className="absolute left-8 top-24 bottom-[-60px] w-px bg-white/10 last:hidden" />

                <div className="grid lg:grid-cols-[120px_1fr] gap-8 items-start">

                  {/* Icon */}
                  <div className="relative z-10">

                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center group-hover:border-teal-500/40 transition-all duration-500">

                      <phase.icon className="w-8 h-8 text-teal-400" />

                    </div>

                  </div>

                  {/* Content */}
                  <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-10 backdrop-blur-sm group-hover:border-teal-500/20 transition-all duration-500">

                    <div className="text-sm tracking-[0.2em] uppercase text-teal-400 mb-4">

                      {phase.phase}

                    </div>

                    <h3 className="text-4xl tracking-[-0.03em] text-white mb-6">

                      {phase.title}

                    </h3>

                    <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-3xl">

                      {phase.description}

                    </p>

                    <div className="grid md:grid-cols-2 gap-4">

                      {phase.items.map(
                        (
                          item,
                          idx
                        ) => (

                          <div
                            key={idx}
                            className="flex items-start gap-3"
                          >

                            <div className="w-2 h-2 rounded-full bg-teal-400 mt-2" />

                            <div className="text-slate-300 leading-relaxed">

                              {item}

                            </div>

                          </div>

                        )
                      )}

                    </div>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}