import PreviewFrame from '../ui/PreviewFrame';
import StatusChip from './StatusChip';
import { CONTROLS_LOG, PERIOD } from './sampleData';

const TILES = [
  { label: 'Controls tracked',  value: '48' },
  { label: 'Performed',         value: '40' },
  { label: 'Due for review',    value: '5'  },
  { label: 'Open exceptions',   value: '3'  },
];

export default function AuditControlsPreview() {
  return (
    <PreviewFrame
      title="Audit & Controls"
      description="Conceptual preview of a finance controls register listing controls with their area, owner, date last performed and status, with a summary of controls performed, due and in exception."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Controls register</p>
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
              <th className="col-b">ID</th>
              <th>Control</th>
              <th className="col-a">Owner</th>
              <th className="col-c">Last performed</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {CONTROLS_LOG.map((c) => (
              <tr key={c.id}>
                <td className="col-b ptable__id">{c.id}</td>
                <td className="ptable__grow">{c.control}</td>
                <td className="col-a">{c.owner}</td>
                <td className="col-c">{c.last}</td>
                <td><StatusChip status={c.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pv__foot">
          <span>Showing 4 of 48 controls</span>
          <span>40 performed · 5 due · 3 in exception</span>
        </div>
      </div>
    </PreviewFrame>
  );
}
