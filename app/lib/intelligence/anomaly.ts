/* =========================================================
   ANOMALY EXPOSURE
========================================================= */

export function calculateAnomalyExposure(
  anomalies: number[]
): number {

  if (!anomalies.length) return 0;

  const total =
    anomalies.reduce(
      (sum, value) =>
        sum + value,
      0
    );

  return Math.round(
    total / anomalies.length
  );

}

/* =========================================================
   EXPOSURE LEVEL
========================================================= */

export function anomalySeverity(
  exposure: number
) {

  if (exposure >= 80)
    return "Critical";

  if (exposure >= 60)
    return "High";

  if (exposure >= 40)
    return "Moderate";

  return "Low";

}