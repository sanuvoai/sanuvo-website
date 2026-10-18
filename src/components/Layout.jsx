import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { getPageMeta } from '../content/pages';

// Keeps the document title/description in sync and resets scroll and focus on navigation.
function useRouteEffects(mainRef) {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const meta = getPageMeta(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else if (!firstRender.current) {
      window.scrollTo(0, 0);
    }
    // Move focus to the new page's content so keyboard and screen-reader users start there.
    if (!firstRender.current) mainRef.current?.focus({ preventScroll: true });
    firstRender.current = false;
  }, [pathname, hash, mainRef]);
}

export default function Layout() {
  const mainRef = useRef(null);
  useRouteEffects(mainRef);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
