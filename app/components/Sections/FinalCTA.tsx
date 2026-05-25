import Section from "../ui/Section";
import Container from "../ui/Container";
import CTA from "../ui/CTA";

export default function FinalCTA() {

  return (

    <Section className="bg-[var(--color-background)]">

      <Container>

        <CTA
          title="Operational clarity begins with visibility."
          subtitle="Discover where execution diverges, where governance weakens, and where operational integrity can be restored."
          buttonText="Schedule an Assessment"
          buttonHref="https://calendly.com/anchorpoint/discovery"
        />

      </Container>

    </Section>

  );
}