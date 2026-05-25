interface GovernanceRadarProps {
  governanceScore: number;
  governanceClassification: string;
  severityLevel: string;
  governanceMomentum: string;
}

/* =========================================================
   GOVERNANCE RADAR
========================================================= */

export default function GovernanceRadar({
  governanceScore,
  governanceClassification,
  severityLevel,
  governanceMomentum,
}: GovernanceRadarProps) {

  /*
    Radar Position
  */
  const circumference = 565;

  const offset =
    circumference -
    (
      governanceScore / 100
    ) *
      circumference;

  return (

    <div className="surface-card rounded-[32px] relative overflow-hidden p-10">

      {/* Atmospheric Layer */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-teal-500/5 blur-[100px]" />

      </div>

      <div className="relative z-10">

        {/* Header */}
        <div className="mb-12">

          <div className="text-sm text-slate-500 mb-3">

            Governance Radar

          </div>

          <h2 className="text-4xl tracking-[-0.04em] text-slate-900">

            Structural Intelligence Profile

          </h2>

        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">

          {/* Radar */}
          <div className="relative flex items-center justify-center">

            <svg
              width="240"
              height="240"
              className="-rotate-90"
            >

              {/* Background Ring */}
              <circle
                cx="120"
                cy="120"
                r="90"
                stroke="#e2e8f0"
                strokeWidth="16"
                fill="transparent"
              />

              {/* Active Ring */}
              <circle
                cx="120"
                cy="120"
                r="90"
                stroke="#14b8a6"
                strokeWidth="16"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-1000"
              />

            </svg>

            {/* Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">

              <div className="text-6xl tracking-[-0.05em] text-slate-900">

                {governanceScore}

              </div>

              <div className="text-sm uppercase tracking-[0.14em] text-slate-500 mt-2">

                Governance Score

              </div>

            </div>

          </div>

          {/* Intelligence */}
          <div className="space-y-8">

            {/* Classification */}
            <div className="border border-slate-200 rounded-2xl p-6">

              <div className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-3">

                Governance Classification

              </div>

              <div className="text-2xl text-slate-900">

                {governanceClassification}

              </div>

            </div>

            {/* Severity */}
            <div className="border border-slate-200 rounded-2xl p-6">

              <div className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-3">

                Severity Layer

              </div>

              <div className="text-2xl text-slate-900">

                {severityLevel}

              </div>

            </div>

            {/* Momentum */}
            <div className="border border-slate-200 rounded-2xl p-6">

              <div className="text-xs uppercase tracking-[0.14em] text-slate-500 mb-3">

                Recovery Momentum

              </div>

              <div className="text-2xl text-slate-900">

                {governanceMomentum}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}