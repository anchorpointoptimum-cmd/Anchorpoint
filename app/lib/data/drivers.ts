import { GovernanceDriver } from "@/app/types/registry";

export async function getCompanyDrivers(
  companyName: string
): Promise<GovernanceDriver[]> {
  return [
    {
      severity: "Critical",

      recurrence: "Recurring",

      operationalImpact:
        "Governance Escalation",
    },

    {
      severity: "High",

      recurrence: "Persistent",

      operationalImpact:
        "Recovery Constraint",
    },
  ];
}