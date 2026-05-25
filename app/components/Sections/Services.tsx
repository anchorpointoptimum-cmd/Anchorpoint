import {
  Eye,
  Activity,
  Shield,
  Radar,
} from "lucide-react";

export function Services() {

  const capabilities = [

    {
      icon: Eye,

      title:
        "Governance Registry Access",

      description:
        "Continuous visibility into operational governance conditions, stabilization progression, structural pressure, and organizational recovery intelligence.",
    },

    {
      icon: Radar,

      title:
        "Structural Pressure Mapping",

      description:
        "Detection and classification of recurring operational instability patterns before governance escalation compounds structurally.",
    },

    {
      icon: Activity,

      title:
        "Leakage Intelligence",

      description:
        "Translation of operational divergence into measurable governance signals capable of revealing hidden execution pressure and systemic exposure.",
    },

    {
      icon: Shield,

      title:
        "Stabilization Intelligence",

      description:
        "Continuous interpretation of governance recovery progression, operational normalization, and institutional continuity momentum.",
    },

  ];

  return (

    <section className="relative py-36 bg-white border-y border-slate-200 overflow-hidden">

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a10_1px,transparent_1px),linear-gradient(to_bottom,#0f172a10_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-4xl mb-24">

          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">

            Operational Governance Capabilities

          </div>

          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-[-0.05em] text-slate-950 mb-10 max-w-5xl">

            Governance intelligence
            becomes operationally useful
            when structural conditions
            can be continuously interpreted.

          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">

            Anchorpoint operates through a live governance
            intelligence infrastructure designed to reveal,
            interpret,
            and stabilize operational reality continuously
            across monitored environments.

          </p>

        </div>

        {/* Capability Grid */}
        <div className="grid lg:grid-cols-2 gap-8">

          {capabilities.map(
            (
              capability,
              index
            ) => (

              <div
                key={index}
                className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-10 hover:border-teal-500/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
              >

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mb-8 group-hover:bg-teal-500 transition-colors duration-300">

                    <capability.icon className="w-7 h-7 text-teal-700 group-hover:text-white transition-colors duration-300" />

                  </div>

                  {/* Title */}
                  <h3 className="text-3xl text-slate-950 leading-tight mb-6">

                    {capability.title}

                  </h3>

                  {/* Description */}
                  <p className="text-lg text-slate-600 leading-relaxed">

                    {capability.description}

                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );

}