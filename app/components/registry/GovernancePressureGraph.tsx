"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { motion } from "framer-motion";

import {
  fadeUp,
} from "@/app/lib/motion";

import {
  GovernanceEvidence,
  TimelineEvent,
} from "@/app/types/registry";

/* =========================================================
   TYPES
========================================================= */

interface GovernancePressureGraphProps {
  evidence: GovernanceEvidence[];

  timeline: TimelineEvent[];
}

/* =========================================================
   GRAPH
========================================================= */

export default function GovernancePressureGraph({
  evidence,
}: GovernancePressureGraphProps) {

  /* ======================================================
      DATA TRANSFORMATION
  ====================================================== */

  const chartData =
    evidence.map(
      (item, index) => {

        let severityScore = 10;

        switch (
          item.severity
        ) {

          case "Critical":
            severityScore = 95;
            break;

          case "High":
            severityScore = 72;
            break;

          case "Medium":
            severityScore = 46;
            break;

          case "Low":
            severityScore = 20;
            break;

        }

        return {
          index: index + 1,

          pressure:
            severityScore,

          leakage:
            item
              .estimatedLeakageValue || 0,

          type:
            item.evidenceType,

          date:
            item.date,
        };

      }
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
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
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
          opacity-[0.03]
          registry-grid
        "
      />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[300px]
          bg-teal-500/10
          blur-[140px]
        "
      />

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="relative z-10 mb-12">

        <div
          className="
            text-[11px]
            uppercase
            tracking-[0.22em]
            text-slate-500
            mb-5
          "
        >
          Governance Pressure Intelligence
        </div>

        <h2
          className="
            text-4xl
            md:text-5xl
            tracking-[-0.05em]
            leading-tight
            text-white
            max-w-4xl
          "
        >
          Operational pressure accumulation
          across governance events.
        </h2>

      </div>

      {/* ==========================================
          CHART
      ========================================== */}

      <div
        className="
          relative
          z-10
          h-[420px]
          w-full
        "
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: -10,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="pressureGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#14b8a6"
                  stopOpacity={0.7}
                />

                <stop
                  offset="100%"
                  stopColor="#14b8a6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e293b"
              opacity={0.4}
            />

            <XAxis
              dataKey="index"
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#64748b",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background:
                  "rgba(2,6,23,0.95)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                borderRadius: "18px",

                color: "#fff",

                backdropFilter:
                  "blur(18px)",
              }}
            />

            <Area
              type="monotone"
              dataKey="pressure"
              stroke="#14b8a6"
              strokeWidth={3}
              fill="url(#pressureGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.section>

  );

}