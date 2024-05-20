import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import expressiveCode from 'astro-expressive-code'

export default defineConfig({
  site: 'https://zayez.xyz',
  integrations: [
    expressiveCode({
      themes: ['dracula'],

      frames: {
        showCopyToClipboardButton: true,
      },
    }),
    mdx(),
    react(),
  ],
  base: '/',
  build: {
    assetsPrefix: '/',
    format: 'file',
  },
})
