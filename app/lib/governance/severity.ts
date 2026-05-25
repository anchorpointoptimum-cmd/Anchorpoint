import {
  EvidenceItem,
} from "@/app/types/registry";

/* =========================================================
   SEVERITY ENGINE
========================================================= */

export function getSeverityLevel(
  evidence: EvidenceItem[]
): string {

  const critical =
    evidence.filter(
      (item) =>
        item.severity ===
        "Critical"
    ).length;

  const high =
    evidence.filter(
      (item) =>
        item.severity ===
        "High"
    ).length;

  /*
    Severity Resolution
  */
  if (critical >= 3) {

    return "Severe";

  }

  if (
    critical >= 1 ||
    high >= 4
  ) {

    return "Elevated";

  }

  if (high >= 1) {

    return "Moderate";

  }

  return "Controlled";

}