import { useEffect } from 'react';

type SeoHeadProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
};

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default function SeoHead({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
}: SeoHeadProps) {
  useEffect(() => {
    document.title = title;
    upsertMeta('name', 'description', description);
    if (keywords.length) upsertMeta('name', 'keywords', keywords.join(', '));

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    if (url) upsertMeta('property', 'og:url', url);
    if (image) upsertMeta('property', 'og:image', image);

    upsertMeta('name', 'twitter:card', image ? 'summary_large_image' : 'summary');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    if (image) upsertMeta('name', 'twitter:image', image);
  }, [title, description, keywords, image, url, type]);

  return null;
}
