import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import SectionHeader from '../components/ui/SectionHeader';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import CtaBand from '../components/CtaBand';
import DemoButton from '../components/ui/DemoButton';
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_TEL } from '../config/site';

const OFFERINGS = [
  {
    icon: 'layers',
    title: 'Financial Operations Control Layer',
    desc: 'A configurable platform that organizes the finance work happening around your existing systems.',
    to: '/platform',
    link: 'Explore the platform',
  },
  {
    icon: 'sliders',
    title: 'Implementation services',
    desc: 'Workflow assessment, scoping, configuration, and rollout, delivered by one accountable team.',
    to: '/implementation',
    link: 'How implementation works',
  },
  {
    icon: 'code',
    title: 'Custom finance workflow automation',
    desc: 'Scoped custom work for the workflows that are particular to your organization.',
    to: '/implementation',
    link: 'About custom work',
  },
];

const PRINCIPLES = [
  { title: 'Start with the workflow',   desc: 'We look at how the work actually runs before recommending anything.' },
  { title: 'Fit the organization',      desc: 'Solutions are tailored to your financial systems, workflows, and controls.' },
  { title: 'Be precise about scope',    desc: 'We say what will be delivered, and by which route, before work begins.' },
  { title: 'Keep finance in control',   desc: 'Automation supports your team\'s review and judgment; it does not replace them.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Sanuvo"
        title="A Financial Operations Optimization company"
        lead="Sanuvo helps finance teams bring control, efficiency, and visibility to the work that happens around their financial systems."
        secondary={{ label: 'Explore Solutions', to: '/solutions' }}
      />

      <section className="section" aria-labelledby="offer-title">
        <div className="container">
          <SectionHeader
            id="offer-title"
            eyebrow="What we do"
            title="Software and the services to make it fit"
            lead="Most finance teams do not need another system. They need the work around their systems to be controlled, visible, and less manual. That is what we deliver, in three ways."
          />
          <div className="grid grid--3">
            {OFFERINGS.map((o, i) => (
              <Reveal key={o.title} delay={i * 80} className="card">
                <span className="card__icon"><Icon name={o.icon} size={22} /></span>
                <h3 className="h3">{o.title}</h3>
                <p>{o.desc}</p>
                <Link to={o.to} className="card__more">{o.link} <Icon name="arrow" size={16} /></Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="how-we-work-title">
        <div className="container">
          <SectionHeader id="how-we-work-title" eyebrow="How we work" title="Four principles behind every engagement" />
          <div className="grid grid--4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="card card--role">
                <p className="card__kicker">0{i + 1}</p>
                <h3 className="h3">{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
          <p className="section-link">
            <Link to="/roles">See who we work with <Icon name="arrow" size={16} /></Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="container">
          <Reveal className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="h2 h2--sm" id="contact-title">Talk to Sanuvo</h2>
              <p className="lead lead--left">
                For questions about Sanuvo, implementation, or working together, email or call us
                directly, or book a demo.
              </p>
            </div>
            <div className="contact-card__actions">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-card__email">
                <Icon name="mail" size={20} /> {CONTACT_EMAIL}
              </a>
              <a href={CONTACT_PHONE_TEL} className="contact-card__email">
                <Icon name="phone" size={20} /> {CONTACT_PHONE}
              </a>
              <DemoButton />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
