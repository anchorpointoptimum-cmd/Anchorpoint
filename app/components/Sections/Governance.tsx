export function Governance() {

  const stewards = [

    {
      name:
        "Ogunbodede David Oluwaseun",

      role:
        "Founder & Chief Executive Officer",

      bio:
        "Leads development of Anchorpoint’s governance intelligence architecture, operational observability systems, and long-range institutional direction.",
    },

    {
      name:
        "Damilola Lucky Christian",

      role:
        "Board Director — Strategy & Investment",

      bio:
        "Provides strategic oversight across institutional partnerships, governance expansion, capital alignment, and infrastructure sustainability.",
    },

    {
      name:
        "Ogunbodede Festus Segun",

      role:
        "Board Advisor & Founding Patron",

      bio:
        "Supports long-term governance continuity through institutional advisory stewardship, operational stability guidance, and structural oversight.",
    },

  ];

  return (

    <section
      id="governance"
      className="relative py-36 bg-slate-50 border-y border-slate-200 overflow-hidden"
    >

      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-slate-300" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-4xl mb-24">

          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">

            Institutional Stewardship

          </div>

          <h2 className="text-4xl md:text-6xl leading-[1.05] tracking-[-0.05em] text-slate-950 mb-10 max-w-5xl">

            Operational intelligence
            requires structured
            institutional oversight.

          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">

            Anchorpoint operates through a governance-led
            stewardship structure designed to preserve
            operational clarity,
            stabilization continuity,
            institutional accountability,
            and long-range governance resilience.

          </p>

        </div>

        {/* Stewardship Grid */}
        <div className="grid lg:grid-cols-3 gap-8">

          {stewards.map(
            (
              steward,
              index
            ) => (

              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-3xl p-10 hover:border-teal-500/40 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
              >

                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">

                  {/* Name */}
                  <h3 className="text-2xl text-slate-950 leading-snug mb-4">

                    {steward.name}

                  </h3>

                  {/* Role */}
                  <div className="text-sm tracking-wide uppercase text-teal-600 mb-8">

                    {steward.role}

                  </div>

                  {/* Bio */}
                  <p className="text-slate-600 leading-relaxed text-lg">

                    {steward.bio}

                  </p>

                </div>

              </div>

            )
          )}

        </div>

        {/* Governance Note */}
        <div className="mt-24 max-w-4xl mx-auto text-center">

          <p className="text-lg text-slate-500 leading-relaxed">

            Anchorpoint maintains a structured governance
            oversight layer designed to ensure operational
            continuity,
            stabilization accountability,
            institutional discipline,
            and long-term stewardship integrity.

          </p>

        </div>

      </div>

    </section>

  );

}