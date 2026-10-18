import PreviewFrame from '../ui/PreviewFrame';
import { REVENUE_TREND, BUDGET_VS_ACTUAL, PERIOD } from './sampleData';

const TILES = [
  { label: 'Revenue',            value: '$3.42M', meta: 'Budget $3.35M' },
  { label: 'Operating expenses', value: '$2.61M', meta: 'Budget $2.63M' },
  { label: 'Operating margin',   value: '23.7%',  meta: 'Month to date' },
];

const MAX = Math.max(...REVENUE_TREND.map((r) => r.value));
const fmt = (n) => n.toLocaleString('en-US');
const signed = (n) => `${n > 0 ? '+' : n < 0 ? '−' : ''}${fmt(Math.abs(n))}`;

export default function ReportingPreview() {
  const last = REVENUE_TREND.length - 1;

  return (
    <PreviewFrame
      kind="concept"
      title="Reporting & Analytics"
      description="Implementation concept: a management reporting view with revenue, operating expenses and margin, a six-month revenue bar chart, and a budget versus actual table by department."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Management reporting</p>
            <p className="pv__sub">{PERIOD} · Consolidated</p>
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
          <p className="pv__label">Revenue by month ($M)</p>
          <div className="bars">
            {REVENUE_TREND.map((r, i) => (
              <div key={r.month} className="bars__col">
                <span className="bars__val">{i === last ? r.value.toFixed(2) : ''}</span>
                <i className="bars__bar" style={{ height: `calc((100% - 38px) * ${(r.value / MAX).toFixed(3)})` }} />
                <span className="bars__label">{r.month}</span>
              </div>
            ))}
          </div>
        </div>

        <table className="ptable">
          <thead>
            <tr>
              <th>Operating expenses ($K)</th>
              <th className="num col-c">Budget</th>
              <th className="num">Actual</th>
              <th className="num">Variance</th>
            </tr>
          </thead>
          <tbody>
            {BUDGET_VS_ACTUAL.map((b) => (
              <tr key={b.dept}>
                <td className="ptable__grow ptable__id">{b.dept}</td>
                <td className="num col-c">{fmt(b.budget)}</td>
                <td className="num">{fmt(b.actual)}</td>
                <td className="num">{signed(b.actual - b.budget)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PreviewFrame>
  );
}
