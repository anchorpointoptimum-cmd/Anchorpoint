import {
  EvidenceItem,
  GovernanceDriver,
} from "@/app/types/registry";

/* =========================================================
   GOVERNANCE SCORE ENGINE
========================================================= */

export function calculateGovernanceScore(
  evidence: EvidenceItem[],
  drivers: GovernanceDriver[]
): number {

  let score = 100;

  /*
    Evidence Pressure
  */
  evidence.forEach((item) => {

    switch (item.severity) {

      case "Critical":
        score -= 18;
        break;

      case "High":
        score -= 10;
        break;

      case "Moderate":
        score -= 5;
        break;

      default:
        score -= 2;

    }

    /*
      Unresolved Escalation
    */
    if (
      item.status !==
      "Resolved"
    ) {

      score -= 6;

    }

  });

  /*
    Driver Escalation
  */
  drivers.forEach((driver) => {

    switch (driver.severity) {

      case "Critical":
        score -= 12;
        break;

      case "High":
        score -= 7;
        break;

      default:
        score -= 3;

    }

    /*
      Recurring Structural Pressure
    */
    if (
      driver.recurrence ===
      "Recurring"
    ) {

      score -= 5;

    }

  });

  /*
    Clamp
  */
  return Math.max(
    0,
    Math.min(
      100,
      Math.round(score)
    )
  );

}

/* =========================================================
   CLASSIFICATION ENGINE
========================================================= */

export function getGovernanceClassification(
  score: number
): string {

  if (score >= 85) {

    return "Operationally Stable";

  }

  if (score >= 70) {

    return "Governance Active";

  }

  if (score >= 50) {

    return "Stabilization Required";

  }

  if (score >= 30) {

    return "Structural Escalation";

  }

  return "Critical Governance Exposure";

}