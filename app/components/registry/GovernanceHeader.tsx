import Link from "next/link";

type GovernanceHeaderProps = {
  company: {
    name: string;
    sector: string;
    certificationState: string;
  };
};

const certificationColors: Record<string, string> = {
  Certified:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  "Governance Active":
    "bg-teal-500/10 text-teal-400 border border-teal-500/20",

  Stabilizing:
    "bg-amber-500/10 text-amber-400 border border-amber-500/20",

  "Observation Mode":
    "bg-slate-500/10 text-slate-300 border border-slate-500/20",

  "Under Review":
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",
};

export default function GovernanceHeader({
  company,
}: GovernanceHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-10 md:p-14">

      {/* Grid Atmosphere */}
      <div className="absolute inset-0 opacity-[0.04] registry-grid" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-teal-500/10 blur-[120px]" />

      <div className="relative z-10">

        {/* Navigation */}
        <Link
          href="/registry"
          className="
            inline-flex items-center gap-2
            text-sm text-slate-500
            hover:text-white
            transition-colors
            mb-10
          "
        >
          ← Back to Governance Registry
        </Link>

        {/* Certification State */}
        <div
          className={`
            inline-flex items-center
            px-5 py-2 rounded-full
            text-sm tracking-wide
            mb-8
            ${
              certificationColors[
                company.certificationState
              ] ||
              "bg-slate-500/10 text-slate-300 border border-slate-500/20"
            }
          `}
        >
          {company.certificationState}
        </div>

        {/* Company Name */}
        <h1 className="
          text-5xl md:text-6xl lg:text-7xl
          tracking-[-0.06em]
          leading-[0.95]
          text-white
          max-w-5xl
          mb-6
        ">
          {company.name}
        </h1>

        {/* Sector */}
        <div className="
          inline-flex items-center
          px-4 py-2 rounded-full
          border border-white/10
          bg-white/5
          text-slate-300
          text-sm
          tracking-wide
          backdrop-blur-sm
        ">
          {company.sector}
        </div>

      </div>

    </section>
  );
}