import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://zayez.github.io/zayez-site',

  integrations: [mdx()],
  base: './',
  build: {
    assetsPrefix: './',
    format: 'file',
  },

  // output: 'static',
  // outDir: './dist',
  // build: {
  //   assets: 'astro',
  // },
  // base: './dist',
})
