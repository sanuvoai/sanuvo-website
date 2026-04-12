import { useEffect, useRef } from 'react';

const STATS = [
  { value: '47s',   label: 'Average time to attorney alert', color: '#C9A227' },
  { value: '$340k', label: 'Revenue recovered in first 30 days', color: '#22C55E' },
  { value: '100%',  label: 'After-hours answer rate', color: '#C9A227' },
];

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px 80px',
      textAlign: 'center',
    }}>
      {/* Animated grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(201,162,39,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,162,39,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'gridDrift 20s ease-in-out infinite alternate',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,162,39,0.07) 0%, transparent 70%)',
      }} />

      {/* Content */}
      <div ref={headlineRef} style={{ position: 'relative', zIndex: 1, maxWidth: 860 }}>
        {/* Label */}
        <span className="section-label" style={{ marginBottom: 24 }}>
          AI REVENUE RECOVERY SYSTEMS
        </span>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(40px, 7vw, 76px)',
          fontWeight: 900,
          lineHeight: 1.1,
          color: '#f1f5f9',
          marginBottom: 12,
        }}>
          You're Losing{' '}
          <span style={{ color: '#C9A227' }}>$1M+</span>
          <br />Per Year.
          <br />We Find It Back.
        </h1>

        {/* Sub-headline */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 'clamp(17px, 2.2vw, 21px)',
          color: '#94a3b8',
          lineHeight: 1.65,
          maxWidth: 620,
          margin: '28px auto 0',
          fontWeight: 400,
        }}>
          Sanuvo detects high-value cases and leads hiding in your missed calls —
          and recovers them automatically. <strong style={{ color: '#f1f5f9', fontWeight: 500 }}>24/7.</strong>
        </p>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center',
          flexWrap: 'wrap', marginTop: 44,
        }}>
          <a href="#calculator" className="btn-gold" style={{ fontSize: 15, padding: '16px 32px' }}>
            See Your Revenue Gap
          </a>
          <a href="#how-it-works" className="btn-outline" style={{ fontSize: 15, padding: '16px 32px' }}>
            ▶ Watch Live Demo
          </a>
        </div>

        {/* Stat cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          marginTop: 72,
          maxWidth: 760,
          marginLeft: 'auto', marginRight: 'auto',
        }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="card-hover"
              style={{
                background: 'rgba(6,15,34,0.8)',
                border: '1px solid #0f1f3d',
                borderRadius: 12,
                padding: '24px 20px',
                animationDelay: `${0.3 + i * 0.12}s`,
                backdropFilter: 'blur(8px)',
              }}
            >
              <p style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: 'clamp(28px, 4vw, 38px)',
                fontWeight: 600,
                color: s.color,
                lineHeight: 1,
                marginBottom: 10,
              }}>
                {s.value}
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                color: '#64748b',
                lineHeight: 1.45,
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        zIndex: 1,
        animation: 'bounce 2s ease-in-out infinite',
      }}>
        <div style={{
          width: 28, height: 28, borderRight: '2px solid #334155',
          borderBottom: '2px solid #334155',
          transform: 'rotate(45deg)',
        }} />
      </div>

      {/* Keyframes via style tag */}
      <style>{`
        @keyframes gridDrift {
          from { background-position: 0 0; }
          to   { background-position: 30px 30px; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
