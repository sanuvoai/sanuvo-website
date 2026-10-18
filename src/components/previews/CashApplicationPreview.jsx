import PreviewFrame from '../ui/PreviewFrame';
import StatusChip from './StatusChip';
import { RECEIPTS } from './sampleData';

const TILES = [
  { label: 'Receipts today',    value: '42', tone: 'blue'  },
  { label: 'Applied',           value: '31', tone: 'green' },
  { label: 'Suggested matches', value: '8',  tone: 'amber' },
  { label: 'Unapplied',         value: '3',  tone: 'gray'  },
];

export default function CashApplicationPreview() {
  return (
    <PreviewFrame
      kind="concept"
      title="Cash Application Ops"
      description="Implementation concept: a cash application queue showing incoming receipts, the invoices they are matched or suggested against, and items that are short-paid or unapplied."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Cash application queue</p>
            <p className="pv__sub">Operating account · US Ops</p>
          </div>
        </div>

        <div className="pv__tiles pv__tiles--4">
          {TILES.map((t) => (
            <div key={t.label} className="tile">
              <p className="tile__label"><i className={`chip__dot chip__dot--${t.tone}`} />{t.label}</p>
              <p className="tile__value">{t.value}</p>
            </div>
          ))}
        </div>

        <table className="ptable">
          <thead>
            <tr>
              <th className="col-a">Receipt</th>
              <th>Payer</th>
              <th className="num">Amount</th>
              <th className="col-c">Invoice</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RECEIPTS.map((r) => (
              <tr key={r.id}>
                <td className="col-a ptable__id">{r.id}</td>
                <td className="ptable__grow">{r.payer}</td>
                <td className="num">{r.amount}</td>
                <td className={`col-c${r.invoice ? '' : ' is-muted'}`}>{r.invoice || 'No match found'}</td>
                <td>
                  <StatusChip status={r.status} />
                  {r.note && <span className="ptable__note">{r.note}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pv__foot">
          <span>Showing 4 of 42 receipts</span>
          <span>11 items need review</span>
        </div>
      </div>
    </PreviewFrame>
  );
}
