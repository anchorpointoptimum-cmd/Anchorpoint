/* =========================================================
   SOVEREIGN INDEX
========================================================= */

export function sovereignIndex(
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