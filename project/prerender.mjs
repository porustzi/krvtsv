import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const serverOut = resolve(root, '.prerender');

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

  const distIndex = resolve(root, 'dist', 'index.html');
  let template = readFileSync(distIndex, 'utf-8');
  template = template.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );
  writeFileSync(distIndex, template);

  rmSync(serverOut, { recursive: true, force: true });
  console.log(`[prerender] injected ${html.length} bytes of static HTML into #root`);
}

prerender().catch((e) => {
  console.error('[prerender] failed:', e);
  process.exit(1);
});
