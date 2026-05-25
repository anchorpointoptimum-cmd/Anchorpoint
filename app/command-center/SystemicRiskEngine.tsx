"use client";

import { motion } from "framer-motion";

import {
  AlertTriangle,
  ShieldAlert,
  Radar,
  Activity,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface SystemicRiskEngineProps {

  criticalSignals: number;

  recurringDrivers: number;

  unresolvedExposure: number;

  stabilizationAverage: number;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function SystemicRiskEngine({
  criticalSignals,
  recurringDrivers,
  unresolvedExposure,
  stabilizationAverage,
}: SystemicRiskEngineProps) {

  /*
    Compute Risk Index
  */
  const riskIndex =
    Math.min(
      100,
      Math.round(
        (
          criticalSignals * 4 +
          recurringDrivers * 3 +
          unresolvedExposure / 10000000
        ) /
        2
      )
    );

  /*
    Interpretation
  */
  let systemicState =
    "Contained Structural Risk";

  if (
    riskIndex >= 75
  ) {

    systemicState =
      "Critical Escalation Risk";

  } else if (
    riskIndex >= 55
  ) {

    systemicState =
      "Elevated Governance Pressure";

  } else if (
    stabilizationAverage >= 70
  ) {

    systemicState =
      "Recovery Momentum Active";

  }

  /*
    Severity Color
  */
  const severityColor =
    riskIndex >= 75
      ? "text-red-400"
      : riskIndex >= 55
      ? "text-amber-400"
      : "text-teal-400";

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
          ATMOSPHERE
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
          right-0
          w-[900px]
          h-[500px]
          bg-red-500/10
          blur-[180px]
        "
      />

      {/* ==========================================
          HEADER
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
              text-red-400
              mb-5
            "
          >
            Systemic Risk Engine
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              tracking-[-0.06em]
              leading-tight
              text-white
              max-w-5xl
            "
          >
            Computational governance
            escalation intelligence
            across institutional ecosystems.
          </h2>

        </div>

        {/* Risk Index */}
        <div
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            min-w-[280px]
          "
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
            Ecosystem Risk Index
          </div>

          <div
            className={`
              text-7xl
              tracking-[-0.08em]
              ${severityColor}
            `}
          >
            {riskIndex}
          </div>

        </div>

      </div>

      {/* ==========================================
          STATE PANEL
      ========================================== */}

      <div
        className="
          relative
          z-10
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          p-10
          mb-12
        "
      >

        <div
          className="
            text-xs
            uppercase
            tracking-[0.18em]
            text-slate-500
            mb-5
          "
        >
          Current Systemic State
        </div>

        <div
          className={`
            text-5xl
            tracking-[-0.06em]
            leading-tight
            mb-8
            ${severityColor}
          `}
        >
          {systemicState}
        </div>

        <p
          className="
            text-xl
            leading-relaxed
            text-slate-300
            max-w-5xl
          "
        >
          The Systemic Risk Engine computes
          governance escalation probability
          using structural instability density,
          unresolved operational pressure,
          recurring governance drivers,
          and ecosystem recovery asymmetry.
        </p>

      </div>

      {/* ==========================================
          METRICS
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

        {/* Critical */}
        <div
          className="
            rounded-[28px]
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
              mb-8
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
              Critical Signals
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
              text-5xl
              tracking-[-0.07em]
              text-white
            "
          >
            {criticalSignals}
          </div>

        </div>

        {/* Drivers */}
        <div
          className="
            rounded-[28px]
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
              mb-8
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
              Recurring Drivers
            </div>

            <Radar
              className="
                w-5
                h-5
                text-amber-400
              "
            />

          </div>

          <div
            className="
              text-5xl
              tracking-[-0.07em]
              text-white
            "
          >
            {recurringDrivers}
          </div>

        </div>

        {/* Exposure */}
        <div
          className="
            rounded-[28px]
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
              mb-8
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
              Exposure
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
              text-4xl
              tracking-[-0.06em]
              text-emerald-400
            "
          >
            ₦
            {(
              unresolvedExposure / 1000000
            ).toFixed(0)}M
          </div>

        </div>

        {/* Recovery */}
        <div
          className="
            rounded-[28px]
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
              mb-8
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

            <ShieldAlert
              className="
                w-5
                h-5
                text-teal-400
              "
            />

          </div>

          <div
            className="
              text-5xl
              tracking-[-0.07em]
              text-teal-400
            "
          >
            {stabilizationAverage}%
          </div>

        </div>

      </div>

    </motion.section>

  );

}