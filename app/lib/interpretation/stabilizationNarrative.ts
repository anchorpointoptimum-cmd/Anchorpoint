/* =========================================================
   STABILIZATION NARRATIVE
========================================================= */

export function stabilizationNarrative(
  efficiency: number
): string {

  if (efficiency >= 85) {

    return `
      Stabilization systems demonstrate strong
      institutional responsiveness and recovery
      orchestration efficiency.
    `;

  }

  if (efficiency >= 70) {

    return `
      Recovery architecture remains operationally
      effective but exhibits localized coordination
      inefficiencies.
    `;

  }

  if (efficiency >= 50) {

    return `
      Stabilization capacity is under pressure.
      Recovery systems remain partially effective
      but lack systemic synchronization.
    `;

  }

  return `
    Recovery systems are critically degraded,
    resulting in unstable operational continuity
    and weak governance restoration capacity.
  `;

}