"use client";

import { useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

export function FAQ() {

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const faqs = [

    {
      question:
        "What is governance intelligence?",

      answer:
        "Governance intelligence is the continuous observation and interpretation of operational behavior across an organization. Anchorpoint transforms fragmented operational activity into measurable governance visibility — allowing institutions to detect instability, operational leakage, recovery constraints, and structural pressure before escalation compounds.",

    },

    {
      question:
        "Why do operational systems deteriorate even when documentation exists?",

      answer:
        "Most organizations govern documented process assumptions rather than operational reality. Over time, execution behavior diverges from formal documentation through pressure accumulation, fragmented coordination, undocumented dependencies, and invisible operational workarounds. Governance failure often begins inside this divergence.",

    },

    {
      question:
        "What does Anchorpoint actually observe inside an operational environment?",

      answer:
        "Anchorpoint observes execution flow, governance visibility gaps, operational fragmentation, recovery constraints, escalation patterns, and stabilization behavior. The objective is not simply to audit documentation, but to continuously interpret how operational systems actually behave under real pressure conditions.",

    },

    {
      question:
        "Why are Oil & Gas environments structurally vulnerable to operational instability?",

      answer:
        "Oil & Gas operations involve distributed execution, layered approvals, field coordination, contractor dependencies, time-sensitive workflows, and high financial exposure. When governance visibility weakens inside these environments, operational instability compounds rapidly across infrastructure systems.",

    },

    {
      question:
        "What is operational stabilization?",

      answer:
        "Operational stabilization is the process of restoring execution visibility, governance continuity, and recovery control across fragmented operational systems. Stabilization does not begin with paperwork — it begins with observing where operational reality has drifted beyond governance visibility.",

    },

    {
      question:
        "What is the Governance Registry?",

      answer:
        "The Governance Registry functions as Anchorpoint’s operational proof layer. It provides structured visibility into governance conditions, stabilization progression, operational intelligence interpretation, and recovery behavior across monitored environments.",

    },

    {
      question:
        "Does Anchorpoint replace internal leadership or operational teams?",

      answer:
        "No. Anchorpoint operates as governance intelligence infrastructure layered around existing operational environments. The system exists to improve visibility, interpret operational conditions, and strengthen stabilization continuity — not to replace institutional leadership structures.",

    },

    {
      question:
        "Why is continuous operational visibility important?",

      answer:
        "Operational instability rarely appears suddenly. Structural deterioration usually compounds silently through recurring divergence, unresolved pressure, invisible leakage accumulation, and fragmented execution behavior. Continuous visibility allows governance systems to detect and stabilize these conditions before escalation becomes irreversible.",

    },

  ];

  return (

    <section className="relative py-32 bg-white overflow-hidden border-t border-slate-200">

      {/* Atmospheric Grid */}
      <div className="absolute inset-0 opacity-[0.03]">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]" />

      </div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Intro */}
        <div className="max-w-4xl mb-20">

          <div className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">

            Governance Clarification Layer

          </div>

          <h2 className="text-5xl md:text-6xl tracking-[-0.04em] leading-[1.05] text-slate-950 mb-8">

            Operational instability becomes governable when its behavior can be continuously interpreted.

          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">

            Anchorpoint introduces a governance intelligence framework designed to observe operational reality beyond documentation assumptions. The following clarifications explain how the system interprets instability, stabilization, and operational continuity.

          </p>

        </div>

        {/* FAQ Items */}
        <div className="space-y-5">

          {faqs.map(
            (
              faq,
              index
            ) => {

              const isOpen =
                openIndex === index;

              return (

                <div
                  key={index}
                  className="group bg-slate-50 border border-slate-200 rounded-[2rem] overflow-hidden hover:border-teal-500/30 transition-all duration-500"
                >

                  <button
                    onClick={() =>
                      setOpenIndex(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="w-full flex items-center justify-between gap-8 px-8 py-8 text-left"
                  >

                    <div className="text-2xl tracking-[-0.02em] text-slate-950 leading-snug max-w-3xl">

                      {faq.question}

                    </div>

                    <div className="flex-shrink-0">

                      <ChevronDown
                        className={`w-6 h-6 text-teal-600 transition-transform duration-500 ${
                          isOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </div>

                  </button>

                  <div
                    className={`grid transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="px-8 pb-8 max-w-4xl">

                        <div className="w-12 h-px bg-teal-500/40 mb-6" />

                        <p className="text-lg text-slate-600 leading-relaxed">

                          {faq.answer}

                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              );

            }
          )}

        </div>

      </div>

    </section>

  );

}