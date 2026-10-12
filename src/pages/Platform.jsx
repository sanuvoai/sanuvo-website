import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import SolutionCards from '../components/SolutionCards';
import DeliveryModel from '../components/DeliveryModel';
import CtaBand from '../components/CtaBand';
import HeroDashboard from '../components/previews/HeroDashboard';
import { SOLUTIONS } from '../content/solutions';

const PRINCIPLES = [
  {
    icon: 'sliders',
    title: 'Configurable by design',
    desc: 'Workflows, approval paths, and statuses are configured around how your organization works, entity by entity.',
  },
  {
    icon: 'approve',
    title: 'Control built into the work',
    desc: 'Review and approval happen inside the workflow, so the record of who did what is a by-product of doing the work.',
  },
  {
    icon: 'status',
    title: 'Visibility for the whole team',
    desc: 'Preparers, reviewers, and finance leadership see the same status, so open work is never a matter of asking around.',
  },
  {
    icon: 'layers',
    title: 'Designed for your existing financial systems',
    desc: 'Sanuvo works around the systems you already run. It does not ask you to replace your ERP or general ledger.',
  },
];

const SOURCES = ['ERP and general ledger', 'Bank data', 'Spreadsheets and files'];
const RESULTS = ['Controlled workflows', 'Clear ownership', 'Visibility for leadership'];

export default function Platform() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="The Financial Operations Control Layer"
        lead="A configurable layer that works around your existing financial systems and brings preparation, review, matching, and visibility into one controlled place."
        secondary={{ label: 'Explore Solutions', to: '/solutions' }}
      />

      <section className="section" aria-labelledby="layer-title">
        <div className="container">
          <SectionHeader
            id="layer-title"
            eyebrow="How it fits"
            title="One control layer around the systems you already run"
            lead="Your financial systems stay where they are. Sanuvo sits around them and organizes the work that today happens in spreadsheets, inboxes, and meetings."
          />

          <Reveal as="figure" className="diagram">
            <div className="diagram__row">
              <div className="diagram__col">
                <p className="diagram__label">Your financial systems</p>
                {SOURCES.map((s) => <span key={s} className="diagram__node">{s}</span>)}
              </div>

              <span className="diagram__arrow" aria-hidden="true"><Icon name="arrow" size={22} /></span>

              <div className="diagram__col diagram__col--core">
                <p className="diagram__label">Sanuvo Financial Operations Control Layer</p>
                <div className="diagram__modules">
                  {SOLUTIONS.map((s) => (
                    <span key={s.slug} className="diagram__module"><Icon name={s.icon} size={15} /> {s.name}</span>
                  ))}
                </div>
                <p className="diagram__base">Workflows · Approvals · Status · Exceptions</p>
              </div>

              <span className="diagram__arrow" aria-hidden="true"><Icon name="arrow" size={22} /></span>

              <div className="diagram__col">
                <p className="diagram__label">Your finance team</p>
                {RESULTS.map((r) => <span key={r} className="diagram__node">{r}</span>)}
              </div>
            </div>
            <figcaption className="preview__caption">
              Conceptual diagram. How Sanuvo works with your systems is determined during the workflow assessment.
            </figcaption>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="principles-title">
        <div className="container">
          <SectionHeader id="principles-title" eyebrow="Principles" title="What the platform is built to do" />
          <div className="grid grid--4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="card">
                <span className="card__icon"><Icon name={p.icon} size={22} /></span>
                <h3 className="h3">{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="view-title">
        <div className="container">
          <SectionHeader
            id="view-title"
            eyebrow="A single view"
            title="Financial operations in one place"
            lead="A shared overview of what is open, what is waiting for review, and where attention is needed."
          />
          <Reveal><HeroDashboard /></Reveal>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="modules-title">
        <div className="container">
          <SectionHeader
            id="modules-title"
            eyebrow="Solution areas"
            title="Eight solution areas on one layer"
            lead="Each area is configured around your finance operations and can be introduced on its own or alongside others."
          />
          <SolutionCards />
        </div>
      </section>

      <DeliveryModel subject="the platform" />
      <CtaBand secondary={{ label: 'How implementation works', to: '/implementation' }} />
    </>
  );
}
