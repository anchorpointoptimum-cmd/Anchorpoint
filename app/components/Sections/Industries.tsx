import {
  Droplet,
  Truck,
  Anchor,
  Factory,
} from "lucide-react";

export function Industries() {

  const adjacentEnvironments = [

    {
      icon: Truck,
      title: "Logistics Infrastructure",
    },

    {
      icon: Anchor,
      title: "Maritime Operations",
    },

    {
      icon: Factory,
      title: "Industrial Manufacturing",
    },

  ];

  return (

    <section className="relative py-32 bg-white overflow-hidden border-y border-slate-200">

      {/* Atmospheric Background */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-500/5 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Intro */}
        <div className="max-w-4xl mb-24">

          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">

            Operational Governance Environments

          </div>

          <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-[-0.04em] text-slate-950 mb-8">

            Built for environments where operational instability becomes structurally dangerous.

          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">

            Anchorpoint’s governance intelligence systems were designed primarily for high-complexity Oil & Gas operations —
            environments where distributed execution,
            operational fragmentation,
            and governance blindness create compounding structural risk.

          </p>

        </div>

        {/* Primary Environment */}
        <div className="relative mb-20">

          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-900" />

          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[120px]" />

          <div className="relative rounded-[2rem] border border-white/10 p-12 md:p-16 overflow-hidden">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">

              <div className="max-w-3xl">

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">

                  <div className="w-2 h-2 rounded-full bg-emerald-400" />

                  <div className="text-sm text-slate-300">

                    Primary Governance Environment

                  </div>

                </div>

                <h3 className="text-5xl md:text-6xl tracking-[-0.04em] text-white mb-8">

                  Oil & Gas

                </h3>

                <p className="text-xl text-slate-300 leading-relaxed">

                  Operational pressure compounds rapidly across energy infrastructure when execution visibility deteriorates.
                  Anchorpoint exists to continuously observe,
                  interpret,
                  and stabilize these environments before governance instability escalates structurally.

                </p>

              </div>

              <div className="flex justify-center lg:justify-end">

                <div className="w-28 h-28 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">

                  <Droplet className="w-14 h-14 text-teal-400" />

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Adjacent Environments */}
        <div>

          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-10">

            Adjacent Operational Systems

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {adjacentEnvironments.map(
              (
                environment,
                index
              ) => (

                <div
                  key={index}
                  className="group bg-slate-50 border border-slate-200 rounded-[2rem] p-10 hover:border-teal-500/30 hover:bg-white transition-all duration-500"
                >

                  <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-8 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-500">

                    <environment.icon className="w-7 h-7 text-teal-600 group-hover:text-white transition-colors duration-500" />

                  </div>

                  <h3 className="text-2xl text-slate-900 mb-4">

                    {environment.title}

                  </h3>

                  <p className="text-slate-600 leading-relaxed">

                    Operational environments where distributed execution,
                    coordination pressure,
                    and structural complexity require continuous governance visibility.

                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>

  );

}