import Link from "next/link";

import RegistryShell from "@/app/components/registry/RegistryShell";
import RegistryHeader from "@/app/components/registry/RegistryHeader";

import ExecutiveInterpretation from "@/app/components/registry/ExecutiveInterpretation";
import GovernanceScoreCards from "@/app/components/registry/GovernanceScoreCards";

import GovernancePressureGraph from "@/app/components/registry/GovernancePressureGraph";
import LeakageExposureChart from "@/app/components/registry/LeakageExposureChart";
import GovernanceHeatmap from "@/app/components/registry/GovernanceHeatmap";
import StructuralDriverMatrix from "@/app/components/registry/StructuralDriverMatrix";
import StabilizationFlow from "@/app/components/registry/StabilizationFlow";

import OperationalTimeline from "@/app/components/registry/OperationalTimeline";
import EvidenceIntelligence from "@/app/components/registry/EvidenceIntelligence";
import RecoveryInterpretation from "@/app/components/registry/RecoveryInterpretation";

import {
  getRegistryCompanies,
} from "@/app/lib/data/registry";

import {
  getCompanyTimeline,
} from "@/app/lib/data/timeline";

import {
  getCompanyEvidence,
} from "@/app/lib/data/evidence";

import {
  getCompanyDrivers,
} from "@/app/lib/data/drivers";

import {
  computeGovernanceMetrics,
} from "@/app/lib/governance-engine";

import {
  RegistryCompany,
  GovernanceEvidence,
  GovernanceDriver,
  TimelineEvent,
} from "@/app/types/registry";

/* =========================================================
   PAGE TYPES
========================================================= */

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/* =========================================================
   PAGE
========================================================= */

export default async function CompanyPage({
  params,
}: PageProps) {

  const { slug } =
    await params;

  /* ======================================================
      LOAD REGISTRY
  ====================================================== */

  const companies:
    RegistryCompany[] =
      await getRegistryCompanies();

  const company =
    companies.find(
      (item) =>
        item.slug === slug
    );

  /* ======================================================
      SAFETY
  ====================================================== */

  if (!company) {

    return (

      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="text-center">

          <div className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-6">
            Governance Registry
          </div>

          <h1 className="text-5xl tracking-[-0.05em] mb-6">
            Environment Not Found
          </h1>

          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
            The requested operational environment
            does not currently exist within the
            governance registry infrastructure.
          </p>

          <Link
            href="/registry"
            className="
              inline-flex
              items-center
              justify-center
              px-6
              py-4
              rounded-2xl
              bg-teal-500
              hover:bg-teal-400
              transition-colors
              text-black
              font-medium
            "
          >
            Return to Registry
          </Link>

        </div>

      </div>

    );

  }

  /* ======================================================
      LOAD INTELLIGENCE SOURCES
  ====================================================== */

  const timeline:
    TimelineEvent[] =
      await getCompanyTimeline(
        company.name
      );

  const evidence:
    GovernanceEvidence[] =
      await getCompanyEvidence(
        company.name
      );

  const drivers:
    GovernanceDriver[] =
      await getCompanyDrivers(
        company.name
      );

  /* ======================================================
      GOVERNANCE COMPUTATION
  ====================================================== */

  const governance =
    computeGovernanceMetrics(
      evidence,
      drivers
    );

  /* ======================================================
      PAGE
  ====================================================== */

  return (

    <RegistryShell>

      {/* ==============================================
          BACK NAVIGATION
      ============================================== */}

      <div className="mb-12">

        <Link
          href="/registry"
          className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-slate-500
            hover:text-teal-400
            transition-colors
          "
        >
          ← Back to Governance Registry
        </Link>

      </div>

      {/* ==============================================
          REGISTRY HEADER
      ============================================== */}

      <RegistryHeader
        company={company}
        governance={governance}
      />

      {/* ==============================================
          EXECUTIVE INTERPRETATION
      ============================================== */}

      <ExecutiveInterpretation
  operationalState={company.stability}
  dominantPattern={company.pressure}
  governanceNarrative={company.description}
/>

      {/* ==============================================
          GOVERNANCE SCORECARDS
      ============================================== */}

      <GovernanceScoreCards
        governance={governance}
      />

      {/* ==============================================
          VISUAL INTELLIGENCE LAYER
      ============================================== */}

      <div className="space-y-8">

        {/* Governance Pressure */}
        <GovernancePressureGraph
          evidence={evidence}
          timeline={timeline}
        />

        {/* Intelligence Grid */}
        <div className="grid xl:grid-cols-2 gap-8">

          <LeakageExposureChart
            evidence={evidence}
          />

          <GovernanceHeatmap
            evidence={evidence}
            drivers={drivers}
          />

        </div>

        {/* Structural Drivers */}
        <StructuralDriverMatrix
          drivers={drivers}
        />

        {/* Stabilization */}
        <StabilizationFlow
  evidence={evidence}
/>

      </div>

      {/* ==============================================
          TIMELINE
      ============================================== */}

      <OperationalTimeline
        timeline={timeline}
      />

      {/* ==============================================
          EVIDENCE INTELLIGENCE
      ============================================== */}

      <EvidenceIntelligence
        evidence={evidence}
      />

      {/* ==============================================
          RECOVERY INTERPRETATION
      ============================================== */}

      <RecoveryInterpretation
  governance={governance}
/>
    </RegistryShell>

  );

}