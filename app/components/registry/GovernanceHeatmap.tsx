"use client";

import { motion } from "framer-motion";

import {
  GovernanceEvidence,
  GovernanceDriver,
} from "@/app/types/registry";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface GovernanceHeatmapProps {
  evidence: GovernanceEvidence[];

  drivers: GovernanceDriver[];
}

/* =========================================================
   HEATMAP CELL
========================================================= */

function getIntensity(
  severity: string
) {

  switch (severity) {

    case "Critical":
      return {
        bg: "bg-red-500/90",
        glow:
          "shadow-[0_0_30px_rgba(239,68,68,0.35)]",
      };

    case "High":
      return {
        bg: "bg-amber-500/80",
        glow:
          "shadow-[0_0_24px_rgba(245,158,11,0.25)]",
      };

    case "Medium":
      return {
        bg: "bg-teal-500/70",
        glow:
          "shadow-[0_0_20px_rgba(20,184,166,0.2)]",
      };

    default:
      return {
        bg: "bg-slate-700/60",
        glow:
          "shadow-[0_0_12px_rgba(100,116,139,0.15)]",
      };

  }

}

/* =========================================================
   COMPONENT
========================================================= */

export default function GovernanceHeatmap({
  evidence,
  drivers,
}: GovernanceHeatmapProps) {

  /*
    Merge intelligence
  */
  const heatmapData = [
    ...evidence.map(
      (item) => ({
        label:
          item.evidenceType,
        severity:
          item.severity,
      })
    ),

    ...drivers.map(
      (item) => ({
        label:
          item.driver,
        severity:
          item.severity,
      })
    ),
  ];

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
          bottom-0
          right-0
          w-[500px]
          h-[300px]
          bg-red-500/10
          blur-[120px]
        "
      />

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="relative z-10 mb-10">

        <div
          className="
            text-[11px]
            uppercase
            tracking-[0.22em]
            text-slate-500
            mb-5
          "
        >
          Governance Concentration Matrix
        </div>

        <h2
          className="
            text-3xl
            md:text-4xl
            tracking-[-0.05em]
            leading-tight
            text-white
            max-w-3xl
          "
        >
          Structural pressure concentration
          across governance intelligence layers.
        </h2>

      </div>

      {/* ==========================================
          HEATMAP GRID
      ========================================== */}

      <div
        className="
          relative
          z-10
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          gap-4
        "
      >

        {heatmapData.map(
          (item, index) => {

            const intensity =
              getIntensity(
                item.severity
              );

            return (

              <div
                key={index}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  p-5
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  ${intensity.glow}
                `}
              >

                {/* Heat Layer */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-80
                    ${intensity.bg}
                  `}
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-white/10
                    to-transparent
                  "
                />

                {/* Content */}
                <div className="relative z-10">

                  <div
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-white/70
                      mb-4
                    "
                  >
                    {item.severity}
                  </div>

                  <div
                    className="
                      text-sm
                      md:text-base
                      text-white
                      leading-relaxed
                    "
                  >
                    {item.label}
                  </div>

                </div>

              </div>

            );

          }
        )}

      </div>

      {/* ==========================================
          FOOTER INTERPRETATION
      ========================================== */}

      <div
        className="
          relative
          z-10
          mt-10
          pt-8
          border-t
          border-white/10
        "
      >

        <p
          className="
            text-sm
            leading-relaxed
            text-slate-400
            max-w-4xl
          "
        >
          The governance concentration matrix
          visualizes pressure accumulation density
          across operational evidence
          and structural governance drivers,
          exposing escalation convergence patterns
          and systemic recovery constraints.
        </p>

      </div>

    </motion.section>

  );

}