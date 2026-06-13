"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
return ( <header
   className="
     sticky
     top-0
     z-50
     border-b
     border-white/10
     bg-black/75
     backdrop-blur-xl
   "
 > <div
     className="
       system-container
       h-20
       flex
       items-center
       justify-between
     "
   >
{/* Brand */}
    <Link
  href="/"
  className="
    flex
    items-center
    gap-3
    transition-opacity
    hover:opacity-90
  "
>
  <Image
    src="/images/anchorpoint-compass.jpeg"
    alt="Anchorpoint"
    width={34}
    height={34}
    className="object-contain"
    priority
  />

  <div
    className="
      flex
      flex-col
      justify-center
    "
  >
    <span
      className="
        text-white
        text-xl
        font-semibold
        tracking-tight
      "
    >
      Anchorpoint
    </span>

    <span
      className="
        text-[10px]
        uppercase
        tracking-[0.30em]
        text-slate-500
      "
    >
      Operational Intelligence
    </span>
  </div>
</Link>

    {/* Navigation */}

    <nav
      className="
        hidden
        md:flex
        items-center
        gap-10
      "
    >
      <Link
        href="/"
        className="
          text-slate-400
          hover:text-white
          transition-colors
        "
      >
        Home
      </Link>

      <Link
        href="/why-operations-drift"
        className="
          text-slate-400
          hover:text-white
          transition-colors
        "
      >
        Why Operations Drift
      </Link>

      <Link
        href="/registry"
        className="
          text-slate-400
          hover:text-white
          transition-colors
        "
      >
        Governance Registry
      </Link>
    </nav>

    {/* CTA */}

    <Link
      href="/#contact"
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-teal-500
        px-6
        py-3
        text-sm
        font-medium
        text-black
        transition-all
        hover:scale-[1.02]
        hover:bg-teal-400
      "
    >
      Request Assessment
    </Link>
  </div>
</header>
);
}
