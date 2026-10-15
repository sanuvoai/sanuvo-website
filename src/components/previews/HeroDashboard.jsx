import PreviewFrame from '../ui/PreviewFrame';
import Icon from '../ui/Icon';
import StatusChip from './StatusChip';
import { JOURNAL_ENTRIES, ENTITY_PROGRESS, POSTING_PACKAGES, PERIOD } from './sampleData';

const NAV = [
  { label: 'Overview',        icon: 'status',  active: true },
  { label: 'Journal Entries', icon: 'journal' },
  { label: 'Close',           icon: 'calendar' },
  { label: 'ERP Posting',     icon: 'export'  },
  { label: 'Evidence',        icon: 'approve' },
];

const KPIS = [
  { label: 'Entries awaiting approval',     value: '6',       meta: 'of 24 this period'      },
  { label: 'Reconciliation tasks complete', value: '16 / 22', meta: 'This period'            },
  { label: 'Open exceptions',               value: '4',       meta: 'Close and variance'     },
  { label: 'Awaiting ERP confirmation',     value: '2',       meta: 'Posting packages'       },
];

export default function HeroDashboard() {
  return (
    <PreviewFrame
      className="preview--hero"
      title="Sanuvo · Financial Operations Control Layer"
      description="Preview of the Sanuvo control layer: a period-close overview with entries awaiting approval, reconciliation tasks complete, open exceptions and posting packages awaiting ERP confirmation, a journal entry approval queue, close progress by entity, and a list of posting packages."
    >
      <div className="app">
        <aside className="app__side">
          <p className="app__brand">Sanuvo</p>
          {NAV.map((n) => (
            <span key={n.label} className={`app__nav${n.active ? ' is-active' : ''}`}>
              <Icon name={n.icon} size={16} /> {n.label}
            </span>
          ))}
        </aside>

        <div className="app__main">
          <div className="pv__head">
            <div>
              <p className="pv__title">Close overview</p>
              <p className="pv__sub">{PERIOD} · All entities</p>
            </div>
            <span className="pv__action">Period: Sep 2026 <Icon name="chevron" size={14} /></span>
          </div>

          <div className="pv__tiles pv__tiles--4">
            {KPIS.map((k) => (
              <div key={k.label} className="tile">
                <p className="tile__label">{k.label}</p>
                <p className="tile__value">{k.value}</p>
                <p className="tile__meta">{k.meta}</p>
              </div>
            ))}
          </div>

          <div className="app__panels">
            <div className="panel">
              <p className="panel__title">Journal entry approval queue</p>
              <table className="ptable">
                <thead>
                  <tr>
                    <th>Entry</th>
                    <th className="col-c">Description</th>
                    <th className="num">Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {JOURNAL_ENTRIES.slice(0, 4).map((e) => (
                    <tr key={e.id}>
                      <td className="ptable__id">{e.id}</td>
                      <td className="col-c ptable__grow">{e.desc}</td>
                      <td className="num">{e.amount}</td>
                      <td><StatusChip status={e.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="panel">
              <p className="panel__title">Close progress by entity</p>
              <div className="panel__body">
                {ENTITY_PROGRESS.map((e) => (
                  <div key={e.entity} className="meter">
                    <div className="meter__row"><span>{e.entity}</span><span>{e.pct}%</span></div>
                    <div className="meter__track"><i style={{ width: `${e.pct}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel app__chart">
            <p className="panel__title">Posting packages</p>
            <table className="ptable">
              <thead>
                <tr>
                  <th>Package</th>
                  <th className="col-c">Format</th>
                  <th className="num">Entries</th>
                  <th className="col-b">Created</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {POSTING_PACKAGES.map((p) => (
                  <tr key={p.id}>
                    <td className="ptable__id">{p.id}</td>
                    <td className="col-c ptable__grow">{p.format}</td>
                    <td className="num">{p.entries}</td>
                    <td className="col-b">{p.created}</td>
                    <td><StatusChip status={p.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}
