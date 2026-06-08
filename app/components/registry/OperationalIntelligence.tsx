"use client";

import {
  Activity,
  Shield,
  Radar,
  TrendingUp,
} from "lucide-react";

interface Props {
  companyCount: number;
}

export default function RegistryIntelligenceSummary({
  companyCount,
}: Props) {
  return (
    <section className="relative border-b border-slate-900">

      <div className="system-container py-16">

        <div className="max-w-5xl">

          <div
            className="
              text-[11px]
              uppercase
              tracking-[0.24em]
              text-cyan-400
              mb-6
            "
          >
            REGISTRY INTELLIGENCE OVERVIEW
          </div>

          <h2
            className="
              text-3xl
              md:text-5xl
              tracking-[-0.05em]
              text-white
              leading-tight
              mb-8
            "
          >
            Governance failure rarely begins
            where organizations think it begins.
          </h2>

          <p
            className="
              text-lg
              leading-relaxed
              text-slate-400
              max-w-4xl
              mb-12
            "
          >
            The Governance Registry functions as a
            continuously observable intelligence layer,
            revealing operational pressure,
            governance instability,
            execution leakage,
            recovery progression,
            and structural resilience
            across institutional environments.
          </p>

        </div>

        <div
          className="
            grid
            md:grid-cols-4
            gap-6
          "
        >

          <SummaryCard
            icon={<Shield className="w-5 h-5 text-teal-400" />}
            title="Observed Environments"
            value={`${companyCount}`}
          />

          <SummaryCard
            icon={<Activity className="w-5 h-5 text-cyan-400" />}
            title="Governance Signals"
            value="Live"
          />

          <SummaryCard
            icon={<Radar className="w-5 h-5 text-blue-400" />}
            title="Operational Visibility"
            value="Continuous"
          />

          <SummaryCard
            icon={<TrendingUp className="w-5 h-5 text-amber-400" />}
            title="Recovery Tracking"
            value="Active"
          />

        </div>

      </div>

    </section>
  );
}

function SummaryCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-slate-900
        bg-slate-950/70
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
          text-slate-600
          mb-2
        "
      >
        {title}
      </div>

      <div
        className="
          text-2xl
          tracking-[-0.04em]
          text-white
        "
      >
        {value}
      </div>

    </div>
  );
}