// Build-time prerender. Runs after `vite build` (client) and `vite build --ssr` (server):
// renders every route in src/content/pages.js to static HTML with its own title and
// description, writes dist/<route>/index.html and dist/404.html, then removes dist-server.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const { render, PAGES, NOT_FOUND, SITE_URL } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function setMeta(html, attr, name, value) {
  const re = new RegExp(`(<meta ${attr}="${name}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender: <meta ${attr}="${name}"> not found in index.html`);
  return html.replace(re, (_, a, b) => a + esc(value) + b);
}

function buildPage(meta, url, routePath) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(meta.title)}</title>`);
  html = setMeta(html, 'name', 'description', meta.description);
  html = setMeta(html, 'property', 'og:title', meta.title);
  html = setMeta(html, 'property', 'og:description', meta.description);
  html = setMeta(html, 'name', 'twitter:title', meta.title);
  html = setMeta(html, 'name', 'twitter:description', meta.description);

  const extra = [];
  if (meta.noindex) extra.push('<meta name="robots" content="noindex" />');
  if (SITE_URL && !meta.noindex) {
    extra.push(`<link rel="canonical" href="${SITE_URL}${routePath === '/' ? '/' : routePath}" />`);
    extra.push(`<meta property="og:url" content="${SITE_URL}${routePath === '/' ? '/' : routePath}" />`);
  }
  if (extra.length) html = html.replace('</head>', () => `  ${extra.join('\n    ')}\n  </head>`);

  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error('prerender: root element not found in index.html');
  return html.replace(marker, () => `<div id="root" data-prerendered="${routePath}">${render(url)}</div>`);
}

for (const page of PAGES) {
  const html = buildPage(page, page.path, page.path);
  const file = page.path === '/' ? path.join(dist, 'index.html') : path.join(dist, page.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

fs.writeFileSync(path.join(dist, '404.html'), buildPage(NOT_FOUND, '/404', '/404'));

if (SITE_URL) {
  const urls = PAGES.filter((p) => !p.noindex)
    .map((p) => `  <url><loc>${SITE_URL}${p.path}</loc></url>`)
    .join('\n');
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
  fs.appendFileSync(path.join(dist, 'robots.txt'), `\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}

fs.rmSync(serverDir, { recursive: true, force: true });
console.log(`prerendered ${PAGES.length} routes + 404${SITE_URL ? ' + sitemap.xml' : ' (no SITE_URL set: canonical URLs and sitemap skipped)'}`);
