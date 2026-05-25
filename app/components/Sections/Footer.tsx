import Link from "next/link";

import {
  Mail,
  Phone,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-slate-400 border-t border-slate-900">

      {/* ======================================================
          SYSTEM GRID ATMOSPHERE
      ====================================================== */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-teal-500/10 blur-[120px] pointer-events-none" />

      <div className="relative system-container py-24">

        {/* ======================================================
            TOP FOOTER LAYER
        ====================================================== */}
        <div className="grid lg:grid-cols-[1.3fr_0.7fr_0.8fr] gap-16 pb-16 border-b border-slate-900">

          {/* ======================================================
              INSTITUTIONAL IDENTITY
          ====================================================== */}
          <div className="max-w-xl">

            <div className="text-registry-label mb-6 text-slate-600">
              Governance Observability Infrastructure
            </div>

            <h2 className="text-3xl md:text-4xl leading-tight tracking-[-0.04em] text-white mb-8">
              Governance stabilizes
              when operational reality
              remains continuously observable.
            </h2>

            <p className="text-slate-500 leading-relaxed mb-8">
              Anchorpoint develops operational observability systems
              that expose execution divergence,
              governance pressure accumulation,
              stabilization constraints,
              and recovery conditions
              across complex operational environments.
            </p>

            <div className="text-sm text-slate-600 leading-relaxed space-y-1">
              <p>
                Anchorpoint is the operational identity
                of Anchorpoint Optimum Global Ltd.
              </p>

              <p>
                © 2026 Anchorpoint Optimum Global Ltd.
              </p>

              <p>
                All rights reserved.
              </p>
            </div>

          </div>

          {/* ======================================================
              OPERATIONAL FRAMEWORK
          ====================================================== */}
          <div>

            <div className="text-sm uppercase tracking-[0.14em] text-slate-600 mb-6">
              Operational Framework
            </div>

            <div className="space-y-5">

              <div className="text-white">
                Diagnose
              </div>

              <div className="text-white">
                Secure
              </div>

              <div className="text-white">
                Solve
              </div>

              <div className="pt-5 border-t border-slate-900">

                <Link
                  href="/registry"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300"
                >
                  Governance Registry

                  <ArrowUpRight className="w-4 h-4" />
                </Link>

              </div>

            </div>

          </div>

          {/* ======================================================
              COMMUNICATION ACCESS
          ====================================================== */}
          <div>

            <div className="text-sm uppercase tracking-[0.14em] text-slate-600 mb-6">
              Communication Access
            </div>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>

                <div>
                  <div className="text-sm text-slate-600 mb-1">
                    Governance Email
                  </div>

                  <a
                    href="mailto:anchorpointsolutions@gmail.com"
                    className="text-white hover:text-teal-400 transition-colors break-all"
                  >
                    anchorpointsolutions@gmail.com
                  </a>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>

                <div>
                  <div className="text-sm text-slate-600 mb-1">
                    Operational Line
                  </div>

                  <a
                    href="https://wa.me/2349064398730"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 transition-colors"
                  >
                    +234 906 439 8730
                  </a>
                </div>

              </div>

              {/* Assessment */}
              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-teal-400" />
                </div>

                <div>
                  <div className="text-sm text-slate-600 mb-1">
                    Assessment Access
                  </div>

                  <a
                    href="https://calendly.com/anchorpoint/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-400 transition-colors"
                  >
                    Schedule Governance Session
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ======================================================
            BOTTOM FOOTER LAYER
        ====================================================== */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            Governance observability infrastructure
            for execution visibility,
            stabilization continuity,
            and institutional resilience.
          </div>

          <div className="text-sm text-teal-400 tracking-wide">
            Optimising Vision. Anchoring Growth.
          </div>

        </div>

      </div>

    </footer>
  );
}