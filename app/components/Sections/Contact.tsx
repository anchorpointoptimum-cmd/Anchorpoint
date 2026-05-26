import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Calendar
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Card from "../ui/Card";
import Stack from "../ui/Stack";
import SectionHeading from "../ui/SectionHeading";
import Button from "@/app/components/ui/Button";

export default function Contact() {

  return (

    <Section
      id="contact"
      className="bg-[var(--color-surface)]"
    >

      <Container>

        <SectionHeading
          title="Request an Operational Assessment"
          subtitle="Understand how your operations actually run—and where execution begins to break."
        />

        <Grid
          cols={2}
          className="max-w-6xl mx-auto items-start"
        >

          {/* Form Placeholder */}
          <Card>

            <h3 className="text-2xl text-[var(--color-text-primary)] mb-6">

              Send Us a Message

            </h3>

            <div className="bg-[var(--color-surface)] rounded-lg p-8 text-center text-[var(--color-text-secondary)]">

              Contact form integration coming next.

            </div>

          </Card>

          {/* Contact Information */}
          <Stack gap={8}>

            <div>

              <h3 className="text-2xl text-[var(--color-text-primary)] mb-6">

                Or Reach Out Directly

              </h3>

              <div className="space-y-4 mb-8">

                <Button
                  href="https://calendly.com/anchorpoint/discovery"
                  className="
                    flex
                    items-center
                    gap-4
                    bg-[var(--color-primary)]
                    hover:bg-[var(--color-primary-hover)]
                    text-white
                    p-4
                    rounded-lg
                    transition-all
                    duration-300
                  "
                >

                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">

                    <Calendar className="w-6 h-6" />

                  </div>

                  <div className="text-left">

                    <div className="font-medium">
                      Schedule a Discovery Call
                    </div>

                    <div className="text-sm text-teal-100">
                      30-minute operational assessment
                    </div>

                  </div>

                </Button>

                <Button
                  href="https://wa.me/2349064398730"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-4
                    bg-[var(--color-card)]
                    hover:bg-[var(--color-surface)]
                    text-[var(--color-text-primary)]
                    p-4
                    rounded-lg
                    border
                    border-[var(--color-border)]
                    transition-all
                    duration-300
                  "
                >

                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">

                    <MessageSquare className="w-6 h-6 text-[var(--color-primary)]" />

                  </div>

                  <div className="text-left">

                    <div className="font-medium">
                      WhatsApp
                    </div>

                    <div className="text-sm text-[var(--color-text-secondary)]">
                      +234 906 439 8730
                    </div>

                  </div>

                </Button>

              </div>

            </div>

            <Card className="space-y-6">

              <div className="flex items-start gap-4">

                <Mail className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />

                <div>

                  <div className="text-sm text-[var(--color-text-secondary)] mb-1">

                    Email

                  </div>

                  <a
                    href="mailto:anchorpointsolutions@gmail.com"
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors break-all"
                  >

                    anchorpointsolutions@gmail.com

                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <Phone className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />

                <div>

                  <div className="text-sm text-[var(--color-text-secondary)] mb-1">

                    Phone

                  </div>

                  <a
                    href="tel:+2349064398730"
                    className="text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
                  >

                    +234 906 439 8730

                  </a>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <MapPin className="w-5 h-5 text-[var(--color-primary)] mt-1 flex-shrink-0" />

                <div>

                  <div className="text-sm text-[var(--color-text-secondary)] mb-1">

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