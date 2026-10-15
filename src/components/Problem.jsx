import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

const PAINS = [
  {
    icon: 'files',
    title: 'Journal entries live in spreadsheets and inboxes',
    desc: 'Entries are prepared in one file, approved in an email thread, and re-keyed for the ERP. Nobody has a single view of what is drafted, approved, or posted.',
  },
  {
    icon: 'search',
    title: 'Reconciliations are worked line by line',
    desc: 'Teams spend the close ticking and tying routine items by hand, which leaves less time for the handful of differences that actually need judgment.',
  },
  {
    icon: 'clock',
    title: 'Cash visibility arrives after the decision',
    desc: 'Cash positions are assembled from bank portals and entity-level files, so the forecast is often out of date by the time leadership sees it.',
  },
];

export default function Problem() {
  return (
    <section className="section" aria-labelledby="problem-title">
      <div className="container">
        <SectionHeader
          id="problem-title"
          eyebrow="The problem"
          title="The close still runs on spreadsheets, email approvals, and manual tracking"
          lead="Most finance teams have an ERP. What they lack is control over the work that happens around it."
        />

        <div className="grid grid--3">
          {PAINS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="card">
              <span className="card__icon"><Icon name={p.icon} size={22} /></span>
              <h3 className="h3">{p.title}</h3>
              <p>{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
