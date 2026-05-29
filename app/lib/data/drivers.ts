import {
  GovernanceDriver,
} from "@/app/types/registry";

/* =========================================================
   COMPANY GOVERNANCE DRIVERS
========================================================= */

export async function getCompanyDrivers(
  companyName: string
): Promise<GovernanceDriver[]> {

  return [

    /* =====================================================
       DRIVER 01
    ===================================================== */

    {
      driver:
        "Governance Escalation Pressure",

      severity:
        "Critical",

      recurrence:
        "Recurring",

      operationalImpact:
        "Governance Escalation",
    },

    /* =====================================================
       DRIVER 02
    ===================================================== */

    {
      driver:
        "Operational Recovery Constraint",

      severity:
        "High",

      recurrence:
        "Persistent",

      operationalImpact:
        "Recovery Constraint",
    },

    /* =====================================================
       DRIVER 03
    ===================================================== */

    {
      driver:
        "Execution Continuity Degradation",

      severity:
        "Moderate",

      recurrence:
        "Recurring",

      operationalImpact:
        "Operational Disruption",
    },

    /* =====================================================
       DRIVER 04
    ===================================================== */

    {
      driver:
        "Institutional Stabilization Friction",

      severity:
        "Low",

      recurrence:
        "Isolated",

      operationalImpact:
        "Stabilization Pressure",
    },

  ];

}