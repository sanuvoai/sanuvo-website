import { useState, useEffect } from 'react';

const LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Solutions',    href: '#solutions'    },
  { label: 'Pricing',      href: '#pricing'      },
  { label: 'Contact',      href: '#contact'      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px', height: 68,
    background: scrolled ? 'rgba(2,9,20,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid #0f1f3d' : '1px solid transparent',
    transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <span style={{ fontSize: 22 }}>⚖</span>
        <span style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 20,
          color: '#C9A227',
          letterSpacing: '0.04em',
        }}>
          SANUVO AI
        </span>
      </a>

      {/* Desktop links */}
      <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href} style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500,
            color: '#94a3b8', textDecoration: 'none',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = '#f1f5f9'}
          onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <a href="#calculator" className="btn-gold hide-mobile" style={{ padding: '10px 20px', fontSize: 13 }}>
        Calculate Your Revenue Gap
      </a>

      {/* Mobile hamburger */}
      <button
        className="show-mobile"
        onClick={() => setOpen(!open)}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: 5, padding: 4,
        }}
      >
        {[0,1,2].map((i) => (
          <span key={i} style={{
            display: 'block', width: 24, height: 2,
            background: '#C9A227', borderRadius: 2,
            transition: 'transform 0.2s, opacity 0.2s',
            transform: open
              ? i === 0 ? 'translateY(7px) rotate(45deg)'
              : i === 2 ? 'translateY(-7px) rotate(-45deg)'
              : 'none'
              : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute', top: 68, left: 0, right: 0,
          background: 'rgba(2,9,20,0.98)',
          borderBottom: '1px solid #0f1f3d',
          padding: '20px 24px 28px',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 16, fontWeight: 500,
                color: '#94a3b8', textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#calculator" className="btn-gold" onClick={() => setOpen(false)}
            style={{ padding: '12px 20px', fontSize: 14, marginTop: 8 }}>
            Calculate Your Revenue Gap
          </a>
        </div>
      )}
    </nav>
  );
}
