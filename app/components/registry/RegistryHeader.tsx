"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  ArrowLeft,
  Shield,
  Globe,
  Activity,
  Crown,
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
   GOVERNANCE STATE
========================================================= */

function governanceState(score: number) {
  if (score >= 85) {
    return {
      label: "Institutionally Stable",
      color: "text-teal-400",
      glow: "bg-teal-500/10",
      border: "border-teal-500/20",
    };
  }

  if (score >= 70) {
    return {
      label: "Operationally Controlled",
      color: "text-blue-400",
      glow: "bg-blue-500/10",
      border: "border-blue-500/20",
    };
  }

  if (score >= 50) {
    return {
      label: "Elevated Governance Pressure",
      color: "text-amber-400",
      glow: "bg-amber-500/10",
      border: "border-amber-500/20",
    };
  }

  return {
    label: "Critical Governance Instability",
    color: "text-red-400",
    glow: "bg-red-500/10",
    border: "border-red-500/20",
  };
}

function recoveryMomentum(score: number) {
  if (score >= 85) return "Normalized";
  if (score >= 70) return "Recovering";
  if (score >= 50) return "Transitional";
  return "Deteriorating";
}

function pressureClassification(score: number) {
  if (score >= 85) return "Low";
  if (score >= 70) return "Moderate";
  if (score >= 50) return "Elevated";
  return "Critical";
}

/* =========================================================
   COMPONENT
========================================================= */

export default function RegistryHeader({
  company,
  governance,
}: RegistryHeaderProps) {
  const state = governanceState(
    governance.governanceScore
  );

  const momentum =
    recoveryMomentum(
      governance.governanceScore
    );

  const pressure =
    pressureClassification(
      governance.governanceScore
    );

  const executiveSnapshot =
    governance.governanceScore >= 85
      ? "Governance stability remains institutionally mature with strong operational integrity and limited systemic pressure exposure."
      : governance.governanceScore >= 70
      ? "Governance conditions remain operationally controlled with measurable stabilization momentum and manageable anomaly concentration."
      : governance.governanceScore >= 50
      ? "Governance systems are experiencing elevated operational pressure while recovery mechanisms continue driving stabilization progression."
      : "Governance instability continues exerting structural operational pressure requiring active recovery and oversight intervention.";

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
      {/* Atmosphere */}

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

      {/* Top Bar */}

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
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              text-slate-400
              hover:text-white
              transition-colors
            "
          >
            <ArrowLeft className="w-4 h-4" />
            Homepage
          </Link>

          <span className="text-slate-700">/</span>

          <Link
            href="/registry"
            className="
              text-sm
              text-slate-400
              hover:text-white
              transition-colors
            "
          >
            Governance Registry
          </Link>
        </div>

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
            ${state.border}
          `}
        >
          <Activity
            className={`
              w-4
              h-4
              ${state.color}
            `}
          />

          <span
            className={`
              text-sm
              ${state.color}
            `}
          >
            {state.label}
          </span>
        </div>
      </motion.div>

      {/* Main Content */}

      <div
        className="
          relative
          z-10
          grid
          xl:grid-cols-[1.3fr_0.7fr]
          gap-12
        "
      >
        {/* Left */}

        <motion.div variants={fadeUp}>
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
              Governance Intelligence Briefing
            </div>
          </div>

          <h1
            className="
              text-5xl
              md:text-7xl
              tracking-[-0.08em]
              leading-[0.95]
              text-white
              mb-4
            "
          >
            {company.name}
          </h1>

          <div
            className="
              text-xl
              text-cyan-400
              mb-8
            "
          >
            Governance Registry Profile
          </div>

          <div className="max-w-4xl mb-10">
            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-slate-500
                mb-4
              "
            >
              Executive Snapshot
            </div>

            <p
              className="
                text-xl
                leading-relaxed
                text-slate-300
              "
            >
              {executiveSnapshot}
            </p>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              xl:grid-cols-4
              gap-5
            "
          >
            <InfoCard
              icon={
                <Shield className="w-5 h-5 text-teal-400" />
              }
              label="Governance State"
              value={state.label}
            />

            <InfoCard
              icon={
                <Activity className="w-5 h-5 text-cyan-400" />
              }
              label="Recovery Momentum"
              value={momentum}
            />

            <InfoCard
              icon={
                <Crown className="w-5 h-5 text-amber-400" />
              }
              label="Pressure Classification"
              value={pressure}
            />

            <InfoCard
              icon={
                <Globe className="w-5 h-5 text-blue-400" />
              }
              label="Operational Footprint"
              value={company.country}
            />
          </div>
        </motion.div>

        {/* Right */}

        <motion.div variants={fadeUp}>
          <div
            className={`
              relative
              overflow-hidden
              rounded-[38px]
              border
              bg-white/[0.03]
              backdrop-blur-xl
              p-10
              ${state.border}
            `}
          >
            <div
              className={`
                absolute
                inset-0
                opacity-20
                ${state.glow}
              `}
            />

            <div className="relative z-10">
              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                  mb-6
                "
              >
                Governance Stability Index
              </div>

              <div
                className={`
                  text-8xl
                  tracking-[-0.10em]
                  mb-4
                  ${state.color}
                `}
              >
                {governance.governanceScore}
              </div>

              <div
                className={`
                  text-lg
                  mb-8
                  ${state.color}
                `}
              >
                {state.label}
              </div>

              <MetricRow
                label="Operational Integrity"
                value={governance.operationalIntegrity}
              />

              <MetricRow
                label="Stabilization Efficiency"
                value={governance.stabilizationEfficiency}
              />

              <MetricRow
                label="Governance Coverage"
                value={governance.governanceCoverage}
              />

              <MetricRow
                label="Anomaly Exposure"
                value={governance.anomalyExposure}
                inverse
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
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
      <div className="mb-5">
        {icon}
      </div>

      <div
        className="
          text-xs
          uppercase
          tracking-[0.16em]
          text-slate-500
          mb-2
        "
      >
        {label}
      </div>

      <div
        className="
          text-lg
          text-white
        "
      >
        {value}
      </div>
    </motion.div>
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
  const width = `${value}%`;

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-slate-400 text-sm">
          {label}
        </span>

        <span className="text-white text-sm">
          {value}%
        </span>
      </div>

      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{
            duration: 1.2,
          }}
          className={
            inverse
              ? "h-full bg-gradient-to-r from-red-500 to-amber-400"
              : "h-full bg-gradient-to-r from-cyan-400 to-teal-400"
          }
        />
      </div>
    </div>
  );
}