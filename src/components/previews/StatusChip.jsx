import { STATUS_TONE } from './sampleData';

export default function StatusChip({ status }) {
  return (
    <span className={`chip chip--${STATUS_TONE[status] || 'gray'}`}>
      <i className="chip__dot" />
      {status}
    </span>
  );
}
