import PreviewFrame from '../ui/PreviewFrame';
import StatusChip from './StatusChip';
import { RECON_ROWS, RECON_SUMMARY, PERIOD } from './sampleData';

export default function ReconciliationPreview() {
  return (
    <PreviewFrame
      title="Reconciliation Ops"
      description="Dashboard preview of a bank-to-general-ledger reconciliation showing counts of matched, potential match, unmatched and exception items, with bank transactions listed beside their ledger entries."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Bank to GL · Operating account</p>
            <p className="pv__sub">{PERIOD} · US Ops</p>
          </div>
        </div>

        <div className="pv__tiles pv__tiles--4">
          {RECON_SUMMARY.map((s) => (
            <div key={s.label} className="tile">
              <p className="tile__label"><i className={`chip__dot chip__dot--${s.tone}`} />{s.label}</p>
              <p className="tile__value">{s.count}</p>
            </div>
          ))}
        </div>

        <table className="ptable">
          <thead>
            <tr>
              <th className="col-a">Date</th>
              <th>Bank transaction</th>
              <th className="num">Bank</th>
              <th className="col-c">GL entry</th>
              <th className="num col-a">GL</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RECON_ROWS.map((r) => (
              <tr key={r.date + r.bank}>
                <td className="col-a">{r.date}</td>
                <td className="ptable__grow">{r.bank}</td>
                <td className="num">{r.bankAmt}</td>
                <td className={`col-c${r.glAmt ? '' : ' is-muted'}`}>{r.gl}</td>
                <td className="num col-a">{r.glAmt || '—'}</td>
                <td>
                  <StatusChip status={r.status} />
                  {r.note && <span className="ptable__note">{r.note}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pv__foot">
          <span>Showing 5 of 343 bank transactions</span>
          <span>31 items need review</span>
        </div>
      </div>
    </PreviewFrame>
  );
}
