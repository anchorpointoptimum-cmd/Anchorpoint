import { ArrowRight } from "lucide-react";
import method from "./method";
import section4 from "./section4";
export default function Home() {

  const steps = [
    { title: "Diagnose", description: "Uncover real execution flow" },
    { title: "Secure", description: "Identify where reality diverges from process" },
    { title: "Resolve", description: "Strengthen and scale operations" }
  ];

  return (
    <main>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Most operations don’t fail on paper.<br />
            They fail in execution.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8">
            Anchorpoint reveals how operations actually run—restoring visibility, control, and stability.
          </p>

          <button className="bg-teal-500 text-white px-8 py-4 rounded-lg">
            Request Operational Assessment
          </button>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Most organizations don’t lack strategy.
          </h2>

          <p className="text-lg md:text-xl text-slate-600 mb-8">
            They lack visibility into how execution actually unfolds.
          </p>

          <p className="text-base md:text-lg text-slate-500">
            Plans look perfect on paper, but reality diverges quietly—through small, compounding gaps that go unseen.
          </p>
        </div>
      </section>

      {/* SECTION 3 — METHOD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">
              Method
            </h2>
            <p className="text-xl text-teal-600">
              Diagnose → Secure → Solve
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">

              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-8">

                  <div className="text-center group hover:scale-105 transition-transform">
                    <h3 className="text-2xl mb-2 text-slate-900 group-hover:text-teal-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <span className="hidden md:block text-teal-500 text-xl">
                      →
                    </span>
                  )}

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}