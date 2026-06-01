import Link from "next/link";

export default function SiteFooter() {

  return (

    <footer
      className="
        relative
        border-t
        border-white/10
        bg-black
        overflow-hidden
      "
    >

      {/* Atmosphere */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          registry-grid
        "
      />

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[800px]
          h-[300px]
          bg-cyan-500/10
          blur-[140px]
        "
      />

      <div
        className="
          relative
          z-10
          system-container
          py-20
        "
      >

        <div
          className="
            grid
            lg:grid-cols-[1.2fr_0.8fr]
            gap-16
          "
        >

          {/* Left */}

          <div>

            <div
              className="
                text-3xl
                tracking-[-0.05em]
                text-white
                mb-4
              "
            >
              Anchorpoint
            </div>

            <div
              className="
                text-cyan-400
                mb-6
              "
            >
              Operational Intelligence Infrastructure
            </div>

            <p
              className="
                max-w-2xl
                text-slate-400
                leading-relaxed
              "
            >
              Restoring execution visibility,
              governance stability,
              and operational control
              where documented process
              diverges from operational reality.
            </p>

          </div>

          {/* Right */}

          <div
            className="
              grid
              sm:grid-cols-2
              gap-10
            "
          >

            <div>

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                  mb-5
                "
              >
                Navigation
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-4
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

              </div>

            </div>

            <div>

              <div
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-slate-500
                  mb-5
                "
              >
                Contact
              </div>

              <a
                href="/#contact"
                className="
                  text-slate-400
                  hover:text-white
                  transition-colors
                "
              >
                Request Assessment
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-16
            pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-4
          "
        >

          <div
            className="
              text-sm
              text-slate-500
            "
          >
            © {new Date().getFullYear()} Anchorpoint Optimum Global Ltd.
          </div>

          <div
            className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-slate-600
            "
          >
            Governance • Stability • Forward Motion
          </div>

        </div>

      </div>

    </footer>

  );

}
