"use client";

import { motion } from "framer-motion";

import {
  Shield,
  Activity,
  AlertTriangle,
  Radar,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface SystemOverviewProps {

  totalOrganizations: number;

  criticalExposure: number;

  unresolvedSignals: number;

  stabilizationAverage: number;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function SystemOverview({
  totalOrganizations,
  criticalExposure,
  unresolvedSignals,
  stabilizationAverage,
}: SystemOverviewProps) {

  /*
    Governance State
  */
  let governanceState =
    "Operationally Stable";

  if (
    unresolvedSignals >= 15
  ) {

    governanceState =
      "Escalated Structural Pressure";

  } else if (
    stabilizationAverage >= 70
  ) {

    governanceState =
      "Recovery Momentum Active";

  }

  return (

    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-white/10
        bg-black
        p-10
      "
    >

      {/* ==========================================
          BACKGROUND ATMOSPHERE
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          registry-grid
        "
      />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[1200px]
          h-[500px]
          bg-teal-500/10
          blur-[180px]
        "
      />

      {/* ==========================================
          TOP HEADER
      ========================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          xl:flex-row
          xl:items-end
          xl:justify-between
          gap-10
          mb-16
        "
      >

        <div>

          <div
            className="
              text-[11px]
              uppercase
              tracking-[0.24em]
              text-teal-400
              mb-5
            "
          >
            Governance Command Center
          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
              tracking-[-0.07em]
              leading-[0.92]
              text-white
              max-w-6xl
            "
          >
            System-wide operational
            governance intelligence.
          </h1>

        </div>

        {/* System State */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            px-8
            py-7
            backdrop-blur-xl
            min-w-[280px]
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
              mb-3
            "
          >
            Ecosystem Governance State
          </div>

          <div
            className="
              text-3xl
              tracking-[-0.05em]
              text-white
              leading-tight
            "
          >
            {governanceState}
          </div>

        </div>

      </div>

      {/* ==========================================
          METRICS GRID
      ========================================== */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {/* Organizations */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              mb-10
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Organizations
            </div>

            <Shield
              className="
                w-5
                h-5
                text-teal-400
              "
            />

          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-white
            "
          >
            {totalOrganizations}
          </div>

        </div>

        {/* Exposure */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              mb-10
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Leakage Exposure
            </div>

            <Activity
              className="
                w-5
                h-5
                text-emerald-400
              "
            />

          </div>

          <div
            className="
              text-5xl
              tracking-[-0.06em]
              text-emerald-400
            "
          >
            ₦
            {criticalExposure.toLocaleString()}
          </div>

        </div>

        {/* Signals */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              mb-10
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Unresolved Signals
            </div>

            <AlertTriangle
              className="
                w-5
                h-5
                text-red-400
              "
            />

          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-white
            "
          >
            {unresolvedSignals}
          </div>

        </div>

        {/* Recovery */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              mb-10
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Stabilization
            </div>

            <Radar
              className="
                w-5
                h-5
                text-teal-400
              "
            />

          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-teal-400
            "
          >
            {stabilizationAverage}%
          </div>

        </div>

      </div>

      {/* ==========================================
          INTERPRETATION
      ========================================== */}

      <div
        className="
          relative
          z-10
          mt-16
          pt-10
          border-t
          border-white/10
        "
      >

        <div
          className="
            text-[11px]
            uppercase
            tracking-[0.22em]
            text-slate-500
            mb-5
          "
        >
          System Interpretation
        </div>

        <p
          className="
            text-2xl
            tracking-[-0.03em]
            leading-relaxed
            text-slate-300
            max-w-6xl
          "
        >
          The Governance Command Center aggregates
          ecosystem-wide operational intelligence,
          exposing systemic governance instability,
          structural execution pressure,
          recovery momentum,
          and operational leakage concentration
          across institutional environments.
        </p>

      </div>

    </motion.section>

  );

}