"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {

  const [isOpen, setIsOpen] =
    useState(false);

  const scrollToSection = (
    id: string
  ) => {

    const element =
      document.getElementById(id);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
      });

      setIsOpen(false);

    }

  };

  const navItems = [

    {
      label: "Method",
      id: "method",
    },

    {
      label: "Infrastructure",
      id: "services",
    },

    {
      label: "Governance",
      id: "governance",
    },

    {
      label: "Contact",
      id: "contact",
    },

  ];

  return (

    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Brand */}
          <button
            onClick={() =>
              scrollToSection("hero")
            }
            className="group"
          >

            <div className="flex flex-col items-start">

              <div className="text-white tracking-[0.25em] text-sm">

                ANCHORPOINT

              </div>

              <div className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors">

                Operational Intelligence Infrastructure

              </div>

            </div>

          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">

            {navItems.map(
              (item) => (

                <button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(
                      item.id
                    )
                  }
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >

                  {item.label}

                </button>

              )
            )}

            {/* Registry CTA */}
            <Link
              href="/registry"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-all duration-300 text-sm"
            >

              Access Registry

            </Link>

          </div>

          {/* Mobile Menu */}
          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="lg:hidden text-slate-300 hover:text-white transition-colors"
          >

            {isOpen ? (

              <X className="w-6 h-6" />

            ) : (

              <Menu className="w-6 h-6" />

            )}

          </button>

        </div>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (

        <div className="lg:hidden border-t border-white/10 bg-slate-950">

          <div className="px-6 py-8 flex flex-col gap-6">

            {navItems.map(
              (item) => (

                <button
                  key={item.id}
                  onClick={() =>
                    scrollToSection(
                      item.id
                    )
                  }
                  className="text-left text-slate-300 hover:text-white transition-colors"
                >

                  {item.label}

                </button>

              )
            )}

            <Link
              href="/registry"
              className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-white text-slate-900 hover:bg-slate-200 transition-colors"
            >

              Access Governance Registry

            </Link>

          </div>

        </div>

      )}

    </nav>

  );

}