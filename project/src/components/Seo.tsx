import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogType?: string;
}

const SITE = 'https://krvtsvcorp.pp.ua';

const crumbs: Record<string, { name: string; parent?: string }> = {
  '/services/landing': { name: 'Замовити лендінг', parent: '/' },
  '/services/fullstack': { name: 'Фуллстак розробка', parent: '/' },
  '/services/ecommerce': { name: 'E-commerce', parent: '/' },
  '/services/web-developer-kyiv': { name: 'Веб-розробник Київ', parent: '/' },
  '/blog': { name: 'Блог', parent: '/' },
  '/blog/react-vite': { name: 'React + Vite', parent: '/blog' },
  '/blog/landing-vs-website': { name: 'Лендінг чи сайт', parent: '/blog' },
  '/blog/no-leads-from-site': { name: 'Чому сайт не приносить заявки', parent: '/blog' },
  '/blog/site-from-scratch-checklist': { name: 'Як створити сайт з нуля', parent: '/blog' },
};

function breadcrumbJson(path: string) {
  const info = crumbs[path];
  if (!info) return null;
  const items = [
    { '@type': 'ListItem', position: 1, name: 'KRVTSV CORP', item: SITE + '/' },
  ];
  if (info.parent && info.parent !== '/') {
    const parent = crumbs[info.parent];
    if (parent) {
      items.push({ '@type': 'ListItem', position: 2, name: parent.name, item: SITE + info.parent + '/' });
    }
  }
  items.push({
    '@type': 'ListItem',
    position: items.length + 1,
    name: info.name,
    item: SITE + path + '/',
  });
  return items;
}

export default function Seo({ title, description, path, ogType = 'website' }: SeoProps) {
  const url = SITE + (path.endsWith('/') ? path : path + '/');
  const breadcrumb = breadcrumbJson(path);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://krvtsvcorp.pp.ua/og-image.jpg" />
      <meta name="twitter:image" content="https://krvtsvcorp.pp.ua/og-image.jpg" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": ${JSON.stringify(breadcrumb)}
        }
      `}</script>
    </Helmet>
  );
}
