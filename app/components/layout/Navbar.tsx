"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const isRegistry =
    pathname?.startsWith("/registry");

  return (

    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-white/10
        backdrop-blur-xl
        bg-white/75
      "
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="h-20 flex items-center justify-between">

          {/* Brand */}
          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
              group
            "
          >

            <div
              className="
                h-3
                w-3
                rounded-full
                bg-slate-900
                group-hover:scale-110
                transition-transform
              "
            />

            <div>

              <div
                className="
                  text-lg
                  text-slate-900
                  tracking-tight
                "
              >

                Anchorpoint

              </div>

              <div
                className="
                  text-xs
                  text-slate-500
                  tracking-wide
                  uppercase
                "
              >

                Operational Intelligence

              </div>

            </div>

          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className={`
                text-sm
                transition-colors
                ${
                  !isRegistry
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }
              `}
            >

              Infrastructure

            </Link>

            <Link
              href="/registry"
              className={`
                text-sm
                transition-colors
                ${
                  isRegistry
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }
              `}
            >

              Governance Registry

            </Link>

          </nav>

          {/* Registry Access */}
          <div className="flex items-center">

            <Link
              href="/registry"
              className="
                inline-flex
                items-center
                px-5
                py-2.5
                rounded-full
                bg-slate-900
                text-white
                text-sm
                hover:bg-slate-800
                transition-colors
              "
            >

              Access Registry

            </Link>

          </div>

        </div>

      </div>

    </header>

  );

}