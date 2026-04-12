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

export default function FinalCTA() {
  const ref = useReveal(0.1);

  return (
    <section
      id="contact"
      style={{
        borderTop: '1px solid #0f1f3d',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,162,39,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <div ref={ref} className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          {/* Label */}
          <span className="section-label" style={{ marginBottom: 28 }}>
            START TODAY
          </span>

          {/* Headline */}
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 900,
            color: '#f1f5f9',
            lineHeight: 1.1,
            marginBottom: 24,
          }}>
            The Next Missed Call Costs
            <br />
            <span style={{ color: '#C9A227' }}>You $50,000.</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 18, color: '#64748b', lineHeight: 1.65,
            marginBottom: 48,
          }}>
            Every hour you wait, high-value cases are going to the firm that answers.
            Start your free 14-day trial — no credit card required.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <a href="https://calendly.com/sanuvo-ai" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ fontSize: 16, padding: '18px 40px' }}>
              Start Free Trial — No Card Needed
            </a>
            <a href="https://calendly.com/sanuvo-ai" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: 16, padding: '18px 40px' }}>
              Schedule a Demo
            </a>
          </div>

          {/* Trust signals */}
          <div style={{
            display: 'flex',
            gap: 40,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '🔒', text: 'SOC 2 Type II Compliant' },
              { icon: '⚡', text: '24-hour setup' },
              { icon: '❌', text: 'Cancel anytime' },
            ].map((t) => (
              <div key={t.text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16 }}>{t.icon}</span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13, color: '#64748b',
                }}>
                  {t.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
