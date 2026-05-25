import {
  GovernanceDriver,
  GovernanceEvidence,
} from "@/app/types/registry";

/* =========================================================
   TYPES
========================================================= */

export interface GovernanceComputation {
  governanceRiskIndex: number;

  stabilizationScore: number;

  escalationProbability: number;

  recoveryProbability: number;

  operationalPressureIndex: number;

  governanceState:
    | "Stable"
    | "Monitoring"
    | "Escalated"
    | "Critical";
}

/* =========================================================
   COMPUTATION ENGINE
========================================================= */

export function computeGovernanceMetrics(
  evidence: GovernanceEvidence[],
  drivers: GovernanceDriver[]
): GovernanceComputation {

  /*
    Severity Weights
  */
  const severityWeights = {
    Low: 1,
    Medium: 2,
    High: 4,
    Critical: 6,
  };

  /*
    Risk Accumulation
  */
  const totalRisk =
    evidence.reduce(
      (sum, item) => {

        const weight =
          severityWeights[
            item.severity
          ] || 1;

        return sum + weight;

      },
      0
    );

  /*
    Driver Pressure
  */
  const driverPressure =
    drivers.reduce(
      (sum, driver) => {

        const weight =
          severityWeights[
            driver.severity
          ] || 1;

        return sum + weight;

      },
      0
    );

  /*
    Resolution Metrics
  */
  const resolved =
    evidence.filter(
      (item) =>
        item.status ===
        "Resolved"
    ).length;

  const unresolved =
    evidence.filter(
      (item) =>
        item.status !==
        "Resolved"
    ).length;

  /*
    Stabilization Score
  */
  const stabilizationScore =
    evidence.length === 0
      ? 100
      : Math.round(
          (
            resolved /
            evidence.length
          ) * 100
        );

  /*
    Governance Risk Index
  */
  const governanceRiskIndex =
    Math.min(
      100,
      Math.round(
        totalRisk * 4 +
        driverPressure * 3
      )
    );

  /*
    Escalation Probability
  */
  const escalationProbability =
    Math.min(
      100,
      Math.round(
        (
          unresolved * 8 +
          driverPressure * 4
        )
      )
    );

  /*
    Recovery Probability
  */
  const recoveryProbability =
    Math.max(
      0,
      Math.min(
        100,
        stabilizationScore -
        escalationProbability / 4
      )
    );

  /*
    Pressure Index
  */
  const operationalPressureIndex =
    Math.min(
      100,
      Math.round(
        (
          totalRisk +
          driverPressure
        ) * 3
      )
    );

  /*
    Governance State
  */
  let governanceState:
    GovernanceComputation["governanceState"] =
      "Stable";

  if (
    governanceRiskIndex >= 75
  ) {

    governanceState =
      "Critical";

  } else if (
    governanceRiskIndex >= 55
  ) {

    governanceState =
      "Escalated";

  } else if (
    governanceRiskIndex >= 35
  ) {

    governanceState =
      "Monitoring";

  }

  return {
    governanceRiskIndex,

    stabilizationScore,

    escalationProbability,

    recoveryProbability,

    operationalPressureIndex,

    governanceState,
  };
}