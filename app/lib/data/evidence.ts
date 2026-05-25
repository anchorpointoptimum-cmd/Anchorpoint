import { EvidenceItem } from "@/app/types/registry";

export async function getCompanyEvidence(
  companyName: string
): Promise<EvidenceItem[]> {
  return [
    {
      title: "Operational Delay Escalation",

      description:
        "Execution instability triggered recurring coordination failures across operational units.",

      date: "2026-03-11",

      severity: "Critical",

      status: "Active",

      evidenceType: "Operational Leakage",

      governanceImpact:
        "Execution continuity disruption",

      estimatedLeakageValue: 18000000,
    },

    {
      title: "Recovery Stabilization Layer",

      description:
        "Governance recovery systems reduced escalation intensity across operational environments.",

      date: "2026-03-26",

      severity: "Moderate",

      status: "Resolved",

      evidenceType: "Recovery Action",

      governanceImpact:
        "Operational stabilization improvement",

      estimatedLeakageValue: 4000000,
    },
  ];
}