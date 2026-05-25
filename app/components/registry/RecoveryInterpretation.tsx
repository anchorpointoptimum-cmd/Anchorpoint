interface RecoveryInterpretationProps {
  governanceMomentum: string;
  operationalState: string;
  driverState: string;
}

export default function RecoveryInterpretation({
  governanceMomentum,
  operationalState,
  driverState,
}: RecoveryInterpretationProps) {
  return (
    <section className="bg-slate-950 rounded-[32px] overflow-hidden relative p-12 text-white">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-5xl">

        <div className="text-registry-label text-slate-400 mb-5">
          Recovery Interpretation
        </div>

        <h2 className="text-5xl tracking-[-0.05em] leading-tight mb-10">

          {
            governanceMomentum === "Recovering"
              ? "Operational governance conditions indicate measurable stabilization progression."
              : governanceMomentum === "Deteriorating"
              ? "Governance instability continues exerting structural operational pressure."
              : "Governance conditions remain operationally transitional."
          }

        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Governance State */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            <div className="text-sm text-slate-400 mb-3">
              Governance State
            </div>

            <div className="text-3xl mb-4">
              {operationalState}
            </div>

            <p className="text-slate-300 leading-relaxed">
              Current governance conditions reflect
              observed operational behavior,
              escalation intensity,
              and stabilization momentum.
            </p>

          </div>

          {/* Structural Outlook */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            <div className="text-sm text-slate-400 mb-3">
              Structural Outlook
            </div>

            <div className="text-3xl mb-4">
              {driverState}
            </div>

            <p className="text-slate-300 leading-relaxed">
              Structural governance interpretation
              reflects recurring operational
              pressure concentration and
              recovery constraint visibility.
            </p>

          </div>

          {/* Recovery Momentum */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            <div className="text-sm text-slate-400 mb-3">
              Recovery Momentum
            </div>

            <div className="text-3xl mb-4">
              {governanceMomentum}
            </div>

            <p className="text-slate-300 leading-relaxed">
              Recovery intelligence reflects
              current stabilization efficiency,
              evidence resolution behavior,
              and governance normalization velocity.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}