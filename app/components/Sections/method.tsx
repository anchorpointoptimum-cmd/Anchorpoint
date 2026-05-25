import {
  ArrowDown,
} from "lucide-react";

export function Method() {

  const framework = [

    {
      title:
        "Operational Reality",

      description:
        "Observe execution environments continuously to reveal how operational systems actually behave beyond documented process.",
    },

    {
      title:
        "Divergence Detection",

      description:
        "Identify recurring operational drift, fragmentation, unresolved pressure, and hidden leakage accumulation.",
    },

    {
      title:
        "Pressure Classification",

      description:
        "Translate operational evidence into structured governance pressure categories and measurable instability conditions.",
    },

    {
      title:
        "Governance Interpretation",

      description:
        "Interpret operational behavior through the Steward’s Lens to reveal structural exposure, escalation risk, and recovery constraints.",
    },

    {
      title:
        "Stabilization Intelligence",

      description:
        "Continuously observe governance recovery progression, operational normalization, and structural stabilization momentum.",
    },

  ];

  return (

    <section
      id="method"
      className="relative py-36 bg-slate-50 border-y border-slate-200 overflow-hidden"
    >

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a10_1px,transparent_1px),linear-gradient(to_bottom,#0f172a10_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-24">

          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">

            The Steward’s Lens

          </div>

          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-[-0.05em] text-slate-950 mb-10">

            Governance intelligence
            begins where operational
            visibility becomes continuous.

          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">

            Anchorpoint operates through a structured
            governance observability framework designed
            to continuously interpret operational reality,
            classify structural pressure,
            and stabilize institutional continuity.

          </p>

        </div>

        {/* Framework */}
        <div className="max-w-5xl mx-auto">

          <div className="space-y-8">

            {framework.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="relative"
                >

                  <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

                      {/* Left */}
                      <div className="lg:w-1/3">

                        <div className="text-sm text-slate-400 mb-4">

                          Step
                          {" "}
                          0{index + 1}

                        </div>

                        <h3 className="text-3xl text-slate-950 leading-tight">

                          {item.title}

                        </h3>

                      </div>

                      {/* Right */}
                      <div className="lg:w-2/3">

                        <p className="text-lg text-slate-600 leading-relaxed">

                          {item.description}

                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Connector */}
                  {index <
                    framework.length -
                      1 && (

                    <div className="flex justify-center py-5">

                      <ArrowDown className="w-6 h-6 text-teal-500" />

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>

  );

}