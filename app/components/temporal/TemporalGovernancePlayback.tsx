"use client";

import { motion } from "framer-motion";

import {
  Clock3,
  Activity,
  ShieldAlert,
  Radar,
} from "lucide-react";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface PlaybackEvent {

  id: number;

  date: string;

  organization: string;

  title: string;

  description: string;

  severity: string;

}

interface TemporalGovernancePlaybackProps {

  events: PlaybackEvent[];

}

/* =========================================================
   HELPERS
========================================================= */

function severityConfig(
  severity: string
) {

  switch (severity) {

    case "Critical":
      return {

        icon:
          ShieldAlert,

        color:
          "text-red-400",

        border:
          "border-red-500/20",

        glow:
          "bg-red-500/10",

      };

    case "High":
      return {

        icon:
          Radar,

        color:
          "text-amber-400",

        border:
          "border-amber-500/20",

        glow:
          "bg-amber-500/10",

      };

    default:
      return {

        icon:
          Activity,

        color:
          "text-teal-400",

        border:
          "border-teal-500/20",

        glow:
          "bg-teal-500/10",

      };

  }

}

/* =========================================================
   COMPONENT
========================================================= */

export default function TemporalGovernancePlayback({
  events,
}: TemporalGovernancePlaybackProps) {

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
          right-0
          w-[1000px]
          h-[500px]
          bg-blue-500/10
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

            <Clock3
              className="
                w-4
                h-4
                text-blue-400
              "
            />

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-blue-400
              "
            >
              Temporal Governance Playback
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
            Historical governance
            escalation playback
            across institutional systems.
          </h2>

        </div>

        {/* Timeline Status */}
        <div
          className="
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-6
            py-4
          "
        >

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-blue-300
            "
          >
            Temporal Replay Active
          </div>

        </div>

      </div>

      {/* ======================================
          TIMELINE
      ====================================== */}

      <div
        className="
          relative
          z-10
        "
      >

        {/* Vertical Line */}
        <div
          className="
            absolute
            left-[31px]
            top-0
            bottom-0
            w-px
            bg-white/10
          "
        />

        <div className="space-y-10">

          {events.map(
            (
              event,
              index
            ) => {

              const config =
                severityConfig(
                  event.severity
                );

              const Icon =
                config.icon;

              return (

                <motion.div
                  key={event.id}
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
                      index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    relative
                    flex
                    gap-8
                  "
                >

                  {/* Timeline Node */}
                  <div
                    className="
                      relative
                      z-10
                    "
                  >

                    <div
                      className={`
                        w-16
                        h-16
                        rounded-2xl
                        border
                        backdrop-blur-xl
                        flex
                        items-center
                        justify-center
                        bg-black
                        ${config.border}
                      `}
                    >

                      <Icon
                        className={`
                          w-6
                          h-6
                          ${config.color}
                        `}
                      />

                    </div>

                  </div>

                  {/* Content */}
                  <div
                    className={`
                      relative
                      overflow-hidden
                      flex-1
                      rounded-[32px]
                      border
                      bg-white/[0.03]
                      p-8
                      ${config.border}
                    `}
                  >

                    {/* Glow */}
                    <div
                      className={`
                        absolute
                        inset-0
                        opacity-30
                        ${config.glow}
                      `}
                    />

                    <div className="relative z-10">

                      {/* Top */}
                      <div
                        className="
                          flex
                          flex-col
                          xl:flex-row
                          xl:items-center
                          xl:justify-between
                          gap-5
                          mb-6
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
                            {event.date}
                          </div>

                          <div
                            className="
                              text-3xl
                              tracking-[-0.05em]
                              text-white
                              mb-2
                            "
                          >
                            {event.title}
                          </div>

                          <div
                            className="
                              text-slate-400
                            "
                          >
                            {event.organization}
                          </div>

                        </div>

                        <div
                          className={`
                            inline-flex
                            px-4
                            py-2
                            rounded-full
                            border
                            bg-black/40
                            text-sm
                            ${config.border}
                            ${config.color}
                          `}
                        >
                          {event.severity}
                        </div>

                      </div>

                      {/* Description */}
                      <p
                        className="
                          text-lg
                          leading-relaxed
                          text-slate-300
                          max-w-5xl
                        "
                      >
                        {event.description}
                      </p>

                    </div>

                  </div>

                </motion.div>

              );

            }
          )}

        </div>

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
          Temporal Interpretation
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
          Temporal governance playback reconstructs
          escalation chronology across institutional systems,
          exposing historical pressure evolution,
          stabilization progression,
          and recurring operational instability patterns.
        </p>

      </div>

    </motion.section>

  );

}