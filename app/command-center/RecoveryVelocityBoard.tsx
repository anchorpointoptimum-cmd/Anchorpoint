"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface RecoveryNode {
  organization: string;

  recoveryVelocity: number;

  stabilization: number;

  momentum: string;
}

interface RecoveryVelocityBoardProps {
  organizations: RecoveryNode[];
}

/* =========================================================
   HELPERS
========================================================= */

function velocityColor(
  value: number
) {

  if (value >= 80)
    return "text-emerald-400";

  if (value >= 60)
    return "text-teal-400";

  if (value >= 40)
    return "text-amber-400";

  return "text-red-400";

}

function velocityBar(
  value: number
) {

  if (value >= 80)
    return "bg-emerald-400";

  if (value >= 60)
    return "bg-teal-400";

  if (value >= 40)
    return "bg-amber-400";

  return "bg-red-400";

}

/* =========================================================
   COMPONENT
========================================================= */

export default function RecoveryVelocityBoard({
  organizations,
}: RecoveryVelocityBoardProps) {

  /*
    Ecosystem Recovery Average
  */
  const averageRecovery =
    organizations.length === 0
      ? 0
      : Math.round(
          organizations.reduce(
            (
              sum,
              item
            ) =>
              sum +
              item.recoveryVelocity,
            0
          ) /
          organizations.length
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
          bottom-0
          left-0
          w-[900px]
          h-[500px]
          bg-teal-500/10
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
            Recovery Velocity Board
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
            Ecosystem stabilization
            momentum across institutional
            governance systems.
          </h2>

        </div>

        {/* Average */}
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
            Ecosystem Recovery
          </div>

          <div
            className="
              text-7xl
              tracking-[-0.08em]
              text-teal-400
            "
          >
            {averageRecovery}%
          </div>

        </div>

      </div>

      {/* ==========================================
          RECOVERY TABLE
      ========================================== */}

      <div
        className="
          relative
          z-10
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          overflow-hidden
        "
      >

        {/* Header */}
        <div
          className="
            grid
            grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]
            gap-6
            px-8
            py-6
            border-b
            border-white/10
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-slate-500
          "
        >

          <div>Organization</div>

          <div>Recovery Velocity</div>

          <div>Stabilization</div>

          <div>Momentum</div>

        </div>

        {/* Rows */}
        <div>

          {organizations.map(
            (
              item,
              index
            ) => (

              <motion.div
                key={item.organization}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay:
                    index * 0.04,
                }}
                viewport={{
                  once: true,
                }}
                className="
                  grid
                  grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]
                  gap-6
                  px-8
                  py-7
                  border-b
                  border-white/5
                  items-center
                "
              >

                {/* Organization */}
                <div>

                  <div
                    className="
                      text-white
                      text-lg
                      tracking-[-0.03em]
                      mb-2
                    "
                  >
                    {item.organization}
                  </div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-[0.16em]
                      text-slate-500
                    "
                  >
                    Governance Recovery
                  </div>

                </div>

                {/* Velocity */}
                <div>

                  <div
                    className={`
                      text-3xl
                      tracking-[-0.05em]
                      mb-3
                      ${velocityColor(
                        item.recoveryVelocity
                      )}
                    `}
                  >
                    {item.recoveryVelocity}%
                  </div>

                  <div
                    className="
                      h-2
                      rounded-full
                      bg-white/5
                      overflow-hidden
                      max-w-[180px]
                    "
                  >

                    <div
                      className={`
                        h-full
                        rounded-full
                        ${velocityBar(
                          item.recoveryVelocity
                        )}
                      `}
                      style={{
                        width:
                          `${item.recoveryVelocity}%`,
                      }}
                    />

                  </div>

                </div>

                {/* Stabilization */}
                <div
                  className="
                    text-2xl
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {item.stabilization}%
                </div>

                {/* Momentum */}
                <div>

                  <div
                    className="
                      inline-flex
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-sm
                      text-slate-300
                    "
                  >
                    {item.momentum}
                  </div>

                </div>

              </motion.div>

            )
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
          Recovery Interpretation
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
          Recovery velocity intelligence measures
          governance normalization momentum,
          stabilization acceleration,
          and ecosystem resilience progression
          across interconnected operational environments.
        </p>

      </div>

    </motion.section>

  );

}