// Single source of truth for site-wide links and labels.
export const BOOKING_URL = 'https://calendly.com/sanuvo-ai';

// Production origin (no trailing slash). Used at build time for canonical URLs, og:url
// and sitemap.xml. If left empty the build emits none of them.
export const SITE_URL = 'https://sanuvoai.com';

// The Privacy Policy is not in this repository until it has passed legal review. While
// this is false nothing links to /privacy and it is not prerendered. To publish: add the
// reviewed page as src/pages/Privacy.jsx, add its route in src/App.jsx, then set this to true.
export const PRIVACY_POLICY_APPROVED = false;

export const NAV_LINKS = [
  { label: 'Platform',       to: '/platform'       },
  { label: 'Implementation', to: '/implementation' },
  { label: 'Roles',          to: '/roles'          },
  { label: 'About',          to: '/about'          },
];

// Shown under every dashboard preview. Previews are illustrations, not screenshots.
export const PREVIEW_DISCLAIMER = 'Illustrative preview — sample data.';
