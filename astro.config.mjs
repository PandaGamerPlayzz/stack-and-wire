import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { prefixLinks } from './src/utils/markdown-links.mjs';

// GitHub Pages project site. Keep the repository path in base, not site.
const site = 'https://pandagamerplayzz.github.io';
const base = '/stack-and-wire';
export default defineConfig({
  site, base, output: 'static', trailingSlash: 'always',
  markdown: { processor: unified({ rehypePlugins: [[prefixLinks, { base }]] }) },
});

