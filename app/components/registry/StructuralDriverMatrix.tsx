"use client";

import { motion } from "framer-motion";

import {
  AlertTriangle,
  ShieldAlert,
  Orbit,
  Brain,
} from "lucide-react";

import {
  fadeUp,
  staggerContainer,
  panelHover,
} from "@/app/lib/motion";

import {
  GovernanceDriver,
} from "@/app/types/registry";

/* =========================================================
   TYPES
========================================================= */

interface StructuralDriverMatrixProps {

  drivers: GovernanceDriver[];

}

/* =========================================================
   HELPERS
========================================================= */

function severityStyles(
  severity: string
) {

  switch (severity) {

    case "Critical":

      return {
        border:
          "border-red-500/20",
        glow:
          "bg-red-500/10",
        text:
          "text-red-300",
        icon:
          "text-red-400",
      };

    case "High":

      return {
        border:
          "border-amber-500/20",
        glow:
          "bg-amber-500/10",
        text:
          "text-amber-300",
        icon:
          "text-amber-400",
      };

    default:

      return {
        border:
          "border-blue-500/20",
        glow:
          "bg-blue-500/10",
        text:
          "text-blue-300",
        icon:
          "text-blue-400",
      };

  }

}

/* =========================================================
   COMPONENT
========================================================= */

export default function StructuralDriverMatrix({
  drivers,
}: StructuralDriverMatrixProps) {

  const criticalDrivers =
    drivers.filter(
      (driver) =>
        driver.severity ===
        "Critical"
    ).length;

  const recurringDrivers =
    drivers.filter(
      (driver) =>
        driver.recurrence ===
        "Recurring"
    ).length;

  const constrainedDrivers =
    drivers.filter(
      (driver) =>
        driver.operationalImpact ===
        "Recovery Constraint"
    ).length;

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

      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          registry-grid
          opacity-[0.04]
        "
      />

      <div
        className="
          absolute
          top-0
          right-0
          w-[700px]
          h-[700px]
          bg-red-500/10
          blur-[220px]
        "
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

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
          mb-14
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

            <Orbit
              className="
                w-5
                h-5
                text-red-400
              "
            />

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-red-400
              "
            >
              Structural Governance Drivers
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
            Institutional pressure systems
            influencing governance stability
            and operational continuity.
          </h2>

        </div>

        {/* Summary Grid */}
        <div
          className="
            grid
            grid-cols-3
            gap-4
            min-w-[420px]
          "
        >

          {/* Critical */}
          <div
            className="
              rounded-[28px]
              border
              border-red-500/20
              bg-red-500/10
              p-6
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.16em]
                text-red-300
                mb-3
              "
            >
              Critical
            </div>

            <div
              className="
                text-4xl
                tracking-[-0.06em]
                text-white
              "
            >
              {criticalDrivers}
            </div>

          </div>

          {/* Recurring */}
          <div
            className="
              rounded-[28px]
              border
              border-amber-500/20
              bg-amber-500/10
              p-6
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.16em]
                text-amber-300
                mb-3
              "
            >
              Recurring
            </div>

            <div
              className="
                text-4xl
                tracking-[-0.06em]
                text-white
              "
            >
              {recurringDrivers}
            </div>

          </div>

          {/* Constraints */}
          <div
            className="
              rounded-[28px]
              border
              border-blue-500/20
              bg-blue-500/10
              p-6
            "
          >

            <div
              className="
                text-xs
                uppercase
                tracking-[0.16em]
                text-blue-300
                mb-3
              "
            >
              Constraints
            </div>

            <div
              className="
                text-4xl
                tracking-[-0.06em]
                text-white
              "
            >
              {constrainedDrivers}
            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          DRIVER MATRIX
      ===================================================== */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          relative
          z-10
          grid
          xl:grid-cols-2
          gap-6
        "
      >

        {drivers.map(
          (
            driver,
            index
          ) => {

            const severity =
              severityStyles(
                driver.severity
              );

            return (

              <motion.div
                key={index}
                variants={fadeUp}
                {...panelHover}
                className={`
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  ${severity.border}
                `}
              >

                {/* Glow */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-20
                    ${severity.glow}
                  `}
                />

                <div className="relative z-10">

                  {/* =====================================
                      TOP
                  ===================================== */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-6
                      mb-8
                    "
                  >

                    <div className="flex-1">

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-3
                          mb-5
                        "
                      >

                        {/* Severity */}
                        <div
                          className={`
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            border
                            text-sm
                            ${severity.border}
                            ${severity.glow}
                            ${severity.text}
                          `}
                        >

                          <AlertTriangle
                            className={`
                              w-4
                              h-4
                              ${severity.icon}
                            `}
                          />

                          {driver.severity}

                        </div>

                        {/* Recurrence */}
                        {driver.recurrence && (

                          <div
                            className="
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

                            {driver.recurrence}

                          </div>

                        )}

                      </div>

                      {/* Title */}
                      <h3
                        className="
                          text-3xl
                          tracking-[-0.04em]
                          text-white
                          mb-4
                        "
                      >
                        {driver.driver}
                      </h3>

                      {/* Description */}
                      <p
                        className="
                          text-slate-400
                          leading-relaxed
                          text-lg
                        "
                      >
                        {
  driver.description ||
  "Structural governance pressure influencing operational continuity, recovery capability, and institutional stability."
}
                      </p>

                    </div>

                  </div>

                  {/* =====================================
                      METRICS
                  ===================================== */}

                  <div
                    className="
                      grid
                      md:grid-cols-2
                      gap-5
                      pt-8
                      border-t
                      border-white/10
                    "
                  >

                    {/* Impact */}
                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.02]
                        p-5
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          mb-3
                        "
                      >

                        <ShieldAlert
                          className="
                            w-4
                            h-4
                            text-red-400
                          "
                        />

                        <div
                          className="
                            text-xs
                            uppercase
                            tracking-[0.16em]
                            text-slate-500
                          "
                        >
                          Operational Impact
                        </div>

                      </div>

                      <div
                        className="
                          text-slate-300
                        "
                      >
                        {driver.operationalImpact || "Unknown"}
                      </div>

                    </div>

                    {/* Category */}
                    <div
                      className="
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.02]
                        p-5
                      "

                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          mb-3
                        "
                      >

                        <Brain
                          className="
                            w-4
                            h-4
                            text-cyan-400
                          "
                        />

                        <div
                          className="
                            text-xs
                            uppercase
                            tracking-[0.16em]
                            text-slate-500
                          "
                        >
                          Systemic Category
                        </div>

                      </div>

                      <div
                        className="
                          text-slate-300
                        "
                      >
                        {driver.systemicCategory || "Governance"}
                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            );

          }
        )}

      </motion.div>

    </motion.section>

  );

}