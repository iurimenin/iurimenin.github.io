import type { APIRoute } from 'astro';
import { SITE } from '../data/content';

const PAGES = ['/', '/pt/'];

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL(SITE.url)).href.replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = PAGES.map(
    (p) => `  <url>
    <loc>${base}${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${base}/" />
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${base}/pt/" />
  </url>`,
  ).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
