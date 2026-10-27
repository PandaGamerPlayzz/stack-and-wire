# Stack & Wire — Codex implementation brief

> **Project status:** New repository. This document is the implementation specification for Codex, not the final site copy.
>
> **Repository name:** `stack-and-wire`
>
> **Primary deliverable:** A fully working, GitHub Pages–deployable, Markdown-first personal homelab / networking portfolio. The owner will replace the starter prose, diagrams, and image placeholders with their own work.

## 1. Mission

Build **Stack & Wire**, a quiet, credible technical documentation site about a self-taught developer's homelab, networking experiments, infrastructure projects, and learning progress. It should feel like a well-maintained engineer's notebook or personal technical wiki—not a startup landing page, AI-generated portfolio, or grant solicitation.

The immediate reason for building it is to have a strong public work sample to link in an application for a networking education/equipment grant (Meter). **However, the site itself should be a standalone long-lived technical portfolio, useful well beyond that application.** Readers should understand what the owner has done, what is still in progress, what they have learned, and where they want to go next.

The owner is deliberately asking Codex to build the complete **starter implementation**: site scaffolding, design, routes, sample Markdown copy, sample data, component examples, placeholder graphics, and deploy instructions. The owner will rewrite the prose and replace visuals to make the finished site genuinely their own. Do not require the owner to supply missing copy or images before the site builds.

## 2. Starting conditions and scope

Assume Codex is launched in the root of a **freshly initialized GitHub repository**, probably containing only `.git/`, and perhaps a standard `.gitignore`, `LICENSE`, or `README.md` created by GitHub. There is no existing website, package configuration, build system, or asset pipeline.

- **Work in the current repository.** Do not create a nested project directory.
- Inspect existing files first; preserve the `.git` directory and any meaningful existing content.
- Install/configure the project from scratch and commit-ready files as needed.
- Do not assume a GitHub username, domain name, live server, or existing images. Use a clearly documented configuration placeholder for the username/Pages URL.
- Do not publish, push, modify GitHub repository settings, or purchase anything automatically. Configure everything needed so the owner can enable Pages and push normally.
- Make reasonable implementation choices autonomously. Prioritize a good, working v1 over optional features.

## 3. Technical approach

**Preferred stack:** Astro (current stable release) + ordinary Markdown (`.md`) + minimal hand-written CSS + only a little vanilla JavaScript when actually needed.

Reasons: Markdown is the source of truth; pages should render as static HTML; owners should be able to edit prose without touching components; the final site should load quickly and work on GitHub Pages without any backend.

Requirements:

- A static site that builds with `npm install` / `npm ci` and `npm run build`.
- Markdown pages or Astro's Markdown content collections with a small number of reusable components. Choose the simpler implementation that supports the requested routes.
- A consistent layout wrapping all Markdown pages (metadata, navigation, readable article body, previous/next or back links as appropriate).
- A deploy workflow in `.github/workflows/deploy.yml` that uses GitHub Actions + GitHub Pages on pushes to `main` and manual dispatch. Set only necessary permissions. Use maintained action versions.
- Correct handling of **GitHub Pages project-site base paths**. A repository named `stack-and-wire` will usually deploy at `https://USERNAME.github.io/stack-and-wire/`. Navigation, CSS, images, and JS must work under that prefix, not only at `/` in development. Ideally centralize URL generation in a simple helper or use Astro's `BASE_URL` conventions consistently.
- Explain in the README how to set the GitHub username / `site` setting, enable **Settings → Pages → GitHub Actions**, run locally, build, and publish.
- No backend, analytics, tracking scripts, authentication, CMS, database, or API keys.
- No dependency-heavy animation systems, UI libraries, component frameworks, Tailwind, or icon packs unless truly required. Do not default to React.
- SEO basics: unique page titles/descriptions, canonical links where possible, accessible semantic markup, sitemap optional.
- Responsive typography and layout, keyboard accessibility, reduced-motion support, good contrast, and descriptive alt text/captions.

## 4. Visual direction

**Core idea: a glorified Markdown renderer, executed very well.** Make content and evidence the centerpiece.

- Narrow, comfortable article measure (roughly 70–85 characters); generous but not excessive whitespace.
- Simple header with project name and restrained links; optional small desktop table of contents/sidebar. Mobile should be simple, not a complicated docs UI.
- Quiet palette: neutral background, legible typography, thin separators, subtle accent color. Default to a polished dark/light theme or a single excellent theme; if implementing a theme switch, make it genuinely functional and accessible. Avoid decorative complexity.
- Use system fonts or a sensible open-license web font only if it materially improves legibility; monospace for technical identifiers and code.
- Nice Markdown treatment for headings, lists, tables, blockquotes, links, inline code, fenced code, and images.
- Provide tasteful styles for image captions, technical figures, small status labels (`Completed`, `In progress`, `Planned`), and notes/caveats.
- **Avoid** hero gradients, glassmorphism, cards everywhere, fake dashboards, skill-percentage bars, animated counters, generic tech stock photography, decorative blobs, scrolling effects, and inspirational marketing copy.
- Use SVG/CSS-created placeholder diagrams, not AI-looking illustrations. A real photograph can ultimately replace any image placeholder.
- Prefer a small image grid + click-to-enlarge for photos. A single **optional** accessible, lightweight carousel is okay on a gallery page, but don't make carousels a central motif. Use scroll-snap or minimal JS; no heavy slider package.
- Ensure figures and screenshots are pleasant to view on mobile and have captions/alt text. Linking directly to full-resolution files is an acceptable simple alternative to a lightbox.

Design reference in words: *personal lab notebook meets clean software documentation.* It should be calm and obviously written for technical readers.

## 5. Real background information to reflect in sample content

Use these established facts as the seed for **clearly editable sample copy**. Do not embellish them into achievements the owner hasn't confirmed.

- The owner is a self-taught developer and hands-on hardware/homelab enthusiast who likes learning through building and troubleshooting.
- They use **Proxmox VE** for virtualization and have experimented with **OPNsense** as a virtualized firewall/router.
- They have configured and debugged LAN networking, DHCP, VM infrastructure, and network access issues.
- They have worked with **Tailscale** for remote connectivity. **Headscale** has been considered/planned; do not claim it is a completed deployment without verification.
- They already own multiple used/older **enterprise 10GbE network adapters**, including SFP+/related enterprise equipment, but lack the affordable **managed switching infrastructure** to put those adapters to full use. Don't invent quantities, vendors, speeds of other devices, or topology.
- They are interested in networking both for its own sake and as a complement to software development, virtualization, systems administration, and infrastructure.
- They are interested in earning **Cisco CCNA** and signed up for **NetworkChuck's Summer of CCNA** program. They **have not taken the certification exam**. Never call them CCNA-certified or imply they have passed tests.
- Their networking expansion aspirations include VLAN segmentation, inter-VLAN routing, switch management, traffic monitoring, network security, connectivity testing, and practical study.
- Some of the existing network and hardware details are not verified. Make them `TODO: confirm` instead of inventing precise facts.

**Important editorial safeguards:**

- Clearly distinguish **Already built**, **Currently learning**, **Planned**, and **Ideas**.
- Never present placeholder graphics, fabricated metrics, staged terminal outputs, or generated photographs as real evidence.
- If a sample says something about the owner's experience, phrase it as **starter draft—verify/rewrite** where applicable.
- Don't invent completed projects, certifications, expenses, benchmark results, purchase lists, or award outcomes.
- Be transparent that diagrams are illustrative until the owner replaces them.
- The portfolio must not claim to have been written independently by the owner until they actually edit and approve the text. Put an obvious editing checklist in the repository README; do not clutter public pages with repeated giant disclaimers.

## 6. Site architecture and starter pages

Build a useful site with **real sample Markdown content**, not lorem ipsum. It can be succinct but should demonstrate each page's purpose and layout. Use routes similar to those below (minor improvements are okay).

### `/` — Home / Start here

Goal: In 30–60 seconds, visitors should understand who the owner is, what they've built, and where to find technical evidence.

Content outline:

1. H1: `Stack & Wire` with a plainspoken subtitle such as `Homelab projects, networking experiments, and the things I learn along the way.`
2. A concise introduction: self-taught developer who learns best through hands-on work and troubleshooting.
3. `What I'm working with`: Proxmox, OPNsense, Tailscale, physical server hardware, and used 10GbE NICs; acknowledge some items are planned or in-progress.
4. `Selected work`: simple text links to the virtualized-router writeup, the troubleshooting case study, and the network overview.
5. `What I'm learning next`: CCNA studies and managed 10GbE switching / segmentation.
6. One restrained representative **placeholder network diagram** and a photo placeholder with caption.
7. Links to the more detailed About, Lab, Projects, Learning, and Roadmap pages.

### `/about/` — Background

Sample narrative answering: Why do I like building computers and running services? How did that lead to networking? What motivates my learning? Keep the voice first person, thoughtful, straightforward, and non-corporate. Avoid an invented biography. Add explicit prompts for the owner to add specific stories.

### `/lab/` — Current homelab

The main technical overview.

Sections:

- Current purpose of the homelab.
- `Hardware inventory` table with placeholders like `SERVER_A`, `SWITCH_A`, `NIC_A`, `TODO: model`, `TODO: port count`; only confirmed categories are real.
- `Software and services`: Proxmox, OPNsense, Tailscale and their roles, with accurate status badges.
- `Current topology` **illustrative** SVG network diagram. Give it a visible `Conceptual example — replace with actual topology` caption.
- `What works`, `Limitations`, `Next improvements`.
- A mini gallery using local placeholder SVGs. Include captions demonstrating what real owner-provided photos should show.

### `/projects/` — Project index

Short summaries with status, topics, and links. Avoid generic marketing-style project cards; simple linked sections or restrained list rows are better.

Include 2 substantial example writeups:

1. **`Virtualizing a router with Proxmox and OPNsense`** (actual experience exists; precise implementation details remain `TODO`): motivation, intended topology, design tradeoffs, configuration steps to verify, pitfalls, screenshots to add, and lessons learned.
2. **`Diagnosing a network connectivity problem`**: a case-study template grounded in the owner's experience with LAN/Tailscale and troubleshooting. Explain the *method* (identify symptom; verify link, addressing, routes/firewall; use ping, traceroute, packet capture as appropriate) without inventing commands run, results, root cause, or resolution. Use `TODO: replace with actual incident evidence` labels.

Optional third brief planned project: **`Building a managed 10GbE network`**, linked to the roadmap, explicitly `Planned`.

Each writeup should follow a repeatable structure: `Context → Goal → Setup → Investigation / Build steps → Evidence → Result / Current status → Lessons learned → Next steps`. Adapt headings where needed.

### `/learning/` — Networking / CCNA study log

- Current goal: CCNA studies; signed up for NetworkChuck's Summer of CCNA; exam not yet taken.
- A lightweight dated learning log with 2–3 **clearly labeled example entries** / prompts. Do not falsely claim topics were completed.
- Topics of interest: subnetting, switching, VLANs, basic routing, inter-VLAN routing, ACLs, troubleshooting.
- How homelab exercises will reinforce study material.
- A simple Markdown format/template the owner can copy for future study notes.

### `/roadmap/` — Next homelab/network projects

- Explain the gap between already-owned enterprise 10GbE adapters and currently insufficient managed switching infrastructure.
- Planned outcomes: put existing hardware to use; practice VLANs and switch configuration; test traffic flows and routing; build a safer segmented network; strengthen CCNA learning.
- A proposed network topology diagram visibly labeled `Proposed / subject to change`.
- `Equipment and skills needed` with an **editable illustrative** table: managed 10GbE SFP+ switching, DAC cables/transceivers, perhaps separate RJ45-capable connectivity as appropriate, software testing and study resources. **No fixed purchase claims or made-up exact quotes/prices.**
- Optional `Grant context` paragraph: external equipment funding could help overcome the switching bottleneck, but **do not** make the page a donation pitch and do not assert a grant was awarded.
- Milestone checklist with statuses `Idea`, `Planned`, `In progress`, `Done` as clearly appropriate.

### `/gallery/` — Optional but useful

A modest visual index with placeholder slots for `Server/rack overview`, `Network interface cards`, `Proxmox screenshot`, `OPNsense screenshot`, `Cable/switching area`, and diagrams. Captions should tell the owner what to photograph/redact. Build the gallery even if no real photos exist yet, but label every placeholder clearly. Prefer grid over carousel; if a carousel is implemented, use it here and include keyboard control and alt text.

## 7. Starter sample text (tone reference, rewriteable)

Use a few concise paragraphs resembling the following **without claiming unverified results**. The goal is to give the owner a full working example they can edit, not a final submission.

> I learn the most when I can build something, break it, and figure out why it stopped working. My homelab has become a place to explore the systems that sit underneath the software I use and write: virtualization, routing, firewalls, storage, and the network connections between them.
>
> Much of my experience has come from hands-on work with Proxmox and OPNsense, along with plenty of troubleshooting when things don't behave as expected. I'm documenting both the projects and the mistakes because those details are often more useful than a list of hardware.
>
> One area I want to grow is managed 10GbE networking. I've collected several used enterprise network adapters, but I don't yet have the switching infrastructure to connect everything the way I want. My goal is to turn that limitation into a learning project involving switching, segmentation, network visibility, and practical CCNA study.

**Editorial style rules:** write in a natural first person, avoid hype (`passionate visionary`, `revolutionizing`, `cutting-edge`), avoid filler, include specific technical nouns and useful context, leave room for owner-authored concrete examples. Dates should be placeholder dates rather than invented historical milestones.

## 8. Assets, placeholders, and easy editing

The owner should be able to swap sample content and placeholder media without restructuring the site.

- Keep all writing in Markdown (including project articles).
- Create `public/assets/diagrams/` with two simple, editable SVG diagrams:
  - `current-topology-placeholder.svg`
  - `proposed-topology-placeholder.svg`
- Create `public/assets/placeholders/` with attractive but **obviously placeholder** SVG panels for photo/screenshot slots. Examples: `server-photo-placeholder.svg`, `nic-photo-placeholder.svg`, `proxmox-screenshot-placeholder.svg`, `opnsense-screenshot-placeholder.svg`.
- SVGs should be simple and neutral: line drawings, boxes, labeled connections. They must say `PLACEHOLDER` / `ILLUSTRATIVE` somewhere appropriate. No photorealistic fake evidence.
- Build a reusable `Figure` / `ImageWithCaption` component, optionally `Gallery`, to demonstrate figure layout, image descriptions, and captions.
- If supporting a lightbox, make it lightweight, accessible, and robust on mobile; if not, clicking through to the original image is perfectly fine.
- Use non-personally identifying example subnets (or generic node labels) in diagrams; don't expose real IP plans, device management interfaces, API tokens, hostnames, credentials, internal security design details, or MAC addresses by default.
- Add `TODO` comments or `REPLACE_ME` markers close to every editable sample, plus a centralized list of all replacements in the README.
- Avoid hotlinked imagery; site should build and display fully offline with local placeholder assets.

## 9. Suggested repository organization

Adapt the structure if Astro's conventions warrant it, but keep it legible:

```text
stack-and-wire/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── diagrams/
│       ├── placeholders/
│       └── photos/              # Future owner photos; .gitkeep if empty
├── src/
│   ├── components/
│   │   ├── SiteHeader.astro
│   │   ├── SiteFooter.astro
│   │   ├── Figure.astro
│   │   └── Gallery.astro         # If useful
│   ├── layouts/
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.md             # Or equivalent Astro page
│   │   ├── about.md
│   │   ├── lab.md
│   │   ├── learning.md
│   │   ├── roadmap.md
│   │   ├── gallery.md
│   │   └── projects/
│   │       ├── index.md
│   │       ├── virtualized-opnsense.md
│   │       └── network-troubleshooting.md
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── urls.ts              # If needed for base-prefixed links
├── astro.config.mjs
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── summary.md                  # This brief
```

You can use `.astro` for index and Markdown for the main prose if doing so makes the homepage or project index easier to build. **Content must remain easily editable.** Don't hide paragraphs as hard-coded strings deep in components.

## 10. Content templates and documentation

Include:

- `README.md` describing: purpose, site architecture, local development commands, GitHub Pages configuration, how to write/edit Markdown, how to add projects, how to add/replace images, how to edit diagrams, and how to verify publishing works.
- A prominently placed **owner revision checklist**, e.g.:
  - [ ] Replace/edit all draft text in first-person voice.
  - [ ] Verify every technical statement; remove anything not actually done.
  - [ ] Confirm exact hardware inventory and software status.
  - [ ] Replace conceptual network diagrams with accurate redacted topology.
  - [ ] Replace all placeholder images with real photos/screenshots or remove unused slots.
  - [ ] Write at least one evidence-backed troubleshooting writeup.
  - [ ] Update CCNA learning status honestly.
  - [ ] Review IPs, hostnames, configs, screenshots for security/privacy.
  - [ ] Update GitHub username, URLs, site metadata, and image alt text.
  - [ ] Test desktop, mobile, keyboard navigation, and built output.
- A reusable Markdown article template in a non-published `templates/` directory, with frontmatter and sections for evidence, setbacks, and lessons.
- Comments or placeholder text signaling which prose is draft/sample. Remove/replace these as the owner finalizes the site.

## 11. GitHub Pages and quality acceptance tests

A good implementation is finished only when:

1. `npm ci` (or `npm install` initially) succeeds.
2. `npm run build` completes cleanly and outputs a static site.
3. Every core page exists, links correctly, and has useful starter material (not blank template pages).
4. Links and assets work under the GitHub Pages `/stack-and-wire/` base path. Don't use root-absolute asset paths that break on project pages.
5. Both diagrams and photo/screenshot placeholders display without external requests.
6. The site is readable on a phone and on desktop, with no horizontal overflow.
7. Markdown heading anchors, code blocks, image captions, and tables look good.
8. Any gallery/lightbox/carousel works with keyboard input and touch where relevant, honors reduced-motion preferences, and does not trap focus.
9. The README explains precisely how to configure and deploy from a new repository.
10. The source code remains small, comprehensible, and maintainable by a solo developer.

If browser preview or deployment credentials aren't available, do the local build and inspect generated paths/configuration. State what was tested and what the owner must verify after publishing.

## 12. Explicit non-goals

- No need to make the site a polished corporate brand.
- No need to implement a comment system, blogging platform, CMS, newsletter, backend, analytics, or accounts.
- No real grant application submission or contact with Meter.
- No invented real hardware photos, fake screenshots, fabricated diagnostic results, or claimed certifications.
- No copying an existing portfolio site's design or pretending generated starter copy is final owner-authored testimony.
- No automatic GitHub push/deployment unless the owner independently asks for it.

## 13. Execution instructions for Codex

1. Inspect the new repository.
2. Scaffold the Astro project in-place and add dependencies/configuration.
3. Build the shared theme/layout and navigation.
4. Populate all pages with meaningful, editable Markdown starter copy, including sample project articles and clearly marked `TODO` gaps.
5. Add local placeholder SVG diagrams and visual evidence slots.
6. Implement the image figures / optional small gallery enhancement.
7. Add GitHub Pages workflow and README with setup instructions.
8. Run build checks; fix issues including project-site base-path problems.
9. Give the owner a concise handoff listing created pages, how to preview locally, how to deploy, and the highest-priority content placeholders to replace.

**Priority order if constrained:** working static build → believable technical documentation layout → complete sample content → diagrams and image placeholders → optional carousel/lightbox. The result should already look like a usable personal technical site on day one while clearly inviting substantial owner-written revisions.
