import { Link } from 'react-router-dom';
import DemoButton from './DemoButton';
import Icon from './Icon';

// Navy header used on every page except the homepage.
export default function PageHero({ eyebrow, eyebrowTo, title, lead, secondary, compact = false }) {
  return (
    <section className={`page-hero${compact ? ' page-hero--compact' : ''}`}>
      <div className="container">
        <div className="page-hero__copy">
          {eyebrow && (
            <p className="eyebrow eyebrow--on-dark">
              {eyebrowTo ? <Link to={eyebrowTo} className="page-hero__crumb">{eyebrow}</Link> : eyebrow}
            </p>
          )}
          <h1 className="page-hero__title">{title}</h1>
          {lead && <p className="hero__lead">{lead}</p>}

          {!compact && (
            <div className="hero__actions">
              <DemoButton size="lg" />
              {secondary && (
                <Link to={secondary.to} className="btn btn--ghost btn--lg">
                  {secondary.label} <Icon name="arrow" size={18} />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
