import Link from "next/link";

export default function SystemHeader() {

  return (

    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-xl tracking-[-0.04em] text-slate-900"
        >

          Anchorpoint

        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm text-slate-600">

          <Link
            href="/"
            className="hover:text-slate-900 transition-colors"
          >

            Infrastructure

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