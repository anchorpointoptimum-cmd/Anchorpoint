import { slugify } from "../slugify";

import { RegistryCompany } from "@/app/types/registry";

export async function getRegistryCompanies(): Promise<
  RegistryCompany[]
> {
  return [
    {
      id: "1",

      slug: slugify("Atlas Marine Operations"),

      name: "Atlas Marine Operations",

      sector: "Maritime",

      industry: "Marine Logistics",

      country: "Nigeria",

      operationalScale: "Regional",

      visibility: "Moderate",

      pressure: "Elevated",

      stability: "Stabilizing",

      certificationState: "Governance Active",

      description:
        "Governance instability driven by recurring vessel coordination leakage and operational recovery constraints.",
    },

    {
      id: "2",

      slug: slugify("PetroLog Energy"),

      name: "PetroLog Energy",

      sector: "Oil & Gas",

      industry: "Energy Infrastructure",

      country: "Nigeria",

      operationalScale: "National",

      visibility: "High",

      pressure: "Critical",

      stability: "Escalated Governance",

      certificationState: "Under Review",

      description:
        "Operational governance pressure linked to recurring maintenance exposure and unresolved infrastructure disruption.",
    },

    {
      id: "3",

      slug: slugify("NorthAxis Manufacturing"),

      name: "NorthAxis Manufacturing",

      sector: "Manufacturing",

      industry: "Industrial Production",

      country: "Nigeria",

      operationalScale: "Regional",

      visibility: "Contained",

      pressure: "Moderate",

      stability: "Recovering",

      certificationState: "Stabilizing",

      description:
        "Governance recovery progression observed across production continuity and execution stabilization systems.",
    },
  ];
}