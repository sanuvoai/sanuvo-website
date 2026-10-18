import { Link } from 'react-router-dom';
import Reveal from './ui/Reveal';
import Icon from './ui/Icon';
import DemoButton from './ui/DemoButton';

export default function CtaBand({
  title = 'Explore how Sanuvo can optimize your financial workflows',
  lead = 'Book a demo to walk through your workflows with us. We assess how they run today and determine the appropriate implementation scope for your organization.',
  secondary = { label: 'Explore Solutions', to: '/solutions' },
}) {
  return (
    <section className="section section--alt" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta">
          <p className="eyebrow eyebrow--on-dark">Get started</p>
          <h2 className="cta__title" id="cta-title">{title}</h2>
          <p className="cta__lead">{lead}</p>
          <div className="cta__actions">
            <DemoButton size="lg" />
            {secondary && (
              <Link to={secondary.to} className="btn btn--ghost btn--lg">
                {secondary.label} <Icon name="arrow" size={18} />
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
