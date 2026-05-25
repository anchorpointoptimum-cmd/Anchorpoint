import Section from "../ui/Section";
import Container from "../ui/Container";
import Grid from "../ui/Grid";
import Card from "../ui/Card";
import ContentBlock from "../ui/ContentBlock";

export default function CaseStudyPreview() {

  const studies = [
    {
      title: "Execution Delay Reduction",
      description:
        "Stabilized fragmented operational coordination across distributed teams."
    },
    {
      title: "Governance Visibility Improvement",
      description:
        "Introduced structured approval flow and operational traceability."
    },
    {
      title: "Workflow Leakage Identification",
      description:
        "Mapped undocumented execution divergence across critical workflows."
    }
  ];

  return (

    <Section background="slate">

      <Container>

        <ContentBlock
          eyebrow="Operational Outcomes"
          title="Visibility creates operational control."
          description="Anchorpoint engagements uncover execution divergence, governance weaknesses, and operational fragmentation before they compound into systemic inefficiency."
        />

        <Grid
          cols={3}
          className="mt-16"
        >

          {studies.map((study, index) => (

            <Card key={index}>

              <h3 className="text-xl text-slate-900 mb-4">
                {study.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {study.description}
              </p>

            </Card>

          ))}

        </Grid>

      </Container>

    </Section>

  );
}