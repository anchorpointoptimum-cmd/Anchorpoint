"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient text-white pt-28 md:pt-36">

      {/* ======================================================
          GOVERNANCE GRID ATMOSPHERE
      ====================================================== */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-500/10 blur-[140px] pointer-events-none" />

      {/* ======================================================
          HERO CONTENT
      ====================================================== */}
      <div className="relative z-10 system-container">

        <div className="min-h-[88vh] flex flex-col items-center justify-center text-center">

          {/* ======================================================
              LOGO
          ====================================================== */}
          <div className="relative mb-14">

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/30 pointer-events-none" />

            <Image
  src="/images/anchorpoint-logo.jpeg"
  alt="Anchorpoint Optimum Global Ltd"
  width={720}
  height={720}
  priority
  className="w-full max-w-[320px] md:max-w-[460px] opacity-95 mix-blend-screen drop-shadow-[0_20px_60px_rgba(20,184,166,0.18)]"
/>

          </div>

          {/* ======================================================
              SYSTEM LABEL
          ====================================================== */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-slate-800 bg-slate-950/50 backdrop-blur-md">

            <ShieldCheck className="w-4 h-4 text-teal-400" />

            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Controlled Operational Environment
            </span>

          </div>

          {/* ======================================================
              PRIMARY HEADING
          ====================================================== */}
          <h1 className="max-w-6xl text-4xl md:text-6xl lg:text-7xl tracking-[-0.05em] leading-[0.95] mb-10">

            Most operations
            do not fail on paper.

            <br className="hidden md:block" />

            They fail
            in execution.

          </h1>

          {/* ======================================================
              PHILOSOPHY STATEMENT
          ====================================================== */}
          <p className="max-w-3xl text-lg md:text-xl text-slate-300 leading-relaxed mb-6">

            Anchorpoint reveals how operations actually function —
            restoring execution visibility,
            governance stability,
            and structural control
            where operational reality diverges from documented process.

          </p>

          {/* ======================================================
              SUB-LINE
          ====================================================== */}
          <p className="text-teal-400 tracking-wide mb-14">
            Clarity. Stability. Forward Motion.
          </p>

          {/* ======================================================
              ACTION LAYER
          ====================================================== */}
          <div className="flex flex-col sm:flex-row items-center gap-5">

            {/* Primary CTA */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="btn-teal group"
            >
              Request Operational Assessment

              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA */}
            <Link
              href="/registry"
              className="btn-secondary border-slate-700 text-slate-200 hover:bg-slate-900"
            >
              Access Governance Registry
            </Link>

          </div>

          {/* ======================================================
              EXECUTION SIGNAL
          ====================================================== */}
          <div className="mt-24 text-xs uppercase tracking-[0.18em] text-slate-600">

            Governance Observability Infrastructure

          </div>

        </div>

      </div>

      {/* ======================================================
          BOTTOM TRANSITION
      ====================================================== */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />

    </section>
  );
}