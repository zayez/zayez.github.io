# zayez.xyz

Personal site + blog for **Enio E. Zanatta** — a front-end engineer in Porto
Alegre, BR. Lives at [zayez.xyz](https://zayez.xyz).

Big-type zine aesthetic: deep navy background, periwinkle rules, hot-pink
accents, Space Grotesk display / Fraunces serif / JetBrains Mono / Inter Tight
body. Three pages — home, blog index, blog post — all static and hand-rolled.

## Stack

- **[Astro 4](https://astro.build)** — static site generator, MDX content
  collections, React island for the comments widget
- **SCSS** — one stylesheet (`src/styles/pages/zine.scss`) + theme tokens
  (`src/styles/base/theme.scss`)
- **[@giscus/react](https://giscus.app)** — GitHub Discussions-backed comments on
  posts
- **[@astrojs/rss](https://docs.astro.build/en/recipes/rss/)** — feed at
  [`/rss.xml`](https://zayez.xyz/rss.xml)
- **GitHub Pages** — deploy via `.github/workflows/deploy.yml` on push to `main`

## Commands

```
npm install       Install dependencies
npm run dev       Dev server at http://localhost:4321
npm run build     Type-check + static build to ./dist/
npm run preview   Serve the production build locally
```

## Structure

```
src/
├─ pages/
│  ├─ index.astro              home — masthead, band, projects, writing desk
│  ├─ blog/
│  │  ├─ index.astro           blog list
│  │  └─ [slug].astro          post entry point (feeds post-layout)
│  └─ rss.xml.ts               RSS 2.0 feed
├─ layouts/
│  ├─ main-layout.astro        HTML shell + zine stylesheet
│  ├─ blog-layout.astro        same shell, used by blog index
│  └─ post-layout.astro        post scaffolding: masthead, TOC, share,
│                              colophon, comments, mega footer
├─ components/
│  ├─ base-head.astro          <meta> + Google Fonts
│  ├─ index/
│  │  ├─ header.astro          O3Nav (sticky top nav with `currentPage` prop)
│  │  └─ footer.astro          Mega footer (variants: home / blog / post)
│  ├─ comments/comments.tsx    React island wrapping Giscus
│  ├─ spotify/spotify.astro    Spotify track/album embed helper
│  └─ elements/image/          Image helpers
├─ content/
│  ├─ config.ts                Collection definitions
│  ├─ schemas.ts               Zod schemas for blog + projects
│  ├─ blog/<year>/<date>_<slug>.mdx
│  └─ projects/<slug>.mdx
└─ styles/
   ├─ base/theme.scss          CSS custom properties (palette, fonts)
   └─ pages/zine.scss          All page styles (home, blog, post)
```

## Writing a post

Drop a new `.mdx` file in `src/content/blog/<year>/`. Frontmatter schema
(see `src/content/schemas.ts`):

```yaml
---
title: 'Post title'
description: 'Short description, shown as the deck and in RSS'
author: 'Enio E. Zanatta'
pubDate: '21 April, 2026'
slug: '2026-04-21_post-slug'
tags:
  - tooling
---
```

- `tags[0]` becomes the primary tag shown as a pill in the sidebar and post
  cards — keep it short (one word).
- `draft: true` hides the post from the blog index, RSS feed, and build output.
- Use `## Heading` in MDX for section titles — they get the auto-numbered
  `§ 01` / `§ 02` treatment and appear in the post's table of contents.
- Embed a Spotify track/album with
  `import Spotify from '@components/spotify/spotify.astro'` and
  `<Spotify link="https://open.spotify.com/..." />`.

Reading time is computed at build time from the post body (`~200 wpm`) — no
field to set.

## Adding a project

Drop a new `.mdx` in `src/content/projects/`. Frontmatter:

```yaml
---
name: project-name
year: '2024'
tags:
  - React
  - TypeScript
imageUrl: https://.../screencap.png
githubUrl: https://github.com/zayez/project-name
projectUrl: https://project.live.url
description: A short blurb that appears as the project card copy.
images:
  small: https://.../640.avif
  medium: https://.../1280.avif
  big: https://.../1920.avif
  large: https://.../full.avif
---
```

Projects on the home page are sorted by `year` descending. The newest gets the
rotated "new" badge automatically.

## Deploying

Pushes to `main` trigger the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which runs `withastro/action@v2` (install →
build → upload) and then `actions/deploy-pages@v4` to publish to GitHub Pages.
No manual step required.

## Path aliases

Defined in `tsconfig.json`:

- `@components/*` → `src/components/*`
- `@elements/*` → `src/elements/*`

## Why "zine"

The design language borrows from self-published zines — oversized stacked
display type, outlined letters, rotated labels, dashed rules, scan-line
texture, `§`-numbered sections, "Issue № 002" chrome in the nav. Lives
alongside the quieter serif body copy inside posts.
