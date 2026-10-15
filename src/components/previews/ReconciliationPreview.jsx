import PreviewFrame from '../ui/PreviewFrame';
import StatusChip from './StatusChip';
import { RECON_TASKS, RECON_SUMMARY, PERIOD } from './sampleData';

export default function ReconciliationPreview() {
  return (
    <PreviewFrame
      title="Reconciliation Ops"
      description="Preview of reconciliation close tasks, each with an account, entity, owner, independent reviewer, evidence status and task status, including one difference tracked as an exception."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Reconciliation tasks</p>
            <p className="pv__sub">{PERIOD} close · All entities</p>
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
              <th>Reconciliation</th>
              <th className="col-b">Entity</th>
              <th className="col-a">Owner</th>
              <th className="col-a">Reviewer</th>
              <th className="col-c">Evidence</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {RECON_TASKS.map((r) => (
              <tr key={r.account}>
                <td className="ptable__grow ptable__id">{r.account}</td>
                <td className="col-b">{r.entity}</td>
                <td className="col-a">{r.owner}</td>
                <td className="col-a">{r.reviewer}</td>
                <td className="col-c"><StatusChip status={r.evidence} /></td>
                <td>
                  <StatusChip status={r.status} />
                  {r.note && <span className="ptable__note">{r.note}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pv__foot">
          <span>Showing 5 of 22 reconciliation tasks</span>
          <span>16 of 22 complete</span>
        </div>
      </div>
    </PreviewFrame>
  );
}
