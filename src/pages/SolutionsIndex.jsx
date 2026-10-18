import PageHero from '../components/ui/PageHero';
import SolutionCards from '../components/SolutionCards';
import DeliveryModel from '../components/DeliveryModel';
import CtaBand from '../components/CtaBand';
import SectionHeader from '../components/ui/SectionHeader';

export default function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions configured around your finance operations"
        lead="Eight solution areas covering the work that happens around your financial systems. Each is tailored to your systems, workflows, and controls."
        secondary={{ label: 'How implementation works', to: '/implementation' }}
      />

      <section className="section" aria-labelledby="all-solutions-title">
        <div className="container">
          <SectionHeader
            id="all-solutions-title"
            eyebrow="Solution areas"
            title="Where Sanuvo can help"
            lead="Start with the area causing the most manual work or the least visibility. Most engagements begin with one or two and expand from there."
          />
          <SolutionCards />
        </div>
      </section>

      <DeliveryModel subject="each solution" />
      <CtaBand secondary={{ label: 'Explore the platform', to: '/platform' }} />
    </>
  );
}
