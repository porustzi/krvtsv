import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
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
  const html = render();

  await vite.close();

  const distIndex = resolve(distDir, 'index.html');
  let template = readFileSync(distIndex, 'utf-8');
  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

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

  writeFileSync(distIndex, template);

  rmSync(serverOut, { recursive: true, force: true });
  console.log(`[prerender] injected ${html.length} bytes of static HTML + inlined CSS`);
}

prerender().catch((e) => {
  console.error('[prerender] failed:', e);
  process.exit(1);
});
