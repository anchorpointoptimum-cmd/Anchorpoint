"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Shield,
  Radar,
  Activity,
  AlertTriangle,
  Workflow,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface CommandCenterProps {

  ecosystemPressure: number;

  activeEscalations: number;

  stabilizationRate: number;

  anomalyIndex: number;

  governanceCoverage: number;

}

/* =========================================================
   HELPERS
========================================================= */

function statusState(
  value: number
) {

  if (value >= 80) {

    return {
      label:
        "Critical",
      color:
        "text-red-400",
      border:
        "border-red-500/20",
      glow:
        "bg-red-500/10",
    };

  }

  if (value >= 60) {

    return {
      label:
        "Elevated",
      color:
        "text-amber-400",
      border:
        "border-amber-500/20",
      glow:
        "bg-amber-500/10",
    };

  }

  if (value >= 40) {

    return {
      label:
        "Moderate",
      color:
        "text-blue-400",
      border:
        "border-blue-500/20",
      glow:
        "bg-blue-500/10",
    };

  }

  return {
    label:
      "Stable",
    color:
      "text-teal-400",
    border:
      "border-teal-500/20",
    glow:
      "bg-teal-500/10",
  };

}

/* =========================================================
   COMPONENT
========================================================= */

export default function GovernanceCommandCenter({
  ecosystemPressure,
  activeEscalations,
  stabilizationRate,
  anomalyIndex,
  governanceCoverage,
}: CommandCenterProps) {

  const pressureState =
    statusState(
      ecosystemPressure
    );

  const anomalyState =
    statusState(
      anomalyIndex
    );

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

      {/* ======================================
          ATMOSPHERE
      ====================================== */}

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
          h-[600px]
          bg-teal-500/10
          blur-[220px]
        "
      />

      {/* ======================================
          HEADER
      ====================================== */}

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
              flex
              items-center
              gap-3
              mb-5
            "
          >

            <BrainCircuit
              className="
                w-4
                h-4
                text-teal-400
              "
            />

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-teal-400
              "
            >
              Governance Command Center
            </div>

          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              tracking-[-0.07em]
              leading-tight
              text-white
              max-w-6xl
            "
          >
            System-wide governance orchestration
            across institutional ecosystems.
          </h2>

        </div>

        {/* Ecosystem Status */}
        <div
          className={`
            rounded-[34px]
            border
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            min-w-[340px]
            ${pressureState.border}
          `}
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
              mb-4
            "
          >
            Ecosystem Status
          </div>

          <div
            className={`
              text-6xl
              tracking-[-0.07em]
              mb-3
              ${pressureState.color}
            `}
          >
            {ecosystemPressure}%
          </div>

          <div
            className={`
              text-sm
              ${pressureState.color}
            `}
          >
            {pressureState.label}
            {" "}
            Governance Pressure
          </div>

        </div>

      </div>

      {/* ======================================
          COMMAND GRID
      ====================================== */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          xl:grid-cols-5
          gap-6
        "
      >

        {/* Pressure */}
        <div
          className={`
            relative
            overflow-hidden
            rounded-[30px]
            border
            bg-white/[0.03]
            p-7
            ${pressureState.border}
          `}
        >

          <div
            className={`
              absolute
              inset-0
              opacity-30
              ${pressureState.glow}
            `}
          />

          <div className="relative z-10">

            <Radar
              className="
                w-6
                h-6
                text-red-400
                mb-8
              "
            />

            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-slate-500
                mb-3
              "
            >
              Ecosystem Pressure
            </div>

            <div
              className="
                text-5xl
                tracking-[-0.06em]
                text-white
                mb-2
              "
            >
              {ecosystemPressure}
            </div>

            <div
              className="
                text-sm
                text-slate-400
              "
            >
              Pressure Density
            </div>

          </div>

        </div>

        {/* Escalations */}
        <div
          className="
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            p-7
          "
        >

          <AlertTriangle
            className="
              w-6
              h-6
              text-amber-400
              mb-8
            "
          />

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
              mb-3
            "
          >
            Active Escalations
          </div>

          <div
            className="
              text-5xl
              tracking-[-0.06em]
              text-white
              mb-2
            "
          >
            {activeEscalations}
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Escalation Nodes
          </div>

        </div>

        {/* Stabilization */}
        <div
          className="
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            p-7
          "
        >

          <Shield
            className="
              w-6
              h-6
              text-teal-400
              mb-8
            "
          />

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
              mb-3
            "
          >
            Stabilization
          </div>

          <div
            className="
              text-5xl
              tracking-[-0.06em]
              text-white
              mb-2
            "
          >
            {stabilizationRate}%
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Recovery Efficiency
          </div>

        </div>

        {/* Anomaly */}
        <div
          className={`
            relative
            overflow-hidden
            rounded-[30px]
            border
            bg-white/[0.03]
            p-7
            ${anomalyState.border}
          `}
        >

          <div
            className={`
              absolute
              inset-0
              opacity-30
              ${anomalyState.glow}
            `}
          />

          <div className="relative z-10">

            <Activity
              className="
                w-6
                h-6
                text-purple-400
                mb-8
              "
            />

            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-slate-500
                mb-3
              "
            >
              Anomaly Index
            </div>

            <div
              className="
                text-5xl
                tracking-[-0.06em]
                text-white
                mb-2
              "
            >
              {anomalyIndex}
            </div>

            <div
              className="
                text-sm
                text-slate-400
              "
            >
              System Variance
            </div>

          </div>

        </div>

        {/* Coverage */}
        <div
          className="
            rounded-[30px]
            border
            border-white/10
            bg-white/[0.03]
            p-7
          "
        >

          <Workflow
            className="
              w-6
              h-6
              text-blue-400
              mb-8
            "
          />

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-500
              mb-3
            "
          >
            Governance Coverage
          </div>

          <div
            className="
              text-5xl
              tracking-[-0.06em]
              text-white
              mb-2
            "
          >
            {governanceCoverage}%
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Ecosystem Visibility
          </div>

        </div>

      </div>

      {/* ======================================
          INTERPRETATION
      ====================================== */}

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
          Command Interpretation
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
          The Governance Command Center operates as
          the institutional orchestration layer —
          consolidating escalation intelligence,
          anomaly visibility,
          stabilization coordination,
          and ecosystem-wide governance observability
          into a unified operational command system.
        </p>

      </div>

    </motion.section>

  );

}