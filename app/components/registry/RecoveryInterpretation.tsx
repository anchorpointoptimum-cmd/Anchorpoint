import { GovernanceMetrics } from "@/app/types/registry";

interface RecoveryInterpretationProps {
  governance: GovernanceMetrics;
}

export default function RecoveryInterpretation({
  governance,
}: RecoveryInterpretationProps) {

  const operationalState =
    governance.governanceScore >= 80
      ? "Stable"
      : governance.governanceScore >= 60
      ? "Active Monitoring"
      : governance.governanceScore >= 40
      ? "Stabilizing"
      : "Escalated Governance";

      const criticalDrivers =
  governance.criticalSignals ?? 0;

  const driverState =
    governance.criticalSignals >= 5
      ? "Structural Escalation"
      : governance.unresolvedSignals >= 5
      ? "Recovery Constraint Active"
      : governance.unresolvedSignals >= 2
      ? "Persistent Structural Pressure"
      : "Contained";

  const governanceMomentum =
    governance.governanceMomentum;
    const recoveryHeadline =
  governanceMomentum === "Recovering"
    ? "Operational governance conditions indicate measurable stabilization progression."
    : governanceMomentum === "Deteriorating"
    ? "Governance instability continues exerting structural operational pressure."
    : "Governance conditions remain operationally transitional.";
  return (
    <section
      className="
        bg-slate-950
        rounded-[32px]
        overflow-hidden
        relative
        p-12
        text-white
      "
    >
      {/* ==========================================
          ATMOSPHERIC BORDER
      ========================================== */}

      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="max-w-5xl">
        <div
          className="
            text-registry-label
            text-slate-400
            mb-5
          "
        >
          Recovery Interpretation
        </div>

        <h2
          className="
            text-5xl
            tracking-[-0.05em]
            leading-tight
            mb-10
          "
        >
          {recoveryHeadline}
        </h2>

        <div
          className="
            grid
            lg:grid-cols-3
            gap-8
          "
        >
          {/* ======================================
              GOVERNANCE STATE
          ====================================== */}

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-8
            "
          >
            <div
              className="
                text-sm
                text-slate-400
                mb-3
              "
            >
              Governance State
            </div>

            <div
              className="
                text-3xl
                mb-4
              "
            >
              {operationalState}
            </div>

            <p
              className="
                text-slate-300
                leading-relaxed
              "
            >
              Current governance conditions reflect
              observed operational behavior,
              escalation intensity,
              evidence resolution velocity,
              and stabilization performance.
            </p>
          </div>

          {/* ======================================
              STRUCTURAL OUTLOOK
          ====================================== */}

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-8
            "
          >
            <div
              className="
                text-sm
                text-slate-400
                mb-3
              "
            >
              Structural Outlook
            </div>

            <div
              className="
                text-3xl
                mb-4
              "
            >
              {driverState}
            </div>

            <p
              className="
                text-slate-300
                leading-relaxed
              "
            >
              Structural interpretation reflects
              {criticalDrivers > 0
                ? ` ${criticalDrivers} critical governance drivers`
                : " active governance pressure systems"}
              {" "}and their influence on recovery capability,
              operational resilience,
              and governance normalization.
            </p>
          </div>

          {/* ======================================
              RECOVERY MOMENTUM
          ====================================== */}

          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-8
            "
          >
            <div
              className="
                text-sm
                text-slate-400
                mb-3
              "
            >
              Recovery Momentum
            </div>

            <div
              className="
                text-3xl
                mb-4
              "
            >
              {governanceMomentum}
            </div>

            <p
              className="
                text-slate-300
                leading-relaxed
              "
            >
              Recovery intelligence reflects
              stabilization efficiency,
              evidence resolution behavior,
              and the current balance between
              unresolved governance pressure
              ({governance.unresolvedSignals}) and recovery progression.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}