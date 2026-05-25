"use client";

import { motion } from "framer-motion";

import {
  BrainCircuit,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface AIGovernanceInterpreterProps {

  operationalState: string;

  systemicRisk: string;

  exposure: number;

  recurringDrivers: number;

  stabilization: number;

}

/* =========================================================
   INTERPRETATION ENGINE
========================================================= */

function generateInterpretation({

  operationalState,

  systemicRisk,

  exposure,

  recurringDrivers,

  stabilization,

}: AIGovernanceInterpreterProps) {

  /*
    Narrative
  */
  let narrative =
    "";

  /*
    Structural Logic
  */
  if (
    systemicRisk ===
    "Critical Escalation Risk"
  ) {

    narrative =
      `
      Governance intelligence indicates concentrated
      structural instability across interconnected
      operational systems. Escalation density,
      unresolved exposure concentration,
      and recurring governance failures are now
      exerting measurable pressure on stabilization continuity.
      `;

  } else if (
    systemicRisk ===
    "Elevated Governance Pressure"
  ) {

    narrative =
      `
      Operational governance conditions indicate
      elevated systemic pressure driven primarily
      by recurring execution instability and
      asymmetric recovery behavior across institutional environments.
      `;

  } else {

    narrative =
      `
      Governance systems currently remain operationally contained,
      however low-frequency structural instability patterns
      continue requiring active observability oversight.
      `;

  }

  /*
    Recovery Logic
  */
  let recovery =
    "";

  if (
    stabilization >= 75
  ) {

    recovery =
      `
      Stabilization momentum remains active,
      indicating improving governance normalization velocity
      and reduced escalation persistence.
      `;

  } else if (
    stabilization >= 45
  ) {

    recovery =
      `
      Recovery systems remain transitional,
      with partial governance normalization
      occurring unevenly across monitored entities.
      `;

  } else {

    recovery =
      `
      Recovery acceleration remains constrained,
      increasing the probability of recurring
      governance escalation cycles.
      `;

  }

  /*
    Exposure Logic
  */
  let exposureNarrative =
    "";

  if (
    exposure >= 100000000
  ) {

    exposureNarrative =
      `
      Aggregate leakage exposure now exceeds
      high-density governance thresholds,
      increasing ecosystem-wide operational vulnerability.
      `;

  } else if (
    exposure >= 50000000
  ) {

    exposureNarrative =
      `
      Exposure concentration remains elevated,
      requiring continued stabilization oversight
      and systemic governance intervention.
      `;

  } else {

    exposureNarrative =
      `
      Exposure distribution remains operationally manageable
      under current governance conditions.
      `;

  }

  /*
    Driver Logic
  */
  let drivers =
    recurringDrivers >= 5
      ? `
      Recurring governance drivers indicate persistent
      structural execution pressure patterns
      capable of destabilizing operational continuity.
      `
      : `
      Recurring driver density remains within
      manageable governance thresholds.
      `;

  return `
${narrative}

${recovery}

${exposureNarrative}

${drivers}
`;

}

/* =========================================================
   COMPONENT
========================================================= */

export default function AIGovernanceInterpreter(
  props: AIGovernanceInterpreterProps
) {

  const interpretation =
    generateInterpretation(
      props
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
          w-[1000px]
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

            <Sparkles
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
              AI Governance Interpretation
            </div>

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
            Autonomous governance reasoning
            across operational ecosystems.
          </h2>

        </div>

        {/* Engine Status */}
        <div
          className="
            flex
            items-center
            gap-4
            rounded-full
            border
            border-teal-500/20
            bg-teal-500/10
            px-6
            py-4
          "
        >

          <BrainCircuit
            className="
              w-5
              h-5
              text-teal-400
            "
          />

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-teal-300
            "
          >
            Interpretation Engine Active
          </div>

        </div>

      </div>

      {/* ======================================
          INTERPRETATION PANEL
      ====================================== */}

      <div
        className="
          relative
          z-10
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          p-10
        "
      >

        {/* Top */}
        <div
          className="
            flex
            items-center
            gap-4
            mb-10
          "
        >

          <div
            className="
              rounded-2xl
              p-4
              bg-red-500/10
              border
              border-red-500/20
            "
          >

            <ShieldAlert
              className="
                w-6
                h-6
                text-red-400
              "
            />

          </div>

          <div>

            <div
              className="
                text-sm
                uppercase
                tracking-[0.18em]
                text-slate-500
                mb-2
              "
            >
              Operational Interpretation
            </div>

            <div
              className="
                text-2xl
                tracking-[-0.04em]
                text-white
              "
            >
              {props.systemicRisk}
            </div>

          </div>

        </div>

        {/* Narrative */}
        <div
          className="
            space-y-8
            text-xl
            leading-relaxed
            text-slate-300
            whitespace-pre-line
            max-w-6xl
          "
        >
          {interpretation}
        </div>

      </div>

    </motion.section>

  );

}