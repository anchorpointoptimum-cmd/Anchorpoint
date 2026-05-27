"use client";

import { motion } from "framer-motion";

import {
  ArrowLeft,
  Shield,
  Globe,
  Building2,
  Activity,
  Crown,
} from "lucide-react";

import Link from "next/link";

import {
  fadeUp,
  staggerContainer,
  scaleIn,
  panelHover,
} from "@/app/lib/motion";

/* =========================================================
   TYPES
========================================================= */

interface Company {

  name: string;

  industry: string;

  country: string;

  sector?: string;

  operationalScale?: string;

}

interface Governance {

  governanceScore: number;

  operationalIntegrity: number;

  anomalyExposure: number;

  stabilizationEfficiency: number;

  governanceCoverage: number;

}

interface RegistryHeaderProps {

  company: Company;

  governance: Governance;

}

/* =========================================================
   HELPERS
========================================================= */

function governanceState(
  score: number
) {

  if (score >= 85) {

    return {
      label:
        "Institutionally Stable",
      color:
        "text-teal-400",
      glow:
        "bg-teal-500/10",
      border:
        "border-teal-500/20",
    };

  }

  if (score >= 70) {

    return {
      label:
        "Operationally Controlled",
      color:
        "text-blue-400",
      glow:
        "bg-blue-500/10",
      border:
        "border-blue-500/20",
    };

  }

  if (score >= 50) {

    return {
      label:
        "Elevated Governance Pressure",
      color:
        "text-amber-400",
      glow:
        "bg-amber-500/10",
      border:
        "border-amber-500/20",
    };

  }

  return {
    label:
      "Critical Governance Instability",
    color:
      "text-red-400",
    glow:
      "bg-red-500/10",
    border:
      "border-red-500/20",
  };

}

/* =========================================================
   COMPONENT
========================================================= */

export default function RegistryHeader({
  company,
  governance,
}: RegistryHeaderProps) {

  const governanceStateData =
    governanceState(
      governance.governanceScore
    );

  return (

    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
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
          w-[1200px]
          h-[600px]
          bg-cyan-500/10
          blur-[220px]
        "
      />

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <motion.div
        variants={fadeUp}
        className="
          relative
          z-10
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-6
          mb-14
        "
      >

        {/* Back */}
        <Link
          href="/registry"
          className="
            inline-flex
            items-center
            gap-3
            text-sm
            text-slate-400
            hover:text-white
            transition-colors
          "
        >

          <ArrowLeft
            className="
              w-4
              h-4
            "
          />

          Back to Registry

        </Link>

        {/* Status */}
        <div
          className={`
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            border
            bg-white/[0.03]
            backdrop-blur-xl
            ${governanceStateData.border}
          `}
        >

          <Activity
            className={`
              w-4
              h-4
              ${governanceStateData.color}
            `}
          />

          <span
            className={`
              text-sm
              ${governanceStateData.color}
            `}
          >
            {governanceStateData.label}
          </span>

        </div>

      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          grid
          xl:grid-cols-[1.3fr_0.7fr]
          gap-12
          items-start
        "
      >

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <motion.div
          variants={fadeUp}
        >

          {/* Eyebrow */}
          <div
            className="
              flex
              items-center
              gap-3
              mb-6
            "
          >

            <Crown
              className="
                w-5
                h-5
                text-cyan-400
              "
            />

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.24em]
                text-cyan-400
              "
            >
              Sovereign Governance Registry
            </div>

          </div>

          {/* Company Name */}
          <h1
            className="
              text-5xl
              md:text-7xl
              tracking-[-0.08em]
              leading-[0.95]
              text-white
              mb-8
            "
          >
            {company.name}
          </h1>

          {/* Description */}
          <p
            className="
              text-xl
              leading-relaxed
              text-slate-400
              max-w-4xl
              mb-10
            "
          >
            Institutional governance observability
            and operational intelligence profile
            across systemic governance ecosystems.
          </p>

          {/* Meta Grid */}
          <div
            className="
              grid
              md:grid-cols-3
              gap-5
            "
          >

            {/* Industry */}
            <motion.div
              variants={scaleIn}
              {...panelHover}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
              "
            >

              <Building2
                className="
                  w-5
                  h-5
                  text-blue-400
                  mb-5
                "
              />

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                  mb-2
                "
              >
                Industry
              </div>

              <div
                className="
                  text-lg
                  text-white
                "
              >
                {company.industry}
              </div>

            </motion.div>

            {/* Country */}
            <motion.div
              variants={scaleIn}
              {...panelHover}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
              "
            >

              <Globe
                className="
                  w-5
                  h-5
                  text-cyan-400
                  mb-5
                "
              />

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                  mb-2
                "
              >
                Country
              </div>

              <div
                className="
                  text-lg
                  text-white
                "
              >
                {company.country}
              </div>

            </motion.div>

            {/* Sector */}
            <motion.div
              variants={scaleIn}
              {...panelHover}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.03]
                p-6
              "
            >

              <Shield
                className="
                  w-5
                  h-5
                  text-teal-400
                  mb-5
                "
              />

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                  mb-2
                "
              >
                Sector
              </div>

              <div
                className="
                  text-lg
                  text-white
                "
              >
                {company.sector || "Institutional"}
              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            relative
          "
        >

          <div
            className={`
              relative
              overflow-hidden
              rounded-[38px]
              border
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
              ${governanceStateData.border}
            `}
          >

            {/* Glow */}
            <div
              className={`
                absolute
                inset-0
                opacity-20
                ${governanceStateData.glow}
              `}
            />

            <div className="relative z-10">

              {/* Label */}
              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                  mb-6
                "
              >
                Governance Intelligence Index
              </div>

              {/* Score */}
              <div
                className={`
                  text-8xl
                  tracking-[-0.10em]
                  mb-4
                  ${governanceStateData.color}
                `}
              >
                {governance.governanceScore}
              </div>

              {/* State */}
              <div
                className={`
                  text-lg
                  mb-10
                  ${governanceStateData.color}
                `}
              >
                {governanceStateData.label}
              </div>

              {/* Metrics */}
              <div
                className="
                  space-y-5
                  pt-8
                  border-t
                  border-white/10
                "
              >

                {/* Operational Integrity */}
                <MetricRow
                  label="Operational Integrity"
                  value={governance.operationalIntegrity}
                />

                {/* Stabilization */}
                <MetricRow
                  label="Stabilization Efficiency"
                  value={governance.stabilizationEfficiency}
                />

                {/* Governance Coverage */}
                <MetricRow
                  label="Governance Coverage"
                  value={governance.governanceCoverage}
                />

                {/* Anomaly Exposure */}
                <MetricRow
                  label="Anomaly Exposure"
                  value={governance.anomalyExposure}
                  inverse
                />

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </motion.section>

  );

}

/* =========================================================
   METRIC ROW
========================================================= */

function MetricRow({
  label,
  value,
  inverse = false,
}: {
  label: string;
  value: number;
  inverse?: boolean;
}) {

  const safeValue =
    value || 0;

  const width =
    `${safeValue}%`;

  return (

    <div>

      <div
        className="
          flex
          items-center
          justify-between
          mb-3
        "
      >

        <div
          className="
            text-sm
            text-slate-400
          "
        >
          {label}
        </div>

        <div
          className="
            text-sm
            text-white
          "
        >
          {safeValue}%
        </div>

      </div>

      <div
        className="
          h-2
          rounded-full
          overflow-hidden
          bg-white/[0.05]
        "
      >

        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{
            duration: 1.2,
            ease: "linear" as const,
          }}
          className={`
            h-full
            rounded-full
            ${inverse
              ? "bg-gradient-to-r from-red-500 to-amber-400"
              : "bg-gradient-to-r from-cyan-400 to-teal-400"
            }
          `}
        />

      </div>

    </div>

  );

}