/* =========================================================
   RISK COLOR ENGINE
========================================================= */

export function getRiskColor(
  classification: string
): string {

  switch (
    classification
  ) {

    case "Operationally Stable":
      return "text-emerald-500";

    case "Governance Active":
      return "text-teal-500";

    case "Stabilization Required":
      return "text-amber-500";

    case "Structural Escalation":
      return "text-orange-500";

    case "Critical Governance Exposure":
      return "text-red-500";

    default:
      return "text-slate-500";

  }

}