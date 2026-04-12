import { useEffect, useRef, useState } from 'react';

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

function Slider({ label, value, min, max, step, onChange, format }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
        <label style={{
          fontFamily: 'DM Sans, sans-serif', fontSize: 14,
          color: '#94a3b8', fontWeight: 500,
        }}>
          {label}
        </label>
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: 18,
          color: '#C9A227', fontWeight: 700,
        }}>
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #C9A227 0%, #C9A227 ${((value - min) / (max - min)) * 100}%, #0f1f3d ${((value - min) / (max - min)) * 100}%, #0f1f3d 100%)`,
        }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#334155' }}>{format(min)}</span>
        <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#334155' }}>{format(max)}</span>
      </div>
    </div>
  );
}

export default function Calculator() {
  const [missedPerWeek, setMissedPerWeek] = useState(10);
  const [avgCaseValue, setAvgCaseValue] = useState(75000);
  const [conversionRate, setConversionRate] = useState(25);

  const titleRef = useReveal();
  const calcRef = useReveal(0.1);

  const annualMissed = missedPerWeek * 52;
  const casesConverted = Math.round(annualMissed * (conversionRate / 100));
  const revenueGap = casesConverted * avgCaseValue;
  const sanuvoFee = 497 * 12; // mid-tier plan annual
  const netRecovery = revenueGap - sanuvoFee;
  const roi = revenueGap > 0 ? ((netRecovery / sanuvoFee) * 100).toFixed(0) : 0;

  const fmt = (n) => {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}k`;
    return `$${n}`;
  };

  return (
    <section id="calculator" style={{ borderTop: '1px solid #0f1f3d' }}>
      <div className="section">
        {/* Title */}
        <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">REVENUE CALCULATOR</span>
          <h2 className="section-headline" style={{ maxWidth: 600, margin: '0 auto' }}>
            See Exactly What You're
            <br />Leaving on the Table
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 17, color: '#64748b', lineHeight: 1.65,
            maxWidth: 520, margin: '20px auto 0',
          }}>
            Adjust the sliders to match your firm's numbers. The math will make the decision for you.
          </p>
        </div>

        <div ref={calcRef} className="reveal calculator-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 40,
          maxWidth: 1000,
          margin: '0 auto',
        }}
        >
          {/* Sliders */}
          <div style={{
            background: 'rgba(6,15,34,0.8)',
            border: '1px solid #0f1f3d',
            borderRadius: 16,
            padding: 36,
          }}>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 18, color: '#f1f5f9', fontWeight: 600,
              marginBottom: 32,
            }}>
              Your Firm's Numbers
            </h3>

            <Slider
              label="Missed calls per week"
              value={missedPerWeek}
              min={2} max={50} step={1}
              onChange={setMissedPerWeek}
              format={(v) => `${v} calls`}
            />
            <Slider
              label="Average PI case value"
              value={avgCaseValue}
              min={10000} max={500000} step={5000}
              onChange={setAvgCaseValue}
              format={(v) => fmt(v)}
            />
            <Slider
              label="Intake conversion rate"
              value={conversionRate}
              min={5} max={60} step={5}
              onChange={setConversionRate}
              format={(v) => `${v}%`}
            />

            <div style={{
              marginTop: 8,
              padding: '14px 16px',
              background: 'rgba(201,162,39,0.04)',
              border: '1px solid rgba(201,162,39,0.12)',
              borderRadius: 8,
            }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#64748b' }}>
                {annualMissed} missed calls/year × {conversionRate}% conversion = <strong style={{ color: '#94a3b8' }}>{casesConverted} cases/year</strong>
              </p>
            </div>
          </div>

          {/* Results */}
          <div style={{
            background: 'rgba(6,15,34,0.8)',
            border: '1px solid rgba(201,162,39,0.2)',
            borderRadius: 16,
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 18, color: '#f1f5f9', fontWeight: 600,
                marginBottom: 32,
              }}>
                Your Revenue Gap
              </h3>

              {/* Main number */}
              <div style={{ textAlign: 'center', marginBottom: 36 }}>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: 'clamp(42px, 8vw, 64px)',
                  fontWeight: 700,
                  color: '#ef4444',
                  lineHeight: 1,
                  marginBottom: 8,
                  letterSpacing: '-0.02em',
                }}>
                  {fmt(revenueGap)}
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748b' }}>
                  estimated annual revenue loss
                </p>
              </div>

              {/* Breakdown */}
              <div style={{ borderTop: '1px solid #0f1f3d', paddingTop: 24, marginBottom: 24 }}>
                {[
                  { label: 'Sanuvo annual cost', value: fmt(sanuvoFee), color: '#64748b' },
                  { label: 'Estimated net recovery', value: fmt(Math.max(0, netRecovery)), color: '#22C55E' },
                  { label: 'Projected ROI', value: `${roi}%`, color: '#C9A227' },
                ].map((row) => (
                  <div key={row.label} style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', marginBottom: 14,
                  }}>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#64748b' }}>
                      {row.label}
                    </span>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: 15,
                      fontWeight: 700, color: row.color,
                    }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#pricing" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
              Recover This Revenue — Starting Today
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .calculator-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
