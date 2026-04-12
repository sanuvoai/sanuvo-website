import { useEffect, useRef } from 'react';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

const PLANS = [
  {
    name: 'Sanuvo Local',
    tag: 'For Local Businesses',
    price: 297,
    color: '#22C55E',
    colorDim: 'rgba(34,197,94,0.08)',
    colorBorder: 'rgba(34,197,94,0.15)',
    featured: false,
    features: [
      '24/7 AI receptionist',
      'Up to 500 calls/month',
      'Missed call auto-recovery',
      'Appointment booking',
      'FAQ answering',
      'Lead capture to CRM',
      'Google review prompts',
      'Email + chat support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'outline',
  },
  {
    name: 'Sanuvo Legal',
    tag: 'Most Popular · PI Law Firms',
    price: 497,
    color: '#C9A227',
    colorDim: 'rgba(201,162,39,0.06)',
    colorBorder: 'rgba(201,162,39,0.25)',
    featured: true,
    features: [
      'Everything in Local, plus:',
      'Unlimited calls',
      '4-dimension case scoring',
      'Attorney round-robin assignment',
      'Slack + SMS instant alerts',
      'Full call transcripts',
      'Dashboard + analytics',
      'CRM integration (Clio, MyCase)',
      'Priority onboarding',
      'Dedicated account manager',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'gold',
  },
  {
    name: 'Enterprise',
    tag: 'Multi-Location Firms',
    price: 1500,
    color: '#C9A227',
    colorDim: 'rgba(201,162,39,0.04)',
    colorBorder: '#0f1f3d',
    featured: false,
    features: [
      'Everything in Legal, plus:',
      'Multi-location support',
      'Custom AI persona + voice',
      'White-label dashboard',
      'Filevine / NetSuite integration',
      'Custom case scoring model',
      'SLA guarantee (99.9% uptime)',
      'Dedicated engineering support',
      'Quarterly strategy reviews',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'outline',
  },
];

export default function Pricing() {
  const titleRef = useReveal();

  return (
    <section id="pricing" style={{ borderTop: '1px solid #0f1f3d' }}>
      <div className="section">
        {/* Title */}
        <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">TRANSPARENT PRICING</span>
          <h2 className="section-headline" style={{ maxWidth: 560, margin: '0 auto' }}>
            One Recovered Case Pays
            <br />For a Full Year
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 17, color: '#64748b', lineHeight: 1.65,
            maxWidth: 500, margin: '20px auto 0',
          }}>
            No setup fees. No long-term contracts. Start with a 14-day free trial.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}>
          {PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} delay={i * 0.1} />
          ))}
        </div>

        {/* Footer note */}
        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#334155', marginBottom: 16 }}>
            All plans include: 14-day free trial · No credit card required · Cancel anytime
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#334155' }}>
            Need a custom plan?{' '}
            <a href="#contact" style={{ color: '#C9A227', textDecoration: 'none' }}>
              Talk to us →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, delay }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      <div
        className="card-hover"
        style={{
          background: plan.featured ? plan.colorDim : 'rgba(6,15,34,0.8)',
          border: `1px solid ${plan.colorBorder}`,
          borderRadius: 16,
          padding: 36,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {plan.featured && (
          <div style={{
            position: 'absolute', top: 20, right: 20,
            background: 'rgba(201,162,39,0.15)',
            border: '1px solid rgba(201,162,39,0.3)',
            borderRadius: 20,
            padding: '3px 12px',
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 10, color: '#C9A227',
            letterSpacing: '0.1em',
          }}>
            MOST POPULAR
          </div>
        )}

        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: `${plan.color}14`,
          borderRadius: 6,
          padding: '4px 10px',
          marginBottom: 20,
        }}>
          <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: plan.color, letterSpacing: '0.08em' }}>
            {plan.tag}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 22, fontWeight: 700, color: '#f1f5f9',
          marginBottom: 4,
        }}>
          {plan.name}
        </h3>

        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, margin: '20px 0 28px' }}>
          <span style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: 44, fontWeight: 700,
            color: plan.color, lineHeight: 1,
          }}>
            ${plan.price}
          </span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748b' }}>
            /month
          </span>
        </div>

        {/* Features */}
        <ul style={{ listStyle: 'none', marginBottom: 32 }}>
          {plan.features.map((f) => (
            <li key={f} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              fontFamily: 'DM Sans, sans-serif',
              fontSize: f.endsWith(':') ? 13 : 14,
              color: f.endsWith(':') ? '#64748b' : '#94a3b8',
              fontWeight: f.endsWith(':') ? 500 : 400,
              marginBottom: 10, lineHeight: 1.4,
              fontStyle: f.endsWith(':') ? 'normal' : 'normal',
            }}>
              {!f.endsWith(':') && (
                <span style={{ color: plan.color, flexShrink: 0, marginTop: 2, fontSize: 12 }}>✓</span>
              )}
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={plan.ctaStyle === 'gold' ? 'btn-gold' : 'btn-outline'}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}
