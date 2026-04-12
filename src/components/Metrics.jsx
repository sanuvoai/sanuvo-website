import { useEffect, useRef, useState } from 'react';

const METRICS = [
  {
    value: 340000,
    prefix: '$',
    suffix: '',
    display: (v) => `$${(v / 1000).toFixed(0)}k`,
    label: 'Average revenue recovered in first 30 days',
    color: '#22C55E',
    desc: 'Across all active Sanuvo Legal clients',
  },
  {
    value: 47,
    prefix: '',
    suffix: 's',
    display: (v) => `${Math.round(v)}s`,
    label: 'Average time to attorney alert after call ends',
    color: '#C9A227',
    desc: 'From call completion to SMS + Slack notification',
  },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    display: (v) => `${Math.round(v)}%`,
    label: 'After-hours answer rate',
    color: '#C9A227',
    desc: 'Every call answered — midnight, Sunday, holiday',
  },
  {
    value: 8.4,
    prefix: '',
    suffix: 'x',
    display: (v) => `${v.toFixed(1)}x`,
    label: 'Average ROI in first 90 days',
    color: '#22C55E',
    desc: 'Revenue recovered vs. monthly subscription cost',
  },
];

function useCountUp(target, duration = 2000, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const startVal = 0;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(startVal + (target - startVal) * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, started]);
  return count;
}

function MetricCard({ metric, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(metric.value, 1800, visible);

  return (
    <div
      ref={ref}
      className="reveal card-hover"
      style={{
        transitionDelay: `${index * 0.1}s`,
        background: 'rgba(6,15,34,0.8)',
        border: '1px solid #0f1f3d',
        borderRadius: 16,
        padding: 36,
      }}
    >
      <p style={{
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: 'clamp(36px, 5vw, 52px)',
        fontWeight: 700,
        color: metric.color,
        lineHeight: 1,
        marginBottom: 14,
        letterSpacing: '-0.02em',
      }}>
        {metric.display(count)}
      </p>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 16,
        fontWeight: 600,
        color: '#f1f5f9',
        lineHeight: 1.35,
        marginBottom: 8,
      }}>
        {metric.label}
      </p>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 13,
        color: '#64748b',
        lineHeight: 1.5,
      }}>
        {metric.desc}
      </p>
    </div>
  );
}

export default function Metrics() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ borderTop: '1px solid #0f1f3d', background: 'rgba(6,15,34,0.4)' }}>
      <div className="section">
        {/* Title */}
        <div ref={titleRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <span className="section-label">BY THE NUMBERS</span>
          <h2 className="section-headline" style={{ maxWidth: 560, margin: '0 auto' }}>
            Results That Show Up
            <br />on Your P&amp;L
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}>
          {METRICS.map((m, i) => (
            <MetricCard key={m.label} metric={m} index={i} />
          ))}
        </div>

        {/* Source note */}
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 12, color: '#334155',
          textAlign: 'center', marginTop: 40,
        }}>
          Based on aggregate data from Sanuvo AI clients. Individual results vary.
        </p>
      </div>
    </section>
  );
}
