import PreviewFrame from '../ui/PreviewFrame';
import Icon from '../ui/Icon';

// Fictional suggestions. The variance explanation reconciles: 182,400.00 of invoices recognised
// early, less 2,600.00 of other movement, equals the 179,800.00 variance (+12.4% on 1,450,000.00).
const SUGGESTIONS = [
  {
    kind: 'Suggested exception',
    title: 'Possible duplicate vendor payment',
    body: 'Vendor 2231 was paid 4,860.00 on 12 Sep and again on 14 Sep against the same invoice number.',
    basis: 'Basis: same vendor, amount and invoice reference within 5 days',
  },
  {
    kind: 'Possible match',
    title: 'Card settlement to AR receipts',
    body: 'Bank card settlement of 3,190.00 on 27 Sep and AR receipts of 3,190.00 recorded on 25 Sep.',
    basis: 'Basis: same amount, dates 2 days apart',
  },
  {
    kind: 'Draft variance explanation',
    title: 'Revenue, CA Inc: +179,800.00 (+12.4%) against budget',
    body: 'Three invoices to Customer 1107 totalling 182,400.00 were recognised in September; the budget placed them in October. Other movement of −2,600.00 is within the normal range.',
    basis: 'Sources: invoice register and September revenue journal',
  },
];

// Restrained, static illustration: no controls, no live states.
export default function AiReviewConcept() {
  return (
    <PreviewFrame
      kind="concept"
      caption="Illustrative implementation concept. A potential scoped implementation, not a current platform feature."
      title="AI-assisted review · implementation concept"
      description="Implementation concept of AI-assisted financial review: three suggestions, a possible duplicate payment, a possible bank-to-ledger match and a draft variance explanation, each awaiting a decision by a human reviewer, with every suggestion and decision recorded."
    >
      <div className="pv">
        <div className="pv__head">
          <div>
            <p className="pv__title">Suggestions for review</p>
            <p className="pv__sub">September 2026 · 3 awaiting a reviewer</p>
          </div>
        </div>

        <ul className="ai">
          {SUGGESTIONS.map((s) => (
            <li key={s.title} className="ai__card">
              <p className="ai__kind">{s.kind}</p>
              <p className="ai__title">{s.title}</p>
              <p className="ai__body">{s.body}</p>
              <p className="ai__basis">{s.basis}</p>
              <p className="ai__review"><Icon name="approve" size={13} /> Awaiting human review · a reviewer accepts, edits, or rejects</p>
            </li>
          ))}
        </ul>

        <p className="ai__foot">Suggestions never post, approve, or close anything. Each suggestion and each reviewer decision would be recorded in the audit history.</p>
      </div>
    </PreviewFrame>
  );
}
