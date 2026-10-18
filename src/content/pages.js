import { SOLUTIONS, solutionPath } from './solutions';
import { PRIVACY_POLICY_APPROVED } from '../config/site';

// Page-level metadata. Used at runtime (document title) and by scripts/prerender.mjs.
export const PAGES = [
  {
    path: '/',
    title: 'Sanuvo | Financial Operations. Under Control.',
    description: 'Sanuvo is a Financial Operations Optimization company: a configurable control layer, implementation services, and custom finance workflow automation.',
  },
  {
    path: '/platform',
    title: 'Financial Operations Control Layer | Sanuvo',
    description: 'A configurable control layer around your existing financial systems for journal preparation, approvals, close management, and audit evidence.',
  },
  {
    path: '/solutions',
    title: 'Finance Operations Solutions | Sanuvo',
    description: 'Eight solution areas configured around your finance operations, from journal entries and reconciliations to close, cash, reporting, and controls.',
  },
  ...SOLUTIONS.map((s) => ({
    path: solutionPath(s.slug),
    title: `${s.name} | Sanuvo`,
    description: s.tagline,
  })),
  {
    path: '/implementation',
    title: 'Implementation Services | Sanuvo',
    description: 'From workflow assessment to implementation. Sanuvo assesses your finance workflows and determines the right scope before work begins.',
  },
  {
    path: '/roles',
    title: 'Solutions by Finance Role | Sanuvo',
    description: 'How Sanuvo supports CFOs, Controllers, Finance Directors, and multi-entity accounting teams.',
  },
  {
    path: '/about',
    title: 'About Sanuvo',
    description: 'Sanuvo is a Financial Operations Optimization company offering a configurable control layer, implementation services, and custom workflow automation.',
  },
  ...(PRIVACY_POLICY_APPROVED
    ? [{
        path: '/privacy',
        title: 'Privacy Policy | Sanuvo',
        description: 'How Sanuvo handles information in connection with this website.',
      }]
    : []),
];

export const NOT_FOUND = {
  title: 'Page Not Found | Sanuvo',
  description: 'The page you were looking for could not be found.',
  noindex: true,
};

const normalize = (path) => path.replace(/\/+$/, '') || '/';
export const getPageMeta = (path) => PAGES.find((p) => p.path === normalize(path)) || NOT_FOUND;
