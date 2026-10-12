import PreviewFrame from '../ui/PreviewFrame';
import StatusChip from './StatusChip';
import { AR_AGING, BILLS } from './sampleData';

const TILES = [
  { label: 'Open receivables',   value: '$2.94M', meta: 'All customers' },
  { label: 'Open payables',      value: '$1.87M', meta: 'All vendors'   },
  { label: 'Awaiting approval',  value: '7',      meta: 'Bills'         },
];

const MAX = Math.max(...AR_AGING.map((a) => a.amount));

export default function ApArPreview() {
  return (
    <PreviewFrame
      title="AP & AR Ops"
      description="Conceptual preview of a payables and receivables workspace showing open receivables by age bucket and a list of bills with their approval status."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Payables and receivables</p>
            <p className="pv__sub">All entities · USD</p>
          </div>
        </div>

        <div className="pv__tiles pv__tiles--3">
          {TILES.map((t) => (
            <div key={t.label} className="tile">
              <p className="tile__label">{t.label}</p>
              <p className="tile__value">{t.value}</p>
              <p className="tile__meta">{t.meta}</p>
            </div>
          ))}
        </div>

        <div className="pv__chart pv__block">
          <p className="pv__label">Receivables aging</p>
          {AR_AGING.map((a) => (
            <div key={a.bucket} className="meter">
              <div className="meter__row"><span>{a.bucket}</span><span>${a.amount.toFixed(2)}M</span></div>
              <div className="meter__track"><i style={{ width: `${(a.amount / MAX) * 100}%` }} /></div>
            </div>
          ))}
        </div>

        <table className="ptable">
          <thead>
            <tr>
              <th className="col-a">Bill</th>
              <th>Vendor</th>
              <th className="col-c">Due</th>
              <th className="num">Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {BILLS.map((b) => (
              <tr key={b.id}>
                <td className="col-a ptable__id">{b.id}</td>
                <td className="ptable__grow">{b.vendor}</td>
                <td className="col-c">{b.due}</td>
                <td className="num">{b.amount}</td>
                <td><StatusChip status={b.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PreviewFrame>
  );
}
