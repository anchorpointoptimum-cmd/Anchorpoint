import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Grid from "../ui/Grid";
import StatCard from "../ui/StatCard";

export default function Metrics() {

  const stats = [
    {
      value: "90 Days",
      label: "Operational Lift",
      description:
        "Structured stabilization and visibility improvements."
    },
    {
      value: "3 Phases",
      label: "Execution Framework",
      description:
        "Diagnose, Secure, Solve."
    },
    {
      value: "100%",
      label: "Governance Visibility",
      description:
        "Every engagement operates within a controlled operational environment."
    }
  ];

  return (

    <Section
  id="metrics"
  className="bg-[var(--color-surface)]"
>

      <Container>

        <SectionHeading
          title="Execution Outcomes"
          subtitle="Anchorpoint engagements focus on measurable operational stabilization, visibility, and governance clarity."
        />

        <Grid
          cols={3}
          className="max-w-6xl mx-auto"
        >

          {stats.map((stat, index) => (

            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />

          ))}

        </Grid>

      </Container>

    </Section>

  );
}