import PreviewFrame from '../ui/PreviewFrame';
import Icon from '../ui/Icon';
import StatusChip from './StatusChip';
import { APPROVAL_QUEUE, CLOSE_BY_ENTITY, PACKAGES_PANEL, EXCEPTIONS_FEED, RECON_SUMMARY, PERIOD } from './sampleData';

const NAV = [
  { label: 'Command Center',  icon: 'status',  active: true },
  { label: 'Journal Entries', icon: 'journal'  },
  { label: 'Close',           icon: 'calendar' },
  { label: 'Reconciliations', icon: 'match'    },
  { label: 'ERP Posting',     icon: 'export'   },
  { label: 'Audit Evidence',  icon: 'approve'  },
];

const closeTotals = CLOSE_BY_ENTITY.reduce((t, e) => {
  t.tasks += e.complete + e.review + e.open + e.exception;
  t.complete += e.complete;
  t.exceptions += e.exception;
  return t;
}, { tasks: 0, complete: 0, exceptions: 0 });
const closePct = Math.round((closeTotals.complete / closeTotals.tasks) * 100);
const reconTotal = RECON_SUMMARY.reduce((n, s) => n + s.count, 0);
const reconComplete = RECON_SUMMARY.find((s) => s.label === 'Complete').count;
const awaiting = PACKAGES_PANEL.filter((p) => p.status === 'Awaiting ERP reference');
const varianceCount = EXCEPTIONS_FEED.filter((e) => e.type === 'Variance').length;

const KPIS = [
  { label: 'Entries awaiting approval', value: '6',                                meta: '2 waiting over 3 days' },
  { label: 'Close progress',            value: `${closePct}%`,                     meta: `${closeTotals.complete} of ${closeTotals.tasks} tasks · Day 4 of 6` },
  { label: 'Reconciliation tasks',      value: `${reconComplete} / ${reconTotal}`, meta: 'Complete this period' },
  { label: 'Awaiting ERP reference',    value: String(awaiting.length),            meta: 'Posting packages' },
  { label: 'Open exceptions',           value: String(EXCEPTIONS_FEED.length),     meta: `${closeTotals.exceptions} close · ${varianceCount} variance` },
];

const SEGMENTS = [
  { key: 'complete',  label: 'Complete',  tone: 'green' },
  { key: 'review',    label: 'In review', tone: 'amber' },
  { key: 'open',      label: 'Open',      tone: 'gray'  },
  { key: 'exception', label: 'Exception', tone: 'red'   },
];

export default function HeroDashboard() {
  const featured = awaiting[0];

  return (
    <div className="command">
      <PreviewFrame
        className="preview--hero"
        title="Sanuvo · Finance Operations Command Center"
        description={`Preview of the Sanuvo Finance Operations Command Center for ${PERIOD}: six journal entries awaiting approval, close progress of ${closePct} percent by entity, ${reconComplete} of ${reconTotal} reconciliation tasks complete, two posting packages awaiting an ERP reference, and four open close and variance exceptions.`}
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
                <p className="pv__title">Finance Operations Command Center</p>
                <p className="pv__sub">{PERIOD} close · 4 entities</p>
              </div>
              <span className="pv__action">Period: Sep 2026 <Icon name="chevron" size={14} /></span>
            </div>

            <div className="pv__tiles pv__tiles--5">
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
                <p className="panel__title">Journal approval queue <span className="panel__count">6 awaiting</span></p>
                <table className="ptable">
                  <thead>
                    <tr>
                      <th>Entry</th>
                      <th className="col-c">Description</th>
                      <th className="num">Amount</th>
                      <th className="col-b">Tier</th>
                      <th className="col-a">Waiting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {APPROVAL_QUEUE.map((e) => (
                      <tr key={e.id}>
                        <td className="ptable__id">{e.id}</td>
                        <td className="col-c ptable__grow">
                          {e.desc}
                          {e.note && <span className="ptable__note ptable__note--sod"><Icon name="approve" size={12} /> {e.note}</span>}
                        </td>
                        <td className="num">{e.amount}</td>
                        <td className="col-b"><span className="tier">{e.tier}</span></td>
                        <td className="col-a">{e.waiting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="panel">
                <p className="panel__title">Close progress by entity</p>
                <div className="panel__body">
                  {CLOSE_BY_ENTITY.map((e) => {
                    const total = e.complete + e.review + e.open + e.exception;
                    return (
                      <div key={e.entity} className="stack">
                        <div className="meter__row">
                          <span>{e.entity}</span>
                          <span>{Math.round((e.complete / total) * 100)}% · {e.complete}/{total}</span>
                        </div>
                        <div className="stack__bar">
                          {SEGMENTS.map((s) => e[s.key] > 0 && (
                            <i key={s.key} className={`stack__seg stack__seg--${s.tone}`} style={{ flexGrow: e[s.key] }} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                  <div className="stack__legend">
                    {SEGMENTS.map((s) => <span key={s.key}><i className={`chip__dot chip__dot--${s.tone}`} />{s.label}</span>)}
                  </div>
                  <p className="stack__lock"><Icon name="approve" size={13} /> Consolidated close locked until all 4 entities close</p>
                </div>
              </div>
            </div>

            <div className="app__panels app__panels--even">
              <div className="panel">
                <p className="panel__title">ERP posting confirmation</p>
                <div className="panel__body">
                  <div className="post">
                    <div className="post__head">
                      <span className="ptable__id">{featured.id}</span>
                      <StatusChip status={featured.status} />
                    </div>
                    <dl className="post__facts">
                      <div><dt>Format</dt><dd>{featured.format}</dd></div>
                      <div><dt>Entries</dt><dd>{featured.entries}</dd></div>
                      <div><dt>Debits</dt><dd className="num">{featured.total}</dd></div>
                      <div><dt>Credits</dt><dd className="num">{featured.total}</dd></div>
                    </dl>
                    <div className="post__field">
                      <span>ERP reference</span>
                      <b>JRN-55821</b>
                    </div>
                    <p className="post__note">Entries are marked posted only when the ERP reference is recorded.</p>
                  </div>
                  <ul className="post__list">
                    {PACKAGES_PANEL.slice(1).map((p) => (
                      <li key={p.id}>
                        <span className="ptable__id">{p.id}</span>
                        <span className="post__fmt">{p.format} · {p.entries} entries</span>
                        <StatusChip status={p.status} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="panel">
                <p className="panel__title">Open exceptions <span className="panel__count">{EXCEPTIONS_FEED.length}</span></p>
                <ul className="feed">
                  {EXCEPTIONS_FEED.map((x) => (
                    <li key={x.title} className="feed__item">
                      <span className={`feed__type feed__type--${x.type === 'Variance' ? 'variance' : 'close'}`}>{x.type}</span>
                      <div>
                        <p className="feed__title">{x.title}</p>
                        <p className="feed__meta">{x.entity} · {x.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PreviewFrame>

      <div className="command__float" aria-hidden="true">
        <span className="command__avatar">MC</span>
        <div>
          <p className="command__float-title">M. Chen approved JE-1041</p>
          <p className="command__float-meta">Tier 2 approval · Sep 28, 14:02 · Recorded in audit history</p>
        </div>
      </div>
    </div>
  );
}
