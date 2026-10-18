import { BOOKING_URL } from '../../config/site';

// Every demo-booking CTA on the site goes through this component.
export default function DemoButton({ variant = 'primary', size, className = '', children = 'Book a Demo', ...rest }) {
  const classes = ['btn', `btn--${variant}`, size ? `btn--${size}` : '', className].filter(Boolean).join(' ');
  return (
    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
