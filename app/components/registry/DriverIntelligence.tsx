import FadeIn from "@/app/components/ui/FadeIn";

type DriverIntelligenceProps = {
  driverState: string;
  driversLength: number;
  criticalDrivers: number;
  highDrivers: number;
  recurringDrivers: number;
  constrainedDrivers: number;
};

export default function DriverIntelligence({
  driverState,
  driversLength,
  criticalDrivers,
  highDrivers,
  recurringDrivers,
  constrainedDrivers,
}: DriverIntelligenceProps) {

  return (

    <FadeIn delay={0.08}>

      <section className="
        relative overflow-hidden
        rounded-[40px]
        border border-white/10
        bg-slate-950
        p-10 md:p-12
        text-white
      ">

        <div className="absolute inset-0 opacity-[0.03] registry-grid" />

        <div className="relative z-10">

          <div className="
            flex flex-col lg:flex-row
            lg:items-center
            lg:justify-between
            gap-10
            mb-12
          ">

            <div>

              <div className="
                text-xs uppercase
                tracking-[0.16em]
                text-slate-500
                mb-4
              ">

                Structural Governance State

              </div>

              <h2 className="
                text-4xl
                tracking-[-0.05em]
              ">

                {driverState}

              </h2>

            </div>

            <div>

              <div className="
                text-xs uppercase
                tracking-[0.16em]
                text-slate-500
                mb-4
              ">

                Governance Drivers

              </div>

              <div className="
                text-6xl
                tracking-[-0.06em]
                text-teal-400
              ">

                {driversLength}

              </div>

            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            {[
              ["Critical Drivers", criticalDrivers, "text-red-400"],
              ["High Severity", highDrivers, "text-amber-400"],
              ["Recurring Drivers", recurringDrivers, "text-white"],
              ["Recovery Constraints", constrainedDrivers, "text-blue-400"],
            ].map(([label, value, color]) => (

              <div
                key={label}
                className="
                  border border-white/10
                  bg-white/[0.03]
                  rounded-3xl
                  p-6
                "
              >

                <div className="
                  text-xs uppercase
                  tracking-[0.14em]
                  text-slate-500
                  mb-3
                ">

                  {label}

                </div>

                <div className={`text-4xl tracking-[-0.05em] ${color}`}>

                  {value}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </FadeIn>

  );

}