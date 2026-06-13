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
      <img
  src="/images/anchorpoint-compass.jpeg"
  alt="Test Logo"
  width="200"
/>
    
{/* =====================================================
    WHY OPERATIONS DRIFT BRIDGE
===================================================== */}

<section className="relative border-b border-slate-900">

  <div className="system-container py-20">

    <div className="max-w-5xl mx-auto text-center">

      <div className="text-registry-label mb-6 text-teal-400">

        OPERATIONAL REALITY

      </div>

      <h2 className="text-4xl md:text-5xl tracking-[-0.05em] leading-tight text-white mb-8">

        Governance pressure rarely appears
        all at once.

      </h2>

      <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed mb-6">

        Workarounds emerge.
        Informal approvals replace formal ones.
        Communication pathways evolve.
        Operational reality gradually drifts away
        from documented process.

      </p>

      <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed mb-12">

        The Registry exists to observe,
        document,
        and quantify that drift.

      </p>

      <Link
        href="/why-operations-drift"
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-slate-700
          px-6
          py-3
          text-slate-200
          hover:border-teal-500
          hover:text-white
          transition-all
        "
      >
        Why Operations Drift
      </Link>

    </div>

  </div>

</section>

{/* =====================================================
    REGISTRY INTELLIGENCE SUMMARY
===================================================== */}

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
    WHY OPERATIONS DRIFT
====================================================== */}

<section className="section-spacing border-t border-white/10">

  <div className="system-container">

    <div className="max-w-5xl mx-auto text-center">

      <div className="text-registry-label mb-6 text-teal-400">
        OPERATIONAL REALITY
      </div>

      <h2 className="section-heading mb-8">

        Most operations do not fail
        because people stop working.

        <br />

        They fail because reality changes.

      </h2>

      <p className="section-subtext max-w-3xl mx-auto mb-12">

        Workarounds emerge.
        Communication evolves.
        Informal approvals replace formal ones.
        Operational reality gradually drifts away from documented process.

      </p>

      <p className="section-subtext max-w-3xl mx-auto mb-12">

        Anchorpoint exists to make that drift visible,
        measurable,
        and governable.

      </p>

      <Link
        href="/why-operations-drift"
        className="btn-secondary"
      >
        Why Operations Drift
      </Link>

    </div>

  </div>

</section>
      
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

            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">

Understanding drift is the beginning.

The Registry reveals what drift actually looks like
inside operational systems.

</p>

            <Link
              href="/registry"
              className="btn-primary bg-white text-slate-950 hover:bg-slate-200"
            >
              Explore the Governance Registry
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