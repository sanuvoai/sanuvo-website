import Reveal from './Reveal';

export default function SectionHeader({ eyebrow, title, lead, align = 'center', id }) {
  return (
    <Reveal className={`section-header section-header--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2" id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  );
}
