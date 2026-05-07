export default function Section4() {

  const metrics = [
    { value: "70%", label: "Reduction in operational blind spots" },
    { value: "3x", label: "Faster issue identification" },
    { value: "100%", label: "Visibility across execution layers" }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Proven operational clarity
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-16">
          Anchorpoint transforms hidden execution gaps into measurable control.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((item, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                {item.value}
              </div>
              <p className="text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}