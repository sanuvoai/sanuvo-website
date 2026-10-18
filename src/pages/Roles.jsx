import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import CtaBand from '../components/CtaBand';
import { getSolution, solutionPath } from '../content/solutions';

const ROLES = [
  {
    id: 'cfo',
    role: 'CFOs',
    headline: 'Confidence in the numbers and where they stand',
    desc: 'You are accountable for the result, but rarely see the work behind it until it is finished. Sanuvo is configured to give you a current view of financial operations, without waiting for a status update.',
    priorities: [
      'Visibility into close progress, posting status, and open exceptions.',
      'Assurance that approvals and controls are being followed.',
      'A finance team spending less time on manual work.',
    ],
    solutions: ['cashflow-ops', 'reporting-analytics', 'audit-controls', 'close-ops'],
  },
  {
    id: 'controllers',
    role: 'Controllers',
    headline: 'Control over the close, end to end',
    desc: 'You own the close and the controls around it. Sanuvo is configured to bring preparation, review, and sign-off into one place, so you manage the process rather than chase it.',
    priorities: [
      'Defined approval paths for journal entries and close tasks.',
      'Reconciliations where reviewers focus on exceptions.',
      'Evidence captured as the work happens.',
    ],
    solutions: ['journal-entry-ops', 'close-ops', 'reconciliation-ops', 'audit-controls'],
  },
  {
    id: 'finance-directors',
    role: 'Finance Directors',
    headline: 'Performance explained, not just reported',
    desc: 'You are asked why the numbers moved. Sanuvo brings budget-versus-actual variances, owner explanations, and independent review into one place, and cash and reporting views can be built for you through a scoped implementation.',
    priorities: [
      'Budget-versus-actual variances by account and entity.',
      'Explanations from the owner, reviewed by someone else.',
      'Cash and management reporting views delivered to scope.',
    ],
    solutions: ['reporting-analytics', 'close-ops', 'cashflow-ops', 'ap-ar-ops'],
  },
  {
    id: 'multi-entity-teams',
    role: 'Multi-entity accounting teams',
    headline: 'One consistent process across every entity',
    desc: 'Each entity has grown its own spreadsheets and habits. Sanuvo is configured to give the team one way of working, while allowing for the differences that matter.',
    priorities: [
      'The same workflow and statuses across entities.',
      'Less re-keying and reconciliation between entity files.',
      'A shared queue instead of personal trackers.',
    ],
    solutions: ['journal-entry-ops', 'reconciliation-ops', 'close-ops', 'cash-application-ops'],
  },
];

export default function Roles() {
  return (
    <>
      <PageHero
        eyebrow="Solutions by role"
        title="Built for the people accountable for financial operations"
        lead="Different roles need different things from the same workflows. Here is where Sanuvo typically starts with each."
        secondary={{ label: 'Explore Solutions', to: '/solutions' }}
      />

      <nav className="role-nav" aria-label="Roles on this page">
        <div className="container">
          {ROLES.map((r) => <Link key={r.id} to={`/roles#${r.id}`}>{r.role}</Link>)}
        </div>
      </nav>

      {ROLES.map((r, i) => (
        <section
          key={r.id}
          id={r.id}
          className={`solution${i % 2 ? ' solution--flip' : ''}`}
          aria-labelledby={`${r.id}-title`}
        >
          <div className="container solution__grid solution__grid--even">
            <Reveal className="solution__copy">
              <p className="eyebrow">{r.role}</p>
              <h2 className="h2 h2--sm" id={`${r.id}-title`}>{r.headline}</h2>
              <p className="lead lead--left">{r.desc}</p>
              <ul className="features">
                {r.priorities.map((p) => (
                  <li key={p}>
                    <span className="features__check"><Icon name="check" size={14} /></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="role-links">
              <h3 className="role-links__title">Relevant solutions for {r.role}</h3>
              <ul>
                {r.solutions.map(getSolution).map((s) => (
                  <li key={s.slug}>
                    <Link to={solutionPath(s.slug)} className="role-link">
                      <span className="card__icon"><Icon name={s.icon} size={20} /></span>
                      <span>
                        <strong>{s.name}</strong>
                        <small>{s.tagline}</small>
                      </span>
                      <Icon name="arrow" size={18} className="role-link__arrow" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
