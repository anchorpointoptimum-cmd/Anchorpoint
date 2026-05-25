/* =========================================================
   STABILIZATION EFFICIENCY
========================================================= */

export function stabilizationEfficiency(
  recoveryRate: number,
  governanceAlignment: number,
  operationalRecovery: number
): number {

  return Math.round(
    (
      recoveryRate +
      governanceAlignment +
      operationalRecovery
    ) / 3
  );

}