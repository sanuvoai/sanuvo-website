import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const ROLES = [
  {
    role: 'CFOs',
    need: 'Confidence in the numbers',
    desc: 'A clear view of where financial operations stand, without waiting for someone to assemble a status update.',
  },
  {
    role: 'Controllers',
    need: 'Control over the close',
    desc: 'Defined approvals and visible status for the work your team prepares, reviews, and hands off each period.',
  },
  {
    role: 'Finance Directors',
    need: 'Performance explained',
    desc: 'Budget-versus-actual variances with owner explanations and independent review, so planning starts from the same picture.',
  },
  {
    role: 'Multi-entity accounting teams',
    need: 'One process across entities',
    desc: 'A consistent way of working across every entity, instead of a different spreadsheet and habit for each one.',
  },
];

export default function BuiltFor() {
  return (
    <section id="built-for" className="section section--alt" aria-labelledby="built-for-title">
      <div className="container">
        <SectionHeader
          id="built-for-title"
          eyebrow="Who it's for"
          title="Built for the people accountable for the close"
        />

        <div className="grid grid--4">
          {ROLES.map((r, i) => (
            <Reveal key={r.role} delay={i * 80} className="card card--role">
              <p className="card__kicker">{r.role}</p>
              <h3 className="h3">{r.need}</h3>
              <p>{r.desc}</p>
            </Reveal>
          ))}
        </div>

        <p className="section-link">
          <Link to="/roles">See solutions by role <Icon name="arrow" size={16} /></Link>
        </p>
      </div>
    </section>
  );
}
