/* =========================================================
   REGISTRY CORE TYPES
========================================================= */

export type RegistryCompany = {
  id: string;

  slug: string;

  name: string;

  sector: string;

  industry: string;

  country: string;

  visibility: string;

  pressure: string;

  stability: string;

  description: string;

  certificationState: string;

  operationalScale?: string;
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

export type GovernanceEvidence = {
  id: string;

  title: string;

  description: string;

  date: string;

  severity: EvidenceSeverity;

  status: EvidenceStatus;

  evidenceType: string;

  governanceImpact: string;

  estimatedLeakageValue?: number;
};

export type EvidenceItem = GovernanceEvidence;

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

  driver: string;

  severity: DriverSeverity;

  recurrence: DriverRecurrence;

  operationalImpact: OperationalImpact;

  description?: string;

  systemicCategory?: string;

};
/* =========================================================
   GOVERNANCE INTERPRETATION
========================================================= */

export type GovernanceMomentum =
  | "Recovering"
  | "Neutral"
  | "Deteriorating";

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

/* =========================================================
   GOVERNANCE METRICS
========================================================= */

export type GovernanceMetrics = {
  governanceScore: number;

  operationalIntegrity: number;

  anomalyExposure: number;

  stabilizationEfficiency: number;

  governanceCoverage: number;

  criticalSignals: number;

  unresolvedSignals: number;

  governanceMomentum: GovernanceMomentum;

  stabilizationProgress: number;
};

/* =========================================================
   STRUCTURAL METRICS
========================================================= */

export type StructuralPressureLevel =
  | "Low"
  | "Moderate"
  | "High"
  | "Critical";

export type LeakageExposure = {
  value: number;

  currency?: string;
};

export type StabilityMetrics = {
  operationalContinuity: number;

  governanceIntegrity: number;

  executionStability: number;

  recoveryCapability: number;
};

/* =========================================================
   HEATMAP STRUCTURES
========================================================= */

export type GovernanceHeatmapCell = {
  label: string;

  severity: DriverSeverity;
};

export type StructuralDriverMatrixItem = {
  driver: string;

  impact: OperationalImpact;

  severity: DriverSeverity;
};