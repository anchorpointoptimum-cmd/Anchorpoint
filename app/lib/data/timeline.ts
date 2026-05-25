import { TimelineEvent } from "@/app/types/registry";

export async function getCompanyTimeline(
  companyName: string
): Promise<TimelineEvent[]> {
  return [
    {
      date: "2026-01",

      title: "Operational Pressure Escalation",

      description:
        "Governance monitoring identified concentrated execution instability across operational coordination layers.",
    },

    {
      date: "2026-02",

      title: "Stabilization Intervention",

      description:
        "Recovery protocols initiated to reduce recurring governance leakage and restore operational continuity.",
    },

    {
      date: "2026-03",

      title: "Governance Observation Active",

      description:
        "Continuous governance visibility systems deployed for operational intelligence monitoring.",
    },
  ];
}