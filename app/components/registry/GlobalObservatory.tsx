"use client";

import {
  Radar,
  Shield,
  Activity,
  Globe,
} from "lucide-react";

export default function GlobalObservatory() {
  return (
    <section className="relative border-b border-slate-900">

      <div className="system-container py-20">

        <div
          className="
            rounded-[40px]
            border
            border-slate-900
            bg-slate-950/80
            overflow-hidden
            relative
          "
        >

          {/* Atmosphere */}

          <div className="absolute inset-0 registry-grid opacity-[0.03]" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[160px]" />

          <div className="relative z-10 p-10 md:p-14">

            <div
              className="
                text-[11px]
                uppercase
                tracking-[0.22em]
                text-cyan-400
                mb-5
              "
            >
              GLOBAL GOVERNANCE OBSERVATORY
            </div>

            <h2
              className="
                text-4xl
                md:text-6xl
                tracking-[-0.06em]
                leading-[0.95]
                text-white
                mb-8
              "
            >
              Governance conditions
              are continuously observed
              across registered environments.
            </h2>

            <p
              className="
                max-w-3xl
                text-lg
                text-slate-400
                leading-relaxed
                mb-12
              "
            >
              Registry environments are monitored
              through governance intelligence,
              stabilization behavior,
              anomaly exposure,
              operational integrity,
              and execution visibility indicators.
            </p>

            <div
              className="
                grid
                md:grid-cols-4
                gap-6
              "
            >

              <ObservatoryMetric
                icon={<Radar className="w-5 h-5 text-cyan-400" />}
                title="Observation"
                value="Continuous"
              />

              <ObservatoryMetric
                icon={<Shield className="w-5 h-5 text-teal-400" />}
                title="Coverage"
                value="Multi-Domain"
              />

              <ObservatoryMetric
                icon={<Activity className="w-5 h-5 text-amber-400" />}
                title="Recovery Signals"
                value="Live"
              />

              <ObservatoryMetric
                icon={<Globe className="w-5 h-5 text-blue-400" />}
                title="Governance Scope"
                value="Global"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function ObservatoryMetric({
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
        rounded-3xl
        border
        border-slate-900
        bg-black/40
        p-6
      "
    >
      <div className="mb-4">
        {icon}
      </div>

      <div
        className="
          text-[10px]
          uppercase
          tracking-[0.16em]
          text-slate-600
          mb-2
        "
      >
        {title}
      </div>

      <div className="text-white">
        {value}
      </div>
    </div>
  );
}