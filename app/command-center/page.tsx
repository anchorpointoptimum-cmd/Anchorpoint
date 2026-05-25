import Section from "@/app/components/ui/Section";
import Container from "@/app/components/ui/Container";

import SystemOverview from "@/app/components/command-center/SystemOverview";

import SectorPressureMatrix from "@/app/components/command-center/SectorPressureMatrix";

import GlobalExposureMap from "@/app/components/command-center/GlobalExposureMap";

import SystemicRiskEngine from "@/app/components/command-center/SystemicRiskEngine";

import RecoveryVelocityBoard from "@/app/components/command-center/RecoveryVelocityBoard";

import {
  getRegistryCompanies,
} from "@/app/lib/data/registry";

import {
  getCompanyEvidence,
} from "@/app/lib/data/evidence";

import {
  getCompanyDrivers,
} from "@/app/lib/data/drivers";

/* =========================================================
   PAGE
========================================================= */

export default async function CommandCenterPage() {

  /*
    Companies
  */
  const companies =
    await getRegistryCompanies();

  /*
    Aggregate Intelligence
  */
  let totalExposure = 0;

  let unresolvedSignals = 0;

  let criticalSignals = 0;

  let recurringDrivers = 0;

  let stabilizationAverage = 0;

  /*
    Sector Intelligence
  */
  const sectorMap:
    Record<
      string,
      {
        exposure: number;
        pressure: number;
        stabilization: number;
      }
    > = {};

  /*
    Recovery Intelligence
  */
  const recoveryBoard: any[] = [];

  /*
    Exposure Nodes
  */
  const exposureNodes: any[] = [];

  /*
    Iterate Companies
  */
  for (
    const company
    of companies
  ) {

    const evidence =
      await getCompanyEvidence(
        company.name
      );

    const drivers =
      await getCompanyDrivers(
        company.name
      );

    /*
      Exposure
    */
    const companyExposure =
      evidence.reduce(
        (
          sum: number,
          item: any
        ) =>
          sum +
          (
            item.estimatedLeakageValue ||
            0
          ),
        0
      );

    /*
      Signals
    */
    const unresolved =
      evidence.filter(
        (item: any) =>
          item.status !==
          "Resolved"
      ).length;

    const critical =
      evidence.filter(
        (item: any) =>
          item.severity ===
          "Critical"
      ).length;

    /*
      Drivers
    */
    const recurring =
      drivers.filter(
        (item: any) =>
          item.recurrence ===
          "Recurring"
      ).length;

    /*
      Stabilization
    */
    const resolved =
      evidence.filter(
        (item: any) =>
          item.status ===
          "Resolved"
      ).length;

    const stabilization =
      evidence.length === 0
        ? 0
        : Math.round(
            (
              resolved /
              evidence.length
            ) * 100
          );

    /*
      Aggregate Totals
    */
    totalExposure +=
      companyExposure;

    unresolvedSignals +=
      unresolved;

    criticalSignals +=
      critical;

    recurringDrivers +=
      recurring;

    stabilizationAverage +=
      stabilization;

    /*
      Sector Map
    */
    if (
      !sectorMap[
        company.sector
      ]
    ) {

      sectorMap[
        company.sector
      ] = {

        exposure: 0,
        pressure: 0,
        stabilization: 0,

      };

    }

    sectorMap[
      company.sector
    ].exposure +=
      companyExposure;

    sectorMap[
      company.sector
    ].pressure +=
      unresolved * 10;

    sectorMap[
      company.sector
    ].stabilization +=
      stabilization;

    /*
      Exposure Nodes
    */
    exposureNodes.push({

      name:
        company.name,

      exposure:
        companyExposure,

      sector:
        company.sector,

    });

    /*
      Recovery Board
    */
    recoveryBoard.push({

      organization:
        company.name,

      recoveryVelocity:
        stabilization,

      stabilization,

      momentum:
        stabilization >= 70
          ? "Accelerating"
          : stabilization >= 45
          ? "Stabilizing"
          : "Constrained",

    });

  }

  /*
    Average Stabilization
  */
  stabilizationAverage =
    companies.length === 0
      ? 0
      : Math.round(
          stabilizationAverage /
          companies.length
        );

  /*
    Sector Array
  */
  const sectorData =
    Object.entries(
      sectorMap
    ).map(
      (
        [
          sector,
          value,
        ]
      ) => ({

        sector,

        pressure:
          Math.min(
            100,
            value.pressure
          ),

        stabilization:
          Math.min(
            100,
            Math.round(
              value.stabilization /
              2
            )
          ),

        exposure:
          value.exposure,

      })
    );

  return (

    <Section
      className="
        min-h-screen
        bg-black
        overflow-hidden
        py-20
      "
    >

      <Container>

        <div className="space-y-10">

          {/* ======================================
              SYSTEM OVERVIEW
          ====================================== */}

          <SystemOverview
            totalOrganizations={
              companies.length
            }
            criticalExposure={
              totalExposure
            }
            unresolvedSignals={
              unresolvedSignals
            }
            stabilizationAverage={
              stabilizationAverage
            }
          />

          {/* ======================================
              SECTOR PRESSURE
          ====================================== */}

          <SectorPressureMatrix
            sectors={
              sectorData
            }
          />

          {/* ======================================
              EXPOSURE MAP
          ====================================== */}

          <GlobalExposureMap
            nodes={
              exposureNodes
            }
          />

          {/* ======================================
              SYSTEMIC RISK
          ====================================== */}

          <SystemicRiskEngine
            criticalSignals={
              criticalSignals
            }
            recurringDrivers={
              recurringDrivers
            }
            unresolvedExposure={
              totalExposure
            }
            stabilizationAverage={
              stabilizationAverage
            }
          />

          {/* ======================================
              RECOVERY BOARD
          ====================================== */}

          <RecoveryVelocityBoard
            organizations={
              recoveryBoard
            }
          />

        </div>

      </Container>

    </Section>

  );

}