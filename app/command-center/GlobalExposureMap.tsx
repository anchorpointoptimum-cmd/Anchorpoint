"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface ExposureNode {
  name: string;

  exposure: number;

  sector: string;
}

interface GlobalExposureMapProps {
  nodes: ExposureNode[];
}

/* =========================================================
   HELPERS
========================================================= */

function exposureIntensity(
  value: number
) {

  if (value >= 100000000)
    return {
      size: "w-40 h-40",
      glow: "bg-red-500/30",
      label: "Critical",
    };

  if (value >= 50000000)
    return {
      size: "w-32 h-32",
      glow: "bg-amber-500/30",
      label: "High",
    };

  if (value >= 20000000)
    return {
      size: "w-24 h-24",
      glow: "bg-blue-500/30",
      label: "Moderate",
    };

  return {
    size: "w-16 h-16",
    glow: "bg-emerald-500/30",
    label: "Contained",
  };

}

/* =========================================================
   COMPONENT
========================================================= */

export default function GlobalExposureMap({
  nodes,
}: GlobalExposureMapProps) {

  /*
    Aggregate Exposure
  */
  const totalExposure =
    nodes.reduce(
      (
        sum,
        item
      ) =>
        sum +
        item.exposure,
      0
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
          left-1/2
          -translate-x-1/2
          w-[1200px]
          h-[500px]
          bg-emerald-500/10
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
              text-teal-400
              mb-5
            "
          >
            Global Exposure Map
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
            Ecosystem-wide governance
            leakage concentration
            across operational systems.
          </h2>

        </div>

        {/* Total */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            px-8
            py-7
            backdrop-blur-xl
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
            Aggregate Exposure
          </div>

          <div
            className="
              text-5xl
              tracking-[-0.06em]
              text-emerald-400
            "
          >
            ₦
            {totalExposure.toLocaleString()}
          </div>

        </div>

      </div>

      {/* ==========================================
          EXPOSURE FIELD
      ========================================== */}

      <div
        className="
          relative
          z-10
          min-h-[700px]
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.02]
          overflow-hidden
        "
      >

        {/* Dynamic Nodes */}
        <div
          className="
            absolute
            inset-0
          "
        >

          {nodes.map(
            (
              node,
              index
            ) => {

              const config =
                exposureIntensity(
                  node.exposure
                );

              /*
                Positioning
              */
              const top =
                (
                  (
                    index * 17
                  ) % 70
                ) + 10;

              const left =
                (
                  (
                    index * 23
                  ) % 75
                ) + 8;

              return (

                <motion.div
                  key={node.name}
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    absolute
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                  }}
                >

                  {/* Glow */}
                  <div
                    className={`
                      absolute
                      rounded-full
                      blur-3xl
                      ${config.size}
                      ${config.glow}
                    `}
                  />

                  {/* Core */}
                  <div
                    className={`
                      relative
                      rounded-full
                      border
                      border-white/10
                      bg-black/70
                      backdrop-blur-xl
                      flex
                      items-center
                      justify-center
                      text-center
                      p-4
                      ${config.size}
                    `}
                  >

                    <div>

                      <div
                        className="
                          text-white
                          text-sm
                          font-medium
                          leading-tight
                          mb-2
                        "
                      >
                        {node.name}
                      </div>

                      <div
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.18em]
                          text-slate-500
                          mb-2
                        "
                      >
                        {config.label}
                      </div>

                      <div
                        className="
                          text-xs
                          text-emerald-400
                        "
                      >
                        ₦
                        {(
                          node.exposure / 1000000
                        ).toFixed(1)}M
                      </div>

                    </div>

                  </div>

                </motion.div>

              );

            }
          )}

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
          Exposure Interpretation
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
          The Global Exposure Map visualizes
          governance-linked operational leakage
          concentration across interconnected
          institutional systems,
          exposing escalation density,
          systemic recovery asymmetry,
          and ecosystem-wide operational pressure.
        </p>

      </div>

    </motion.section>

  );

}