export default function Method() {

  const steps = [
    { title: "Diagnose", description: "Uncover real execution flow" },
    { title: "Secure", description: "Identify where reality diverges from process" },
    { title: "Resolve", description: "Strengthen and scale operations" }
  ];

  return (
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
  );
}