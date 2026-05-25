import Section from "../ui/Section";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Grid from "../ui/Grid";

export default function RegistryPreview() {

  const companies = [
    {
      name: "Atlas Manufacturing",
      status: "Certified"
    },
    {
      name: "Northline Logistics",
      status: "Under Review"
    },
    {
      name: "Vertex Operations",
      status: "Governance Stabilized"
    }
  ];

  return (

    <Section className="bg-[var(--color-background)]">

      <Container>

        <SectionHeading
          title="Governance Registry"
          subtitle="Anchorpoint operational environments maintain visibility across certified, stabilized, and governed operational systems."
        />

        <Grid cols={3}>

          {companies.map((company, index) => (

            <Card key={index}>

              <h3 className="text-xl text-[var(--color-text-primary)] mb-3">

                {company.name}

              </h3>

              <div className="inline-flex px-4 py-2 rounded-full bg-teal-100 text-[var(--color-primary)] text-sm">

                {company.status}

              </div>

            </Card>

          ))}

        </Grid>

      </Container>

    </Section>

  );
}