import PreviewFrame from '../ui/PreviewFrame';

// Fictional 13-week cash forecast, all entities, $K. Ending cash is derived from the flows,
// so every balance on the chart is opening cash plus inflows minus outflows to date:
//   4,820 + 11,084 inflows - 10,594 outflows = 5,310 at week 13.
// Outflows include biweekly payroll of 612 (odd weeks) and capital spend of 350 in week 8.
const OPENING = 4820;
const INFLOWS  = [892, 370, 1052, 410, 822, 410, 922, 1090, 1282, 730, 1212, 690, 1202];
const OUTFLOWS = [1012, 520, 992, 640, 1002, 560, 1012, 830, 992, 500, 1002, 520, 1012];
// Downside scenario: collections arrive about 15 days later than in the base case.
const DOWNSIDE = [4620, 4400, 4360, 4080, 3840, 3620, 3480, 3630, 3820, 3950, 4060, 4150, 4240];
const MINIMUM = 2500;

const BASE = INFLOWS.reduce((acc, inflow, i) => [...acc, acc[acc.length - 1] + inflow - OUTFLOWS[i]], [OPENING]).slice(1);
const total = (a) => a.reduce((n, v) => n + v, 0);
const low = (series) => series.reduce((best, v, i) => (v < best.v ? { v, week: i + 1 } : best), { v: Infinity, week: 0 });
const baseLow = low(BASE);
const downLow = low(DOWNSIDE);
const m = (k) => `$${(k / 1000).toFixed(2)}M`;

// Line chart geometry (viewBox 0..100), balances 2,000-6,000.
const Y0 = 2000, Y1 = 6000;
// Week w is plotted at the centre of its bar below; the opening balance sits at the left edge.
const x = (week) => (week === 0 ? 0 : ((week - 0.5) / 13) * 100);
const y = (v) => ((Y1 - v) / (Y1 - Y0)) * 100;
const line = (series) => [OPENING, ...series].map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(2)} ${y(v).toFixed(2)}`).join(' ');

// Flow chart: inflows above, outflows below a zero baseline, scale ±1,400.
const F = 1400;
const barW = 100 / 13;

const TILES = [
  { label: 'Ending cash, week 13', value: m(BASE[12]),   meta: `Downside ${m(DOWNSIDE[12])}` },
  { label: 'Lowest point, base',   value: m(baseLow.v),  meta: `Week ${baseLow.week}` },
  { label: 'Lowest point, downside', value: m(downLow.v), meta: `Week ${downLow.week} · ${m(downLow.v - MINIMUM)} above minimum` },
];

const ASSUMPTIONS = [
  ['Opening cash', m(OPENING)],
  ['13-week inflows', m(total(INFLOWS))],
  ['13-week outflows', m(total(OUTFLOWS))],
  ['Collections', 'Average 47 days'],
  ['Payroll', '$612K biweekly'],
  ['Capital spend', '$350K in week 8'],
  ['Minimum liquidity', m(MINIMUM)],
  ['Downside scenario', 'Collections 15 days slower'],
];

const TICKS = [1, 4, 7, 10, 13];

export default function CashForecastConcept() {
  return (
    <PreviewFrame
      kind="concept"
      title="13-week cash forecast · implementation concept"
      description={`Implementation concept of a 13-week cash forecast. Base case ending cash rises from ${m(OPENING)} to ${m(BASE[12])}, with a low of ${m(baseLow.v)} in week ${baseLow.week}. A downside scenario with slower collections reaches a low of ${m(downLow.v)} in week ${downLow.week}, above a minimum liquidity level of ${m(MINIMUM)}. A second chart shows weekly inflows and outflows, and a panel lists the forecast assumptions.`}
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">13-week cash forecast</p>
            <p className="pv__sub">All entities · USD · Weeks from 5 Oct 2026</p>
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

        <div className="fc">
          <div className="fc__charts">
            <div className="fc__chart">
              <div className="fc__legend">
                <span><i className="fc__key fc__key--base" />Base case</span>
                <span><i className="fc__key fc__key--down" />Downside</span>
                <span><i className="fc__key fc__key--min" />Minimum liquidity</span>
              </div>
              <p className="fc__label">Ending cash by week</p>
              <div className="fc__plot fc__plot--line">
                {[6000, 4000, 2000].map((t) => <span key={t} className="fc__ytick" style={{ top: `${y(t)}%` }}>${t / 1000}M</span>)}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true">
                  {[6000, 5000, 4000, 3000, 2000].map((t) => <line key={t} x1="0" x2="100" y1={y(t)} y2={y(t)} className="fc__grid" vectorEffect="non-scaling-stroke" />)}
                  <line x1="0" x2="100" y1={y(MINIMUM)} y2={y(MINIMUM)} className="fc__min" vectorEffect="non-scaling-stroke" />
                  <path d={line(DOWNSIDE)} className="fc__line fc__line--down" vectorEffect="non-scaling-stroke" />
                  <path d={line(BASE)} className="fc__line fc__line--base" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="fc__end" style={{ top: `${y(BASE[12])}%` }}>{m(BASE[12])}</span>
                <span className="fc__end" style={{ top: `${y(DOWNSIDE[12])}%` }}>{m(DOWNSIDE[12])}</span>
              </div>

              <p className="fc__label">Weekly inflows and outflows</p>
              <div className="fc__plot fc__plot--bars">
                <span className="fc__ytick" style={{ top: '0%' }}>+$1.4M</span>
                <span className="fc__ytick" style={{ top: '50%' }}>$0</span>
                <span className="fc__ytick" style={{ top: '100%' }}>−$1.4M</span>
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false" aria-hidden="true">
                  <line x1="0" x2="100" y1="50" y2="50" className="fc__zero" vectorEffect="non-scaling-stroke" />
                  {INFLOWS.map((v, i) => (
                    <rect key={`in${i}`} className="fc__bar fc__bar--in" x={i * barW + barW * 0.18} width={barW * 0.64} y={50 - (v / F) * 50} height={(v / F) * 50} />
                  ))}
                  {OUTFLOWS.map((v, i) => (
                    <rect key={`out${i}`} className="fc__bar fc__bar--out" x={i * barW + barW * 0.18} width={barW * 0.64} y={50} height={(v / F) * 50} />
                  ))}
                </svg>
              </div>
              <div className="fc__xaxis">
                {TICKS.map((w) => <span key={w} style={{ left: `${((w - 0.5) / 13) * 100}%` }}>Wk {w}</span>)}
              </div>
              <div className="fc__legend fc__legend--bars">
                <span><i className="fc__swatch fc__swatch--in" />Inflows</span>
                <span><i className="fc__swatch fc__swatch--out" />Outflows</span>
              </div>
            </div>
          </div>

          <div className="fc__assumptions">
            <p className="fc__label">Forecast assumptions</p>
            <dl>
              {ASSUMPTIONS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}
