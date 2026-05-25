"use client";

import { motion } from "framer-motion";

import {
  AlertTriangle,
  Shield,
  Activity,
  Radar,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

interface FeedItem {

  id: number;

  organization: string;

  event: string;

  severity: string;

  timestamp: string;

}

interface LiveGovernanceFeedProps {

  feed: FeedItem[];

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
        icon:
          AlertTriangle,
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

    case "Monitoring":
      return {
        icon:
          Activity,
        color:
          "text-blue-400",
        border:
          "border-blue-500/20",
        glow:
          "bg-blue-500/10",
      };

    default:
      return {
        icon:
          Shield,
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

export default function LiveGovernanceFeed({
  feed,
}: LiveGovernanceFeedProps) {

  return (

    <section
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
          right-0
          w-[800px]
          h-[400px]
          bg-teal-500/10
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
          items-end
          justify-between
          gap-10
          mb-14
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
            Live Governance Feed
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
            Real-time operational
            governance activity
            across institutional systems.
          </h2>

        </div>

        {/* LIVE */}
        <div
          className="
            flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
          "
        >

          <div
            className="
              w-2
              h-2
              rounded-full
              bg-red-400
              animate-pulse
            "
          />

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-red-300
            "
          >
            Live Intelligence
          </div>

        </div>

      </div>

      {/* ======================================
          FEED STREAM
      ====================================== */}

      <div
        className="
          relative
          z-10
          space-y-5
        "
      >

        {feed.map(
          (
            item,
            index
          ) => {

            const config =
              severityStyles(
                item.severity
              );

            const Icon =
              config.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 12,
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
                className={`
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  bg-white/[0.03]
                  p-7
                  ${config.border}
                `}
              >

                {/* Glow */}
                <div
                  className={`
                    absolute
                    inset-0
                    ${config.glow}
                    opacity-30
                  `}
                />

                {/* Content */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-6
                  "
                >

                  {/* Left */}
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
                        bg-black/40
                        ${config.color}
                      `}
                    >

                      <Icon
                        className="
                          w-5
                          h-5
                        "
                      />

                    </div>

                    <div>

                      <div
                        className="
                          text-white
                          text-xl
                          tracking-[-0.03em]
                          mb-2
                        "
                      >
                        {item.organization}
                      </div>

                      <p
                        className="
                          text-slate-400
                          leading-relaxed
                          max-w-3xl
                        "
                      >
                        {item.event}
                      </p>

                    </div>

                  </div>

                  {/* Right */}
                  <div
                    className="
                      flex
                      flex-col
                      xl:items-end
                      gap-3
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
                        ${config.border}
                        ${config.color}
                      `}
                    >
                      {item.severity}
                    </div>

                    <div
                      className="
                        text-xs
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      {item.timestamp}
                    </div>

                  </div>

                </div>

              </motion.div>

            );

          }
        )}

      </div>

    </section>

  );

}