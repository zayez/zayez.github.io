import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://zayez.github.io',

  integrations: [mdx()],
  base: '/',
  build: {
    assetsPrefix: '/',
    format: 'file',
  },
})
