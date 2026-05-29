import {
  GovernanceDriver,
  GovernanceEvidence,
  GovernanceMetrics,
} from "@/app/types/registry";

/* =========================================================
   SEVERITY WEIGHTS
========================================================= */

const severityWeights: Record<
  GovernanceEvidence["severity"],
  number
> = {
  Low: 1,
  Moderate: 2,
  High: 4,
  Critical: 6,
};

/* =========================================================
   COMPUTATION ENGINE
========================================================= */

export function computeGovernanceMetrics(
  evidence: GovernanceEvidence[],
  drivers: GovernanceDriver[]
): GovernanceMetrics {

  const totalRisk =
    evidence.reduce(
      (sum, item) =>
        sum +
        (severityWeights[item.severity] ?? 1),
      0
    );

  const driverPressure =
    drivers.reduce(
      (sum, driver) =>
        sum +
        (severityWeights[driver.severity] ?? 1),
      0
    );

  const resolved =
    evidence.filter(
      (item) =>
        item.status === "Resolved"
    ).length;

  const unresolved =
    evidence.length - resolved;

  /* ==========================================
     GOVERNANCE SCORE
  ========================================== */

  const governanceScore =
    Math.max(
      0,
      Math.min(
        100,
        100 -
          totalRisk * 4 -
          driverPressure * 2
      )
    );

  /* ==========================================
     OPERATIONAL INTEGRITY
  ========================================== */

  const operationalIntegrity =
    Math.max(
      0,
      Math.min(
        100,
        100 -
          totalRisk * 3
      )
    );

  /* ==========================================
     ANOMALY EXPOSURE
  ========================================== */

  const anomalyExposure =
    Math.max(
      0,
      Math.min(
        100,
        totalRisk * 5 +
          unresolved * 4
      )
    );

  /* ==========================================
     STABILIZATION EFFICIENCY
  ========================================== */

  const stabilizationEfficiency =
    evidence.length === 0
      ? 100
      : Math.round(
          (
            resolved /
            evidence.length
          ) * 100
        );

  /* ==========================================
     GOVERNANCE COVERAGE
  ========================================== */

  const governanceCoverage =
    Math.max(
      0,
      Math.min(
        100,
        100 -
          driverPressure * 4
      )
    );

  /* ==========================================
     CRITICAL SIGNALS
  ========================================== */

  const criticalSignals =
    evidence.filter(
      (item) =>
        item.severity ===
        "Critical"
    ).length;

  /* ==========================================
     UNRESOLVED SIGNALS
  ========================================== */

  const unresolvedSignals =
    unresolved;

  /* ==========================================
     GOVERNANCE MOMENTUM
  ========================================== */

  let governanceMomentum:
    GovernanceMetrics["governanceMomentum"] =
      "Neutral";

  if (
    stabilizationEfficiency >= 70
  ) {
    governanceMomentum =
      "Recovering";
  } else if (
    unresolvedSignals >= 3
  ) {
    governanceMomentum =
      "Deteriorating";
  }

  /* ==========================================
     STABILIZATION PROGRESS
  ========================================== */

  const stabilizationProgress =
    stabilizationEfficiency;

  return {
    governanceScore,

    operationalIntegrity,

    anomalyExposure,

    stabilizationEfficiency,

    governanceCoverage,

    criticalSignals,

    unresolvedSignals,

    governanceMomentum,

    stabilizationProgress,
  };
}