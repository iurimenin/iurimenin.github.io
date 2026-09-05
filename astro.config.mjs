// @ts-check
import { defineConfig } from 'astro/config';

// Repositório iurimenin.github.io = user site, publicado na raiz do domínio.
export default defineConfig({
  site: 'https://iurimenin.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
