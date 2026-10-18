import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Makes `vite preview` serve the prerendered pages the way the production host does:
// /platform -> dist/platform/index.html, and unknown routes -> dist/404.html.
function servePrerenderedRoutes() {
  return {
    name: 'serve-prerendered-routes',
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use((req, _res, next) => {
        const [pathname, query] = req.url.split('?');
        if (pathname !== '/' && !path.extname(pathname)) {
          const route = pathname.replace(/\/+$/, '');
          const found = fs.existsSync(path.join(outDir, route, 'index.html'));
          req.url = (found ? `${route}/index.html` : '/404.html') + (query ? `?${query}` : '');
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), servePrerenderedRoutes()],
});
