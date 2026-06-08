"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import RegistryIntelligenceSummary from "@/app/components/registry/OperationalIntelligence";
import GlobalObservatory from "@/app/components/registry/GlobalObservatory";


import {
  Search,
  ArrowUpRight,
  Shield,
  Activity,
  AlertTriangle,
  ChevronRight,
  Database,
  Radar,
} from "lucide-react";
import RegistryPhilosophy from "./RegistryPhilosophy";

/* =========================================================
   TYPES
========================================================= */

type RegistryCompany = {
  id: string;
  slug: string;
  name: string;
  sector: string;
  visibility: string;
  pressure: string;
  stability: string;
  description: string;
};

interface RegistryClientProps {
  companies: RegistryCompany[];
}

/* =========================================================
   FILTER SYSTEM
========================================================= */

const FILTERS = [
  "All",
  "Oil & Gas",
  "Logistics",
  "Maritime",
  "Manufacturing",
];

/* =========================================================
   REGISTRY CLIENT
========================================================= */

export default function RegistryClient({
  companies,
}: RegistryClientProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  /* =========================================================
     FILTERED DATASET
  ========================================================= */

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesFilter =
        activeFilter === "All" ||
        company.sector === activeFilter;

      const matchesSearch =
        company.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        company.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [companies, activeFilter, search]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          GLOBAL ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0">

        {/* Registry Grid */}
        <div className="absolute inset-0 opacity-[0.03] registry-grid" />

        {/* Upper Glow */}
        <div className="absolute top-0 left-1/2 h-[520px] w-[1200px] -translate-x-1/2 bg-teal-500/10 blur-[180px]" />

        {/* Lower Glow */}
        <div className="absolute bottom-0 right-0 h-[400px] w-[700px] bg-cyan-500/5 blur-[160px]" />

      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative border-b border-slate-900">

        <div className="flex flex-wrap gap-4 mt-12">

  <Link
    href="/why-operations-drift"
    className="
      px-6
      py-3
      rounded-full
      border
      border-slate-700
      text-slate-300
      hover:border-teal-500
      hover:text-white
      transition
    "
  >
    Why Operations Drift
  </Link>

</div>

        <div className="system-container py-28 md:py-36">

          <div className="max-w-6xl">

            {/* Label */}
            <div className="mb-8 flex items-center gap-3">

              <div className="h-px w-16 bg-teal-500" />

              <div className="text-registry-label">
                GOVERNANCE REGISTRY
              </div>

            </div>

            {/* Heading */}
            <h1 className="max-w-5xl text-5xl md:text-7xl tracking-[-0.06em] leading-[0.96] text-white mb-10">

              Operational visibility
              across distributed
              execution systems.

            </h1>

            {/* Description */}
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed text-slate-400 mb-14">

              The Governance Registry publishes observed
operational reality — exposing governance pressure,
execution leakage, operational instability,
and stabilization conditions across institutional environments.

            </p>

            {/* Metrics */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl">

              {/* Metric 1 */}
              <div className="surface-dark rounded-3xl p-6 border border-slate-900">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-teal-400" />
                  </div>

                  <div className="text-registry-label">
                    ENVIRONMENTS
                  </div>

                </div>

                <div className="text-4xl tracking-[-0.04em] text-white mb-2">
                  {companies.length}
                </div>

                <div className="text-sm text-slate-500">
                  Operational systems observed
                </div>

              </div>

              {/* Metric 2 */}
              <div className="surface-dark rounded-3xl p-6 border border-slate-900">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                    <Radar className="w-5 h-5 text-teal-400" />
                  </div>

                  <div className="text-registry-label">
                    OBSERVABILITY
                  </div>

                </div>

                <div className="text-4xl tracking-[-0.04em] text-white mb-2">
                  Live
                </div>

                <div className="text-sm text-slate-500">
                  Governance intelligence layer
                </div>

              </div>

              {/* Metric 3 */}
              <div className="surface-dark rounded-3xl p-6 border border-slate-900">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-teal-400" />
                  </div>

                  <div className="text-registry-label">
                    STABILITY
                  </div>

                </div>

                <div className="text-4xl tracking-[-0.04em] text-white mb-2">
                  Active
                </div>

                <div className="text-sm text-slate-500">
                  Continuous governance observation
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* =====================================================
    REGISTRY INTELLIGENCE SUMMARY
===================================================== */}

<RegistryIntelligenceSummary
  companyCount={companies.length}
/>

<RegistryPhilosophy />

<GlobalObservatory />

      {/* =====================================================
          FILTER LAYER
      ===================================================== */}

      <section className="relative border-b border-slate-900 backdrop-blur-sm">

        <div className="system-container py-10">

          <div className="flex flex-col xl:flex-row gap-8 xl:items-center xl:justify-between">

            {/* Search */}
            <div className="relative w-full xl:max-w-lg">

              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />

              <input
                type="text"
                placeholder="Search operational environments..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  rounded-2xl
                  border border-slate-800
                  bg-slate-950/80
                  py-4 pl-14 pr-5
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  transition-all duration-300
                  focus:border-teal-500
                  focus:bg-slate-950
                "
              />

            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">

              {FILTERS.map((filter) => {
                const active = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`
                      rounded-full
                      px-5 py-3
                      text-sm
                      border
                      transition-all duration-300

                      ${
                        active
                          ? "bg-teal-500 border-teal-500 text-white shadow-[0_0_40px_rgba(20,184,166,0.18)]"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                      }
                    `}
                  >
                    {filter}
                  </button>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          REGISTRY GRID
      ===================================================== */}

      <section className="relative">

        <div className="system-container py-20">

          {/* Top Meta */}
          <div className="mb-14 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

            <div className="text-sm text-slate-500">
              {filteredCompanies.length} operational environments observed
            </div>

            <div className="text-xs uppercase tracking-[0.18em] text-slate-700">
              Governance Observation Infrastructure
            </div>

          </div>

          {/* Grid */}
          <div className="grid xl:grid-cols-2 gap-8">

            {filteredCompanies.map((company) => (

              <Link
                key={company.slug}
                href={`/registry/${company.slug}`}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border border-slate-900
                  bg-slate-950/80
                  p-8
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-teal-500/40
                  hover:shadow-[0_0_120px_rgba(20,184,166,0.08)]
                "
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />
                </div>

                {/* Top */}
                <div className="relative flex items-start justify-between mb-8">

                  <div className="text-registry-label">
                    {company.sector}
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-slate-700 transition-all duration-300 group-hover:text-teal-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                </div>

                {/* Name */}
                <h2 className="relative text-3xl md:text-4xl tracking-[-0.05em] leading-tight text-white mb-6">

                  {company.name}

                </h2>

                {/* Description */}
                <p className="relative text-slate-400 leading-relaxed mb-10 max-w-2xl">

                  {company.description}

                </p>

                {/* Governance Metrics */}
                <div className="relative grid grid-cols-3 gap-4 border-t border-slate-900 pt-8">

                  {/* Visibility */}
                  <div>

                    <div className="flex items-center gap-2 mb-3">

                      <Shield className="w-4 h-4 text-teal-400" />

                      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                        Visibility
                      </div>

                    </div>

                    <div className="text-sm text-white">
                      {company.visibility}
                    </div>

                  </div>

                  {/* Pressure */}
                  <div>

                    <div className="flex items-center gap-2 mb-3">

                      <Activity className="w-4 h-4 text-teal-400" />

                      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                        Pressure
                      </div>

                    </div>

                    <div className="text-sm text-white">
                      {company.pressure}
                    </div>

                  </div>

                  {/* Stability */}
                  <div>

                    <div className="flex items-center gap-2 mb-3">

                      <AlertTriangle className="w-4 h-4 text-teal-400" />

                      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                        Stability
                      </div>

                    </div>

                    <div className="text-sm text-white">
                      {company.stability}
                    </div>

                  </div>

                </div>

                {/* Footer */}
                <div className="relative mt-10 flex items-center justify-between border-t border-slate-900 pt-6">

                  <div className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                    View governance profile
                  </div>

                  <ChevronRight className="w-5 h-5 text-slate-700 transition-all duration-300 group-hover:text-teal-400 group-hover:translate-x-1" />

                </div>

              </Link>

            ))}

          </div>

          {/* Empty State */}
          {filteredCompanies.length === 0 && (

            <div className="py-36 text-center">

              <div className="text-3xl tracking-[-0.04em] text-white mb-5">
                No operational environments found
              </div>

              <p className="text-slate-500">
                Adjust your search or governance filter.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}