import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const CONTROLS = [
  {
    icon: 'approve',
    title: 'Approval tiers and segregation of duties',
    desc: 'Journal entries move through the approvals their tier requires, and nobody approves their own work.',
  },
  {
    icon: 'status',
    title: 'Period locks',
    desc: 'Closed periods block posting activity, and reopening an entity needs authority and a recorded reason.',
  },
  {
    icon: 'flag',
    title: 'Exceptions in the open',
    desc: 'Close and variance exceptions are raised, owned, and resolved in the open, and hold back the work that depends on them.',
  },
  {
    icon: 'export',
    title: 'A clean hand-off to the ERP',
    desc: 'Approved entries leave as ERP-ready export files and are marked posted only when the ERP reference is recorded.',
  },
];

export default function Controls() {
  return (
    <section id="controls" className="section section--navy" aria-labelledby="controls-title">
      <div className="container">
        <SectionHeader
          id="controls-title"
          eyebrow="Controls"
          title="Control you can see"
          lead="Under control means knowing who prepared it, who approved it, what is still open, and what has been handed off. Sanuvo workflows are configured around those four questions."
        />

        <div className="grid grid--4">
          {CONTROLS.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="card card--dark">
              <span className="card__icon"><Icon name={c.icon} size={22} /></span>
              <h3 className="h3">{c.title}</h3>
              <p>{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
