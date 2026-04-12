import { useEffect, useRef } from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Call Comes In',
    desc: 'A potential client calls your firm — at 2am, on Saturday, during lunch. Sanuvo answers instantly, every time.',
    icon: '📞',
  },
  {
    num: '02',
    title: 'AI Conducts Intake',
    desc: 'Our AI attorney-trained assistant gathers case facts: incident type, injuries, liability, insurance, dates.',
    icon: '🤖',
  },
  {
    num: '03',
    title: 'Case Scored in Real-Time',
    desc: 'A proprietary 4-dimension scoring model (Liability, Injury, Damages, SOL) rates each case 0–100.',
    icon: '⚡',
  },
  {
    num: '04',
    title: 'Attorney Alerted Instantly',
    desc: 'High-value cases trigger an immediate Slack and SMS alert to the assigned attorney with the full case summary.',
    icon: '📲',
  },
  {
    num: '05',
    title: 'Revenue Captured',
    desc: 'You review, call back, and close — with full context before you dial. No more cold callbacks. No more lost cases.',
    icon: '💰',
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

function Step({ step, index }) {
  const ref = useReveal();
  const isLast = index === STEPS.length - 1;

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${index * 0.1}s`, display: 'flex', gap: 32, alignItems: 'flex-start' }}
    >
      {/* Left: number + connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 56, height: 56,
          borderRadius: '50%',
          background: 'rgba(201,162,39,0.08)',
          border: '1px solid rgba(201,162,39,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: 14, fontWeight: 700,
          color: '#C9A227',
          flexShrink: 0,
        }}>
          {step.num}
        </div>
        {!isLast && (
          <div style={{
            width: 1,
            height: 48,
            background: 'linear-gradient(to bottom, rgba(201,162,39,0.3), transparent)',
            marginTop: 8,
          }} />
        )}
      </div>

      {/* Right: content */}
      <div style={{ paddingBottom: isLast ? 0 : 40, paddingTop: 12 }}>
        <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
        <h3 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 22, fontWeight: 700,
          color: '#f1f5f9', marginBottom: 10,
        }}>
          {step.title}
        </h3>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 15, color: '#64748b', lineHeight: 1.65,
          maxWidth: 520,
        }}>
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const titleRef = useReveal();

  return (
    <section id="how-it-works">
      <div className="section">
        {/* Title */}
        <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-headline" style={{ maxWidth: 560, margin: '0 auto' }}>
            From Missed Call to
            <br />Closed Case in Minutes
          </h2>
        </div>

        {/* Two-column layout: steps left, visual right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)',
          gap: 80,
          alignItems: 'start',
        }}
          className="how-it-works-grid"
        >
          {/* Steps */}
          <div>
            {STEPS.map((step, i) => (
              <Step key={step.num} step={step} index={i} />
            ))}
          </div>

          {/* Visual panel */}
          <StepVisual />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

function StepVisual() {
  const ref = useReveal(0.1);

  return (
    <div ref={ref} className="reveal" style={{ position: 'sticky', top: 100 }}>
      <div style={{
        background: 'rgba(6,15,34,0.8)',
        border: '1px solid #0f1f3d',
        borderRadius: 16,
        padding: 32,
        backdropFilter: 'blur(8px)',
      }}>
        {/* Mock alert card */}
        <div style={{
          background: 'rgba(201,162,39,0.04)',
          border: '1px solid rgba(201,162,39,0.2)',
          borderRadius: 10,
          padding: 20,
          marginBottom: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#22C55E',
              boxShadow: '0 0 8px rgba(34,197,94,0.6)',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#C9A227', letterSpacing: '0.12em' }}>
              LIVE ALERT · 47s AGO
            </span>
          </div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#94a3b8', marginBottom: 4 }}>
            <strong style={{ color: '#f1f5f9' }}>New High-Priority Case</strong>
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#64748b' }}>
            Auto accident · Police report filed · 3 injuries · Insurance confirmed
          </p>
        </div>

        {/* Score bar */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#64748b' }}>Case Score</span>
            <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 14, color: '#22C55E', fontWeight: 700 }}>87 / 100</span>
          </div>
          <div style={{ height: 6, background: '#0f1f3d', borderRadius: 3 }}>
            <div style={{
              height: '100%', width: '87%',
              background: 'linear-gradient(90deg, #22C55E, #16a34a)',
              borderRadius: 3,
            }} />
          </div>
        </div>

        {/* Dimension scores */}
        {[
          { label: 'Liability', score: 22, max: 25 },
          { label: 'Injury Severity', score: 20, max: 25 },
          { label: 'Damages', score: 25, max: 25 },
          { label: 'Statute of Limitations', score: 20, max: 25 },
        ].map((d) => (
          <div key={d.label} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#64748b' }}>{d.label}</span>
              <span style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#94a3b8' }}>{d.score}/{d.max}</span>
            </div>
            <div style={{ height: 4, background: '#0f1f3d', borderRadius: 2 }}>
              <div style={{
                height: '100%',
                width: `${(d.score / d.max) * 100}%`,
                background: 'rgba(201,162,39,0.6)',
                borderRadius: 2,
              }} />
            </div>
          </div>
        ))}

        {/* Attorney assigned */}
        <div style={{
          marginTop: 20,
          padding: '14px 16px',
          background: 'rgba(34,197,94,0.04)',
          border: '1px solid rgba(34,197,94,0.15)',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(201,162,39,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 700, color: '#C9A227',
          }}>JD</div>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#f1f5f9', fontWeight: 500 }}>
              Assigned: James Davidson
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#22C55E' }}>
              SMS + Slack alert sent
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}
