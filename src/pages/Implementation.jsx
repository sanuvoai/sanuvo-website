import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import DeliveryModel from '../components/DeliveryModel';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';

const STEPS = [
  {
    num: '01',
    title: 'Workflow assessment',
    desc: 'We walk through how the workflow runs today: the steps, the people, the systems, and where time and risk sit.',
  },
  {
    num: '02',
    title: 'Scope definition',
    desc: 'We set out what will be delivered and by which route: platform functionality, configuration, or custom implementation.',
  },
  {
    num: '03',
    title: 'Configuration and build',
    desc: 'We configure the platform around your entities, approval paths, and controls, and build any agreed custom work.',
  },
  {
    num: '04',
    title: 'Rollout and optimization',
    desc: 'Your team runs the workflow, and we keep refining it with you as your entities, team, and calendar change.',
  },
];

const ASSESSMENT = [
  { title: 'Workflow steps and owners', desc: 'Who prepares, who reviews, and where work waits.' },
  { title: 'Systems and data',          desc: 'Which financial systems, files, and reports the workflow touches.' },
  { title: 'Approvals and controls',    desc: 'The review steps and policies the workflow has to respect.' },
  { title: 'Volumes and exceptions',    desc: 'How much flows through, and what tends to go wrong.' },
  { title: 'Reporting needs',           desc: 'What leadership needs to see, and how often.' },
];

const AUTOMATION = [
  'For workflows that are specific to your organization and not covered by standard configuration.',
  'Scoped, documented, and agreed with you before any work starts.',
  'Designed for your existing financial systems rather than around a replacement.',
];

const FAQS = [
  {
    q: 'How long does implementation take?',
    a: 'It depends on the workflows in scope and how they run today, so we do not quote a standard timeline. We agree timing with you once the assessment and scope are complete.',
  },
  {
    q: 'Do we need to change our ERP or other financial systems?',
    a: 'No. Sanuvo is designed for your existing financial systems. How it works with them is assessed case by case and confirmed in the scope.',
  },
  {
    q: 'What if we need something the platform does not do today?',
    a: 'We will say so during scoping. Where a requirement is not covered by existing functionality or configuration, we can scope it as custom implementation, with the work defined and agreed in advance.',
  },
  {
    q: 'Who needs to be involved from our side?',
    a: 'Typically the person who owns the workflow, the people who run it day to day, and whoever approves the outcome. We will confirm this with you at the start of the assessment.',
  },
];

export default function Implementation() {
  return (
    <>
      <PageHero
        eyebrow="Implementation services"
        title="From workflow assessment to implementation"
        lead="Sanuvo assesses how each client's finance workflows run today and determines the appropriate implementation scope. You know what will be delivered, and how, before work begins."
        secondary={{ label: 'Explore Solutions', to: '/solutions' }}
      />

      <section className="section" aria-labelledby="steps-title">
        <div className="container">
          <SectionHeader
            id="steps-title"
            eyebrow="The process"
            title="Four stages, one accountable team"
            lead="The same team that assesses your workflow configures and delivers it."
          />
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.num} delay={i * 80} className="step">
                <span className="step__num">{s.num}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="assessment-title">
        <div className="container">
          <SectionHeader
            id="assessment-title"
            eyebrow="The assessment"
            title="What we look at"
            lead="The assessment is how we make sure the solution is tailored to your financial systems, workflows, and controls."
          />
          <div className="grid grid--3">
            {ASSESSMENT.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 80} className="card">
                <span className="card__icon"><Icon name="search" size={22} /></span>
                <h3 className="h3">{a.title}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DeliveryModel subject="your scope" />

      <section className="solution" aria-labelledby="automation-title">
        <div className="container container--narrow">
          <Reveal>
            <p className="eyebrow">Custom finance workflow automation</p>
            <h2 className="h2 h2--sm" id="automation-title">When your workflow does not fit a standard pattern</h2>
            <p className="lead lead--left">
              Some finance workflows are particular to one organization. Where configuration is not
              enough, Sanuvo scopes and builds custom automation around the way your team works.
            </p>
            <ul className="features">
              {AUTOMATION.map((a) => (
                <li key={a}>
                  <span className="features__check"><Icon name="check" size={14} /></span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Faq items={FAQS} title="Implementation questions" eyebrow="What to expect" />
      <CtaBand />
    </>
  );
}
