import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://zayez.xyz',
  integrations: [mdx(), react()],
  base: '/',
  build: {
    assetsPrefix: '/',
    format: 'file',
  },
})
