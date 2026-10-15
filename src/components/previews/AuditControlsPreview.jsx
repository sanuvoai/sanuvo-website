import PreviewFrame from '../ui/PreviewFrame';
import Icon from '../ui/Icon';
import StatusChip from './StatusChip';
import { BINDER_ITEMS, BINDER_SUMMARY, PERIOD } from './sampleData';

export default function AuditControlsPreview() {
  return (
    <PreviewFrame
      title="Audit & Controls"
      description="Preview of an audit evidence binder listing evidence items by process, who attached each reference and when, and its readiness, with a summary of items ready, pending review, missing evidence or in exception, and an export action."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Audit evidence binder</p>
            <p className="pv__sub">{PERIOD} · All entities</p>
          </div>
          <span className="pv__action"><Icon name="export" size={14} /> Export audit package</span>
        </div>

        <div className="pv__tiles pv__tiles--4">
          {BINDER_SUMMARY.map((s) => (
            <div key={s.label} className="tile">
              <p className="tile__label"><i className={`chip__dot chip__dot--${s.tone}`} />{s.label}</p>
              <p className="tile__value">{s.count}</p>
            </div>
          ))}
        </div>

        <table className="ptable">
          <thead>
            <tr>
              <th>Evidence item</th>
              <th className="col-b">Process</th>
              <th className="col-a">Attached by</th>
              <th className="col-c">When</th>
              <th>Readiness</th>
            </tr>
          </thead>
          <tbody>
            {BINDER_ITEMS.map((b) => (
              <tr key={b.item}>
                <td className="ptable__grow ptable__id">{b.item}</td>
                <td className="col-b">{b.process}</td>
                <td className="col-a">{b.attachedBy}</td>
                <td className="col-c">{b.when}</td>
                <td><StatusChip status={b.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pv__foot">
          <span>Showing 5 of 48 items</span>
          <span>40 ready · 5 pending review · 3 need attention</span>
        </div>
      </div>
    </PreviewFrame>
  );
}
