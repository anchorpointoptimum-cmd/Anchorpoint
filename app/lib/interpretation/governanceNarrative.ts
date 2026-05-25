/* =========================================================
   GOVERNANCE NARRATIVE
========================================================= */

export function governanceNarrative(
  governanceScore: number
): string {

  if (governanceScore >= 85) {

    return `
      Governance systems demonstrate strong
      operational continuity, institutional
      coordination, and containment maturity.
      Current governance architecture appears
      resilient against systemic disruption.
    `;

  }

  if (governanceScore >= 70) {

    return `
      Governance systems remain operationally
      stable but exhibit emerging coordination
      inefficiencies that could compound under
      sustained institutional pressure.
    `;

  }

  if (governanceScore >= 50) {

    return `
      Governance instability is becoming
      structurally visible across operational
      systems. Recovery mechanisms exist,
      but governance alignment remains weak.
    `;

  }

  return `
    Governance systems are exhibiting
    severe institutional fragmentation,
    elevated anomaly propagation,
    and deteriorating stabilization capacity.
  `;

}