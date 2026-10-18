import { Link } from 'react-router-dom';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';
import { ERP_SYSTEMS, DATA_SOURCES, OTHER_LEDGERS, EXPORT_FORMATS, SYSTEMS_DISCLAIMER } from '../content/systems';

const FLOW = ['Your systems and files', 'Mapping and validation', 'Sanuvo', 'Export file', 'Your ERP\'s own import', 'ERP reference recorded'];

function ExportFormats() {
  return (
    <div className="sys__formats">
      <p className="sys__formats-title">Export formats available today</p>
      <ul>
        {EXPORT_FORMATS.map((f) => (
          <li key={f.name}><Icon name="check" size={14} /> <strong>{f.name}</strong> <span>{f.desc}</span></li>
        ))}
      </ul>
      <p className="sys__formats-note">Other ERP-specific formats are mapped and validated during implementation. The CSV layout is not certified for any specific ERP.</p>
    </div>
  );
}

// `compact` renders the Platform-page summary.
export default function SystemsSection({ compact = false }) {
  if (compact) {
    return (
      <section className="section section--alt" aria-labelledby="systems-compact-title">
        <div className="container">
          <SectionHeader
            id="systems-compact-title"
            eyebrow="Your systems"
            title="Built around your existing financial systems"
            lead="Sanuvo evaluates your ERP, banking, and spreadsheet data for each client, then scopes, maps, and validates the workflow your process needs."
          />
          <Reveal className="sys sys--compact">
            <ul className="sys__chips">
              {ERP_SYSTEMS.map((s) => <li key={s.name} className="sys__chip sys__chip--lg">{s.name}</li>)}
              {DATA_SOURCES.map((s) => <li key={s.name} className="sys__chip">{s.name}</li>)}
              {OTHER_LEDGERS.map((s) => <li key={s} className="sys__chip sys__chip--sm">{s}</li>)}
            </ul>
            <p className="sys__evaluated">Evaluated and mapped during implementation.</p>
            <ExportFormats />
            <p className="sys__disclaimer">{SYSTEMS_DISCLAIMER}</p>
            <p className="section-link"><Link to="/#systems">How Sanuvo works with your systems <Icon name="arrow" size={16} /></Link></p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="systems" className="section" aria-labelledby="systems-title">
      <div className="container">
        <SectionHeader
          id="systems-title"
          eyebrow="Your systems"
          title="Built around your existing financial systems"
          lead="Sanuvo is designed to work alongside the financial systems you already run. For each client, we evaluate your ERP, banking, and spreadsheet data, then scope, map, and validate the integration or workflow your process needs."
        />

        <Reveal className="sys">
          <p className="sys__group">Enterprise and mid-market ERPs</p>
          <ul className="sys__erps">
            {ERP_SYSTEMS.map((s) => (
              <li key={s.name} className="sys__tile">
                <span className="sys__mono sys__mono--icon" aria-hidden="true"><Icon name="layers" size={20} /></span>
                <span>
                  <strong>{s.name}</strong>
                  {s.detail && <small>{s.detail}</small>}
                  <em>Evaluated and mapped during implementation</em>
                </span>
              </li>
            ))}
          </ul>

          <p className="sys__group">Banking and spreadsheet data</p>
          <ul className="sys__data">
            {DATA_SOURCES.map((s) => (
              <li key={s.name} className="sys__tile sys__tile--data">
                <span className="sys__mono sys__mono--icon" aria-hidden="true"><Icon name={s.icon} size={20} /></span>
                <span>
                  <strong>{s.name}</strong>
                  <small>{s.desc}</small>
                  {s.today && <b className="sys__today"><Icon name="check" size={13} /> {s.today}</b>}
                </span>
              </li>
            ))}
          </ul>

          <p className="sys__group">Other accounting systems</p>
          <ul className="sys__chips">
            {OTHER_LEDGERS.map((s) => <li key={s} className="sys__chip sys__chip--sm">{s}</li>)}
          </ul>

          <ol className="sys__flow" aria-label="How data moves between your systems and Sanuvo">
            {FLOW.map((f, i) => (
              <li key={f}><span className={i === 2 ? 'sys__core' : undefined}>{f}</span></li>
            ))}
          </ol>

          <ExportFormats />
          <p className="sys__disclaimer">{SYSTEMS_DISCLAIMER}</p>
        </Reveal>
      </div>
    </section>
  );
}
