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

const LEGAL_FEATURES = [
  'After-hours intake — 24/7/365',
  '4-dimension case scoring (0–100)',
  'Round-robin attorney assignment',
  'Instant Slack + SMS alerts',
  'Full call transcripts in dashboard',
  'PI, family law, criminal, immigration',
  'CRM integration (Clio, MyCase, Filevine)',
  'Multi-location support',
];

const LOCAL_FEATURES = [
  'Missed call recovery — auto callback',
  'Appointment booking & rescheduling',
  'FAQ answering (hours, pricing, location)',
  'Lead qualification + CRM sync',
  'Google Business review prompts',
  'Works with any business phone',
  'HVAC, dental, medical spa, auto shop',
  'Setup in under 24 hours',
];

export default function Solutions() {
  const titleRef = useReveal();
  const card1Ref = useReveal();
  const card2Ref = useReveal();

  return (
    <section id="solutions" style={{ borderTop: '1px solid #0f1f3d' }}>
      <div className="section">
        {/* Title */}
        <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">OUR SOLUTIONS</span>
          <h2 className="section-headline" style={{ maxWidth: 600, margin: '0 auto' }}>
            Built for Law Firms.
            <br />Engineered for Every Business.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 28,
        }}>
          {/* Sanuvo Legal */}
          <div ref={card1Ref} className="reveal">
            <div
              className="card-hover"
              style={{
                background: 'rgba(6,15,34,0.9)',
                border: '1px solid rgba(201,162,39,0.25)',
                borderRadius: 16,
                padding: 40,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow accent */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(201,162,39,0.1)',
                border: '1px solid rgba(201,162,39,0.2)',
                borderRadius: 6,
                padding: '5px 12px',
                marginBottom: 24,
              }}>
                <span style={{ fontSize: 14 }}>⚖️</span>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#C9A227', letterSpacing: '0.1em' }}>
                  SANUVO LEGAL
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 28, fontWeight: 700,
                color: '#f1f5f9', lineHeight: 1.2,
                marginBottom: 12,
              }}>
                AI Intake for
                <br />Law Firms
              </h3>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15, color: '#64748b', lineHeight: 1.65,
                marginBottom: 32,
              }}>
                Stop losing PI, family law, and criminal cases to voicemail. Sanuvo Legal answers every call, scores every case, and alerts your attorneys — automatically.
              </p>

              <ul style={{ listStyle: 'none', marginBottom: 36 }}>
                {LEGAL_FEATURES.map((f) => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                    color: '#94a3b8', marginBottom: 10, lineHeight: 1.4,
                  }}>
                    <span style={{ color: '#C9A227', flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#pricing" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                See Legal Pricing
              </a>
            </div>
          </div>

          {/* Sanuvo Local */}
          <div ref={card2Ref} className="reveal" style={{ transitionDelay: '0.1s' }}>
            <div
              className="card-hover"
              style={{
                background: 'rgba(6,15,34,0.9)',
                border: '1px solid #0f1f3d',
                borderRadius: 16,
                padding: 40,
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Glow accent */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 200, height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(34,197,94,0.08)',
                border: '1px solid rgba(34,197,94,0.15)',
                borderRadius: 6,
                padding: '5px 12px',
                marginBottom: 24,
              }}>
                <span style={{ fontSize: 14 }}>🏪</span>
                <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#22C55E', letterSpacing: '0.1em' }}>
                  SANUVO LOCAL
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 28, fontWeight: 700,
                color: '#f1f5f9', lineHeight: 1.2,
                marginBottom: 12,
              }}>
                AI Reception for
                <br />Local Businesses
              </h3>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15, color: '#64748b', lineHeight: 1.65,
                marginBottom: 32,
              }}>
                For dental offices, med spas, HVAC companies, and service businesses that can't afford to miss a single call — or hire a full-time receptionist.
              </p>

              <ul style={{ listStyle: 'none', marginBottom: 36 }}>
                {LOCAL_FEATURES.map((f) => (
                  <li key={f} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                    color: '#94a3b8', marginBottom: 10, lineHeight: 1.4,
                  }}>
                    <span style={{ color: '#22C55E', flexShrink: 0, marginTop: 1 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#pricing" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                See Local Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
