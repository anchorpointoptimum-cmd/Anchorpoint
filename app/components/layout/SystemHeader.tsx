import Image from "next/image";
import Link from "next/link";

export default function SystemHeader() {
return (
<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

    {/* Brand */}
    <Link
      href="/"
      className="flex items-center gap-3"
    >
      <Image
        src="/images/anchorpoint-compass.jpeg"
        alt="Anchorpoint"
        width={34}
        height={34}
        className="object-contain"
      />

      <div className="leading-tight">
        <div className="text-xl tracking-[-0.04em] text-slate-900">
          Anchorpoint
        </div>

        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
          Operational Intelligence
        </div>
      </div>
    </Link>

    {/* Navigation */}
    <nav className="hidden md:flex items-center gap-10 text-sm text-slate-600">

      <Link
        href="/"
        className="hover:text-slate-900 transition-colors"
      >
        Home
      </Link>

      <Link
        href="/why-operations-drift"
        className="hover:text-slate-900 transition-colors"
      >
        Why Operations Drift
      </Link>

      <Link
        href="/registry"
        className="hover:text-slate-900 transition-colors"
      >
        Governance Registry
      </Link>

    </nav>

  </div>
</header>
);
}