import Link from "next/link";

export default function WhyOperationsDriftPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}

      <section className="system-container py-32">

        <div className="max-w-5xl">

          <p className="text-sm uppercase tracking-[0.24em] text-teal-400 mb-8">
            Why Operations Drift
          </p>

          <h1 className="text-5xl md:text-7xl tracking-[-0.05em] leading-[0.95] mb-10">
            Every organization documents
            how work should happen.
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-10">
            Over time, reality evolves faster than documentation.
            Workarounds emerge.
            Decision paths shift.
            Communication mutates.

            Governance drifts from execution.

            Anchorpoint exists to make that drift visible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link
              href="/registry"
              className="btn-teal"
            >
              Explore the Governance Registry
            </Link>

            <Link
              href="/#contact"
              className="btn-secondary"
            >
              Request Assessment
            </Link>

          </div>

        </div>

      </section>

      {/* DRIFT */}

      <section className="system-container py-24 border-t border-white/10">

        <div className="max-w-4xl">

          <h2 className="text-3xl md:text-5xl tracking-tight mb-10">
            Drift is Normal
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-10">
            Organizations rarely struggle because they lack process.

            They struggle because operational reality changes while
            documentation remains static.

            Teams adapt.
            Communication shortcuts emerge.
            Informal approvals appear.

            The organization evolves.
            The process often does not.
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10">

            <div className="text-center space-y-6">

              <div className="text-2xl">
                Work-as-Imagined
              </div>

              <div className="text-teal-400 text-4xl">
                ↓
              </div>

              <div className="text-xl text-slate-400">
                Operational Drift
              </div>

              <div className="text-teal-400 text-4xl">
                ↓
              </div>

              <div className="text-2xl">
                Work-as-Done
              </div>

            </div>

          </div>

        </div>

      </section>

        {/* ANCHORPOINT LENS */}

<section className="system-container py-28 border-t border-white/10">

  <div className="max-w-5xl">

    <p className="text-sm uppercase tracking-[0.24em] text-teal-400 mb-6">
      The Anchorpoint Lens
    </p>

    <h2 className="text-4xl md:text-6xl tracking-[-0.04em] leading-tight mb-10">
      A systematic lens for
      operational clarity and control.
    </h2>

    <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-16">
      Anchorpoint does not begin with software,
      dashboards,
      or intervention.

      It begins with observation.

      Before reality can be improved,
      it must first be seen.
    </p>

    <div className="grid md:grid-cols-5 gap-6">

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <h3 className="font-medium mb-3">Reality</h3>
        <p className="text-sm text-slate-400">
          Observe how work actually happens.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <h3 className="font-medium mb-3">Structure</h3>
        <p className="text-sm text-slate-400">
          Identify recurring operational patterns.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <h3 className="font-medium mb-3">Memory</h3>
        <p className="text-sm text-slate-400">
          Preserve intelligence for future decisions.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <h3 className="font-medium mb-3">Governance</h3>
        <p className="text-sm text-slate-400">
          Quantify adoption and operational certainty.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <h3 className="font-medium mb-3">Transformation</h3>
        <p className="text-sm text-slate-400">
          Restore alignment between intention and execution.
        </p>
      </div>

    </div>

  </div>

</section>

{/* OPERATIONAL INTELLIGENCE INFRASTRUCTURE */}

<section className="system-container py-28 border-t border-white/10">

  <div className="max-w-6xl">

    <p className="text-sm uppercase tracking-[0.24em] text-teal-400 mb-6">
      Operational Intelligence Infrastructure
    </p>

    <h2 className="text-4xl md:text-6xl tracking-[-0.04em] leading-tight mb-10">
      Anchorpoint studies reality
      before attempting to change it.
    </h2>

    <p className="text-lg text-slate-300 max-w-4xl leading-relaxed mb-20">
      Every component within Anchorpoint serves a specific role.

      Together they create a continuous system for observing,
      modeling,
      preserving,
      quantifying,
      and revealing operational reality.
    </p>

    <div className="space-y-8">

      {/* Navigator */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">

        <div className="text-teal-400 text-sm uppercase tracking-[0.18em] mb-3">
          Reality Collection
        </div>

        <h3 className="text-2xl mb-4">
          Navigator
        </h3>

        <p className="text-slate-300 leading-relaxed">
          The Navigator captures operational reality through
          structured conversations.

          It reveals where documented process diverges from
          actual execution and transforms operational narratives
          into structured intelligence.
        </p>

      </div>

      {/* Puzzle */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">

        <div className="text-teal-400 text-sm uppercase tracking-[0.18em] mb-3">
          Reality Modeling
        </div>

        <h3 className="text-2xl mb-4">
          Puzzle
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Puzzle is not used as a process mapping tool.

          It functions as a visual operational blueprint where
          operational intelligence becomes visible,
          connected,
          and governable.

          It models how work actually moves through people,
          decisions,
          systems,
          information,
          approvals,
          automation,
          and accountability structures.
        </p>

      </div>

      {/* Hub */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">

        <div className="text-teal-400 text-sm uppercase tracking-[0.18em] mb-3">
          Institutional Memory
        </div>

        <h3 className="text-2xl mb-4">
          Process Integrity Hub
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Operational intelligence is preserved inside the
          Process Integrity Hub.

          This is where governance evidence,
          patterns,
          governance timelines,
          intelligence assets,
          observations,
          and Governance Adoption Score history are maintained.
        </p>

      </div>

      {/* GAS */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">

        <div className="text-teal-400 text-sm uppercase tracking-[0.18em] mb-3">
          Quantification
        </div>

        <h3 className="text-2xl mb-4">
          Governance Adoption Score
        </h3>

        <p className="text-slate-300 leading-relaxed">
          Governance is quantified through the Governance
          Adoption Score (GAS).

          This allows operational certainty,
          governance coverage,
          and leakage risk to be measured rather than assumed.
        </p>

      </div>

      {/* Registry */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">

        <div className="text-teal-400 text-sm uppercase tracking-[0.18em] mb-3">
          Truth Publication
        </div>

        <h3 className="text-2xl mb-4">
          Governance Registry
        </h3>

        <p className="text-slate-300 leading-relaxed">
          The Registry reveals validated operational intelligence.

          It transforms collected observations into structured,
          accessible knowledge that organizations can use to
          understand governance drift and operational reality.
        </p>

      </div>

    </div>

  </div>

</section>

{/* GOVERNANCE REGISTRY */}

<section className="system-container py-32 border-t border-white/10">

  <div className="max-w-5xl">

    <p className="text-sm uppercase tracking-[0.24em] text-teal-400 mb-6">
      Truth Publication
    </p>

    <h2 className="text-4xl md:text-6xl tracking-[-0.04em] leading-tight mb-10">
      Observation becomes valuable
      when it can be shared,
      studied,
      and acted upon.
    </h2>

    <div className="space-y-8 text-lg text-slate-300 leading-relaxed">

      <p>
        Observation without memory becomes noise.
      </p>

      <p>
        Memory without visibility becomes bureaucracy.
      </p>

      <p>
        The Governance Registry exists to make operational
        intelligence visible.
      </p>

      <p>
        It provides structured insight into governance,
        execution,
        accountability,
        communication,
        coordination,
        and operational certainty.
      </p>

      <p>
        Every registry entry represents a real operational
        pattern,
        a recurring governance challenge,
        or an intelligence asset developed through observation.
      </p>

    </div>

    <div className="mt-16 flex flex-col sm:flex-row gap-5">

      <Link
        href="/registry"
        className="
          btn-teal
          inline-flex
          items-center
          justify-center
        "
      >
        Explore the Governance Registry
      </Link>

      <Link
        href="/#contact"
        className="
          btn-secondary
          border-slate-700
          text-slate-200
        "
      >
        Request Operational Assessment
      </Link>

    </div>

  </div>

</section>

{/* CLOSING */}

<section className="system-container py-24">

  <div className="max-w-4xl">

    <p className="text-slate-500 text-sm uppercase tracking-[0.24em] mb-8">
      Anchorpoint Optimum Global Ltd
    </p>

    <blockquote className="text-3xl md:text-5xl tracking-[-0.04em] leading-tight text-white">

      Operational certainty
      begins when reality
      becomes visible.

    </blockquote>

  </div>

</section>

<Link
  href="/"
  className="
    btn-secondary
    border-slate-700
    text-slate-200
  "
>
  Return to Anchorpoint
</Link>

</main>
  );
}