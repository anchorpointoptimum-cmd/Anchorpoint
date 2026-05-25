import FadeIn from "@/app/components/ui/FadeIn";

type ExecutiveInterpretationProps = {
  operationalState: string;
  dominantPattern: string;
  governanceNarrative: string;
};

export default function ExecutiveInterpretation({
  operationalState,
  dominantPattern,
  governanceNarrative,
}: ExecutiveInterpretationProps) {

  return (

    <FadeIn>

      <section className="
        relative overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-slate-950
        text-white
        p-10 md:p-14
      ">

        {/* Atmospheric Glow */}
        <div className="
          absolute
          top-0
          right-0
          w-[600px]
          h-[300px]
          bg-teal-500/10
          blur-[140px]
        " />

        {/* Top Border Accent */}
        <div className="
          absolute
          top-0 left-0
          w-full h-px
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        " />

        <div className="
          relative z-10
          max-w-5xl
        ">

          {/* Label */}
          <div className="
            text-sm
            uppercase
            tracking-[0.18em]
            text-slate-400
            mb-6
          ">

            Executive Interpretation

          </div>

          {/* Headline */}
          <h2 className="
            text-4xl
            md:text-5xl
            tracking-[-0.05em]
            leading-[1.05]
            mb-8
          ">

            Governance analysis indicates
            {" "}
            <span className="text-teal-400">
              {operationalState}
            </span>
            {" "}
            operational conditions primarily driven by
            {" "}
            <span className="text-white">
              {dominantPattern}
            </span>
            {" "}
            governance activity.

          </h2>

          {/* Narrative */}
          <p className="
            text-xl
            text-slate-300
            leading-relaxed
            max-w-4xl
          ">

            {governanceNarrative}

          </p>

          {/* Institutional Divider */}
          <div className="
            mt-12
            pt-8
            border-t border-white/10
            flex flex-col md:flex-row
            gap-6 md:gap-12
          ">

            {/* State */}
            <div>

              <div className="
                text-xs
                uppercase
                tracking-[0.16em]
                text-slate-500
                mb-3
              ">

                Operational State

              </div>

              <div className="
                text-2xl
                tracking-[-0.03em]
                text-white
              ">

                {operationalState}

              </div>

            </div>

            {/* Pattern */}
            <div>

              <div className="
                text-xs
                uppercase
                tracking-[0.16em]
                text-slate-500
                mb-3
              ">

                Dominant Pattern

              </div>

              <div className="
                text-2xl
                tracking-[-0.03em]
                text-white
              ">

                {dominantPattern}

              </div>

            </div>

          </div>

        </div>

      </section>

    </FadeIn>

  );

}