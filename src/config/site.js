// Single source of truth for site-wide links and labels.
export const BOOKING_URL = 'https://calendly.com/sidaty-sanuvoai/30min';
export const CONTACT_EMAIL = 'sidaty@sanuvoai.com';
export const CONTACT_PHONE = '(213) 876-9771';
export const CONTACT_PHONE_TEL = 'tel:+12138769771';

// Production origin (no trailing slash). Used at build time for canonical URLs, og:url
// and sitemap.xml. If left empty the build emits none of them.
export const SITE_URL = 'https://sanuvoai.com';

// The Privacy Policy (src/pages/Privacy.jsx) is published only once the owner approves its
// content. While this is false there is no /privacy route, nothing links to it, and it is
// not prerendered or listed in sitemap.xml.
export const PRIVACY_POLICY_APPROVED = true;

// Set to the actual publication date (e.g. 'October 20, 2026') before the production launch,
// and update it whenever the policy content changes. While empty the page shows the date as
// pending, and a Vercel production build fails (scripts/prerender.mjs).
export const PRIVACY_POLICY_EFFECTIVE_DATE = 'October 18, 2026';

export const NAV_LINKS = [
  { label: 'Platform',       to: '/platform'       },
  { label: 'Implementation', to: '/implementation' },
  { label: 'Roles',          to: '/roles'          },
  { label: 'About',          to: '/about'          },
];

// Shown under every preview. Previews are illustrations, not screenshots.
// PREVIEW: illustrates platform functionality. CONCEPT: illustrates what a scoped
// implementation could deliver; it does not depict an existing product screen.
export const PREVIEW_DISCLAIMER = 'Illustrative preview — sample data.';
export const CONCEPT_DISCLAIMER = 'Illustrative implementation concept — sample data.';
