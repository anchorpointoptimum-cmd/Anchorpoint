/* =========================================================
   ECOSYSTEM CONTINUITY
========================================================= */

export function ecosystemContinuity(
  operationalIntegrity: number,
  governanceCoverage: number,
  anomalyContainment: number
): number {

  return Math.round(
    (
      operationalIntegrity +
      governanceCoverage +
      anomalyContainment
    ) / 3
  );

}