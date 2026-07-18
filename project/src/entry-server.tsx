import { renderToString } from 'react-dom/server';
import { createElement as h, type ReactNode } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import Home from './pages/Home';
import Fullstack from './pages/Fullstack';
import Ecommerce from './pages/Ecommerce';
import WebDeveloperKyiv from './pages/WebDeveloperKyiv';
import BlogIndex from './pages/BlogIndex';

interface HelmetContext {
  helmet?: HelmetServerState;
}

function renderRoute(path: string, node: ReactNode) {
  const helmetContext: HelmetContext = {};
  const html = renderToString(
    h(HelmetProvider, { context: helmetContext } as never,
      h(StaticRouter, { location: path }, node as never)
    )
  );
  const { helmet } = helmetContext;
  const head = helmet
    ? `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}`
    : '';
  return { html, head };
}

export function render() {
  return {
    '/': renderRoute('/', h(Home)),
    '/services/fullstack': renderRoute('/services/fullstack', h(Fullstack)),
    '/services/ecommerce': renderRoute('/services/ecommerce', h(Ecommerce)),
    '/services/web-developer-kyiv': renderRoute('/services/web-developer-kyiv', h(WebDeveloperKyiv)),
    '/blog/': renderRoute('/blog', h(BlogIndex)),
  };
}
