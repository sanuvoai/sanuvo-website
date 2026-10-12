import { CASH_ACTUAL, CASH_BASE, CASH_DOWNSIDE } from './sampleData';

const Y_MIN = 3;
const Y_MAX = 6;
const LAST = CASH_ACTUAL.length - 1 + CASH_BASE.length - 1; // last x index
const TODAY = CASH_ACTUAL.length - 1;

const x = (i) => (i / LAST) * 100;
const y = (v) => ((Y_MAX - v) / (Y_MAX - Y_MIN)) * 100;
const path = (values, offset = 0) =>
  values.map((v, i) => `${i ? 'L' : 'M'}${x(i + offset).toFixed(2)} ${y(v).toFixed(2)}`).join(' ');

const Y_TICKS = [6, 5, 4, 3];
const X_TICKS = [
  { i: 0,         label: '-4 wk' },
  { i: TODAY,     label: 'Today' },
  { i: TODAY + 4, label: 'Wk 4'  },
  { i: TODAY + 8, label: 'Wk 8'  },
  { i: LAST,      label: 'Wk 13' },
];

// Static line chart. The SVG stretches to its box (non-scaling strokes) and every
// label is HTML, so text stays legible at any width.
export default function CashChart({ compact = false }) {
  const baseEnd = CASH_BASE[CASH_BASE.length - 1];
  const downEnd = CASH_DOWNSIDE[CASH_DOWNSIDE.length - 1];

  return (
    <div className={`chart${compact ? ' chart--compact' : ''}`}>
      <div className="chart__legend">
        <span><i className="chart__key chart__key--actual" />Actual</span>
        <span><i className="chart__key chart__key--base" />Base forecast</span>
        <span><i className="chart__key chart__key--down" />Downside scenario</span>
      </div>

      <div className="chart__plot">
        {Y_TICKS.map((t) => (
          <span key={t} className="chart__ytick" style={{ top: `${y(t)}%` }}>${t}M</span>
        ))}

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
          {Y_TICKS.map((t) => (
            <line key={t} x1="0" x2="100" y1={y(t)} y2={y(t)} className="chart__grid" vectorEffect="non-scaling-stroke" />
          ))}
          <line x1={x(TODAY)} x2={x(TODAY)} y1="0" y2="100" className="chart__today" vectorEffect="non-scaling-stroke" />
          <path d={path(CASH_DOWNSIDE, TODAY)} className="chart__line chart__line--down" vectorEffect="non-scaling-stroke" />
          <path d={path(CASH_BASE, TODAY)} className="chart__line chart__line--base" vectorEffect="non-scaling-stroke" />
          <path d={path(CASH_ACTUAL)} className="chart__line chart__line--actual" vectorEffect="non-scaling-stroke" />
        </svg>

        <i className="chart__dot chart__dot--base" style={{ left: `${x(TODAY)}%`, top: `${y(CASH_ACTUAL[TODAY])}%` }} />
        <i className="chart__dot chart__dot--base" style={{ left: '100%', top: `${y(baseEnd)}%` }} />
        <i className="chart__dot chart__dot--down" style={{ left: '100%', top: `${y(downEnd)}%` }} />

        <span className="chart__end" style={{ top: `${y(baseEnd)}%` }}><em>Base </em>${baseEnd.toFixed(2)}M</span>
        <span className="chart__end" style={{ top: `${y(downEnd)}%` }}><em>Downside </em>${downEnd.toFixed(2)}M</span>
      </div>

      <div className="chart__xaxis">
        {X_TICKS.map((t) => (
          <span key={t.label} style={{ left: `${x(t.i)}%` }}>{t.label}</span>
        ))}
      </div>
    </div>
  );
}
