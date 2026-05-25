/* =========================================================
   REGISTRY CORE TYPES
========================================================= */

export type RegistryCompany = {
  id: string;

  slug: string;

  name: string;

  sector: string;

  visibility: string;

  pressure: string;

  stability: string;

  description: string;

  certificationState: string;
};

/* =========================================================
   GOVERNANCE TIMELINE
========================================================= */

export type TimelineEvent = {
  date: string;

  title: string;

  description: string;
};

/* =========================================================
   GOVERNANCE EVIDENCE
========================================================= */

export type EvidenceSeverity =
  | "Critical"
  | "High"
  | "Moderate"
  | "Low";

export type EvidenceStatus =
  | "Resolved"
  | "Active"
  | "Monitoring"
  | "Escalated";

export type EvidenceItem = {
  title: string;

  description: string;

  date: string;

  severity: EvidenceSeverity;

  status: EvidenceStatus;

  evidenceType: string;

  governanceImpact: string;

  estimatedLeakageValue?: number;
};

/* =========================================================
   GOVERNANCE DRIVERS
========================================================= */

export type DriverSeverity =
  | "Critical"
  | "High"
  | "Moderate"
  | "Low";

export type DriverRecurrence =
  | "Recurring"
  | "Isolated"
  | "Persistent";

export type OperationalImpact =
  | "Recovery Constraint"
  | "Operational Disruption"
  | "Governance Escalation"
  | "Stabilization Pressure";

export type GovernanceDriver = {
  severity: DriverSeverity;

  recurrence: DriverRecurrence;

  operationalImpact: OperationalImpact;
};

/* =========================================================
   GOVERNANCE INTERPRETATION
========================================================= */

export type GovernanceMomentum =
  | "Recovering"
  | "Deteriorating"
  | "Neutral";

export type OperationalState =
  | "Stable"
  | "Active Monitoring"
  | "Stabilizing"
  | "Escalated Governance";

export type DriverState =
  | "Contained"
  | "Persistent Structural Pressure"
  | "Recovery Constraint Active"
  | "Structural Escalation";