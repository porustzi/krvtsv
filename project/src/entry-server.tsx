import { renderToStaticMarkup } from 'react-dom/server';
import { createElement as h, Fragment } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Services from './components/Services';
import TopProject from './components/TopProject';
import Prices from './components/Prices';
import Process from './components/Process';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export function render() {
  return renderToStaticMarkup(
    h(Fragment, null, [
      h(Header, { key: 'hdr' }),
      h('main', { key: 'main' }, [
        h(Hero, { key: 'hero' }),
        h(Advantages, { key: 'adv' }),
        h(Services, { key: 'svc' }),
        h(TopProject, { key: 'top' }),
        h(Prices, { key: 'prc' }),
        h(Process, { key: 'proc' }),
        h(Faq, { key: 'faq' }),
        h(Contact, { key: 'ctc' }),
      ]),
      h(Footer, { key: 'ftr' }),
    ])
  );
}
