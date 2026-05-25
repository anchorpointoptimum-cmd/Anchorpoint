"use client";

import { motion } from "framer-motion";

import {
  GovernanceEvidence,
} from "@/app/types/registry";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface StabilizationFlowProps {
  evidence: GovernanceEvidence[];
}

/* =========================================================
   COMPONENT
========================================================= */

export default function StabilizationFlow({
  evidence,
}: StabilizationFlowProps) {

  /*
    Metrics
  */
  const resolved =
    evidence.filter(
      (item) =>
        item.status ===
        "Resolved"
    ).length;

  const unresolved =
    evidence.filter(
      (item) =>
        item.status !==
        "Resolved"
    ).length;

  const total =
    evidence.length;

  /*
    Progress
  */
  const stabilization =
    total === 0
      ? 0
      : Math.round(
          (
            resolved / total
          ) * 100
        );

  /*
    Interpretation
  */
  let interpretation =
    "Governance systems remain under active stabilization observation.";

  if (
    stabilization >= 75
  ) {

    interpretation =
      "Governance recovery conditions indicate strong operational normalization momentum.";

  } else if (
    stabilization >= 45
  ) {

    interpretation =
      "Governance recovery systems remain active with measurable stabilization progression.";

  } else if (
    unresolved >
    resolved
  ) {

    interpretation =
      "Structural instability continues exerting operational pressure across unresolved governance layers.";

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
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
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
          opacity-[0.03]
          registry-grid
        "
      />

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[300px]
          bg-teal-500/10
          blur-[120px]
        "
      />

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="relative z-10 mb-14">

        <div
          className="
            text-[11px]
            uppercase
            tracking-[0.22em]
            text-slate-500
            mb-5
          "
        >
          Stabilization Intelligence
        </div>

        <h2
          className="
            text-3xl
            md:text-4xl
            tracking-[-0.05em]
            leading-tight
            text-white
            max-w-4xl
          "
        >
          Governance recovery progression
          across operational pressure systems.
        </h2>

      </div>

      {/* ==========================================
          FLOW
      ========================================== */}

      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-3
          gap-6
          items-center
        "
      >

        {/* Resolved */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-emerald-500/20
            bg-emerald-500/10
            p-8
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-emerald-300
              mb-4
            "
          >
            Resolved Signals
          </div>

          <div
            className="
              text-6xl
              tracking-[-0.06em]
              text-white
            "
          >
            {resolved}
          </div>

        </div>

        {/* Flow Center */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-6
          "
        >

          {/* Progress Ring */}
          <div
            className="
              relative
              w-[180px]
              h-[180px]
              rounded-full
              flex
              items-center
              justify-center
              border
              border-white/10
              bg-black/20
            "
          >

            <div
              className="
                absolute
                inset-0
                rounded-full
                border-[10px]
                border-teal-500/20
              "
            />

            <div
              className="
                text-center
              "
            >

              <div
                className="
                  text-5xl
                  tracking-[-0.06em]
                  text-white
                "
              >
                {stabilization}%
              </div>

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                  mt-2
                "
              >
                Stabilized
              </div>

            </div>

          </div>

          {/* Flow Line */}
          <div
            className="
              hidden
              lg:block
              w-full
              h-px
              bg-gradient-to-r
              from-emerald-500/20
              via-teal-500/60
              to-red-500/20
            "
          />

        </div>

        {/* Unresolved */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-red-500/20
            bg-red-500/10
            p-8
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-red-300
              mb-4
            "
          >
            Unresolved Signals
          </div>

          <div
            className="
              text-6xl
              tracking-[-0.06em]
              text-white
            "
          >
            {unresolved}
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
          mt-14
          pt-10
          border-t
          border-white/10
        "
      >

        <div
          className="
            text-sm
            uppercase
            tracking-[0.18em]
            text-slate-500
            mb-4
          "
        >
          Recovery Interpretation
        </div>

        <p
          className="
            text-xl
            leading-relaxed
            text-slate-300
            max-w-5xl
          "
        >
          {interpretation}
        </p>

      </div>

    </motion.section>

  );

}