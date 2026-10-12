import { Link } from 'react-router-dom';
import { NAV_LINKS, BOOKING_URL, PRIVACY_POLICY_APPROVED } from '../config/site';
import { SOLUTIONS, solutionPath } from '../content/solutions';
import Logo from './ui/Logo';

// Only link to destinations that exist.
const COLUMNS = [
  { heading: 'Solutions', links: SOLUTIONS.map((s) => ({ label: s.name, to: solutionPath(s.slug) })) },
  { heading: 'Company',   links: [...NAV_LINKS, { label: 'All Solutions', to: '/solutions' }] },
  ...(PRIVACY_POLICY_APPROVED ? [{ heading: 'Legal', links: [{ label: 'Privacy Policy', to: '/privacy' }] }] : []),
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo />
            <p>
              Financial Operations Optimization. A configurable Financial Operations Control
              Layer, implementation services, and custom finance workflow automation.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
              Book a Demo<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={`Footer: ${col.heading}`}>
              <p className="footer__heading">{col.heading}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Sanuvo. All rights reserved.</p>
          <p>Product previews on this site are illustrative and use sample data.</p>
        </div>
      </div>
    </footer>
  );
}
