import PreviewFrame from '../ui/PreviewFrame';
import StatusChip from './StatusChip';
import { CLOSE_TASKS, PERIOD } from './sampleData';

const TILES = [
  { label: 'Tasks complete', value: '38 / 52' },
  { label: 'In review',      value: '6'       },
  { label: 'Overdue',        value: '2'       },
  { label: 'Close day',      value: 'Day 4'   },
];

export default function CloseOpsPreview() {
  return (
    <PreviewFrame
      title="CloseOps"
      description="Preview of a period-close checklist showing tasks by entity with owner, due day and status, and a summary of tasks complete, in review and overdue."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Period close checklist</p>
            <p className="pv__sub">{PERIOD} · All entities</p>
          </div>
        </div>

        <div className="pv__tiles pv__tiles--4">
          {TILES.map((t) => (
            <div key={t.label} className="tile">
              <p className="tile__label">{t.label}</p>
              <p className="tile__value">{t.value}</p>
            </div>
          ))}
        </div>

        <table className="ptable">
          <thead>
            <tr>
              <th>Task</th>
              <th className="col-b">Entity</th>
              <th className="col-a">Owner</th>
              <th className="col-c">Due</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {CLOSE_TASKS.map((t) => (
              <tr key={t.task}>
                <td className="ptable__grow ptable__id">{t.task}</td>
                <td className="col-b">{t.entity}</td>
                <td className="col-a">{t.owner}</td>
                <td className="col-c">{t.due}</td>
                <td><StatusChip status={t.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pv__foot">
          <span>Showing 5 of 52 tasks</span>
          <span>8 open items need attention</span>
        </div>
      </div>
    </PreviewFrame>
  );
}
