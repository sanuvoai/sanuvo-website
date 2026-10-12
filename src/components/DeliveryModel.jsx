import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const ROUTES = [
  {
    icon: 'layers',
    title: 'Platform functionality',
    desc: 'Where the Financial Operations Control Layer already supports a requirement, we use it as it stands.',
  },
  {
    icon: 'sliders',
    title: 'Configuration',
    desc: 'Where your process calls for it, we configure the platform around your entities, approvers, and controls.',
  },
  {
    icon: 'code',
    title: 'Scoped custom implementation',
    desc: 'Where a requirement is specific to your organization, we scope and build it as defined custom work.',
  },
];

// Explains how a solution is delivered. Used on solution, platform and implementation pages.
export default function DeliveryModel({ subject = 'each solution' }) {
  return (
    <section className="section section--navy" aria-labelledby="delivery-title">
      <div className="container">
        <SectionHeader
          id="delivery-title"
          eyebrow="How it is delivered"
          title={`How Sanuvo delivers ${subject}`}
          lead="Solutions configured around your finance operations. Every requirement is delivered through one of three routes."
        />

        <div className="grid grid--3">
          {ROUTES.map((r, i) => (
            <Reveal key={r.title} delay={i * 80} className="card card--dark">
              <span className="card__icon"><Icon name={r.icon} size={22} /></span>
              <h3 className="h3">{r.title}</h3>
              <p>{r.desc}</p>
            </Reveal>
          ))}
        </div>

        <p className="delivery__note">
          We assess your workflows first and tell you which route applies to each requirement
          before any scope is agreed. <Link to="/implementation">See how implementation works</Link>.
        </p>
      </div>
    </section>
  );
}
