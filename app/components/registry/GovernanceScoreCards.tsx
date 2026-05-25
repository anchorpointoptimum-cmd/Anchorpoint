"use client";

import { motion } from "framer-motion";

import {
  ShieldAlert,
  Activity,
  TrendingUp,
  Gauge,
} from "lucide-react";

import {
  fadeUp,
  staggerContainer,
} from "@/app/lib/motion";

import { GovernanceMetrics } from "@/app/types/registry";

/* =========================================================
   TYPES
========================================================= */

interface GovernanceScoreCardsProps {
  governance: GovernanceMetrics;
}

/* =========================================================
   CARD CONFIGURATION
========================================================= */

const buildCards = (
  governance: GovernanceMetrics
) => [
  {
    title: "Critical Signals",
    value: governance.criticalSignals,
    description:
      "High-priority governance escalations currently affecting operational continuity.",
    icon: ShieldAlert,
    accent:
      "from-red-500/20 to-red-500/5",
    glow:
      "group-hover:shadow-red-500/20",
    valueColor:
      "text-red-400",
  },

  {
    title: "Unresolved Signals",
    value:
      governance.unresolvedSignals,
    description:
      "Operational governance events pending stabilization or institutional recovery.",
    icon: Activity,
    accent:
      "from-amber-500/20 to-amber-500/5",
    glow:
      "group-hover:shadow-amber-500/20",
    valueColor:
      "text-amber-400",
  },

  {
    title: "Governance Momentum",
    value:
      governance.governanceMomentum,
    description:
      "Observed directional trajectory of governance stabilization behavior.",
    icon: TrendingUp,
    accent:
      "from-teal-500/20 to-teal-500/5",
    glow:
      "group-hover:shadow-teal-500/20",
    valueColor:
      "text-teal-400",
  },

  {
    title: "Stabilization Progress",
    value: `${governance.stabilizationProgress}%`,
    description:
      "Measured operational recovery progression across observed evidence layers.",
    icon: Gauge,
    accent:
      "from-cyan-500/20 to-cyan-500/5",
    glow:
      "group-hover:shadow-cyan-500/20",
    valueColor:
      "text-cyan-400",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function GovernanceScoreCards({
  governance,
}: GovernanceScoreCardsProps) {
  const cards =
    buildCards(governance);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-7
              transition-all
              duration-500
              hover:border-teal-400/30
              hover:-translate-y-1
              hover:shadow-2xl
              hover:bg-white/[0.045]
            "
          >
            {/* ======================================
                ATMOSPHERIC GLOW
            ====================================== */}

            <div
              className={`
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-700
                bg-gradient-to-br
                ${card.accent}
                group-hover:opacity-100
              `}
            />

            {/* Top Border */}
            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
              "
            />

            {/* ======================================
                CONTENT
            ====================================== */}

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-10">
                <div>
                  <div
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.22em]
                      text-slate-500
                      mb-4
                    "
                  >
                    {card.title}
                  </div>

                  <div
                    className={`
                      text-5xl
                      tracking-[-0.06em]
                      font-light
                      ${card.valueColor}
                    `}
                  >
                    {card.value}
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:border-teal-400/30
                  "
                >
                  <Icon
                    className="
                      w-6
                      h-6
                      text-teal-400
                    "
                  />
                </div>
              </div>

              {/* Divider */}
              <div
                className="
                  w-full
                  h-px
                  bg-gradient-to-r
                  from-white/10
                  via-white/5
                  to-transparent
                  mb-6
                "
              />

              {/* Description */}
              <p
                className="
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}