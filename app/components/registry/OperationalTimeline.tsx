type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

interface OperationalTimelineProps {
  timeline: TimelineItem[];
}

export default function OperationalTimeline({
  timeline,
}: OperationalTimelineProps) {
  return (
    <section className="surface-card rounded-[32px] relative overflow-hidden p-10">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-60" />

      {/* Header */}
      <div className="mb-10">

        <div className="text-registry-label mb-3">
          Operational Timeline
        </div>

        <h2 className="text-4xl tracking-[-0.04em] text-slate-950">
          Governance Chronology
        </h2>

      </div>

      {/* Timeline */}
      <div className="space-y-8">

        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex gap-6"
          >

            {/* Indicator */}
            <div className="pt-1">

              <div className="w-3 h-3 rounded-full bg-teal-500" />

            </div>

            {/* Content */}
            <div className="flex-1 border-b border-slate-100 pb-8">

              <div className="text-sm text-slate-500 mb-2">
                {item.date}
              </div>

              <div className="text-2xl tracking-[-0.03em] text-slate-950 mb-3">
                {item.title}
              </div>

              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}