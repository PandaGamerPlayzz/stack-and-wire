# Stack & Wire

A small, Markdown-first homelab portfolio built with Astro, hand-written CSS, and locally bundled IBM Plex Sans. It defaults to dark mode and remembers an optional light theme. Everything builds to static files for GitHub Pages; the theme toggle is the only browser JavaScript.

The content is an AI-assisted draft based on the owner's interview and hardware inventory. It still needs owner review before publication. No push, deployment, or grant submission has been performed.

## Site scope

Four main pages, with two project articles:

| Route | Content source |
| --- | --- |
| `/` | `src/pages/index.md`: introduction and selected work |
| `/lab/` | `src/pages/lab.md`: current hosts, storage, switching, and photo slots |
| `/projects/` | `src/pages/projects/index.md`: router and remote-access articles, locally hosted tools, and planned networking work |
| `/learning/` | `src/pages/learning.md`: honest CCNA progress and networking plans |
| `/projects/virtualized-opnsense/` | Router migration and its tradeoffs |
| `/projects/remote-access/` | Headscale, friend access, and shared administration |

The old About, Gallery, Roadmap, and troubleshooting-template pages are no longer published. Their originals are retained under `archive/starter-pages/`. Background is on Home, photos are beside relevant content, and study and plans share a page. The original implementation brief remains `summary.md`; this smaller scope supersedes its starter-page count and sample-content requirements.

## Before publishing

- [ ] Review the rewritten first-person copy, including the two local applications and planned second internet line, and make it sound like you.
- [ ] Check device claims, dates, service roles, and collaborator attribution.
- [ ] Keep current work distinct from planned VLANs, restored 10GbE links, and later storage changes.
- [ ] Replace or remove the clearly labelled rack/screenshot placeholders.
- [ ] Review images and any configuration excerpts for identifying information.
- [x] Set the GitHub Pages origin and repository base path in `astro.config.mjs`.
- [ ] Test desktop, mobile, keyboard navigation, and the live Pages URL after deploying.

The separate 9900K NAS and future backup server are outside the grant project's scope. No completed VLAN deployment, measured speed improvement, course completion, or certification is claimed. Forgotten pfSense errors and its root cause remain unknown; do not fill those gaps with invented evidence.

## Run locally

Use Node 24 (or Node >=22.23.4) and npm >=9.6.5. From this repository:

```sh
npm ci
npm run dev
```

Open the Local URL Astro prints, normally `http://localhost:4321/stack-and-wire/`.

```sh
npm run build
npm run verify
npm run preview
```

`dist/` contains the static site. Preview serves that build. Stop either server with Ctrl+C. Dependency installation needs internet access; the site uses local fonts and assets without remote requests.

## GitHub Pages

1. The configured Pages URL is **https://pandagamerplayzz.github.io/stack-and-wire/**. `astro.config.mjs` uses `site: 'https://pandagamerplayzz.github.io'` and `base: '/stack-and-wire'`.
2. Leave `base: '/stack-and-wire'` if that is your repository name. For another project repository, use its name; for an origin-root site, use `base: '/'`.
3. On GitHub, choose **Settings → Pages → Source → GitHub Actions**.
4. Commit the source and `package-lock.json`, then push to `main` when ready. The workflow also supports manual dispatch.
5. Check the deployment URL from Actions, including a project article, images, heading links, and phone-width layout.

The workflow builds and verifies the static output before deployment. Canonical URLs use the configured GitHub Pages address. The implementation follows the [Astro Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Edit the content

Writing lives in `src/pages/**/*.md`. Frontmatter sets a title and description; the layout renders the H1. Start article sections at H2. Optional `figures` and `gallery` arrays accept objects with `src`, `alt`, and `caption`. Use a source such as `assets/photos/rack-front.jpg` in those arrays.

Use normal Markdown links such as `[The lab](/lab/)` and `![Alt text](/assets/photos/example.jpg)`. A small build-time plugin prefixes site-root Markdown links and images with the configured base. Do not write `/stack-and-wire` into those Markdown URLs. Astro components use `src/utils/urls.ts`.

Copy `templates/project.md` into `src/pages/projects/` to start an article, then link it from the project index. The template and archived pages are not published. If routes change, update the expected route list in `scripts/verify-build.mjs`.

## Photos and diagrams

The private working files live beside this repository: `hw-inventory.md`, `info-interview.md`, `photos-checklist.md`, and `photo-originals/`. They are not site content and should not be copied wholesale into `public/`.

**Do not use `cat6a-spool-label.jpg` on the site.** The owner rejected it for public display; it remains an inventory reference only. Keep all original photos outside `public/`. Files under `public/` are included in the built site even when nothing links to them.

Put selected, reviewed photos in `public/assets/photos/`. Use descriptive filenames and update both captions and alt text when replacing placeholders. The shared Figure component links directly to the original image, without a lightbox or carousel. Diagrams must stay explicitly illustrative until they represent verified connections; no detailed current topology is published in this draft.

## Source and validation

- `src/components/`: navigation, footer, figures, and gallery.
- `src/layouts/`: shared document metadata, article wrapper, and contents links.
- `src/styles/global.css`: restrained dark/light document styling.
- `src/utils/`: base-aware component and Markdown URLs.
- `public/`: local placeholder SVGs, font license, and selected future images.
- `.github/workflows/deploy.yml`: static Pages deployment.
- `scripts/verify-build.mjs`: expected routes, metadata, links, heading anchors, local media/fonts, and publication exclusions.

The interview history preserves the owner's original answers and corrections. Do not treat subjective interview comments or unverified technical explanations as independently proven causes. Build checks verify the site, not the factual accuracy of all claims or a live Pages deployment.
