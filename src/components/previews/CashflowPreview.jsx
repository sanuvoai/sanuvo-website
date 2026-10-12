import PreviewFrame from '../ui/PreviewFrame';
import CashChart from './CashChart';

const TILES = [
  { label: 'Cash position today',     value: '$4.82M', meta: 'Across 4 entities'  },
  { label: 'Projected low (base)',    value: '$3.96M', meta: 'Week 7'             },
  { label: 'Projected week 13 (base)', value: '$5.31M', meta: 'Downside $4.24M'   },
];

export default function CashflowPreview() {
  return (
    <PreviewFrame
      title="Cashflow Ops"
      description="Dashboard preview of a cash position and 13-week forecast: a line chart of actual cash followed by a base forecast and a lower downside scenario."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Cash position and 13-week forecast</p>
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

        <div className="pv__chart">
          <CashChart />
        </div>
      </div>
    </PreviewFrame>
  );
}
