import {
  EvidenceItem,
} from "@/app/types/registry";

/* =========================================================
   COMPANY EVIDENCE LAYER
========================================================= */

export async function getCompanyEvidence(
  companyName: string
): Promise<EvidenceItem[]> {

  return [

    /* =====================================================
       EVIDENCE 01
    ===================================================== */

    {
      id:
        "ev-001",

      title:
        "Operational Delay Escalation",

      description:
        "Execution instability triggered recurring coordination failures across operational units.",

      date:
        "2026-03-11",

      severity:
        "Critical",

      status:
        "Active",

      evidenceType:
        "Operational Leakage",

      governanceImpact:
        "Execution continuity disruption",

      estimatedLeakageValue:
        18000000,
    },

    /* =====================================================
       EVIDENCE 02
    ===================================================== */

    {
      id:
        "ev-002",

      title:
        "Recovery Stabilization Layer",

      description:
        "Governance recovery systems reduced escalation intensity across operational environments.",

      date:
        "2026-03-26",

      severity:
        "Moderate",

      status:
        "Resolved",

      evidenceType:
        "Recovery Action",

      governanceImpact:
        "Operational stabilization improvement",

      estimatedLeakageValue:
        4000000,
    },

    /* =====================================================
       EVIDENCE 03
    ===================================================== */

    {
      id:
        "ev-003",

      title:
        "Governance Oversight Friction",

      description:
        "Escalated oversight inconsistencies generated increased operational response latency.",

      date:
        "2026-04-02",

      severity:
        "High",

      status:
        "Monitoring",

      evidenceType:
        "Governance Instability",

      governanceImpact:
        "Governance escalation pressure",

      estimatedLeakageValue:
        9500000,
    },

  ];

}