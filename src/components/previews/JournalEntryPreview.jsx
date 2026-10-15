import PreviewFrame from '../ui/PreviewFrame';
import Icon from '../ui/Icon';
import StatusChip from './StatusChip';
import { JOURNAL_ENTRIES, JE_FILTERS, PERIOD } from './sampleData';

export default function JournalEntryPreview() {
  return (
    <PreviewFrame
      title="Journal Entry Ops"
      description="Preview of a journal entry queue showing entries by entity, amount, preparer and approval status, with approved entries ready to package for the ERP."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Journal entries</p>
            <p className="pv__sub">{PERIOD} close · All entities</p>
          </div>
          <span className="pv__action"><Icon name="export" size={14} /> Generate posting package</span>
        </div>

        <div className="pv__filters">
          {JE_FILTERS.map((f, i) => (
            <span key={f.label} className={`pv__filter${i === 0 ? ' is-active' : ''}`}>
              {f.label} <b>{f.count}</b>
            </span>
          ))}
        </div>

        <table className="ptable">
          <thead>
            <tr>
              <th>Entry</th>
              <th className="col-c">Description</th>
              <th className="col-b">Entity</th>
              <th className="num">Amount</th>
              <th className="col-a">Preparer</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {JOURNAL_ENTRIES.map((e) => (
              <tr key={e.id}>
                <td className="ptable__id">{e.id}</td>
                <td className="col-c ptable__grow">{e.desc}</td>
                <td className="col-b">{e.entity}</td>
                <td className="num">{e.amount}</td>
                <td className="col-a">{e.preparer}</td>
                <td><StatusChip status={e.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pv__foot">
          <span>Showing 5 of 24 entries</span>
          <span>9 approved · ready for export</span>
        </div>
      </div>
    </PreviewFrame>
  );
}
