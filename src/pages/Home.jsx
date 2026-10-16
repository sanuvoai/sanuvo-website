import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import BuiltFor from '../components/BuiltFor';
import Controls from '../components/Controls';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import SolutionCards from '../components/SolutionCards';
import SectionHeader from '../components/ui/SectionHeader';
import SystemsSection from '../components/SystemsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />

      <section id="solutions" className="section section--alt" aria-labelledby="solutions-title">
        <div className="container">
          <SectionHeader
            id="solutions-title"
            eyebrow="Solutions"
            title="Solutions configured around your finance operations"
            lead="Eight solution areas, each tailored to your financial systems, workflows, and controls, and delivered through platform functionality, configuration, or scoped custom implementation."
          />
          <SolutionCards />
        </div>
      </section>

      <SystemsSection />
      <HowItWorks />
      <BuiltFor />
      <Controls />
      <Faq />
      <CtaBand />
    </>
  );
}
