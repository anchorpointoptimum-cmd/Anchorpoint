"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        bg-black/70
        backdrop-blur-xl
      "
    >
      <div
        className="
          system-container
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
          "
        >
          <Image
            src="/images/Anchorpoint Official Logo.jpeg"
            alt="Anchorpoint"
            width={40}
            height={40}
            className="rounded-full"
          />

          <div>
            <div
              className="
                text-white
                font-medium
                tracking-tight
              "
            >
              Anchorpoint
            </div>

            <div
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-slate-500
              "
            >
              Operational Intelligence
            </div>
          </div>
        </Link>

        {/* Navigation */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
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

        <a
          href="/#contact"
          className="
            px-5
            py-3
            rounded-full
            bg-teal-500
            text-black
            text-sm
            font-medium
            hover:opacity-90
            transition
          "
        >
          Request Assessment
        </a>
      </div>
    </header>
  );
}