"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface HeatmapNode {

  sector: string;

  pressure: number;

  exposure: number;

  stabilization: number;

}

interface GovernanceHeatmapProps {

  nodes: HeatmapNode[];

}

/* =========================================================
   HELPERS
========================================================= */

function pressureColor(
  pressure: number
) {

  if (pressure >= 80)
    return "from-red-500/40 to-red-500/5 border-red-500/30";

  if (pressure >= 60)
    return "from-amber-500/30 to-amber-500/5 border-amber-500/30";

  if (pressure >= 40)
    return "from-blue-500/30 to-blue-500/5 border-blue-500/30";

  return "from-teal-500/30 to-teal-500/5 border-teal-500/30";

}

function pressureGlow(
  pressure: number
) {

  if (pressure >= 80)
    return "bg-red-500/20";

  if (pressure >= 60)
    return "bg-amber-500/20";

  if (pressure >= 40)
    return "bg-blue-500/20";

  return "bg-teal-500/20";

}

/* =========================================================
   COMPONENT
========================================================= */

export default function GovernanceHeatmap({
  nodes,
}: GovernanceHeatmapProps) {

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
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]
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
              text-[11px]
              uppercase
              tracking-[0.24em]
              text-teal-400
              mb-5
            "
          >
            Governance Heatmap
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
            Institutional pressure density
            across operational ecosystems.
          </h2>

        </div>

        <div
          className="
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            px-6
            py-4
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-400
            "
          >
            Ecosystem Pressure Mapping
          </div>

        </div>

      </div>

      {/* ======================================
          HEATMAP GRID
      ====================================== */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-7
        "
      >

        {nodes.map(
          (
            node,
            index
          ) => (

            <motion.div
              key={node.sector}
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay:
                  index * 0.05,
              }}
              viewport={{
                once: true,
              }}
              className={`
                relative
                overflow-hidden
                rounded-[34px]
                border
                bg-gradient-to-br
                p-8
                backdrop-blur-xl
                ${pressureColor(
                  node.pressure
                )}
              `}
            >

              {/* Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  blur-[80px]
                  opacity-40
                  ${pressureGlow(
                    node.pressure
                  )}
                `}
              />

              {/* Content */}
              <div className="relative z-10">

                {/* Top */}
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-6
                    mb-10
                  "
                >

                  <div>

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                        mb-3
                      "
                    >
                      Sector Node
                    </div>

                    <div
                      className="
                        text-3xl
                        tracking-[-0.05em]
                        text-white
                      "
                    >
                      {node.sector}
                    </div>

                  </div>

                  {/* Pressure */}
                  <div
                    className="
                      text-right
                    "
                  >

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                        mb-2
                      "
                    >
                      Pressure
                    </div>

                    <div
                      className="
                        text-5xl
                        tracking-[-0.07em]
                        text-white
                      "
                    >
                      {node.pressure}
                    </div>

                  </div>

                </div>

                {/* Metrics */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-6
                    mb-8
                  "
                >

                  {/* Exposure */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-5
                    "
                  >

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                        mb-3
                      "
                    >
                      Exposure
                    </div>

                    <div
                      className="
                        text-2xl
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      ₦
                      {(
                        node.exposure /
                        1000000
                      ).toFixed(0)}
                      M
                    </div>

                  </div>

                  {/* Stabilization */}
                  <div
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-5
                    "
                  >

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                        mb-3
                      "
                    >
                      Stabilization
                    </div>

                    <div
                      className="
                        text-2xl
                        tracking-[-0.04em]
                        text-white
                      "
                    >
                      {node.stabilization}%
                    </div>

                  </div>

                </div>

                {/* Pressure Bar */}
                <div>

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mb-3
                    "
                  >

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-slate-400
                      "
                    >
                      Governance Density
                    </div>

                    <div
                      className="
                        text-sm
                        text-white
                      "
                    >
                      {node.pressure}%
                    </div>

                  </div>

                  <div
                    className="
                      h-3
                      rounded-full
                      bg-black/30
                      overflow-hidden
                    "
                  >

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width:
                          `${node.pressure}%`,
                      }}
                      transition={{
                        duration: 1,
                        delay:
                          0.2 +
                          index * 0.05,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-white
                      "
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          )
        )}

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
          Heatmap Interpretation
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
          Governance heatmapping reveals
          concentrated operational instability density,
          structural pressure convergence,
          and ecosystem-wide governance exposure patterns
          across institutional sectors.
        </p>

      </div>

    </motion.section>

  );

}