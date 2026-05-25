"use client";

import { motion } from "framer-motion";

import {
  Brain,
  AlertTriangle,
  Radar,
  TrendingUp,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface EscalationNode {

  organization: string;

  escalationProbability: number;

  governanceInstability: number;

  recoveryStrength: number;

}

interface PredictiveEscalationEngineProps {

  nodes: EscalationNode[];

}

/* =========================================================
   HELPERS
========================================================= */

function escalationState(
  probability: number
) {

  if (probability >= 80) {

    return {

      label:
        "Critical Escalation Risk",

      color:
        "text-red-400",

      border:
        "border-red-500/20",

      glow:
        "bg-red-500/10",

    };

  }

  if (probability >= 60) {

    return {

      label:
        "Elevated Escalation Risk",

      color:
        "text-amber-400",

      border:
        "border-amber-500/20",

      glow:
        "bg-amber-500/10",

    };

  }

  if (probability >= 40) {

    return {

      label:
        "Transitional Risk",

      color:
        "text-blue-400",

      border:
        "border-blue-500/20",

      glow:
        "bg-blue-500/10",

    };

  }

  return {

    label:
      "Contained",

    color:
      "text-teal-400",

    border:
      "border-teal-500/20",

    glow:
      "bg-teal-500/10",

  };

}

/* =========================================================
   COMPONENT
========================================================= */

export default function PredictiveEscalationEngine({
  nodes,
}: PredictiveEscalationEngineProps) {

  /*
    Ecosystem Forecast
  */
  const ecosystemRisk =
    nodes.length === 0
      ? 0
      : Math.round(
          nodes.reduce(
            (
              sum,
              item
            ) =>
              sum +
              item.escalationProbability,
            0
          ) /
          nodes.length
        );

  const ecosystemState =
    escalationState(
      ecosystemRisk
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
          bg-red-500/10
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

            <Brain
              className="
                w-4
                h-4
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
              Predictive Escalation Engine
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
            Forecasting governance
            instability before escalation
            conditions fully materialize.
          </h2>

        </div>

        {/* Ecosystem Forecast */}
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
            Ecosystem Forecast
          </div>

          <div
            className={`
              text-6xl
              tracking-[-0.07em]
              mb-3
              ${ecosystemState.color}
            `}
          >
            {ecosystemRisk}%
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
          ENGINE GRID
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

        {nodes.map(
          (
            node,
            index
          ) => {

            const state =
              escalationState(
                node.escalationProbability
              );

            return (

              <motion.div
                key={
                  node.organization
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
                        {node.organization}
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
                        node.escalationProbability
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

                    {/* Instability */}
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
                          flex
                          items-center
                          gap-2
                          mb-3
                        "
                      >

                        <AlertTriangle
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
                            tracking-[0.18em]
                            text-slate-500
                          "
                        >
                          Instability
                        </div>

                      </div>

                      <div
                        className="
                          text-3xl
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {
                          node.governanceInstability
                        }
                        %
                      </div>

                    </div>

                    {/* Recovery */}
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
                          flex
                          items-center
                          gap-2
                          mb-3
                        "
                      >

                        <TrendingUp
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
                            tracking-[0.18em]
                            text-slate-500
                          "
                        >
                          Recovery
                        </div>

                      </div>

                      <div
                        className="
                          text-3xl
                          tracking-[-0.04em]
                          text-white
                        "
                      >
                        {
                          node.recoveryStrength
                        }
                        %
                      </div>

                    </div>

                  </div>

                  {/* Forecast */}
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-6
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
                        flex
                        items-center
                        gap-2
                        text-slate-500
                        text-sm
                      "
                    >

                      <Radar
                        className="
                          w-4
                          h-4
                        "
                      />

                      Predictive Governance Model

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
          Predictive Interpretation
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
          Predictive escalation intelligence models
          governance instability probability,
          structural recovery asymmetry,
          and recurring operational pressure convergence
          before systemic escalation thresholds are reached.
        </p>

      </div>

    </motion.section>

  );

}