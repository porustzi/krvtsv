import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogType?: string;
}

const SITE = 'https://krvtsvcorp.pp.ua';

export default function Seo({ title, description, path, ogType = 'website' }: SeoProps) {
  const url = SITE + (path.endsWith('/') ? path : path + '/');
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
    </Helmet>
  );
}
