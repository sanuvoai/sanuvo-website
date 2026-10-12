import { Link } from 'react-router-dom';
import Icon from '../components/ui/Icon';

export default function NotFound() {
  return (
    <section className="page-hero page-hero--full">
      <div className="container">
        <div className="page-hero__copy">
          <p className="eyebrow eyebrow--on-dark">404</p>
          <h1 className="page-hero__title">Page not found</h1>
          <p className="hero__lead">The page you were looking for does not exist or has moved.</p>
          <div className="hero__actions">
            <Link to="/" className="btn btn--primary btn--lg">Back to home</Link>
            <Link to="/solutions" className="btn btn--ghost btn--lg">
              Explore Solutions <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
