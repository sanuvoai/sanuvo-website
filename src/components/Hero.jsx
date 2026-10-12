import { Link } from 'react-router-dom';
import DemoButton from './ui/DemoButton';
import Icon from './ui/Icon';
import HeroDashboard from './previews/HeroDashboard';

const POINTS = [
  'Configurable control layer',
  'Implementation services',
  'Custom finance workflow automation',
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--on-dark">Financial Operations Control Layer</p>
          <h1 className="hero__title">
            Financial Operations. <span>Under Control.</span>
          </h1>
          <p className="hero__lead">
            Bring control, efficiency, and visibility to the finance work around your existing
            systems, from journal entries and reconciliations to close, cash, reporting, and controls.
          </p>

          <div className="hero__actions">
            <DemoButton size="lg" />
            <Link to="/solutions" className="btn btn--ghost btn--lg">
              Explore Solutions <Icon name="arrow" size={18} />
            </Link>
          </div>

          <ul className="hero__points">
            {POINTS.map((p) => (
              <li key={p}><Icon name="check" size={16} /> {p}</li>
            ))}
          </ul>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}
