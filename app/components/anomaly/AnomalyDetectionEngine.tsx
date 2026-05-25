"use client";

import { motion } from "framer-motion";

import {
  Activity,
  AlertTriangle,
  ScanSearch,
  ShieldAlert,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface AnomalyNode {

  organization: string;

  anomalyScore: number;

  deviationLevel: number;

  recoveryVariance: number;

  anomalyType: string;

}

interface AnomalyDetectionEngineProps {

  anomalies: AnomalyNode[];

}

/* =========================================================
   HELPERS
========================================================= */

function anomalyState(
  score: number
) {

  if (score >= 85) {

    return {

      label:
        "Critical Structural Anomaly",

      color:
        "text-red-400",

      border:
        "border-red-500/20",

      glow:
        "bg-red-500/10",

      icon:
        ShieldAlert,

    };

  }

  if (score >= 65) {

    return {

      label:
        "Elevated Operational Divergence",

      color:
        "text-amber-400",

      border:
        "border-amber-500/20",

      glow:
        "bg-amber-500/10",

      icon:
        AlertTriangle,

    };

  }

  if (score >= 40) {

    return {

      label:
        "Transitional Variance",

      color:
        "text-blue-400",

      border:
        "border-blue-500/20",

      glow:
        "bg-blue-500/10",

      icon:
        ScanSearch,

    };

  }

  return {

    label:
      "Contained Variance",

    color:
      "text-teal-400",

    border:
      "border-teal-500/20",

    glow:
      "bg-teal-500/10",

    icon:
      Activity,

  };

}

/* =========================================================
   COMPONENT
========================================================= */

export default function AnomalyDetectionEngine({
  anomalies,
}: AnomalyDetectionEngineProps) {

  /*
    Ecosystem Variance
  */
  const ecosystemVariance =
    anomalies.length === 0
      ? 0
      : Math.round(
          anomalies.reduce(
            (
              sum,
              item
            ) =>
              sum +
              item.anomalyScore,
            0
          ) /
          anomalies.length
        );

  const ecosystemState =
    anomalyState(
      ecosystemVariance
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
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[1100px]
          h-[500px]
          bg-purple-500/10
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

            <ScanSearch
              className="
                w-4
                h-4
                text-purple-400
              "
            />

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-purple-400
              "
            >
              Anomaly Detection Engine
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
            Detecting abnormal governance
            behavior across institutional
            operational systems.
          </h2>

        </div>

        {/* Ecosystem Variance */}
        <div
          className={`
            rounded-[32px]
            border
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
            min-w-[320px]
            ${ecosystemState.border}
          `}
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
            Ecosystem Variance
          </div>

          <div
            className={`
              text-6xl
              tracking-[-0.07em]
              mb-3
              ${ecosystemState.color}
            `}
          >
            {ecosystemVariance}%
          </div>

          <div
            className={`
              text-sm
              ${ecosystemState.color}
            `}
          >
            {ecosystemState.label}
          </div>

        </div>

      </div>

      {/* ======================================
          ANOMALY GRID
      ====================================== */}

      <div
        className="
          relative
          z-10
          grid
          xl:grid-cols-2
          gap-8
        "
      >

        {anomalies.map(
          (
            anomaly,
            index
          ) => {

            const state =
              anomalyState(
                anomaly.anomalyScore
              );

            const Icon =
              state.icon;

            return (

              <motion.div
                key={
                  anomaly.organization
                }
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
                  bg-white/[0.03]
                  p-8
                  ${state.border}
                `}
              >

                {/* Glow */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-30
                    ${state.glow}
                  `}
                />

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

                    <div
                      className="
                        flex
                        items-start
                        gap-5
                      "
                    >

                      <div
                        className={`
                          rounded-2xl
                          p-4
                          bg-black/30
                          ${state.color}
                        `}
                      >

                        <Icon
                          className="
                            w-6
                            h-6
                          "
                        />

                      </div>

                      <div>

                        <div
                          className="
                            text-xs
                            uppercase
                            tracking-[0.18em]
                            text-slate-500
                            mb-3
                          "
                        >
                          Organization
                        </div>

                        <div
                          className="
                            text-3xl
                            tracking-[-0.05em]
                            text-white
                            max-w-md
                          "
                        >
                          {
                            anomaly.organization
                          }
                        </div>

                      </div>

                    </div>

                    <div
                      className={`
                        text-5xl
                        tracking-[-0.07em]
                        ${state.color}
                      `}
                    >
                      {
                        anomaly.anomalyScore
                      }
                      %
                    </div>

                  </div>

                  {/* Metrics */}
                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-5
                      mb-8
                    "
                  >

                    {/* Deviation */}
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
                          text-slate-500
                          mb-3
                        "
                      >
                        Deviation
                      </div>

                      <div
                        className="
                          text-3xl
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {
                          anomaly.deviationLevel
                        }
                        %
                      </div>

                    </div>

                    {/* Recovery Variance */}
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
                          text-slate-500
                          mb-3
                        "
                      >
                        Recovery Variance
                      </div>

                      <div
                        className="
                          text-3xl
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {
                          anomaly.recoveryVariance
                        }
                        %
                      </div>

                    </div>

                  </div>

                  {/* Footer */}
                  <div
                    className="
                      flex
                      flex-col
                      xl:flex-row
                      xl:items-center
                      xl:justify-between
                      gap-5
                      pt-6
                      border-t
                      border-white/10
                    "
                  >

                    <div
                      className={`
                        inline-flex
                        px-4
                        py-2
                        rounded-full
                        border
                        bg-black/30
                        text-sm
                        ${state.border}
                        ${state.color}
                      `}
                    >
                      {state.label}
                    </div>

                    <div
                      className="
                        text-sm
                        text-slate-400
                      "
                    >
                      {
                        anomaly.anomalyType
                      }
                    </div>

                  </div>

                </div>

              </motion.div>

            );

          }
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
          Anomaly Interpretation
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
          Anomaly intelligence detects structural governance irregularities,
          operational behavior divergence,
          recovery asymmetry,
          and execution discontinuities capable of triggering systemic instability.
        </p>

      </div>

    </motion.section>

  );

}