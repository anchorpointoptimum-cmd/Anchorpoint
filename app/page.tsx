import SystemHeader from "@/app/components/layout/SystemHeader";

import { Hero } from "@/app/components/Sections/Hero";
import { About } from "@/app/components/Sections/About";
import { Industries } from "@/app/components/Sections/Industries";
import { Method } from "@/app/components/Sections/method";
import { ProcessTimeline } from "@/app/components/Sections/ProcessTimeline";
import { Services } from "@/app/components/Sections/Services";
import { Governance } from "@/app/components/Sections/Governance";
import { FAQ } from "@/app/components/Sections/FAQ";
import Contact from "@/app/components/Sections/Contact";
import { Footer } from "@/app/components/Sections/Footer";
import { BackToTop } from "@/app/components/ui/BackToTop";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[var(--color-background)] overflow-hidden">

      {/* ======================================================
          HERO
      ====================================================== */}
      <div id="hero">
        <Hero />
      </div>

      {/* ======================================================
          PHILOSOPHY
      ====================================================== */}
      <About />

      {/* ======================================================
          INDUSTRIAL ENVIRONMENTS
      ====================================================== */}
      <Industries />

      {/* ======================================================
          METHOD
      ====================================================== */}
      <div id="method">
        <Method />
      </div>

      {/* ======================================================
          EXECUTION FLOW
      ====================================================== */}
      <ProcessTimeline />

      {/* ======================================================
          SERVICES / CAPABILITIES
      ====================================================== */}
      <div id="services">
        <Services />
      </div>

      {/* ======================================================
          GOVERNANCE BRIDGE
      ====================================================== */}
      <section className="section-spacing registry-transition relative overflow-hidden text-white">

        {/* Atmospheric Grid */}
        <div className="absolute inset-0 opacity-[0.04] registry-grid" />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-teal-500/10 blur-[140px]" />

        <div className="system-container relative z-10">

          <div className="max-w-5xl mx-auto text-center">

            <div className="text-registry-label mb-6 text-slate-400">
              GOVERNANCE OBSERVATION INFRASTRUCTURE
            </div>

            <h2 className="section-heading mb-8 leading-tight">

              Operational instability becomes governable
              when execution can be continuously observed.

            </h2>

            <p className="section-subtext text-slate-300 max-w-3xl mx-auto mb-12">

              The Governance Registry transforms fragmented operational activity
              into observable intelligence —
              revealing pressure accumulation,
              leakage concentration,
              stabilization progression,
              and governance recovery conditions.

            </p>

            <Link
              href="/registry"
              className="btn-primary bg-white text-slate-950 hover:bg-slate-200"
            >
              Access Governance Registry
            </Link>

          </div>

        </div>

      </section>

      {/* ======================================================
          GOVERNANCE
      ====================================================== */}
      <div id="governance">
        <Governance />
      </div>

      {/* ======================================================
          FAQ
      ====================================================== */}
      <FAQ />

      {/* ======================================================
          CONTACT
      ====================================================== */}
      <div id="contact">
        <Contact />
      </div>

      {/* ======================================================
          FOOTER
      ====================================================== */}
      <Footer />

      {/* ======================================================
          UTILITIES
      ====================================================== */}
      <BackToTop />

    </main>
  );
}