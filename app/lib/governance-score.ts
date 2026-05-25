/* =========================================================
   GOVERNANCE SCORE ENGINE
========================================================= */

import {
  GovernanceDriver,
  GovernanceEvidence,
} from "@/app/types/registry";

/* =========================================================
   SCORE RESULT
========================================================= */

export interface GovernanceScoreResult {
  governanceScore: number;

  stabilityScore: number;

  exposureScore: number;

  recoveryScore: number;

  operationalRisk: string;

  governanceMomentum: string;

  structuralState: string;
}

/* =========================================================
   GOVERNANCE ENGINE
========================================================= */

export function calculateGovernanceScore(
  evidence: GovernanceEvidence[],
  drivers: GovernanceDriver[]
): GovernanceScoreResult {

  /* =======================================================
     SIGNAL COUNTS
  ======================================================= */

  const criticalEvidence =
    evidence.filter(
      (item) =>
        item.severity === "Critical"
    ).length;

  const highEvidence =
    evidence.filter(
      (item) =>
        item.severity === "High"
    ).length;

  const unresolvedEvidence =
    evidence.filter(
      (item) =>
        item.status !== "Resolved"
    ).length;

  const resolvedEvidence =
    evidence.filter(
      (item) =>
        item.status === "Resolved"
    ).length;

  /* =======================================================
     DRIVER COUNTS
  ======================================================= */

  const criticalDrivers =
    drivers.filter(
      (driver) =>
        driver.severity === "Critical"
    ).length;

  const recurringDrivers =
    drivers.filter(
      (driver) =>
        driver.recurrence === "Recurring"
    ).length;

  const constrainedDrivers =
    drivers.filter(
      (driver) =>
        driver.operationalImpact ===
        "Recovery Constraint"
    ).length;

  /* =======================================================
     EXPOSURE SCORE
  ======================================================= */

  let exposureScore = 0;

  exposureScore += criticalEvidence * 18;
  exposureScore += highEvidence * 10;
  exposureScore += unresolvedEvidence * 6;

  exposureScore += criticalDrivers * 15;
  exposureScore += recurringDrivers * 8;
  exposureScore += constrainedDrivers * 12;

  exposureScore =
    Math.min(exposureScore, 100);

  /* =======================================================
     RECOVERY SCORE
  ======================================================= */

  const recoveryRatio =
    evidence.length === 0
      ? 0
      : resolvedEvidence /
        evidence.length;

  const recoveryScore =
    Math.round(recoveryRatio * 100);

  /* =======================================================
     STABILITY SCORE
  ======================================================= */

  let stabilityScore =
    100 - exposureScore;

  stabilityScore +=
    Math.round(recoveryScore * 0.3);

  stabilityScore =
    Math.max(
      0,
      Math.min(stabilityScore, 100)
    );

  /* =======================================================
     GOVERNANCE SCORE
  ======================================================= */

  const governanceScore =
    Math.round(
      (
        stabilityScore * 0.45 +
        recoveryScore * 0.25 +
        (100 - exposureScore) * 0.30
      )
    );

  /* =======================================================
     OPERATIONAL RISK
  ======================================================= */

  let operationalRisk =
    "Contained";

  if (governanceScore < 35) {

    operationalRisk =
      "Escalated";

  } else if (
    governanceScore < 60
  ) {

    operationalRisk =
      "Unstable";

  } else if (
    governanceScore < 80
  ) {

    operationalRisk =
      "Observed";

  }

  /* =======================================================
     GOVERNANCE MOMENTUM
  ======================================================= */

  let governanceMomentum =
    "Neutral";

  if (
    resolvedEvidence >
    unresolvedEvidence
  ) {

    governanceMomentum =
      "Recovering";

  } else if (
    unresolvedEvidence >
    resolvedEvidence
  ) {

    governanceMomentum =
      "Deteriorating";

  }

  /* =======================================================
     STRUCTURAL STATE
  ======================================================= */

  let structuralState =
    "Stable";

  if (
    criticalDrivers >= 2
  ) {

    structuralState =
      "Structural Escalation";

  } else if (
    recurringDrivers >= 2
  ) {

    structuralState =
      "Persistent Structural Pressure";

  } else if (
    constrainedDrivers >= 2
  ) {

    structuralState =
      "Recovery Constraint Active";

  }

  /* =======================================================
     RESULT
  ======================================================= */

  return {

    governanceScore,

    stabilityScore,

    exposureScore,

    recoveryScore,

    operationalRisk,

    governanceMomentum,

    structuralState,

  };

}