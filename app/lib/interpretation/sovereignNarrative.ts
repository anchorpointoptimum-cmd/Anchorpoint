/* =========================================================
   SOVEREIGN NARRATIVE
========================================================= */

export function sovereignNarrative(
  sovereignIndex: number
): string {

  if (sovereignIndex >= 85) {

    return `
      Institutional sovereignty remains highly
      resilient with mature governance coherence,
      operational continuity, and anomaly containment.
    `;

  }

  if (sovereignIndex >= 70) {

    return `
      Sovereign governance integrity remains
      operationally stable though emerging
      governance stress patterns are visible.
    `;

  }

  if (sovereignIndex >= 50) {

    return `
      Institutional sovereignty is experiencing
      escalating operational pressure and
      governance fragmentation.
    `;

  }

  return `
    Sovereign governance systems are undergoing
    severe structural instability and institutional
    degradation.
  `;

}