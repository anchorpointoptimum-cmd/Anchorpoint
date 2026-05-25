import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import FeatureList from "../ui/FeatureList";

export default function Environment() {

  const features = [
    "Centralized operational visibility",
    "Secure governance-controlled access",
    "Version-controlled process integrity",
    "Operational traceability across teams",
    "Structured execution accountability",
    "Reduced workflow fragmentation"
  ];

  return (

    <Section className="bg-[var(--color-background)]">

      <Container>

        <SectionHeading
          title="Controlled Operational Environment"
          subtitle="Every Anchorpoint engagement operates within a structured environment designed for visibility, traceability, and governance."
        />

        <div className="max-w-4xl mx-auto">

          <Card className="hover:shadow-[var(--shadow-card)] transition-all duration-300">

            <FeatureList items={features} />

          </Card>

        </div>

      </Container>

    </Section>

  );
}