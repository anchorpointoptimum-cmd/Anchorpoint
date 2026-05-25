/* =========================================================
   ANOMALY NARRATIVE
========================================================= */

export function anomalyNarrative(
  exposure: number
): string {

  if (exposure >= 80) {

    return `
      Anomaly propagation is critically elevated.
      Governance systems are experiencing
      systemic leakage amplification and
      operational instability acceleration.
    `;

  }

  if (exposure >= 60) {

    return `
      Structural anomalies are actively affecting
      operational continuity and governance
      synchronization across institutional systems.
    `;

  }

  if (exposure >= 40) {

    return `
      Moderate anomaly visibility exists across
      operational layers, though stabilization
      mechanisms remain partially effective.
    `;

  }

  return `
    Anomaly exposure remains relatively contained
    with minimal systemic governance disruption.
  `;

}