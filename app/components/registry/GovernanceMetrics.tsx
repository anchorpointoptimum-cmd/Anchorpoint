import FadeIn from "@/app/components/ui/FadeIn";

type GovernanceMetricsProps = {
  criticalSignals: number;
  unresolvedSignals: number;
  governanceMomentum: string;
  stabilizationProgress: number;
};

export default function GovernanceMetrics({
  criticalSignals,
  unresolvedSignals,
  governanceMomentum,
  stabilizationProgress,
}: GovernanceMetricsProps) {

  return (

    <FadeIn delay={0.05}>

      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* Critical Signals */}
        <div className="
          relative overflow-hidden
          rounded-[32px]
          border border-red-500/10
          bg-gradient-to-b from-red-500/[0.04] to-slate-950
          p-8
        ">

          <div className="absolute inset-0 opacity-[0.04] registry-grid" />

          <div className="relative z-10">

            <div className="
              text-xs uppercase
              tracking-[0.16em]
              text-red-300/70
              mb-4
            ">

              Critical Signals

            </div>

            <div className="
              text-5xl
              tracking-[-0.05em]
              text-red-400
            ">

              {criticalSignals}

            </div>

          </div>

        </div>

        {/* Unresolved */}
        <div className="
          relative overflow-hidden
          rounded-[32px]
          border border-amber-500/10
          bg-gradient-to-b from-amber-500/[0.04] to-slate-950
          p-8
        ">

          <div className="absolute inset-0 opacity-[0.04] registry-grid" />

          <div className="relative z-10">

            <div className="
              text-xs uppercase
              tracking-[0.16em]
              text-amber-300/70
              mb-4
            ">

              Unresolved Signals

            </div>

            <div className="
              text-5xl
              tracking-[-0.05em]
              text-amber-400
            ">

              {unresolvedSignals}

            </div>

          </div>

        </div>

        {/* Momentum */}
        <div className="
          relative overflow-hidden
          rounded-[32px]
          border border-teal-500/10
          bg-gradient-to-b from-teal-500/[0.04] to-slate-950
          p-8
        ">

          <div className="absolute inset-0 opacity-[0.04] registry-grid" />

          <div className="relative z-10">

            <div className="
              text-xs uppercase
              tracking-[0.16em]
              text-teal-300/70
              mb-4
            ">

              Governance Momentum

            </div>

            <div className="
              text-2xl
              tracking-[-0.03em]
              text-white
            ">

              {governanceMomentum}

            </div>

          </div>

        </div>

        {/* Stabilization */}
        <div className="
          relative overflow-hidden
          rounded-[32px]
          border border-blue-500/10
          bg-gradient-to-b from-blue-500/[0.04] to-slate-950
          p-8
        ">

          <div className="absolute inset-0 opacity-[0.04] registry-grid" />

          <div className="relative z-10">

            <div className="
              text-xs uppercase
              tracking-[0.16em]
              text-blue-300/70
              mb-4
            ">

              Stabilization Progress

            </div>

            <div className="
              text-5xl
              tracking-[-0.05em]
              text-blue-400
            ">

              {stabilizationProgress}%

            </div>

          </div>

        </div>

      </section>

    </FadeIn>

  );

}