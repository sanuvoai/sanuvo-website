import { useEffect, useRef } from 'react';

const PAINS = [
  {
    icon: '📵',
    title: '8–12 calls missed per week after hours',
    desc: 'Every call after 6pm, on weekends, or during lunch is a potential case walking to your competitor.',
  },
  {
    icon: '💸',
    title: '$1M–$1.5M in undetected revenue per year',
    desc: 'High-value PI cases don\'t announce themselves. They leave a voicemail — then sign with whoever answered.',
  },
  {
    icon: '⚠',
    title: 'Your competitor answers. You don\'t.',
    desc: 'The firm across town with AI intake closed that $800k case at 11pm last Tuesday. You\'ll never know.',
  },
];

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

function RevealCard({ children, delay = 0 }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

export default function Problem() {
  const titleRef = useReveal();

  return (
    <section style={{ background: 'rgba(239,68,68,0.02)', borderTop: '1px solid #0f1f3d', borderBottom: '1px solid #0f1f3d' }}>
      <div className="section">
        {/* Title */}
        <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-label">THE REVENUE GAP</span>
          <h2 className="section-headline" style={{ maxWidth: 680, margin: '0 auto' }}>
            Every Missed Call Is Revenue Your
            <br />Competitor Just Collected
          </h2>
        </div>

        {/* Pain cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 64,
        }}>
          {PAINS.map((p, i) => (
            <RevealCard key={p.title} delay={i * 0.1}>
              <div
                className="card-hover"
                style={{
                  background: 'rgba(239,68,68,0.04)',
                  border: '1px solid rgba(239,68,68,0.18)',
                  borderRadius: 12,
                  padding: 32,
                  height: '100%',
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 20 }}>{p.icon}</div>
                <h3 style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 20, fontWeight: 600,
                  color: '#f1f5f9', lineHeight: 1.3,
                  marginBottom: 14,
                }}>
                  {p.title}
                </h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#64748b', lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Bold statement */}
        <RevealCard>
          <div style={{
            textAlign: 'center',
            padding: '40px 40px',
            background: 'rgba(201,162,39,0.04)',
            border: '1px solid rgba(201,162,39,0.15)',
            borderRadius: 12,
            maxWidth: 760,
            margin: '0 auto',
          }}>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              color: '#C9A227',
              lineHeight: 1.55,
              fontStyle: 'italic',
            }}>
              "The average PI firm loses more in missed calls than they spend on marketing.
              Sanuvo fixes that."
            </p>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}
