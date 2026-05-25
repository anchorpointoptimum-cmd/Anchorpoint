"use client";

import { motion } from "framer-motion";

import {
  AlertTriangle,
  ShieldAlert,
  BadgeCheck,
  Wallet,
} from "lucide-react";

import {
  fadeUp,
  staggerContainer,
  scaleIn,
  panelHover,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface EvidenceItem {

  title: string;

  description: string;

  severity: string;

  evidenceType: string;

  governanceImpact: string;

  status: string;

  date: string;

  estimatedLeakageValue?: number;

}

interface EvidenceIntelligenceProps {

  evidence: EvidenceItem[];

  totalLeakageExposure?: number;

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
        badge:
          "bg-red-500/15 text-red-300 border-red-500/20",
        icon:
          "text-red-400",
      };

    case "High":

      return {
        badge:
          "bg-amber-500/15 text-amber-300 border-amber-500/20",
        icon:
          "text-amber-400",
      };

    default:

      return {
        badge:
          "bg-blue-500/15 text-blue-300 border-blue-500/20",
        icon:
          "text-blue-400",
      };

  }

}

function statusStyles(
  status: string
) {

  switch (status) {

    case "Resolved":

      return {
        badge:
          "bg-teal-500/15 text-teal-300 border-teal-500/20",
      };

    case "Monitoring":

      return {
        badge:
          "bg-amber-500/15 text-amber-300 border-amber-500/20",
      };

    default:

      return {
        badge:
          "bg-red-500/15 text-red-300 border-red-500/20",
      };

  }

}

/* =========================================================
   COMPONENT
========================================================= */

export default function EvidenceIntelligence({
  evidence,
  totalLeakageExposure = 0,
}: EvidenceIntelligenceProps) {

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
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[600px]
          bg-teal-500/10
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
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
          mb-14
        "
      >

        <div>

          <div
            className="
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-teal-400
              mb-4
            "
          >
            Governance Evidence Layer
          </div>

          <h2
            className="
              text-4xl
              md:text-5xl
              tracking-[-0.06em]
              leading-tight
              text-white
              max-w-4xl
            "
          >
            Operational evidence intelligence
            across institutional governance systems.
          </h2>

        </div>

        {/* Exposure Card */}
        <motion.div
          variants={scaleIn}
          className="
            relative
            overflow-hidden
            rounded-[34px]
            border
            border-emerald-500/20
            bg-white/[0.03]
            p-8
            min-w-[320px]
          "
        >

          <div
            className="
              absolute
              inset-0
              bg-emerald-500/10
              opacity-20
            "
          />

          <div className="relative z-10">

            <div
              className="
                flex
                items-center
                gap-3
                mb-5
              "
            >

              <Wallet
                className="
                  w-5
                  h-5
                  text-emerald-400
                "
              />

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                "
              >
                Aggregate Leakage Exposure
              </div>

            </div>

            <div
              className="
                text-5xl
                tracking-[-0.06em]
                text-emerald-400
                mb-3
              "
            >
              ₦{(
                totalLeakageExposure || 0
              ).toLocaleString()}
            </div>

            <div
              className="
                text-sm
                text-emerald-300
              "
            >
              Estimated Governance Exposure
            </div>

          </div>

        </motion.div>

      </div>

      {/* =====================================================
          EVIDENCE STACK
      ===================================================== */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          relative
          z-10
          space-y-6
        "
      >

        {evidence.map(
          (
            item,
            index
          ) => {

            const severity =
              severityStyles(
                item.severity
              );

            const status =
              statusStyles(
                item.status
              );

            return (

              <motion.div
                key={index}
                variants={fadeUp}
                {...panelHover}
                className="
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                "
              >

                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-20
                    bg-gradient-to-br
                    from-white/[0.04]
                    to-transparent
                  "
                />

                <div className="relative z-10">

                  {/* =====================================
                      TOP ROW
                  ===================================== */}

                  <div
                    className="
                      flex
                      flex-col
                      xl:flex-row
                      xl:items-start
                      xl:justify-between
                      gap-8
                      mb-8
                    "
                  >

                    {/* Left */}
                    <div className="flex-1">

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-3
                          mb-5
                        "
                      >

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
                            ${severity.badge}
                          `}
                        >

                          <AlertTriangle
                            className={`
                              w-4
                              h-4
                              ${severity.icon}
                            `}
                          />

                          {item.severity}

                        </div>

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

                          {item.evidenceType}

                        </div>

                        <div
                          className={`
                            px-4
                            py-2
                            rounded-full
                            border
                            text-sm
                            ${status.badge}
                          `}
                        >

                          {item.status}

                        </div>

                      </div>

                      <h3
                        className="
                          text-3xl
                          tracking-[-0.04em]
                          text-white
                          mb-4
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-slate-400
                          leading-relaxed
                          max-w-4xl
                          text-lg
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                    {/* Right */}
                    <div
                      className="
                        xl:text-right
                        min-w-[220px]
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
                        Estimated Exposure
                      </div>

                      <div
                        className="
                          text-4xl
                          tracking-[-0.05em]
                          text-emerald-400
                          mb-2
                        "
                      >
                        ₦{(
                          item.estimatedLeakageValue || 0
                        ).toLocaleString()}
                      </div>

                      <div
                        className="
                          text-sm
                          text-slate-500
                        "
                      >
                        Financial Governance Impact
                      </div>

                    </div>

                  </div>

                  {/* =====================================
                      METRICS GRID
                  ===================================== */}

                  <div
                    className="
                      grid
                      md:grid-cols-3
                      gap-6
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
                          Governance Impact
                        </div>

                      </div>

                      <div
                        className="
                          text-slate-300
                          leading-relaxed
                        "
                      >
                        {item.governanceImpact}
                      </div>

                    </div>

                    {/* Status */}
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

                        <BadgeCheck
                          className="
                            w-4
                            h-4
                            text-teal-400
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
                          Resolution State
                        </div>

                      </div>

                      <div
                        className="
                          text-slate-300
                        "
                      >
                        {item.status}
                      </div>

                    </div>

                    {/* Date */}
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
                          text-xs
                          uppercase
                          tracking-[0.16em]
                          text-slate-500
                          mb-3
                        "
                      >
                        Recorded Date
                      </div>

                      <div
                        className="
                          text-slate-300
                        "
                      >
                        {item.date}
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