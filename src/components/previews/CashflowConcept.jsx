import PreviewFrame from '../ui/PreviewFrame';
import Icon from '../ui/Icon';

const INPUTS = ['Bank balances', 'Receivables and payables', 'Planned spend and commitments'];
const STEPS = [
  { num: '01', title: 'Assess',   desc: 'Map cash data sources and timing' },
  { num: '02', title: 'Design',   desc: 'Agree views, model, and assumptions' },
  { num: '03', title: 'Build',    desc: 'Configure and build the cash model' },
  { num: '04', title: 'Validate', desc: 'Reconcile outputs with your team' },
];
const OUTPUTS = ['Cash position', 'Forecast', 'Scenario comparison'];

// A workflow diagram, not a product screen: Cashflow Ops is delivered as a scoped engagement.
export default function CashflowConcept() {
  return (
    <PreviewFrame
      kind="concept"
      caption="Illustrative implementation concept."
      title="Cashflow Ops engagement"
      description="Conceptual workflow diagram of a Cashflow Ops engagement: cash data inputs feed a four-step engagement of assess, design, build and validate, producing a cash position view, a forecast and a scenario comparison."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">How a Cashflow Ops engagement works</p>
            <p className="pv__sub">Scoped to your data sources and decisions</p>
          </div>
        </div>

        <div className="flow">
          <div className="flow__col">
            <p className="flow__label">Your cash data</p>
            {INPUTS.map((i) => <span key={i} className="flow__node">{i}</span>)}
          </div>

          <span className="flow__arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>

          <div className="flow__col flow__col--core">
            <p className="flow__label">Scoped engagement</p>
            {STEPS.map((s) => (
              <span key={s.num} className="flow__step">
                <b>{s.num}</b>
                <span><strong>{s.title}</strong><small>{s.desc}</small></span>
              </span>
            ))}
          </div>

          <span className="flow__arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>

          <div className="flow__col">
            <p className="flow__label">For leadership</p>
            {OUTPUTS.map((o) => <span key={o} className="flow__node">{o}</span>)}
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}
