"use client";

import { motion } from "framer-motion";

import {
  Crown,
  Globe,
  ShieldCheck,
  Brain,
  Orbit,
  Activity,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface ExecutiveSovereignPanelProps {

  ecosystemIntegrity: number;

  governanceStability: number;

  institutionalCoverage: number;

  predictiveVisibility: number;

  anomalyContainment: number;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function ExecutiveSovereignPanel({
  ecosystemIntegrity,
  governanceStability,
  institutionalCoverage,
  predictiveVisibility,
  anomalyContainment,
}: ExecutiveSovereignPanelProps) {

  /*
    Sovereign Index
  */
  const sovereignIndex =
    Math.round(
      (
        ecosystemIntegrity +
        governanceStability +
        institutionalCoverage +
        predictiveVisibility +
        anomalyContainment
      ) / 5
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
        rounded-[48px]
        border
        border-white/10
        bg-black
        p-12
      "
    >

      {/* ======================================
          ATMOSPHERIC LAYERS
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
          w-[1300px]
          h-[700px]
          bg-cyan-500/10
          blur-[240px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          bg-teal-500/10
          blur-[180px]
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
          gap-12
          mb-20
        "
      >

        <div>

          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >

            <Crown
              className="
                w-5
                h-5
                text-cyan-400
              "
            />

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.28em]
                text-cyan-400
              "
            >
              Sovereign Governance Intelligence
            </div>

          </div>

          <h2
            className="
              text-5xl
              md:text-7xl
              tracking-[-0.08em]
              leading-[0.95]
              text-white
              max-w-6xl
            "
          >
            Institutional intelligence
            orchestration across sovereign
            operational ecosystems.
          </h2>

        </div>

        {/* Sovereign Index */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[38px]
            border
            border-cyan-500/20
            bg-white/[0.03]
            backdrop-blur-xl
            p-10
            min-w-[360px]
          "
        >

          <div
            className="
              absolute
              inset-0
              bg-cyan-500/10
              opacity-20
            "
          />

          <div className="relative z-10">

            <div
              className="
                text-xs
                uppercase
                tracking-[0.18em]
                text-slate-500
                mb-5
              "
            >
              Sovereign Intelligence Index
            </div>

            <div
              className="
                text-7xl
                tracking-[-0.09em]
                text-cyan-400
                mb-4
              "
            >
              {sovereignIndex}%
            </div>

            <div
              className="
                text-sm
                text-cyan-300
              "
            >
              Institutional Governance Integrity
            </div>

          </div>

        </div>

      </div>

      {/* ======================================
          CORE GRID
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

        {/* Integrity */}
        <div
          className="
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <ShieldCheck
            className="
              w-7
              h-7
              text-teal-400
              mb-10
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
            Ecosystem Integrity
          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-white
              mb-3
            "
          >
            {ecosystemIntegrity}
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Structural Continuity
          </div>

        </div>

        {/* Stability */}
        <div
          className="
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <Orbit
            className="
              w-7
              h-7
              text-blue-400
              mb-10
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
            Governance Stability
          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-white
              mb-3
            "
          >
            {governanceStability}
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Stability Density
          </div>

        </div>

        {/* Coverage */}
        <div
          className="
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <Globe
            className="
              w-7
              h-7
              text-cyan-400
              mb-10
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
            Coverage
          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-white
              mb-3
            "
          >
            {institutionalCoverage}
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Observability Reach
          </div>

        </div>

        {/* Predictive */}
        <div
          className="
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <Brain
            className="
              w-7
              h-7
              text-purple-400
              mb-10
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
            Predictive Visibility
          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-white
              mb-3
            "
          >
            {predictiveVisibility}
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Future Intelligence
          </div>

        </div>

        {/* Containment */}
        <div
          className="
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
          "
        >

          <Activity
            className="
              w-7
              h-7
              text-red-400
              mb-10
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
            Anomaly Containment
          </div>

          <div
            className="
              text-6xl
              tracking-[-0.07em]
              text-white
              mb-3
            "
          >
            {anomalyContainment}
          </div>

          <div
            className="
              text-sm
              text-slate-400
            "
          >
            Variance Suppression
          </div>

        </div>

      </div>

      {/* ======================================
          EXECUTIVE INTERPRETATION
      ====================================== */}

      <div
        className="
          relative
          z-10
          mt-20
          pt-12
          border-t
          border-white/10
        "
      >

        <div
          className="
            text-[11px]
            uppercase
            tracking-[0.24em]
            text-slate-500
            mb-6
          "
        >
          Sovereign Interpretation
        </div>

        <p
          className="
            text-3xl
            tracking-[-0.04em]
            leading-relaxed
            text-slate-300
            max-w-6xl
          "
        >
          The Sovereign Intelligence Layer functions as
          a unified institutional governance operating system —
          consolidating predictive intelligence,
          anomaly detection,
          escalation modeling,
          stabilization coordination,
          and ecosystem-wide operational observability
          into a sovereign execution infrastructure.
        </p>

      </div>

    </motion.section>

  );
}