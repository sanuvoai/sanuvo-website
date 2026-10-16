import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';

// The journal entry lifecycle and the control enforced at each step (platform functionality).
const STEPS = [
  { title: 'Draft',          desc: 'Prepared in a consistent structure',            control: 'Must balance to be submitted' },
  { title: 'Support',        desc: 'Required documents referenced',                 control: 'Required support by journal type' },
  { title: 'Submitted',      desc: 'Routed to the approvers its tier requires',     control: 'Approval tier applied' },
  { title: 'Approved',       desc: 'Every approval decision recorded',              control: 'Preparers cannot approve their own entries' },
  { title: 'Packaged',       desc: 'Frozen into an ERP-ready export file',          control: 'Open period required; approvers cannot package their own entries' },
  { title: 'Posted',         desc: 'Confirmed once your team records it',           control: 'ERP reference required' },
];

export default function ControlPath() {
  return (
    <section className="section section--line" aria-labelledby="control-path-title">
      <div className="container">
        <SectionHeader
          id="control-path-title"
          eyebrow="The control path"
          title="Every journal entry follows the same controlled path"
          lead="Each step is recorded in the audit history, and the control at each step is enforced by the platform, not by a policy document."
        />

        <Reveal as="ol" className="cpath">
          {STEPS.map((s, i) => (
            <li key={s.title} className="cpath__step">
              <span className="cpath__marker"><span>{i + 1}</span></span>
              <p className="cpath__title">{s.title}</p>
              <p className="cpath__desc">{s.desc}</p>
              <p className="cpath__control"><Icon name="approve" size={13} /> {s.control}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
