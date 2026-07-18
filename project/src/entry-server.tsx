import { renderToString } from 'react-dom/server';
import { createElement as h } from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Fullstack from './pages/Fullstack';
import Ecommerce from './pages/Ecommerce';
import BlogReactVite from './pages/BlogReactVite';

function renderRoute(path: string, node: React.ReactNode) {
  const helmetContext: any = {};
  const html = renderToString(
    h(HelmetProvider, { context: helmetContext } as any,
      h(StaticRouter, { location: path }, node as any)
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
    '/blog/react-vite': renderRoute('/blog/react-vite', h(BlogReactVite)),
  };
}
