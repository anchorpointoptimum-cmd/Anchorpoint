"use client";

import Link from "next/link";

export default function SiteHeader() {
return ( <header
   className="
     sticky
     top-0
     z-50
     border-b
     border-white/10
     bg-black/80
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

```
    <Link
      href="/"
      className="
        flex
        flex-col
        justify-center
        transition-opacity
        hover:opacity-90
      "
    >
      <span
        className="
          text-white
          text-xl
          font-medium
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
        px-6
        py-3
        rounded-full
        bg-teal-500
        text-black
        text-sm
        font-medium
        transition-all
        hover:bg-teal-400
        hover:shadow-[0_0_40px_rgba(20,184,166,0.25)]
      "
    >
      Request Assessment
    </Link>
  </div>
</header>
```

);
}