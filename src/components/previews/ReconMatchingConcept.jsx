import PreviewFrame from '../ui/PreviewFrame';
import Icon from '../ui/Icon';

// Fictional bank reconciliation, Operating account, US Ops, 30 September 2026.
// All GL lines are postings to the cash account (1010). Every reconciling item is an unmatched
// line: deposits in transit and outstanding checks adjust the bank side; the unrecorded bank fee
// adjusts the book side (it needs a journal entry). Both sides agree:
//   Bank 2,418,960.42 + 12,400.00 - 9,950.00 = 2,421,410.42
//   Book 2,421,455.42 -     45.00            = 2,421,410.42
const BANK_BALANCE = 241896042;   // cents
const BOOK_BALANCE = 242145542;
const DEPOSITS_IN_TRANSIT = [{ ref: 'Wire receipt, Customer 1042', date: '09/30', cents: 1240000 }];
const OUTSTANDING_CHECKS = [
  { ref: 'Check #2304', date: '09/29', cents: 620000 },
  { ref: 'Check #2307', date: '09/30', cents: 375000 },
];
const BOOK_ADJUSTMENTS = [{ ref: 'Bank service fee, not yet recorded', date: '09/30', cents: 4500 }];

const sum = (rows) => rows.reduce((n, r) => n + r.cents, 0);
const adjustedBank = BANK_BALANCE + sum(DEPOSITS_IN_TRANSIT) - sum(OUTSTANDING_CHECKS);
const adjustedBook = BOOK_BALANCE - sum(BOOK_ADJUSTMENTS);
const fmt = (c) => `${c < 0 ? '−' : ''}${(Math.abs(c) / 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const SUMMARY = [
  { label: 'Exact matches',     value: '312', tone: 'green' },
  { label: 'Potential matches', value: '2',   tone: 'amber' },
  { label: 'Unmatched',         value: String(DEPOSITS_IN_TRANSIT.length + OUTSTANDING_CHECKS.length + BOOK_ADJUSTMENTS.length), tone: 'red' },
];

const PAIRS = [
  { bank: { d: '09/28', t: 'ACH vendor payment', a: -842000 }, gl: { d: '09/28', t: '1010 · AP payment, Vendor 2204', a: -842000 }, status: 'exact' },
  { bank: { d: '09/27', t: 'Wire deposit',       a: 2500000 }, gl: { d: '09/27', t: '1010 · AR receipt, Customer 1019', a: 2500000 }, status: 'exact' },
  { bank: { d: '09/27', t: 'Card settlement',    a: 319000 },  gl: { d: '09/25', t: '1010 · AR receipts, card batch', a: 319000 },  status: 'potential', note: 'Same amount, dates 2 days apart' },
  { bank: { d: '09/30', t: 'Bank service fee',   a: -4500 },   gl: null, status: 'unmatched', note: 'Book adjustment' },
  { bank: null, gl: { d: '09/30', t: '1010 · Wire receipt, Customer 1042', a: 1240000 }, status: 'unmatched', note: 'Deposit in transit' },
  { bank: null, gl: { d: '09/29', t: '1010 · Check #2304', a: -620000 }, status: 'unmatched', note: 'Outstanding check' },
];

const STEPS = [
  { title: 'Review match suggestions', meta: '2 potential matches to confirm', state: 'current' },
  { title: 'Document reconciling items', meta: '4 items, difference fully explained', state: 'done' },
  { title: 'Preparer submits', meta: 'Evidence referenced', state: 'next' },
  { title: 'Independent sign-off', meta: 'Runs on the platform today', state: 'next', platform: true },
];

const LABEL = { exact: 'Exact match', potential: 'Potential match', unmatched: 'Unmatched' };

function Side({ row }) {
  if (!row) return <span className="match__empty">No counterpart</span>;
  return (
    <span className="match__line">
      <span className="match__date">{row.d}</span>
      <span className="match__text">{row.t}</span>
      <span className="match__amt">{fmt(row.a)}</span>
    </span>
  );
}

export default function ReconMatchingConcept() {
  return (
    <PreviewFrame
      kind="concept"
      title="Automated matching · implementation concept"
      description="Implementation concept of automated bank-to-GL matching: 312 exact matches, 2 potential matches and 4 unmatched items, a bank reconciliation in which deposits in transit, outstanding checks and an unrecorded bank fee fully explain the difference between the bank and book balances, and a four-step review and sign-off workflow."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Bank to GL · Operating account</p>
            <p className="pv__sub">US Ops · Statement to 30 Sep 2026</p>
          </div>
        </div>

        <div className="pv__tiles pv__tiles--3">
          {SUMMARY.map((s) => (
            <div key={s.label} className="tile">
              <p className="tile__label"><i className={`chip__dot chip__dot--${s.tone}`} />{s.label}</p>
              <p className="tile__value">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="match">
          <div className="match__head"><span>Bank statement</span><span>General ledger</span></div>
          {PAIRS.map((p, i) => (
            <div key={i} className={`match__row match__row--${p.status}`}>
              <Side row={p.bank} />
              <span className="match__link" aria-hidden="true"><Icon name={p.status === 'unmatched' ? 'close' : 'match'} size={14} /></span>
              <Side row={p.gl} />
              <span className={`match__status match__status--${p.status}`}>{LABEL[p.status]}{p.note ? ` · ${p.note}` : ''}</span>
            </div>
          ))}
        </div>

        <div className="pv__foot pv__foot--tight">
          <span>Showing 6 of 318 statement and ledger items</span>
          <span>Matching rule: same amount, dates within 3 days</span>
        </div>

        <div className="recon-grid">
          <dl className="recon-stmt">
            <div><dt>Balance per bank statement</dt><dd>{fmt(BANK_BALANCE)}</dd></div>
            <div><dt>Add: deposits in transit</dt><dd>{fmt(sum(DEPOSITS_IN_TRANSIT))}</dd></div>
            <div><dt>Less: outstanding checks (2)</dt><dd>{fmt(-sum(OUTSTANDING_CHECKS))}</dd></div>
            <div className="recon-stmt__total"><dt>Adjusted bank balance</dt><dd>{fmt(adjustedBank)}</dd></div>
            <div><dt>Balance per books</dt><dd>{fmt(BOOK_BALANCE)}</dd></div>
            <div><dt>Less: bank fee not yet recorded</dt><dd>{fmt(-sum(BOOK_ADJUSTMENTS))}</dd></div>
            <div className="recon-stmt__total"><dt>Adjusted book balance</dt><dd>{fmt(adjustedBook)}</dd></div>
            <div className="recon-stmt__diff"><dt>Unexplained difference</dt><dd>{fmt(adjustedBank - adjustedBook)}</dd></div>
          </dl>

          <ol className="steps-mini">
            {STEPS.map((s, i) => (
              <li key={s.title} className={`steps-mini__item is-${s.state}`}>
                <span className="steps-mini__num">{i + 1}</span>
                <span>
                  <strong>{s.title}</strong>
                  <small>{s.meta}</small>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PreviewFrame>
  );
}
