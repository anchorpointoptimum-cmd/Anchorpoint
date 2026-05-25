/* =========================================================
   GOVERNANCE SCORE
========================================================= */

export function calculateGovernanceScore(
  metrics: number[]
): number {

  if (!metrics.length) return 0;

  const total =
    metrics.reduce(
      (sum, value) =>
        sum + value,
      0
    );

  return Math.round(
    total / metrics.length
  );

}

/* =========================================================
   GOVERNANCE STATE
========================================================= */

export function governanceState(
  score: number
) {

  if (score >= 85) {

    return {
      label:
        "Institutionally Stable",
      severity:
        "low",
    };

  }

  if (score >= 70) {

    return {
      label:
        "Operationally Controlled",
      severity:
        "moderate",
    };

  }

  if (score >= 50) {

    return {
      label:
        "Elevated Governance Pressure",
      severity:
        "high",
    };

  }

  return {
    label:
      "Critical Governance Instability",
    severity:
      "critical",
  };

}