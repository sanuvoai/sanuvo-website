import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../config/site';
import { SOLUTIONS, solutionPath } from '../content/solutions';
import Logo from './ui/Logo';
import Icon from './ui/Icon';
import DemoButton from './ui/DemoButton';

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [open,       setOpen]       = useState(false); // mobile menu
  const [menu,       setMenu]       = useState(false); // desktop Solutions menu
  const [mobileMenu, setMobileMenu] = useState(false); // mobile Solutions group
  const groupRef   = useRef(null);
  const triggerRef = useRef(null);
  const { pathname } = useLocation();
  const inSolutions = pathname.startsWith('/solutions');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything when the route changes.
  useEffect(() => { setOpen(false); setMenu(false); setMobileMenu(false); }, [pathname]);

  useEffect(() => {
    if (!open && !menu) return;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (menu) triggerRef.current?.focus();
      setMenu(false);
      setOpen(false);
    };
    const onDown = (e) => {
      if (menu && groupRef.current && !groupRef.current.contains(e.target)) setMenu(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [open, menu]);

  const closeIfFocusLeaves = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setMenu(false);
  };

  return (
    <header className={`nav${scrolled || open ? ' is-solid' : ''}`}>
      <div className="container nav__inner">
        <Logo />

        <nav className="nav__links" aria-label="Primary">
          <NavLink to="/platform" className="nav__link">Platform</NavLink>

          <div className="nav__group" ref={groupRef} onBlur={closeIfFocusLeaves}>
            <button
              type="button"
              ref={triggerRef}
              className={`nav__link nav__trigger${inSolutions ? ' active' : ''}`}
              aria-expanded={menu}
              aria-controls="solutions-menu"
              onClick={() => setMenu(!menu)}
            >
              Solutions <Icon name="chevron" size={16} />
            </button>

            {menu && (
              <div id="solutions-menu" className="nav__menu">
                <ul className="nav__menu-grid">
                  {SOLUTIONS.map((s) => (
                    <li key={s.slug}>
                      <NavLink to={solutionPath(s.slug)} className="nav__menu-item">
                        <span className="nav__menu-icon"><Icon name={s.icon} size={18} /></span>
                        <span>
                          <strong>{s.name}</strong>
                          <small>{s.tagline}</small>
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <Link to="/solutions" className="nav__menu-all">
                  View all solutions <Icon name="arrow" size={16} />
                </Link>
              </div>
            )}
          </div>

          {NAV_LINKS.filter((l) => l.to !== '/platform').map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">{l.label}</NavLink>
          ))}
        </nav>

        <DemoButton className="nav__cta" size="sm" />

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="nav__mobile" aria-label="Mobile">
          <NavLink to="/platform" className="nav__link">Platform</NavLink>

          <button
            type="button"
            className="nav__link nav__trigger"
            aria-expanded={mobileMenu}
            aria-controls="mobile-solutions"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            Solutions <Icon name="chevron" size={18} />
          </button>
          {mobileMenu && (
            <ul id="mobile-solutions" className="nav__mobile-sub">
              <li><NavLink to="/solutions" end className="nav__link">All solutions</NavLink></li>
              {SOLUTIONS.map((s) => (
                <li key={s.slug}>
                  <NavLink to={solutionPath(s.slug)} className="nav__link">{s.name}</NavLink>
                </li>
              ))}
            </ul>
          )}

          {NAV_LINKS.filter((l) => l.to !== '/platform').map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">{l.label}</NavLink>
          ))}
          <DemoButton />
        </nav>
      )}
    </header>
  );
}
