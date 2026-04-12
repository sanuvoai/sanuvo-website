const FOOTER_LINKS = {
  Product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Sanuvo Legal', href: '#solutions' },
    { label: 'Sanuvo Local', href: '#solutions' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Revenue Calculator', href: '#calculator' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'HIPAA Compliance', href: '#' },
    { label: 'Security', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #0f1f3d',
      background: 'rgba(2,9,20,0.95)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 40px' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 64,
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}>⚖</span>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700, fontSize: 18,
                color: '#C9A227', letterSpacing: '0.04em',
              }}>
                SANUVO AI
              </span>
            </a>
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 14, color: '#64748b', lineHeight: 1.7,
              maxWidth: 280, marginBottom: 24,
            }}>
              AI-powered revenue recovery for law firms and local businesses. Stop losing clients to voicemail.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['𝕏', 'in', 'f'].map((icon) => (
                <a key={icon} href="#" style={{
                  width: 36, height: 36,
                  border: '1px solid #0f1f3d',
                  borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 13, color: '#64748b',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A227'; e.currentTarget.style.color = '#C9A227'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#0f1f3d'; e.currentTarget.style.color = '#64748b'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p style={{
                fontFamily: 'IBM Plex Mono, monospace',
                fontSize: 11, color: '#334155',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                marginBottom: 20,
              }}>
                {heading}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {links.map((l) => (
                  <li key={l.label} style={{ marginBottom: 12 }}>
                    <a href={l.href} style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 14, color: '#64748b',
                      textDecoration: 'none',
                      transition: 'color 0.15s',
                    }}
                      onMouseEnter={(e) => e.target.style.color = '#f1f5f9'}
                      onMouseLeave={(e) => e.target.style.color = '#64748b'}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid #0f1f3d',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#334155' }}>
            © {new Date().getFullYear()} Sanuvo AI, Inc. All rights reserved.
          </p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#334155' }}>
            Built for firms that refuse to lose.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
          .footer-grid > *:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}
