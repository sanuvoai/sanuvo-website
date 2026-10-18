import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

// Used only by scripts/prerender.mjs at build time.
export { PAGES, NOT_FOUND } from './content/pages';
export { SITE_URL, PRIVACY_POLICY_APPROVED, PRIVACY_POLICY_EFFECTIVE_DATE } from './config/site';

export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
