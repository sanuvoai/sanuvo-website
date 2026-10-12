import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const CONTROLS = [
  {
    icon: 'approve',
    title: 'Defined approvals',
    desc: 'Journal entries move through review before they are exported, rather than being approved in a side conversation.',
  },
  {
    icon: 'status',
    title: 'Status at every step',
    desc: 'Each entry carries a visible status from draft to exported, so open work is never a matter of asking around.',
  },
  {
    icon: 'flag',
    title: 'Exceptions in the open',
    desc: 'Items that do not match are surfaced for review instead of sitting unnoticed in a worksheet tab.',
  },
  {
    icon: 'export',
    title: 'A clean hand-off to the ERP',
    desc: 'Approved entries leave as ERP-ready export files, which reduces re-keying between approval and posting.',
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
