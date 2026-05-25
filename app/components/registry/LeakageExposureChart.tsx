"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { motion } from "framer-motion";

import {
  GovernanceEvidence,
} from "@/app/types/registry";

import {
  fadeUp,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface LeakageExposureChartProps {
  evidence: GovernanceEvidence[];
}

/* =========================================================
   COMPONENT
========================================================= */

export default function LeakageExposureChart({
  evidence,
}: LeakageExposureChartProps) {

  /* ======================================================
      TRANSFORM
  ====================================================== */

  const chartData =
    evidence.map(
      (item, index) => ({

        name:
          item.evidenceType ||
          `Event ${index + 1}`,

        exposure:
          item
            .estimatedLeakageValue || 0,

        severity:
          item.severity,

      })
    );

  /*
    Total Exposure
  */
  const totalExposure =
    evidence.reduce(
      (sum, item) =>
        sum +
        (
          item
            .estimatedLeakageValue || 0
        ),
      0
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
          bottom-0
          left-0
          w-[600px]
          h-[320px]
          bg-emerald-500/10
          blur-[140px]
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
          lg:flex-row
          lg:items-end
          lg:justify-between
          gap-10
          mb-12
        "
      >

        <div>

          <div
            className="
              text-[11px]
              uppercase
              tracking-[0.22em]
              text-slate-500
              mb-5
            "
          >
            Leakage Exposure Intelligence
          </div>

          <h2
            className="
              text-3xl
              md:text-4xl
              tracking-[-0.05em]
              leading-tight
              text-white
              max-w-3xl
            "
          >
            Governance-linked operational
            exposure accumulation.
          </h2>

        </div>

        {/* Total */}
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
            Aggregate Exposure
          </div>

          <div
            className="
              text-5xl
              tracking-[-0.05em]
              text-emerald-400
            "
          >
            ₦
            {totalExposure.toLocaleString()}
          </div>

        </div>

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

          <BarChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 20,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1e293b"
              opacity={0.35}
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "#64748b",
                fontSize: 11,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#64748b",
                fontSize: 11,
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

            <Bar
              dataKey="exposure"
              radius={[
                10,
                10,
                0,
                0,
              ]}
              fill="#10b981"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <div
        className="
          relative
          z-10
          mt-10
          pt-8
          border-t
          border-white/10
        "
      >

        <p
          className="
            text-sm
            leading-relaxed
            text-slate-400
            max-w-4xl
          "
        >
          Exposure visualization maps
          cumulative operational leakage
          associated with governance instability,
          unresolved structural pressure,
          and execution breakdown conditions.
        </p>

      </div>

    </motion.section>

  );

}