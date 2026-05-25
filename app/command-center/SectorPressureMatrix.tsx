"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface SectorData {
  sector: string;

  pressure: number;

  stabilization: number;

  exposure: number;
}

interface SectorPressureMatrixProps {
  sectors: SectorData[];
}

/* =========================================================
   HELPERS
========================================================= */

function pressureColor(
  value: number
) {

  if (value >= 80)
    return "from-red-500/40 to-red-500/10";

  if (value >= 60)
    return "from-amber-500/40 to-amber-500/10";

  if (value >= 40)
    return "from-blue-500/40 to-blue-500/10";

  return "from-emerald-500/40 to-emerald-500/10";

}

/* =========================================================
   COMPONENT
========================================================= */

export default function SectorPressureMatrix({
  sectors,
}: SectorPressureMatrixProps) {

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
          bottom-0
          right-0
          w-[700px]
          h-[400px]
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
          mb-14
        "
      >

        <div
          className="
            text-[11px]
            uppercase
            tracking-[0.24em]
            text-teal-400
            mb-5
          "
        >
          Sector Pressure Matrix
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
          Cross-sector governance
          pressure concentration
          across operational ecosystems.
        </h2>

      </div>

      {/* ==========================================
          MATRIX GRID
      ========================================== */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >

        {sectors.map(
          (
            sector,
            index
          ) => (

            <motion.div
              key={sector.sector}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay:
                  index * 0.06,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >

              {/* Pressure Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  opacity-30
                  bg-gradient-to-br
                  ${pressureColor(
                    sector.pressure
                  )}
                `}
              />

              {/* Content */}
              <div className="relative z-10">

                {/* Sector */}
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
                      text-[11px]
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                    "
                  >
                    Sector
                  </div>

                  <div
                    className="
                      text-xs
                      text-slate-500
                    "
                  >
                    #{index + 1}
                  </div>

                </div>

                <h3
                  className="
                    text-3xl
                    tracking-[-0.05em]
                    text-white
                    mb-10
                  "
                >
                  {sector.sector}
                </h3>

                {/* Metrics */}
                <div className="space-y-7">

                  {/* Pressure */}
                  <div>

                    <div
                      className="
                        flex
                        justify-between
                        items-center
                        mb-3
                      "
                    >

                      <div
                        className="
                          text-xs
                          uppercase
                          tracking-[0.16em]
                          text-slate-500
                        "
                      >
                        Pressure
                      </div>

                      <div
                        className="
                          text-white
                        "
                      >
                        {sector.pressure}%
                      </div>

                    </div>

                    <div
                      className="
                        h-2
                        rounded-full
                        bg-white/5
                        overflow-hidden
                      "
                    >

                      <div
                        className="
                          h-full
                          rounded-full
                          bg-red-400
                        "
                        style={{
                          width:
                            `${sector.pressure}%`,
                        }}
                      />

                    </div>

                  </div>

                  {/* Stabilization */}
                  <div>

                    <div
                      className="
                        flex
                        justify-between
                        items-center
                        mb-3
                      "
                    >

                      <div
                        className="
                          text-xs
                          uppercase
                          tracking-[0.16em]
                          text-slate-500
                        "
                      >
                        Stabilization
                      </div>

                      <div
                        className="
                          text-white
                        "
                      >
                        {sector.stabilization}%
                      </div>

                    </div>

                    <div
                      className="
                        h-2
                        rounded-full
                        bg-white/5
                        overflow-hidden
                      "
                    >

                      <div
                        className="
                          h-full
                          rounded-full
                          bg-teal-400
                        "
                        style={{
                          width:
                            `${sector.stabilization}%`,
                        }}
                      />

                    </div>

                  </div>

                  {/* Exposure */}
                  <div>

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.16em]
                        text-slate-500
                        mb-3
                      "
                    >
                      Leakage Exposure
                    </div>

                    <div
                      className="
                        text-3xl
                        tracking-[-0.05em]
                        text-emerald-400
                      "
                    >
                      ₦
                      {sector.exposure.toLocaleString()}
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          )
        )}

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
          Structural Interpretation
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
          Sector pressure mapping reveals
          governance instability concentration,
          operational recovery asymmetry,
          and structural leakage accumulation
          across interconnected execution ecosystems.
        </p>

      </div>

    </motion.section>

  );

}