import {
  EvidenceItem,
} from "@/app/types/registry";

/* =========================================================
   RECOVERY MOMENTUM
========================================================= */

export function calculateRecoveryMomentum(
  evidence: EvidenceItem[]
): string {

  const resolved =
    evidence.filter(
      (item) =>
        item.status ===
        "Resolved"
    ).length;

  const unresolved =
    evidence.filter(
      (item) =>
        item.status !==
        "Resolved"
    ).length;

  /*
    Momentum Logic
  */
  if (
    resolved >
    unresolved
  ) {

    return "Recovering";

  }

  if (
    unresolved >
    resolved
  ) {

    return "Deteriorating";

  }

  return "Neutral";

}