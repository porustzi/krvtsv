import { createServer } from 'vite';
import { readFileSync, writeFileSync, rmSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const serverOut = resolve(root, '.prerender');
const distDir = resolve(root, 'dist');

async function prerender() {
  const vite = await createServer({
    root,
    logLevel: 'error',
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const pages = render();

  await vite.close();

  const distIndex = resolve(distDir, 'index.html');
  let template = readFileSync(distIndex, 'utf-8');

  // Inline the built CSS to remove the render-blocking stylesheet request
  const assetsDir = resolve(distDir, 'assets');
  const cssFile = readdirSync(assetsDir).find((f) => f.endsWith('.css'));
  if (cssFile) {
    const css = readFileSync(resolve(assetsDir, cssFile), 'utf-8');
    template = template.replace(
      /<link rel="stylesheet"[^>]*assets\/[^"]+\.css"[^>]*>/,
      `<style>${css}</style>`
    );
  }

  let total = 0;
  for (const [route, { html, head }] of Object.entries(pages)) {
    let outHtml = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );
    if (route !== '/') {
      // Strip base SEO tags so the route's Helmet head is the single source
      outHtml = outHtml
        .replace(/<title>[\s\S]*?<\/title>/, '')
        .replace(/<meta name="description"[^>]*>/, '')
        .replace(/<link rel="canonical"[^>]*>/, '')
        .replace(/<meta property="og:[^>]*>/g, '')
        .replace(/<meta name="twitter:[^>]*>/g, '');
      outHtml = outHtml.replace('<head>', `<head>${head}`);
    }
    if (route === '/') {
      writeFileSync(distIndex, outHtml);
    } else {
      const dir = resolve(distDir, route.slice(1)); // strip leading /
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      writeFileSync(resolve(dir, 'index.html'), outHtml);
    }
    total += html.length;
  }

  rmSync(serverOut, { recursive: true, force: true });
  console.log(`[prerender] injected ${total} bytes across ${Object.keys(pages).length} routes + inlined CSS`);
}

prerender().catch((e) => {
  console.error('[prerender] failed:', e);
  process.exit(1);
});
