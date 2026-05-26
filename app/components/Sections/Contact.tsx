"use client";

import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Calendar,
  ArrowUpRight,
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Card from "../ui/Card";
import Stack from "../ui/Stack";
import SectionHeading from "../ui/SectionHeading";

/* =========================================================
   TEMPORARY DEPLOYMENT-SAFE BUTTON
========================================================= */

function ActionButton({
  children,
  href,
  className = "",
  target,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
}) {

  return (

    <a
      href={href}
      target={target}
      className={className}
    >

      {children}

    </a>

  );

}

/* =========================================================
   COMPONENT
========================================================= */

export default function Contact() {

  return (

    <Section
      id="contact"
      className="
        relative
        overflow-hidden

        bg-[var(--color-surface)]
      "
    >

      {/* =============================================
         ATMOSPHERIC BACKGROUND
      ============================================= */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.08),transparent_60%)]

          pointer-events-none
        "
      />

      <Container>

        {/* =========================================
           HEADING
        ========================================= */}

        <SectionHeading
          title="Request an Operational Assessment"
          subtitle="
            Understand how your operations actually run —
            and where execution begins to fracture under
            structural pressure.
          "
        />

        {/* =========================================
           GRID
        ========================================= */}

        <Grid
          cols={2}
          className="
            max-w-6xl
            mx-auto
            items-start
            gap-10
          "
        >

          {/* =====================================
             LEFT PANEL
          ===================================== */}

          <Card
            className="
              relative
              overflow-hidden

              border
              border-[var(--color-border)]

              bg-[var(--color-card)]
              backdrop-blur-xl
            "
          >

            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.08),transparent_40%)]

                pointer-events-none
              "
            />

            <div className="relative z-10">

              <h3
                className="
                  text-3xl
                  tracking-[-0.04em]

                  text-[var(--color-text-primary)]

                  mb-6
                "
              >
                Strategic Inquiry
              </h3>

              <p
                className="
                  text-[var(--color-text-secondary)]
                  leading-relaxed

                  mb-10
                "
              >
                Anchorpoint evaluates operational continuity,
                governance leakage, execution degradation,
                and structural instability across institutional
                systems.
              </p>

              <div
                className="
                  rounded-2xl

                  border
                  border-dashed
                  border-[var(--color-border)]

                  bg-[var(--color-surface)]

                  p-10

                  text-center
                "
              >

                <div
                  className="
                    text-lg
                    text-[var(--color-text-primary)]

                    mb-3
                  "
                >
                  Operational Intake Interface
                </div>

                <div
                  className="
                    text-sm
                    text-[var(--color-text-secondary)]
                  "
                >
                  Institutional assessment intake system
                  currently undergoing sovereign expansion.
                </div>

              </div>

            </div>

          </Card>

          {/* =====================================
             RIGHT PANEL
          ===================================== */}

          <Stack gap={8}>

            <div>

              <h3
                className="
                  text-3xl
                  tracking-[-0.04em]

                  text-[var(--color-text-primary)]

                  mb-8
                "
              >
                Direct Engagement
              </h3>

              <div className="space-y-5">

                {/* =================================
                   DISCOVERY CALL
                ================================= */}

                <ActionButton
                  href="https://calendly.com/anchorpoint/discovery"
                  target="_blank"
                  className="
                    group

                    w-full

                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    bg-[var(--color-primary)]

                    p-6

                    hover:scale-[1.01]
                    hover:shadow-2xl

                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center gap-5">

                    <div
                      className="
                        w-14
                        h-14

                        rounded-xl

                        bg-white/15

                        flex
                        items-center
                        justify-center

                        flex-shrink-0
                      "
                    >

                      <Calendar className="w-6 h-6 text-white" />

                    </div>

                    <div className="text-left">

                      <div
                        className="
                          text-base
                          font-medium

                          text-white
                        "
                      >
                        Schedule Discovery Session
                      </div>

                      <div
                        className="
                          text-sm
                          text-teal-100
                        "
                      >
                        Strategic operational assessment
                      </div>

                    </div>

                  </div>

                  <ArrowUpRight
                    className="
                      w-5
                      h-5

                      text-white

                      group-hover:translate-x-1
                      group-hover:-translate-y-1

                      transition-transform
                    "
                  />

                </ActionButton>

                {/* =================================
                   WHATSAPP
                ================================= */}

                <ActionButton
                  href="https://wa.me/2349064398730"
                  target="_blank"
                  className="
                    group

                    w-full

                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-[var(--color-border)]

                    bg-[var(--color-card)]

                    p-6

                    hover:bg-[var(--color-surface)]

                    transition-all
                    duration-300
                  "
                >

                  <div className="flex items-center gap-5">

                    <div
                      className="
                        w-14
                        h-14

                        rounded-xl

                        bg-teal-100

                        flex
                        items-center
                        justify-center

                        flex-shrink-0
                      "
                    >

                      <MessageSquare
                        className="
                          w-6
                          h-6

                          text-[var(--color-primary)]
                        "
                      />

                    </div>

                    <div className="text-left">

                      <div
                        className="
                          text-base
                          font-medium

                          text-[var(--color-text-primary)]
                        "
                      >
                        WhatsApp Communication
                      </div>

                      <div
                        className="
                          text-sm
                          text-[var(--color-text-secondary)]
                        "
                      >
                        +234 906 439 8730
                      </div>

                    </div>

                  </div>

                  <ArrowUpRight
                    className="
                      w-5
                      h-5

                      text-[var(--color-text-secondary)]

                      group-hover:translate-x-1
                      group-hover:-translate-y-1

                      transition-transform
                    "
                  />

                </ActionButton>

              </div>

            </div>

            {/* ===================================
               CONTACT DETAILS
            =================================== */}

            <Card
              className="
                border
                border-[var(--color-border)]

                bg-[var(--color-card)]

                backdrop-blur-xl

                space-y-8
              "
            >

              {/* Email */}

              <div className="flex items-start gap-5">

                <Mail
                  className="
                    w-5
                    h-5

                    text-[var(--color-primary)]

                    mt-1
                    flex-shrink-0
                  "
                />

                <div>

                  <div
                    className="
                      text-sm
                      uppercase
                      tracking-[0.2em]

                      text-[var(--color-text-secondary)]

                      mb-2
                    "
                  >
                    Email
                  </div>

                  <a
                    href="mailto:anchorpointsolutions@gmail.com"
                    className="
                      text-[var(--color-text-primary)]

                      hover:text-[var(--color-primary)]

                      transition-colors

                      break-all
                    "
                  >
                    anchorpointsolutions@gmail.com
                  </a>

                </div>

              </div>

              {/* Phone */}

              <div className="flex items-start gap-5">

                <Phone
                  className="
                    w-5
                    h-5

                    text-[var(--color-primary)]

                    mt-1
                    flex-shrink-0
                  "
                />

                <div>

                  <div
                    className="
                      text-sm
                      uppercase
                      tracking-[0.2em]

                      text-[var(--color-text-secondary)]

                      mb-2
                    "
                  >
                    Phone
                  </div>

                  <a
                    href="tel:+2349064398730"
                    className="
                      text-[var(--color-text-primary)]

                      hover:text-[var(--color-primary)]

                      transition-colors
                    "
                  >
                    +234 906 439 8730
                  </a>

                </div>

              </div>

              {/* Location */}

              <div className="flex items-start gap-5">

                <MapPin
                  className="
                    w-5
                    h-5

                    text-[var(--color-primary)]

                    mt-1
                    flex-shrink-0
                  "
                />

                <div>

                  <div
                    className="
                      text-sm
                      uppercase
                      tracking-[0.2em]

                      text-[var(--color-text-secondary)]

                      mb-2
                    "
                  >
                    Location
                  </div>

                  <p className="text-[var(--color-text-primary)]">
                    Rivers, Nigeria
                  </p>

                </div>

              </div>

            </Card>

          </Stack>

        </Grid>

      </Container>

    </Section>

  );

}