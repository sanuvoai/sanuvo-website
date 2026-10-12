import { Link } from 'react-router-dom';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`logo ${className}`} aria-label="Sanuvo home">
      <svg viewBox="0 0 28 28" width="28" height="28" aria-hidden="true" focusable="false">
        <rect width="28" height="28" rx="7" fill="#2563EB" />
        <path d="M8 9.5h12M8 14h7M8 18.5h12" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      </svg>
      <span className="logo__word">Sanuvo</span>
    </Link>
  );
}
