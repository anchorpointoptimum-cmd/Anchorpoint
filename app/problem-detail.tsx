export default function ProblemDetail() {
  const environments = [
    "Multi-layered operational systems",
    "Distributed teams and workflows",
    "Time-sensitive execution pipelines",
    "Limited real-time visibility"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-slate-900">
          Where Execution Complexity Exists
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 mb-16">
          Environments where execution is distributed, time-sensitive, and difficult to control.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {environments.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-slate-200 rounded-xl text-left"
            >
              <p className="text-slate-700">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}